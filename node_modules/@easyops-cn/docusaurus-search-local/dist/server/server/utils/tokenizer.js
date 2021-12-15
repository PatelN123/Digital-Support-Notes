"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenizer = void 0;
const tslib_1 = require("tslib");
const lunr_1 = tslib_1.__importDefault(require("lunr"));
const nodejieba_1 = tslib_1.__importDefault(require("nodejieba"));
const cutWordByUnderscore_1 = require("./cutWordByUnderscore");
// https://zhuanlan.zhihu.com/p/33335629
const RegExpConsecutiveWord = /\w+|\p{Unified_Ideograph}+/u;
nodejieba_1.default.load();
function tokenizer(input, metadata) {
    if (input == null) {
        return [];
    }
    if (Array.isArray(input)) {
        return input.map(function (t) {
            return new lunr_1.default.Token(lunr_1.default.utils.asString(t).toLowerCase(), lunr_1.default.utils.clone(metadata));
        });
    }
    const content = input.toString().toLowerCase();
    const tokens = [];
    let start = 0;
    let text = content;
    while (text.length > 0) {
        const match = text.match(RegExpConsecutiveWord);
        if (!match) {
            break;
        }
        const word = match[0];
        start += match.index;
        if (/\w/.test(word[0])) {
            tokens.push(new lunr_1.default.Token(word, Object.assign(Object.assign({}, lunr_1.default.utils.clone(metadata)), { position: [start, word.length], index: tokens.length })));
            // Try to cut `api_gateway` to `api` and `gateway`.
            const subWords = cutWordByUnderscore_1.cutWordByUnderscore(word);
            if (subWords.length > 1) {
                let i = 0;
                for (const subWord of subWords) {
                    if (subWord[0] !== "_") {
                        tokens.push(new lunr_1.default.Token(subWord, Object.assign(Object.assign({}, lunr_1.default.utils.clone(metadata)), { position: [start + i, subWord.length], index: tokens.length })));
                    }
                    i += subWord.length;
                }
            }
            start += word.length;
        }
        else {
            for (const zhWord of nodejieba_1.default.cut(word)) {
                tokens.push(new lunr_1.default.Token(zhWord, Object.assign(Object.assign({}, lunr_1.default.utils.clone(metadata)), { position: [start, zhWord.length], index: tokens.length })));
                start += zhWord.length;
            }
        }
        text = content.substring(start);
    }
    return tokens;
}
exports.tokenizer = tokenizer;
