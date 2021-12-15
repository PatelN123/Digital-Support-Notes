"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parse = void 0;
const tslib_1 = require("tslib");
const cheerio_1 = tslib_1.__importDefault(require("cheerio"));
const parseDocument_1 = require("./parseDocument");
const parsePage_1 = require("./parsePage");
function parse(html, type, url) {
    const $ = cheerio_1.default.load(html);
    // Remove copy buttons from code boxes
    $('div[class^="mdxCodeBlock_"] button').remove();
    if (type === "docs") {
        // Remove version badges
        $("span.badge")
            .filter((_, element) => $(element).text().startsWith("Version:"))
            .remove();
    }
    if (type === "page") {
        return parsePage_1.parsePage($, url);
    }
    return parseDocument_1.parseDocument($);
}
exports.parse = parse;
