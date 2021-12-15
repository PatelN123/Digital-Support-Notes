"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateOptions = void 0;
const utils_validation_1 = require("@docusaurus/utils-validation");
const isStringOrArrayOfStrings = utils_validation_1.Joi.alternatives().try(utils_validation_1.Joi.string(), utils_validation_1.Joi.array().items(utils_validation_1.Joi.string()));
const isArrayOfStringsOrRegExpsOrStringOrRegExp = utils_validation_1.Joi.alternatives().try(utils_validation_1.Joi.array().items(utils_validation_1.Joi.alternatives().try(utils_validation_1.Joi.string(), utils_validation_1.Joi.object().regex())), utils_validation_1.Joi.string(), utils_validation_1.Joi.object().regex());
const schema = utils_validation_1.Joi.object({
    indexDocs: utils_validation_1.Joi.boolean().default(true),
    indexBlog: utils_validation_1.Joi.boolean().default(true),
    indexPages: utils_validation_1.Joi.boolean().default(false),
    docsRouteBasePath: isStringOrArrayOfStrings.default(["docs"]),
    blogRouteBasePath: isStringOrArrayOfStrings.default(["blog"]),
    language: isStringOrArrayOfStrings.default(["en"]),
    hashed: utils_validation_1.Joi.boolean().default(false),
    docsDir: isStringOrArrayOfStrings.default(["docs"]),
    blogDir: isStringOrArrayOfStrings.default(["blog"]),
    removeDefaultStopWordFilter: utils_validation_1.Joi.boolean().default(false),
    highlightSearchTermsOnTargetPage: utils_validation_1.Joi.boolean().default(false),
    searchResultLimits: utils_validation_1.Joi.number().default(8),
    searchResultContextMaxLength: utils_validation_1.Joi.number().default(50),
    ignoreFiles: isArrayOfStringsOrRegExpsOrStringOrRegExp.default([]),
    translations: utils_validation_1.Joi.object({
        search_placeholder: utils_validation_1.Joi.string().default("Search"),
        see_all_results: utils_validation_1.Joi.string().default("See all results"),
        no_results: utils_validation_1.Joi.string().default("No results."),
        search_results_for: utils_validation_1.Joi.string().default('Search results for "{{ keyword }}"'),
        search_the_documentation: utils_validation_1.Joi.string().default("Search the documentation"),
        count_documents_found_plural: utils_validation_1.Joi.string().default((parent) => { var _a; return (_a = parent.count_documents_found) !== null && _a !== void 0 ? _a : "{{ count }} documents found"; }),
        count_documents_found: utils_validation_1.Joi.string().default("{{ count }} document found"),
        no_documents_were_found: utils_validation_1.Joi.string().default("No documents were found"),
    })
        .default()
        .unknown(false),
});
function validateOptions({ options, validate, }) {
    return validate(schema, options || {});
}
exports.validateOptions = validateOptions;
