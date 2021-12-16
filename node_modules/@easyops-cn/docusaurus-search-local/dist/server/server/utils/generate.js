"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const getIndexHash_1 = require("./getIndexHash");
function generate(config, dir) {
    const { language, removeDefaultStopWordFilter, highlightSearchTermsOnTargetPage, searchResultLimits, searchResultContextMaxLength, translations, } = config;
    const indexHash = getIndexHash_1.getIndexHash(config);
    const contents = [
        `import lunr from ${JSON.stringify(require.resolve("lunr"))};`,
    ];
    if (language.length > 1 || language.some((item) => item !== "en")) {
        contents.push(`require(${JSON.stringify(require.resolve("lunr-languages/lunr.stemmer.support"))})(lunr);`);
    }
    if (language.includes("ja") || language.includes("jp")) {
        contents.push(`require(${JSON.stringify(require.resolve("lunr-languages/tinyseg"))})(lunr);`);
    }
    for (const lang of language.filter((item) => item !== "en" && item !== "zh")) {
        contents.push(`require(${JSON.stringify(require.resolve(`lunr-languages/lunr.${lang}`))})(lunr);`);
    }
    if (language.includes("zh")) {
        contents.push('require("@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh").lunrLanguageZh(lunr);');
    }
    if (language.length > 1) {
        contents.push(`require(${JSON.stringify(require.resolve("lunr-languages/lunr.multi"))})(lunr);`);
    }
    contents.push(`export const language = ${JSON.stringify(language)};`);
    contents.push(`export const removeDefaultStopWordFilter = ${JSON.stringify(removeDefaultStopWordFilter)};`);
    if (highlightSearchTermsOnTargetPage) {
        contents.push(`export { default as Mark } from ${JSON.stringify(require.resolve("mark.js"))}`);
    }
    else {
        contents.push("export const Mark = null;");
    }
    contents.push(`export const indexHash = ${JSON.stringify(indexHash)};`);
    contents.push(`export const searchResultLimits = ${JSON.stringify(searchResultLimits)};`, `export const searchResultContextMaxLength = ${JSON.stringify(searchResultContextMaxLength)};`);
    contents.push(`export const translations = ${JSON.stringify(translations)};`);
    fs_1.default.writeFileSync(path_1.default.join(dir, "generated.js"), contents.join("\n"));
}
exports.generate = generate;
