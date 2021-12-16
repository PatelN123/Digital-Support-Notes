"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processPluginOptions = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
function processPluginOptions(options, siteDir) {
    const config = Object.assign({}, options);
    ensureArray(config, "docsRouteBasePath");
    ensureArray(config, "blogRouteBasePath");
    ensureArray(config, "language");
    ensureArray(config, "docsDir");
    ensureArray(config, "blogDir");
    ensureArray(config, "ignoreFiles");
    config.docsRouteBasePath = config.docsRouteBasePath.map((basePath) => basePath.replace(/^\//, ""));
    config.blogRouteBasePath = config.blogRouteBasePath.map((basePath) => basePath.replace(/^\//, ""));
    config.docsDir = config.docsDir.map((dir) => path_1.default.resolve(siteDir, dir));
    config.blogDir = config.blogDir.map((dir) => path_1.default.resolve(siteDir, dir));
    return config;
}
exports.processPluginOptions = processPluginOptions;
function ensureArray(object, key) {
    if (!Array.isArray(object[key])) {
        object[key] = [object[key]];
    }
}
