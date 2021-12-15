"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processDocInfos = void 0;
const tslib_1 = require("tslib");
const path_1 = tslib_1.__importDefault(require("path"));
function processDocInfos({ routesPaths, outDir, baseUrl, siteConfig }, { indexDocs, indexBlog, indexPages, docsRouteBasePath, blogRouteBasePath, ignoreFiles, }) {
    return routesPaths
        .map((url) => {
        // istanbul ignore next
        if (!url.startsWith(baseUrl)) {
            throw new Error(`The route must start with the baseUrl "${baseUrl}", but was "${url}". This is a bug, please report it.`);
        }
        const route = url.substr(baseUrl.length).replace(/\/$/, "");
        // Do not index homepage, error page and search page.
        if (route === "" || route === "404.html" || route === "search") {
            return;
        }
        // ignore files
        if (ignoreFiles === null || ignoreFiles === void 0 ? void 0 : ignoreFiles.some((reg) => {
            if (typeof reg === "string") {
                return route === reg;
            }
            return route.match(reg);
        })) {
            return;
        }
        if (indexBlog &&
            blogRouteBasePath.some((basePath) => isSameOrSubRoute(route, basePath))) {
            if (blogRouteBasePath.some((basePath) => isSameRoute(route, basePath) ||
                isSameOrSubRoute(route, path_1.default.posix.join(basePath, "tags")))) {
                // Do not index list of blog posts and tags filter pages
                return;
            }
            return { route, url, type: "blog" };
        }
        if (indexDocs &&
            docsRouteBasePath.some((basePath) => isSameOrSubRoute(route, basePath))) {
            return { route, url, type: "docs" };
        }
        if (indexPages) {
            return { route, url, type: "page" };
        }
        return;
    })
        .filter(Boolean)
        .map(({ route, url, type }) => ({
        filePath: path_1.default.join(outDir, siteConfig.trailingSlash === false
            ? `${route}.html`
            : `${route}/index.html`),
        url,
        type,
    }));
}
exports.processDocInfos = processDocInfos;
function isSameRoute(routeA, routeB) {
    return addTrailingSlash(routeA) === addTrailingSlash(routeB);
}
function isSameOrSubRoute(childRoute, parentRoute) {
    return (parentRoute === "" ||
        addTrailingSlash(childRoute).startsWith(addTrailingSlash(parentRoute)));
}
// The input route must not end with a slash.
function addTrailingSlash(route) {
    return `${route}/`;
}
