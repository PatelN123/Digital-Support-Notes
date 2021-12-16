"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postBuildFactory = void 0;
const tslib_1 = require("tslib");
const fs_1 = tslib_1.__importDefault(require("fs"));
const path_1 = tslib_1.__importDefault(require("path"));
const util_1 = tslib_1.__importDefault(require("util"));
const buildIndex_1 = require("./buildIndex");
const debug_1 = require("./debug");
const processDocInfos_1 = require("./processDocInfos");
const scanDocuments_1 = require("./scanDocuments");
const writeFileAsync = util_1.default.promisify(fs_1.default.writeFile);
function postBuildFactory(config) {
    return function postBuild(buildData) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            debug_1.debugInfo("gathering documents");
            const data = processDocInfos_1.processDocInfos(buildData, config);
            debug_1.debugInfo("parsing documents");
            // Give every index entry a unique id so that the index does not need to store long URLs.
            const allDocuments = yield scanDocuments_1.scanDocuments(data);
            debug_1.debugInfo("building index");
            const searchIndex = buildIndex_1.buildIndex(allDocuments, config);
            debug_1.debugInfo("writing index to disk");
            yield writeFileAsync(path_1.default.join(buildData.outDir, "search-index.json"), JSON.stringify(searchIndex), { encoding: "utf8" });
            debug_1.debugInfo("index written to disk successfully!");
        });
    };
}
exports.postBuildFactory = postBuildFactory;
