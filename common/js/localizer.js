var locales = {};

//// Version 2
// * Added LOC_textInfo1
// * Added LOC_textSlideshows [[text: string, delay: number]]
// Migration Guide
// * Delete all elements with class .keyword-item
// * localize() in index.html should be moved to first line of <script> (en index.html 201st line)

// Key Constatnts
const LOC_menubars = "menubars";
const LOC_textSlideshows = "text_slides";
const LOC_langSelect = "lang_select";
const LOC_applyNow = "apply_mcg";
const LOC_version = "version";
const LOC_textInfo1 = "text_info1";

function initLocales() {
    var code = "";

    function initCode(locale) {
        if (locale === "en") {
            locales[locale] = {};
        } else {
            locales[locale] = JSON.parse(JSON.stringify(locales["en"]));
        }
    }

    //////////////// English
    code = "en";
    initCode(code);
    locales[code][LOC_version] = 2; // English is latest, always

    // Menu bar
    locales[code][LOC_menubars] = [
        ["index.html", "ETS2MCG", /(index\.html|\/)$/],
        ["privacy.html", "Privacy Policy", /(privacy\.html)$/],
        ["rules.html", "VTC Rules", /(rules\.html)$/]
    ];

    // Text Slideshows
    locales[code][LOC_textSlideshows] = [
        ["We are family.", 2000],
        ["We are ready to meet you.", 2000],
        ["We are happy team.", 2000],
        ["We are ETS2MCG.", 1000],
        ["We are family.", 3000]
    ];

    // General
    locales[code][LOC_langSelect] = "Language";
    locales[code][LOC_applyNow] = "Apply to ETS2MCG Team";
    locales[code][LOC_textInfo1] = "Where you can be together";

    //////////////// Korean
    code = "ko";
    initCode(code);
    locales[code][LOC_version] = 2;

    // Menu bar
    locales[code][LOC_menubars] = [
        ["index.html", "ETS2MCG", /(index\.html|\/)$/],
        ["privacy.html", "개인정보 처리 방침", /(privacy\.html)$/],
        ["rules.html", "VTC 규칙", /(rules\.html)$/]
    ];

    // Text Slideshows
    locales[code][LOC_textSlideshows] = [
        ["우리는 가족입니다.", 2000],
        ["우리는 열려 있는 가족입니다.", 2000],
        ["우리는 행복한 팀입니다.", 2000]
    ];

    // General
    locales[code][LOC_langSelect] = "언어";
    locales[code][LOC_applyNow] = "ETS2MCG 팀에 지원하기";
    locales[code][LOC_textInfo1] = "당신이 함께할 수 있는 곳";

    //////////////// Thai
    code = "th";
    initCode(code);
    locales[code][LOC_version] = 1;

    // Menu bar
    locales[code][LOC_menubars] = [
        ["index.html", "ETS2MCG", /(index\.html|\/)$/],
        ["privacy.html", "Privacy Policy", /(privacy\.html)$/],
        ["rules.html", "VTC Rules", /(rules\.html)$/]
    ];

    // General
    locales[code][LOC_langSelect] = "Language";
    locales[code][LOC_applyNow] = "Apply to ETS2MCG Team";
}

initLocales();