"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildIndex = void 0;
const tslib_1 = require("tslib");
const lunr_1 = tslib_1.__importDefault(require("lunr"));
function buildIndex(allDocuments, { language, removeDefaultStopWordFilter }) {
    if (language.length > 1 || language.some((item) => item !== "en")) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("lunr-languages/lunr.stemmer.support")(lunr_1.default);
    }
    if (language.includes("ja") || language.includes("jp")) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("lunr-languages/tinyseg")(lunr_1.default);
    }
    for (const lang of language.filter((item) => item !== "en" && item !== "zh")) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require(`lunr-languages/lunr.${lang}`)(lunr_1.default);
    }
    if (language.includes("zh")) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("../../shared/lunrLanguageZh").lunrLanguageZh(lunr_1.default, 
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("./tokenizer").tokenizer);
    }
    if (language.length > 1) {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        require("lunr-languages/lunr.multi")(lunr_1.default);
    }
    return allDocuments.map((documents) => ({
        documents,
        index: lunr_1.default(function () {
            if (language.length > 1) {
                this.use(lunr_1.default.multiLanguage(...language));
            }
            else if (language[0] !== "en") {
                this.use(lunr_1.default[language[0]]);
            }
            if (removeDefaultStopWordFilter) {
                // Sometimes we need no English stop words,
                // since they are almost all programming code.
                this.pipeline.remove(lunr_1.default.stopWordFilter);
            }
            // Override tokenizer when language `zh` is enabled.
            if (language.includes("zh")) {
                this.tokenizer = lunr_1.default.zh.tokenizer;
            }
            this.ref("i");
            this.field("t");
            this.metadataWhitelist = ["position"];
            documents.forEach((doc) => {
                this.add(Object.assign(Object.assign({}, doc), { 
                    // The ref must be a string.
                    i: doc.i.toString() }));
            });
        }),
    }));
}
exports.buildIndex = buildIndex;
