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


    console.log(data);
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