var locales = {};

// Locales Version 1

// Key Constatnts
const LOC_menubars = "menubars";
const LOC_langSelect = "lang_select";
const LOC_applyNow = "apply_mcg";

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
    // Version Latest
    initCode("en");
    code = "en";

    // Menu bar
    locales[code][LOC_menubars] = [
        ["index.html", "ETS2MCG", /(index\.html|\/)$/],
        ["privacy.html", "Privacy Policy", /(privacy\.html)$/],
        ["rules.html", "VTC Rules", /(rules\.html)$/]
    ];

    // General
    locales[code][LOC_langSelect] = "Language";
    locales[code][LOC_applyNow] = "Apply to ETS2MCG Team";

    //////////////// Korean
    // Version 1
    initCode("ko");
    code = "ko";

    // Menu bar
    locales[code]["menubars"] = [
        ["index.html", "ETS2MCG", /(index\.html|\/)$/],
        ["privacy.html", "개인정보 처리 방침", /(privacy\.html)$/],
        ["rules.html", "VTC 규칙", /(rules\.html)$/]
    ];

    // General
    locales[code][LOC_langSelect] = "언어";
    locales[code][LOC_applyNow] = "ETS2MCG 팀에 지원하기";

    //////////////// Thai
    // Version 1
    initCode("th");
    code = "th";

    // Menu bar
    locales[code][LOC_menubars] = [
        ["index.html", "ETS2MCG", /(index\.html|\/)$/],
        ["privacy.html", "นโยบายความเป็นส่วนตัว", /(privacy\.html)$/],
        ["rules.html", "กฎของทีม", /(rules\.html)$/]
    ];

    // General
    locales[code][LOC_langSelect] = "ภาษา";
    locales[code][LOC_applyNow] = "สมัครเข้าทีม ETS2MCG";
}

initLocales();