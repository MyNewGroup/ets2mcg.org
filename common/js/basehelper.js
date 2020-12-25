var locales = {};

function loadSlideshowSlides() {
    return new Promise((resolve) => {
        var slideshowHome = "https://common.ets2mcg.org/img/slides/";
        var slideshowList = "show.json";
        var slideshowElem = "#slideshow";

        var element = $(slideshowElem);
        $.getJSON(slideshowHome + slideshowList, (data) => {
            data.forEach(o => {
                $("<img />").addClass("imgSlide").css("display", "none").attr("src", slideshowHome + o).appendTo(element);
            });
            resolve();
        });
    })
}

function getPageLanguage() {
    let params = new URLSearchParams(location.search);
    if (params.has("locale")) return params.get("locale");
    else {  
        let segments = location.href.split("\/")
        return segments[segments.length - 2]
    }
}

async function localize() {
    let locale = getPageLanguage();
    loadMenubar(locale);
    localizeTexts(locale);
}

async function loadLanguages() {
    let data = await new Promise((resolve) => {
        $.getJSON(langsPath, (data) => {
            resolve(data);
        });
    });
    for (let language of data) {
        let elem = $("<a>");
        elem.text(language.emoji)
            .attr("href", `../${language.code}/index.html`)
            .attr("title", language.name)
            .addClass("languageflagbutton")
            .appendTo($("#selectLanguages"));
    }

    twemoji.parse($(".langChooser")[0], {
        size: "svg",
        ext: ".svg"
    });
    $(".langChooser").css("visibility", "visible");

    $(".languageflagbutton").each((i, elem) => {
        $(elem).addClass("languageflagbutton_loading");
        $(elem).css("animation-delay", i * 150 + "ms");
        setTimeout(() => {
            $(elem).removeClass("languageflagbutton_loading")
        }, i * 150 + 1000);
    })
}

/**
 * 
 * @param {} menubarData [[url, name, urlLabel]]
 */
function loadMenubar(locale) {
    let idx = 0;
    let menubarData = locales[locale]["menubars"];

    let d = $("#menubar").clone().empty();

    for (let button of menubarData) {
        let n = $("<a>");
        n.attr("href", button[0]);

        let li = $("<li>");
        li.prepend($("<span>").text(button[1]));
        if (idx == 0) {
            li.addClass("mcglogo");
            li.prepend($("<img src=\"https://common.ets2mcg.org/img/ETS2MCG.png\">"));
        }
        if ((location.pathname ?? "").match(button[2])) {
            li.addClass("current");
        }

        li.prependTo(n);
        n.appendTo(d);

        idx++;
    }

    $("#menubar").replaceWith(d);
}

function localizeTexts(locale) {
    $("#selectLanguages").parent().find(".languageflagtitle").text(locales[locale]["lang_select"])

    let l = locales[locale];
    let ff = function () {
        return this.nodeType == 3;
    };
    $("*").each((_, n) => {
        let node = $(n).contents().filter(ff);
        let txt = node.text();
        for (let key in l) {
            let key_ = "__" + key;
            if (txt.includes(key_)) {
                console.log(txt);
                console.log(key);
                node.last()[0].textContent = l[key];
                node.text(txt.replace(key_), l[key]);
            }
        }
    })
}