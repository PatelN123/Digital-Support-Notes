import "./chunk-AW43RHKU.js";

// node_modules/prettier/esm/parser-html.mjs
var e = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
var t = {};
var r = {};
!function(e4) {
  function t2(t3) {
    return e4.$0 <= t3 && t3 <= e4.$9;
  }
  Object.defineProperty(e4, "__esModule", { value: true }), e4.$EOF = 0, e4.$BSPACE = 8, e4.$TAB = 9, e4.$LF = 10, e4.$VTAB = 11, e4.$FF = 12, e4.$CR = 13, e4.$SPACE = 32, e4.$BANG = 33, e4.$DQ = 34, e4.$HASH = 35, e4.$$ = 36, e4.$PERCENT = 37, e4.$AMPERSAND = 38, e4.$SQ = 39, e4.$LPAREN = 40, e4.$RPAREN = 41, e4.$STAR = 42, e4.$PLUS = 43, e4.$COMMA = 44, e4.$MINUS = 45, e4.$PERIOD = 46, e4.$SLASH = 47, e4.$COLON = 58, e4.$SEMICOLON = 59, e4.$LT = 60, e4.$EQ = 61, e4.$GT = 62, e4.$QUESTION = 63, e4.$0 = 48, e4.$7 = 55, e4.$9 = 57, e4.$A = 65, e4.$E = 69, e4.$F = 70, e4.$X = 88, e4.$Z = 90, e4.$LBRACKET = 91, e4.$BACKSLASH = 92, e4.$RBRACKET = 93, e4.$CARET = 94, e4.$_ = 95, e4.$a = 97, e4.$b = 98, e4.$e = 101, e4.$f = 102, e4.$n = 110, e4.$r = 114, e4.$t = 116, e4.$u = 117, e4.$v = 118, e4.$x = 120, e4.$z = 122, e4.$LBRACE = 123, e4.$BAR = 124, e4.$RBRACE = 125, e4.$NBSP = 160, e4.$PIPE = 124, e4.$TILDA = 126, e4.$AT = 64, e4.$BT = 96, e4.isWhitespace = function(t3) {
    return t3 >= e4.$TAB && t3 <= e4.$SPACE || t3 == e4.$NBSP;
  }, e4.isDigit = t2, e4.isAsciiLetter = function(t3) {
    return t3 >= e4.$a && t3 <= e4.$z || t3 >= e4.$A && t3 <= e4.$Z;
  }, e4.isAsciiHexDigit = function(r2) {
    return r2 >= e4.$a && r2 <= e4.$f || r2 >= e4.$A && r2 <= e4.$F || t2(r2);
  }, e4.isNewLine = function(t3) {
    return t3 === e4.$LF || t3 === e4.$CR;
  }, e4.isOctalDigit = function(t3) {
    return e4.$0 <= t3 && t3 <= e4.$7;
  };
}(r);
var n = {};
var i = {};
Object.defineProperty(i, "__esModule", { value: true });
var s = class {
  constructor(e4, t2, r2) {
    this.filePath = e4, this.name = t2, this.members = r2;
  }
  assertNoMembers() {
    if (this.members.length)
      throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
  }
};
i.StaticSymbol = s;
i.StaticSymbolCache = class {
  constructor() {
    this.cache = new Map();
  }
  get(e4, t2, r2) {
    const n2 = (r2 = r2 || []).length ? ".".concat(r2.join(".")) : "", i2 = '"'.concat(e4, '".').concat(t2).concat(n2);
    let o2 = this.cache.get(i2);
    return o2 || (o2 = new s(e4, t2, r2), this.cache.set(i2, o2)), o2;
  }
};
var o = {};
Object.defineProperty(o, "__esModule", { value: true });
var a = /-+([a-z0-9])/g;
function u(e4, t2, r2) {
  const n2 = e4.indexOf(t2);
  return n2 == -1 ? r2 : [e4.slice(0, n2).trim(), e4.slice(n2 + 1).trim()];
}
function c(e4, t2, r2) {
  return Array.isArray(e4) ? t2.visitArray(e4, r2) : typeof (n2 = e4) == "object" && n2 !== null && Object.getPrototypeOf(n2) === h ? t2.visitStringMap(e4, r2) : e4 == null || typeof e4 == "string" || typeof e4 == "number" || typeof e4 == "boolean" ? t2.visitPrimitive(e4, r2) : t2.visitOther(e4, r2);
  var n2;
}
o.dashCaseToCamelCase = function(e4) {
  return e4.replace(a, function() {
    for (var e5 = arguments.length, t2 = new Array(e5), r2 = 0; r2 < e5; r2++)
      t2[r2] = arguments[r2];
    return t2[1].toUpperCase();
  });
}, o.splitAtColon = function(e4, t2) {
  return u(e4, ":", t2);
}, o.splitAtPeriod = function(e4, t2) {
  return u(e4, ".", t2);
}, o.visitValue = c, o.isDefined = function(e4) {
  return e4 != null;
}, o.noUndefined = function(e4) {
  return e4 === void 0 ? null : e4;
};
o.ValueTransformer = class {
  visitArray(e4, t2) {
    return e4.map((e5) => c(e5, this, t2));
  }
  visitStringMap(e4, t2) {
    const r2 = {};
    return Object.keys(e4).forEach((n2) => {
      r2[n2] = c(e4[n2], this, t2);
    }), r2;
  }
  visitPrimitive(e4, t2) {
    return e4;
  }
  visitOther(e4, t2) {
    return e4;
  }
}, o.SyncAsync = { assertSync: (e4) => {
  if (D(e4))
    throw new Error("Illegal state: value cannot be a promise");
  return e4;
}, then: (e4, t2) => D(e4) ? e4.then(t2) : t2(e4), all: (e4) => e4.some(D) ? Promise.all(e4) : e4 }, o.error = function(e4) {
  throw new Error("Internal Error: ".concat(e4));
}, o.syntaxError = function(e4, t2) {
  const r2 = Error(e4);
  return r2[l] = true, t2 && (r2[p] = t2), r2;
};
var l = "ngSyntaxError";
var p = "ngParseErrors";
o.isSyntaxError = function(e4) {
  return e4[l];
}, o.getParseErrors = function(e4) {
  return e4[p] || [];
}, o.escapeRegExp = function(e4) {
  return e4.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
};
var h = Object.getPrototypeOf({});
function D(e4) {
  return !!e4 && typeof e4.then == "function";
}
o.utf8Encode = function(e4) {
  let t2 = "";
  for (let r2 = 0; r2 < e4.length; r2++) {
    let n2 = e4.charCodeAt(r2);
    if (n2 >= 55296 && n2 <= 56319 && e4.length > r2 + 1) {
      const t3 = e4.charCodeAt(r2 + 1);
      t3 >= 56320 && t3 <= 57343 && (r2++, n2 = (n2 - 55296 << 10) + t3 - 56320 + 65536);
    }
    n2 <= 127 ? t2 += String.fromCharCode(n2) : n2 <= 2047 ? t2 += String.fromCharCode(n2 >> 6 & 31 | 192, 63 & n2 | 128) : n2 <= 65535 ? t2 += String.fromCharCode(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128) : n2 <= 2097151 && (t2 += String.fromCharCode(n2 >> 18 & 7 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128));
  }
  return t2;
}, o.stringify = function e2(t2) {
  if (typeof t2 == "string")
    return t2;
  if (t2 instanceof Array)
    return "[" + t2.map(e2).join(", ") + "]";
  if (t2 == null)
    return "" + t2;
  if (t2.overriddenName)
    return "".concat(t2.overriddenName);
  if (t2.name)
    return "".concat(t2.name);
  if (!t2.toString)
    return "object";
  const r2 = t2.toString();
  if (r2 == null)
    return "" + r2;
  const n2 = r2.indexOf("\n");
  return n2 === -1 ? r2 : r2.substring(0, n2);
}, o.resolveForwardRef = function(e4) {
  return typeof e4 == "function" && e4.hasOwnProperty("__forward_ref__") ? e4() : e4;
}, o.isPromise = D;
o.Version = class {
  constructor(e4) {
    this.full = e4;
    const t2 = e4.split(".");
    this.major = t2[0], this.minor = t2[1], this.patch = t2.slice(2).join(".");
  }
};
var d = typeof window != "undefined" && window;
var f = typeof self != "undefined" && typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && self;
var g = e !== void 0 && e || d || f;
o.global = g, function(e4) {
  Object.defineProperty(e4, "__esModule", { value: true });
  const t2 = i, r2 = o, n2 = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
  function s2(e5) {
    return e5.replace(/\W/g, "_");
  }
  e4.sanitizeIdentifier = s2;
  let a2 = 0;
  function u2(e5) {
    if (!e5 || !e5.reference)
      return null;
    const n3 = e5.reference;
    if (n3 instanceof t2.StaticSymbol)
      return n3.name;
    if (n3.__anonymousType)
      return n3.__anonymousType;
    let i2 = r2.stringify(n3);
    return i2.indexOf("(") >= 0 ? (i2 = "anonymous_".concat(a2++), n3.__anonymousType = i2) : i2 = s2(i2), i2;
  }
  var c2;
  e4.identifierName = u2, e4.identifierModuleUrl = function(e5) {
    const n3 = e5.reference;
    return n3 instanceof t2.StaticSymbol ? n3.filePath : "./".concat(r2.stringify(n3));
  }, e4.viewClassName = function(e5, t3) {
    return "View_".concat(u2({ reference: e5 }), "_").concat(t3);
  }, e4.rendererTypeName = function(e5) {
    return "RenderType_".concat(u2({ reference: e5 }));
  }, e4.hostViewClassName = function(e5) {
    return "HostView_".concat(u2({ reference: e5 }));
  }, e4.componentFactoryName = function(e5) {
    return "".concat(u2({ reference: e5 }), "NgFactory");
  }, function(e5) {
    e5[e5.Pipe = 0] = "Pipe", e5[e5.Directive = 1] = "Directive", e5[e5.NgModule = 2] = "NgModule", e5[e5.Injectable = 3] = "Injectable";
  }(c2 = e4.CompileSummaryKind || (e4.CompileSummaryKind = {})), e4.tokenName = function(e5) {
    return e5.value != null ? s2(e5.value) : u2(e5.identifier);
  }, e4.tokenReference = function(e5) {
    return e5.identifier != null ? e5.identifier.reference : e5.value;
  };
  e4.CompileStylesheetMetadata = class {
    constructor() {
      let { moduleUrl: e5, styles: t3, styleUrls: r3 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      this.moduleUrl = e5 || null, this.styles = p2(t3), this.styleUrls = p2(r3);
    }
  };
  e4.CompileTemplateMetadata = class {
    constructor(e5) {
      let { encapsulation: t3, template: r3, templateUrl: n3, htmlAst: i2, styles: s3, styleUrls: o2, externalStylesheets: a3, animations: u3, ngContentSelectors: c3, interpolation: l3, isInline: D3, preserveWhitespaces: d2 } = e5;
      if (this.encapsulation = t3, this.template = r3, this.templateUrl = n3, this.htmlAst = i2, this.styles = p2(s3), this.styleUrls = p2(o2), this.externalStylesheets = p2(a3), this.animations = u3 ? h2(u3) : [], this.ngContentSelectors = c3 || [], l3 && l3.length != 2)
        throw new Error("'interpolation' should have a start and an end symbol.");
      this.interpolation = l3, this.isInline = D3, this.preserveWhitespaces = d2;
    }
    toSummary() {
      return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
    }
  };
  class l2 {
    static create(e5) {
      let { isHost: t3, type: i2, isComponent: s3, selector: o2, exportAs: a3, changeDetection: u3, inputs: c3, outputs: p3, host: h3, providers: D3, viewProviders: d2, queries: f2, guards: g2, viewQueries: m2, entryComponents: E2, template: C2, componentViewType: y2, rendererType: b2, componentFactory: S2 } = e5;
      const T2 = {}, _2 = {}, v2 = {};
      h3 != null && Object.keys(h3).forEach((e6) => {
        const t4 = h3[e6], r3 = e6.match(n2);
        r3 === null ? v2[e6] = t4 : r3[1] != null ? _2[r3[1]] = t4 : r3[2] != null && (T2[r3[2]] = t4);
      });
      const A2 = {};
      c3 != null && c3.forEach((e6) => {
        const t4 = r2.splitAtColon(e6, [e6, e6]);
        A2[t4[0]] = t4[1];
      });
      const F2 = {};
      return p3 != null && p3.forEach((e6) => {
        const t4 = r2.splitAtColon(e6, [e6, e6]);
        F2[t4[0]] = t4[1];
      }), new l2({ isHost: t3, type: i2, isComponent: !!s3, selector: o2, exportAs: a3, changeDetection: u3, inputs: A2, outputs: F2, hostListeners: T2, hostProperties: _2, hostAttributes: v2, providers: D3, viewProviders: d2, queries: f2, guards: g2, viewQueries: m2, entryComponents: E2, template: C2, componentViewType: y2, rendererType: b2, componentFactory: S2 });
    }
    constructor(e5) {
      let { isHost: t3, type: r3, isComponent: n3, selector: i2, exportAs: s3, changeDetection: o2, inputs: a3, outputs: u3, hostListeners: c3, hostProperties: l3, hostAttributes: h3, providers: D3, viewProviders: d2, queries: f2, guards: g2, viewQueries: m2, entryComponents: E2, template: C2, componentViewType: y2, rendererType: b2, componentFactory: S2 } = e5;
      this.isHost = !!t3, this.type = r3, this.isComponent = n3, this.selector = i2, this.exportAs = s3, this.changeDetection = o2, this.inputs = a3, this.outputs = u3, this.hostListeners = c3, this.hostProperties = l3, this.hostAttributes = h3, this.providers = p2(D3), this.viewProviders = p2(d2), this.queries = p2(f2), this.guards = g2, this.viewQueries = p2(m2), this.entryComponents = p2(E2), this.template = C2, this.componentViewType = y2, this.rendererType = b2, this.componentFactory = S2;
    }
    toSummary() {
      return { summaryKind: c2.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
    }
  }
  e4.CompileDirectiveMetadata = l2;
  e4.CompilePipeMetadata = class {
    constructor(e5) {
      let { type: t3, name: r3, pure: n3 } = e5;
      this.type = t3, this.name = r3, this.pure = !!n3;
    }
    toSummary() {
      return { summaryKind: c2.Pipe, type: this.type, name: this.name, pure: this.pure };
    }
  };
  e4.CompileShallowModuleMetadata = class {
  };
  e4.CompileNgModuleMetadata = class {
    constructor(e5) {
      let { type: t3, providers: r3, declaredDirectives: n3, exportedDirectives: i2, declaredPipes: s3, exportedPipes: o2, entryComponents: a3, bootstrapComponents: u3, importedModules: c3, exportedModules: l3, schemas: h3, transitiveModule: D3, id: d2 } = e5;
      this.type = t3 || null, this.declaredDirectives = p2(n3), this.exportedDirectives = p2(i2), this.declaredPipes = p2(s3), this.exportedPipes = p2(o2), this.providers = p2(r3), this.entryComponents = p2(a3), this.bootstrapComponents = p2(u3), this.importedModules = p2(c3), this.exportedModules = p2(l3), this.schemas = p2(h3), this.id = d2 || null, this.transitiveModule = D3 || null;
    }
    toSummary() {
      const e5 = this.transitiveModule;
      return { summaryKind: c2.NgModule, type: this.type, entryComponents: e5.entryComponents, providers: e5.providers, modules: e5.modules, exportedDirectives: e5.exportedDirectives, exportedPipes: e5.exportedPipes };
    }
  };
  function p2(e5) {
    return e5 || [];
  }
  e4.TransitiveCompileNgModuleMetadata = class {
    constructor() {
      this.directivesSet = new Set(), this.directives = [], this.exportedDirectivesSet = new Set(), this.exportedDirectives = [], this.pipesSet = new Set(), this.pipes = [], this.exportedPipesSet = new Set(), this.exportedPipes = [], this.modulesSet = new Set(), this.modules = [], this.entryComponentsSet = new Set(), this.entryComponents = [], this.providers = [];
    }
    addProvider(e5, t3) {
      this.providers.push({ provider: e5, module: t3 });
    }
    addDirective(e5) {
      this.directivesSet.has(e5.reference) || (this.directivesSet.add(e5.reference), this.directives.push(e5));
    }
    addExportedDirective(e5) {
      this.exportedDirectivesSet.has(e5.reference) || (this.exportedDirectivesSet.add(e5.reference), this.exportedDirectives.push(e5));
    }
    addPipe(e5) {
      this.pipesSet.has(e5.reference) || (this.pipesSet.add(e5.reference), this.pipes.push(e5));
    }
    addExportedPipe(e5) {
      this.exportedPipesSet.has(e5.reference) || (this.exportedPipesSet.add(e5.reference), this.exportedPipes.push(e5));
    }
    addModule(e5) {
      this.modulesSet.has(e5.reference) || (this.modulesSet.add(e5.reference), this.modules.push(e5));
    }
    addEntryComponent(e5) {
      this.entryComponentsSet.has(e5.componentType) || (this.entryComponentsSet.add(e5.componentType), this.entryComponents.push(e5));
    }
  };
  function h2(e5) {
    return e5.reduce((e6, t3) => {
      const r3 = Array.isArray(t3) ? h2(t3) : t3;
      return e6.concat(r3);
    }, []);
  }
  function D2(e5) {
    return e5.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
  }
  e4.ProviderMeta = class {
    constructor(e5, t3) {
      let { useClass: r3, useValue: n3, useExisting: i2, useFactory: s3, deps: o2, multi: a3 } = t3;
      this.token = e5, this.useClass = r3 || null, this.useValue = n3, this.useExisting = i2, this.useFactory = s3 || null, this.dependencies = o2 || null, this.multi = !!a3;
    }
  }, e4.flatten = h2, e4.templateSourceUrl = function(e5, r3, n3) {
    let i2;
    return i2 = n3.isInline ? r3.type.reference instanceof t2.StaticSymbol ? "".concat(r3.type.reference.filePath, ".").concat(r3.type.reference.name, ".html") : "".concat(u2(e5), "/").concat(u2(r3.type), ".html") : n3.templateUrl, r3.type.reference instanceof t2.StaticSymbol ? i2 : D2(i2);
  }, e4.sharedStylesheetJitUrl = function(e5, t3) {
    const r3 = e5.moduleUrl.split(/\/\\/g), n3 = r3[r3.length - 1];
    return D2("css/".concat(t3).concat(n3, ".ngstyle.js"));
  }, e4.ngModuleJitUrl = function(e5) {
    return D2("".concat(u2(e5.type), "/module.ngfactory.js"));
  }, e4.templateJitUrl = function(e5, t3) {
    return D2("".concat(u2(e5), "/").concat(u2(t3.type), ".ngfactory.js"));
  };
}(n), function(e4) {
  Object.defineProperty(e4, "__esModule", { value: true });
  const t2 = r, i2 = n;
  class s2 {
    constructor(e5, t3, r2, n2) {
      this.file = e5, this.offset = t3, this.line = r2, this.col = n2;
    }
    toString() {
      return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
    }
    moveBy(e5) {
      const r2 = this.file.content, n2 = r2.length;
      let i3 = this.offset, o3 = this.line, a3 = this.col;
      for (; i3 > 0 && e5 < 0; ) {
        i3--, e5++;
        if (r2.charCodeAt(i3) == t2.$LF) {
          o3--;
          const e6 = r2.substr(0, i3 - 1).lastIndexOf(String.fromCharCode(t2.$LF));
          a3 = e6 > 0 ? i3 - e6 : i3;
        } else
          a3--;
      }
      for (; i3 < n2 && e5 > 0; ) {
        const n3 = r2.charCodeAt(i3);
        i3++, e5--, n3 == t2.$LF ? (o3++, a3 = 0) : a3++;
      }
      return new s2(this.file, i3, o3, a3);
    }
    getContext(e5, t3) {
      const r2 = this.file.content;
      let n2 = this.offset;
      if (n2 != null) {
        n2 > r2.length - 1 && (n2 = r2.length - 1);
        let i3 = n2, s3 = 0, o3 = 0;
        for (; s3 < e5 && n2 > 0 && (n2--, s3++, r2[n2] != "\n" || ++o3 != t3); )
          ;
        for (s3 = 0, o3 = 0; s3 < e5 && i3 < r2.length - 1 && (i3++, s3++, r2[i3] != "\n" || ++o3 != t3); )
          ;
        return { before: r2.substring(n2, this.offset), after: r2.substring(this.offset, i3 + 1) };
      }
      return null;
    }
  }
  e4.ParseLocation = s2;
  class o2 {
    constructor(e5, t3) {
      this.content = e5, this.url = t3;
    }
  }
  e4.ParseSourceFile = o2;
  class a2 {
    constructor(e5, t3) {
      let r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      this.start = e5, this.end = t3, this.details = r2;
    }
    toString() {
      return this.start.file.content.substring(this.start.offset, this.end.offset);
    }
  }
  var u2;
  e4.ParseSourceSpan = a2, e4.EMPTY_PARSE_LOCATION = new s2(new o2("", ""), 0, 0, 0), e4.EMPTY_SOURCE_SPAN = new a2(e4.EMPTY_PARSE_LOCATION, e4.EMPTY_PARSE_LOCATION), function(e5) {
    e5[e5.WARNING = 0] = "WARNING", e5[e5.ERROR = 1] = "ERROR";
  }(u2 = e4.ParseErrorLevel || (e4.ParseErrorLevel = {}));
  e4.ParseError = class {
    constructor(e5, t3) {
      let r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u2.ERROR;
      this.span = e5, this.msg = t3, this.level = r2;
    }
    contextualMessage() {
      const e5 = this.span.start.getContext(100, 3);
      return e5 ? "".concat(this.msg, ' ("').concat(e5.before, "[").concat(u2[this.level], " ->]").concat(e5.after, '")') : this.msg;
    }
    toString() {
      const e5 = this.span.details ? ", ".concat(this.span.details) : "";
      return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(e5);
    }
  }, e4.typeSourceSpan = function(e5, t3) {
    const r2 = i2.identifierModuleUrl(t3), n2 = r2 != null ? "in ".concat(e5, " ").concat(i2.identifierName(t3), " in ").concat(r2) : "in ".concat(e5, " ").concat(i2.identifierName(t3)), u3 = new o2("", n2);
    return new a2(new s2(u3, -1, -1, -1), new s2(u3, -1, -1, -1));
  }, e4.r3JitTypeSourceSpan = function(e5, t3, r2) {
    const n2 = "in ".concat(e5, " ").concat(t3, " in ").concat(r2), i3 = new o2("", n2);
    return new a2(new s2(i3, -1, -1, -1), new s2(i3, -1, -1, -1));
  };
}(t);
var m = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
var E = function(e4) {
  const t2 = e4.match(m);
  if (!t2)
    return { content: e4 };
  const { startDelimiter: r2, language: n2, value: i2 = "", endDelimiter: s2 } = t2.groups;
  let o2 = n2.trim() || "yaml";
  if (r2 === "+++" && (o2 = "toml"), o2 !== "yaml" && r2 !== s2)
    return { content: e4 };
  const [a2] = t2;
  return { frontMatter: { type: "front-matter", lang: o2, value: i2, startDelimiter: r2, endDelimiter: s2, raw: a2.replace(/\n$/, "") }, content: a2.replace(/[^\n]/g, " ") + e4.slice(a2.length) };
};
var C = (e4) => e4[e4.length - 1];
var y = function(e4, t2) {
  const r2 = new SyntaxError(e4 + " (" + t2.start.line + ":" + t2.start.column + ")");
  return r2.loc = t2, r2;
};
var b = { exports: {} };
var S = function() {
  let { onlyFirst: e4 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const t2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
  return new RegExp(t2, e4 ? void 0 : "g");
};
var T = { exports: {} };
var _ = (e4) => !Number.isNaN(e4) && (e4 >= 4352 && (e4 <= 4447 || e4 === 9001 || e4 === 9002 || 11904 <= e4 && e4 <= 12871 && e4 !== 12351 || 12880 <= e4 && e4 <= 19903 || 19968 <= e4 && e4 <= 42182 || 43360 <= e4 && e4 <= 43388 || 44032 <= e4 && e4 <= 55203 || 63744 <= e4 && e4 <= 64255 || 65040 <= e4 && e4 <= 65049 || 65072 <= e4 && e4 <= 65131 || 65281 <= e4 && e4 <= 65376 || 65504 <= e4 && e4 <= 65510 || 110592 <= e4 && e4 <= 110593 || 127488 <= e4 && e4 <= 127569 || 131072 <= e4 && e4 <= 262141));
T.exports = _, T.exports.default = _;
var v = (e4) => typeof e4 == "string" ? e4.replace(S(), "") : e4;
var A = T.exports;
var F = function() {
  return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
};
var w = (e4) => {
  if (typeof e4 != "string" || e4.length === 0)
    return 0;
  if ((e4 = v(e4)).length === 0)
    return 0;
  e4 = e4.replace(F(), "  ");
  let t2 = 0;
  for (let r2 = 0; r2 < e4.length; r2++) {
    const n2 = e4.codePointAt(r2);
    n2 <= 31 || n2 >= 127 && n2 <= 159 || (n2 >= 768 && n2 <= 879 || (n2 > 65535 && r2++, t2 += A(n2) ? 2 : 1));
  }
  return t2;
};
b.exports = w, b.exports.default = w;
function k(e4, t2) {
  if (e4 == null)
    return {};
  var r2, n2, i2 = function(e5, t3) {
    if (e5 == null)
      return {};
    var r3, n3, i3 = {}, s3 = Object.keys(e5);
    for (n3 = 0; n3 < s3.length; n3++)
      r3 = s3[n3], t3.indexOf(r3) >= 0 || (i3[r3] = e5[r3]);
    return i3;
  }(e4, t2);
  if (Object.getOwnPropertySymbols) {
    var s2 = Object.getOwnPropertySymbols(e4);
    for (n2 = 0; n2 < s2.length; n2++)
      r2 = s2[n2], t2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(e4, r2) && (i2[r2] = e4[r2]);
  }
  return i2;
}
function N(e4, t2) {
  return t2 || (t2 = e4.slice(0)), Object.freeze(Object.defineProperties(e4, { raw: { value: Object.freeze(t2) } }));
}
var O = function(e4) {
  return e4 && e4.Math == Math && e4;
};
var x = O(typeof globalThis == "object" && globalThis) || O(typeof window == "object" && window) || O(typeof self == "object" && self) || O(typeof e == "object" && e) || function() {
  return this;
}() || Function("return this")();
var I = {};
var P = function(e4) {
  try {
    return !!e4();
  } catch (e5) {
    return true;
  }
};
var R = !P(function() {
  return Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1] != 7;
});
var L = Function.prototype.call;
var B = L.bind ? L.bind(L) : function() {
  return L.apply(L, arguments);
};
var q = {};
var $ = {}.propertyIsEnumerable;
var M = Object.getOwnPropertyDescriptor;
var j = M && !$.call({ 1: 2 }, 1);
q.f = j ? function(e4) {
  var t2 = M(this, e4);
  return !!t2 && t2.enumerable;
} : $;
var U;
var G;
var V = function(e4, t2) {
  return { enumerable: !(1 & e4), configurable: !(2 & e4), writable: !(4 & e4), value: t2 };
};
var X = Function.prototype;
var H = X.bind;
var z = X.call;
var W = H && H.bind(z);
var Y = H ? function(e4) {
  return e4 && W(z, e4);
} : function(e4) {
  return e4 && function() {
    return z.apply(e4, arguments);
  };
};
var Q = Y;
var J = Q({}.toString);
var Z = Q("".slice);
var K = function(e4) {
  return Z(J(e4), 8, -1);
};
var ee = Y;
var te = P;
var re = K;
var ne = x.Object;
var ie = ee("".split);
var se = te(function() {
  return !ne("z").propertyIsEnumerable(0);
}) ? function(e4) {
  return re(e4) == "String" ? ie(e4, "") : ne(e4);
} : ne;
var oe = x.TypeError;
var ae = function(e4) {
  if (e4 == null)
    throw oe("Can't call method on " + e4);
  return e4;
};
var ue = se;
var ce = ae;
var le = function(e4) {
  return ue(ce(e4));
};
var pe = function(e4) {
  return typeof e4 == "function";
};
var he = pe;
var De = function(e4) {
  return typeof e4 == "object" ? e4 !== null : he(e4);
};
var de = x;
var fe = pe;
var ge = function(e4) {
  return fe(e4) ? e4 : void 0;
};
var me = function(e4, t2) {
  return arguments.length < 2 ? ge(de[e4]) : de[e4] && de[e4][t2];
};
var Ee = Y({}.isPrototypeOf);
var Ce = me("navigator", "userAgent") || "";
var ye = x;
var be = Ce;
var Se = ye.process;
var Te = ye.Deno;
var _e = Se && Se.versions || Te && Te.version;
var ve = _e && _e.v8;
ve && (G = (U = ve.split("."))[0] > 0 && U[0] < 4 ? 1 : +(U[0] + U[1])), !G && be && (!(U = be.match(/Edge\/(\d+)/)) || U[1] >= 74) && (U = be.match(/Chrome\/(\d+)/)) && (G = +U[1]);
var Ae = G;
var Fe = Ae;
var we = P;
var ke = !!Object.getOwnPropertySymbols && !we(function() {
  var e4 = Symbol();
  return !String(e4) || !(Object(e4) instanceof Symbol) || !Symbol.sham && Fe && Fe < 41;
});
var Ne = ke && !Symbol.sham && typeof Symbol.iterator == "symbol";
var Oe = me;
var xe = pe;
var Ie = Ee;
var Pe = Ne;
var Re = x.Object;
var Le = Pe ? function(e4) {
  return typeof e4 == "symbol";
} : function(e4) {
  var t2 = Oe("Symbol");
  return xe(t2) && Ie(t2.prototype, Re(e4));
};
var Be = x.String;
var qe = function(e4) {
  try {
    return Be(e4);
  } catch (e5) {
    return "Object";
  }
};
var $e = pe;
var Me = qe;
var je = x.TypeError;
var Ue = function(e4) {
  if ($e(e4))
    return e4;
  throw je(Me(e4) + " is not a function");
};
var Ge = Ue;
var Ve = function(e4, t2) {
  var r2 = e4[t2];
  return r2 == null ? void 0 : Ge(r2);
};
var Xe = B;
var He = pe;
var ze = De;
var We = x.TypeError;
var Ye = { exports: {} };
var Qe = x;
var Je = Object.defineProperty;
var Ze = function(e4, t2) {
  try {
    Je(Qe, e4, { value: t2, configurable: true, writable: true });
  } catch (r2) {
    Qe[e4] = t2;
  }
  return t2;
};
var Ke = Ze;
var et = x["__core-js_shared__"] || Ke("__core-js_shared__", {});
var tt = et;
(Ye.exports = function(e4, t2) {
  return tt[e4] || (tt[e4] = t2 !== void 0 ? t2 : {});
})("versions", []).push({ version: "3.19.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
var rt = ae;
var nt = x.Object;
var it = function(e4) {
  return nt(rt(e4));
};
var st = it;
var ot = Y({}.hasOwnProperty);
var at = Object.hasOwn || function(e4, t2) {
  return ot(st(e4), t2);
};
var ut = Y;
var ct = 0;
var lt = Math.random();
var pt = ut(1 .toString);
var ht = function(e4) {
  return "Symbol(" + (e4 === void 0 ? "" : e4) + ")_" + pt(++ct + lt, 36);
};
var Dt = x;
var dt = Ye.exports;
var ft = at;
var gt = ht;
var mt = ke;
var Et = Ne;
var Ct = dt("wks");
var yt = Dt.Symbol;
var bt = yt && yt.for;
var St = Et ? yt : yt && yt.withoutSetter || gt;
var Tt = function(e4) {
  if (!ft(Ct, e4) || !mt && typeof Ct[e4] != "string") {
    var t2 = "Symbol." + e4;
    mt && ft(yt, e4) ? Ct[e4] = yt[e4] : Ct[e4] = Et && bt ? bt(t2) : St(t2);
  }
  return Ct[e4];
};
var _t = B;
var vt = De;
var At = Le;
var Ft = Ve;
var wt = function(e4, t2) {
  var r2, n2;
  if (t2 === "string" && He(r2 = e4.toString) && !ze(n2 = Xe(r2, e4)))
    return n2;
  if (He(r2 = e4.valueOf) && !ze(n2 = Xe(r2, e4)))
    return n2;
  if (t2 !== "string" && He(r2 = e4.toString) && !ze(n2 = Xe(r2, e4)))
    return n2;
  throw We("Can't convert object to primitive value");
};
var kt = Tt;
var Nt = x.TypeError;
var Ot = kt("toPrimitive");
var xt = function(e4, t2) {
  if (!vt(e4) || At(e4))
    return e4;
  var r2, n2 = Ft(e4, Ot);
  if (n2) {
    if (t2 === void 0 && (t2 = "default"), r2 = _t(n2, e4, t2), !vt(r2) || At(r2))
      return r2;
    throw Nt("Can't convert object to primitive value");
  }
  return t2 === void 0 && (t2 = "number"), wt(e4, t2);
};
var It = Le;
var Pt = function(e4) {
  var t2 = xt(e4, "string");
  return It(t2) ? t2 : t2 + "";
};
var Rt = De;
var Lt = x.document;
var Bt = Rt(Lt) && Rt(Lt.createElement);
var qt = function(e4) {
  return Bt ? Lt.createElement(e4) : {};
};
var $t = !R && !P(function() {
  return Object.defineProperty(qt("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
});
var Mt = R;
var jt = B;
var Ut = q;
var Gt = V;
var Vt = le;
var Xt = Pt;
var Ht = at;
var zt = $t;
var Wt = Object.getOwnPropertyDescriptor;
I.f = Mt ? Wt : function(e4, t2) {
  if (e4 = Vt(e4), t2 = Xt(t2), zt)
    try {
      return Wt(e4, t2);
    } catch (e5) {
    }
  if (Ht(e4, t2))
    return Gt(!jt(Ut.f, e4, t2), e4[t2]);
};
var Yt = {};
var Qt = x;
var Jt = De;
var Zt = Qt.String;
var Kt = Qt.TypeError;
var er = function(e4) {
  if (Jt(e4))
    return e4;
  throw Kt(Zt(e4) + " is not an object");
};
var tr = R;
var rr = $t;
var nr = er;
var ir = Pt;
var sr = x.TypeError;
var or = Object.defineProperty;
Yt.f = tr ? or : function(e4, t2, r2) {
  if (nr(e4), t2 = ir(t2), nr(r2), rr)
    try {
      return or(e4, t2, r2);
    } catch (e5) {
    }
  if ("get" in r2 || "set" in r2)
    throw sr("Accessors not supported");
  return "value" in r2 && (e4[t2] = r2.value), e4;
};
var ar = Yt;
var ur = V;
var cr = R ? function(e4, t2, r2) {
  return ar.f(e4, t2, ur(1, r2));
} : function(e4, t2, r2) {
  return e4[t2] = r2, e4;
};
var lr = { exports: {} };
var pr = pe;
var hr = et;
var Dr = Y(Function.toString);
pr(hr.inspectSource) || (hr.inspectSource = function(e4) {
  return Dr(e4);
});
var dr;
var fr;
var gr;
var mr = hr.inspectSource;
var Er = pe;
var Cr = mr;
var yr = x.WeakMap;
var br = Er(yr) && /native code/.test(Cr(yr));
var Sr = Ye.exports;
var Tr = ht;
var _r = Sr("keys");
var vr = {};
var Ar = br;
var Fr = x;
var wr = Y;
var kr = De;
var Nr = cr;
var Or = at;
var xr = et;
var Ir = function(e4) {
  return _r[e4] || (_r[e4] = Tr(e4));
};
var Pr = vr;
var Rr = Fr.TypeError;
var Lr = Fr.WeakMap;
if (Ar || xr.state) {
  Br = xr.state || (xr.state = new Lr()), qr = wr(Br.get), $r = wr(Br.has), Mr = wr(Br.set);
  dr = function(e4, t2) {
    if ($r(Br, e4))
      throw new Rr("Object already initialized");
    return t2.facade = e4, Mr(Br, e4, t2), t2;
  }, fr = function(e4) {
    return qr(Br, e4) || {};
  }, gr = function(e4) {
    return $r(Br, e4);
  };
} else {
  jr = Ir("state");
  Pr[jr] = true, dr = function(e4, t2) {
    if (Or(e4, jr))
      throw new Rr("Object already initialized");
    return t2.facade = e4, Nr(e4, jr, t2), t2;
  }, fr = function(e4) {
    return Or(e4, jr) ? e4[jr] : {};
  }, gr = function(e4) {
    return Or(e4, jr);
  };
}
var Br;
var qr;
var $r;
var Mr;
var jr;
var Ur = { set: dr, get: fr, has: gr, enforce: function(e4) {
  return gr(e4) ? fr(e4) : dr(e4, {});
}, getterFor: function(e4) {
  return function(t2) {
    var r2;
    if (!kr(t2) || (r2 = fr(t2)).type !== e4)
      throw Rr("Incompatible receiver, " + e4 + " required");
    return r2;
  };
} };
var Gr = R;
var Vr = at;
var Xr = Function.prototype;
var Hr = Gr && Object.getOwnPropertyDescriptor;
var zr = Vr(Xr, "name");
var Wr = zr && function() {
}.name === "something";
var Yr = zr && (!Gr || Gr && Hr(Xr, "name").configurable);
var Qr = x;
var Jr = pe;
var Zr = at;
var Kr = cr;
var en = Ze;
var tn = mr;
var rn = { EXISTS: zr, PROPER: Wr, CONFIGURABLE: Yr }.CONFIGURABLE;
var nn = Ur.get;
var sn = Ur.enforce;
var on = String(String).split("String");
(lr.exports = function(e4, t2, r2, n2) {
  var i2, s2 = !!n2 && !!n2.unsafe, o2 = !!n2 && !!n2.enumerable, a2 = !!n2 && !!n2.noTargetGet, u2 = n2 && n2.name !== void 0 ? n2.name : t2;
  Jr(r2) && (String(u2).slice(0, 7) === "Symbol(" && (u2 = "[" + String(u2).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Zr(r2, "name") || rn && r2.name !== u2) && Kr(r2, "name", u2), (i2 = sn(r2)).source || (i2.source = on.join(typeof u2 == "string" ? u2 : ""))), e4 !== Qr ? (s2 ? !a2 && e4[t2] && (o2 = true) : delete e4[t2], o2 ? e4[t2] = r2 : Kr(e4, t2, r2)) : o2 ? e4[t2] = r2 : en(t2, r2);
})(Function.prototype, "toString", function() {
  return Jr(this) && nn(this).source || tn(this);
});
var an = {};
var un = Math.ceil;
var cn = Math.floor;
var ln = function(e4) {
  var t2 = +e4;
  return t2 != t2 || t2 === 0 ? 0 : (t2 > 0 ? cn : un)(t2);
};
var pn = ln;
var hn = Math.max;
var Dn = Math.min;
var dn = ln;
var fn = Math.min;
var gn = function(e4) {
  return e4 > 0 ? fn(dn(e4), 9007199254740991) : 0;
};
var mn = function(e4) {
  return gn(e4.length);
};
var En = le;
var Cn = function(e4, t2) {
  var r2 = pn(e4);
  return r2 < 0 ? hn(r2 + t2, 0) : Dn(r2, t2);
};
var yn = mn;
var bn = function(e4) {
  return function(t2, r2, n2) {
    var i2, s2 = En(t2), o2 = yn(s2), a2 = Cn(n2, o2);
    if (e4 && r2 != r2) {
      for (; o2 > a2; )
        if ((i2 = s2[a2++]) != i2)
          return true;
    } else
      for (; o2 > a2; a2++)
        if ((e4 || a2 in s2) && s2[a2] === r2)
          return e4 || a2 || 0;
    return !e4 && -1;
  };
};
var Sn = { includes: bn(true), indexOf: bn(false) };
var Tn = at;
var _n = le;
var vn = Sn.indexOf;
var An = vr;
var Fn = Y([].push);
var wn = function(e4, t2) {
  var r2, n2 = _n(e4), i2 = 0, s2 = [];
  for (r2 in n2)
    !Tn(An, r2) && Tn(n2, r2) && Fn(s2, r2);
  for (; t2.length > i2; )
    Tn(n2, r2 = t2[i2++]) && (~vn(s2, r2) || Fn(s2, r2));
  return s2;
};
var kn = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"].concat("length", "prototype");
an.f = Object.getOwnPropertyNames || function(e4) {
  return wn(e4, kn);
};
var Nn = {};
Nn.f = Object.getOwnPropertySymbols;
var On = me;
var xn = an;
var In = Nn;
var Pn = er;
var Rn = Y([].concat);
var Ln = On("Reflect", "ownKeys") || function(e4) {
  var t2 = xn.f(Pn(e4)), r2 = In.f;
  return r2 ? Rn(t2, r2(e4)) : t2;
};
var Bn = at;
var qn = Ln;
var $n = I;
var Mn = Yt;
var jn = P;
var Un = pe;
var Gn = /#|\.prototype\./;
var Vn = function(e4, t2) {
  var r2 = Hn[Xn(e4)];
  return r2 == Wn || r2 != zn && (Un(t2) ? jn(t2) : !!t2);
};
var Xn = Vn.normalize = function(e4) {
  return String(e4).replace(Gn, ".").toLowerCase();
};
var Hn = Vn.data = {};
var zn = Vn.NATIVE = "N";
var Wn = Vn.POLYFILL = "P";
var Yn = Vn;
var Qn = x;
var Jn = I.f;
var Zn = cr;
var Kn = lr.exports;
var ei = Ze;
var ti = function(e4, t2) {
  for (var r2 = qn(t2), n2 = Mn.f, i2 = $n.f, s2 = 0; s2 < r2.length; s2++) {
    var o2 = r2[s2];
    Bn(e4, o2) || n2(e4, o2, i2(t2, o2));
  }
};
var ri = Yn;
var ni = function(e4, t2) {
  var r2, n2, i2, s2, o2, a2 = e4.target, u2 = e4.global, c2 = e4.stat;
  if (r2 = u2 ? Qn : c2 ? Qn[a2] || ei(a2, {}) : (Qn[a2] || {}).prototype)
    for (n2 in t2) {
      if (s2 = t2[n2], i2 = e4.noTargetGet ? (o2 = Jn(r2, n2)) && o2.value : r2[n2], !ri(u2 ? n2 : a2 + (c2 ? "." : "#") + n2, e4.forced) && i2 !== void 0) {
        if (typeof s2 == typeof i2)
          continue;
        ti(s2, i2);
      }
      (e4.sham || i2 && i2.sham) && Zn(s2, "sham", true), Kn(r2, n2, s2, e4);
    }
};
var ii = K;
var si = Array.isArray || function(e4) {
  return ii(e4) == "Array";
};
var oi = Ue;
var ai = Y(Y.bind);
var ui = function(e4, t2) {
  return oi(e4), t2 === void 0 ? e4 : ai ? ai(e4, t2) : function() {
    return e4.apply(t2, arguments);
  };
};
var ci = si;
var li = mn;
var pi = ui;
var hi = x.TypeError;
var Di = function(e4, t2, r2, n2, i2, s2, o2, a2) {
  for (var u2, c2, l2 = i2, p2 = 0, h2 = !!o2 && pi(o2, a2); p2 < n2; ) {
    if (p2 in r2) {
      if (u2 = h2 ? h2(r2[p2], p2, t2) : r2[p2], s2 > 0 && ci(u2))
        c2 = li(u2), l2 = Di(e4, t2, u2, c2, l2, s2 - 1) - 1;
      else {
        if (l2 >= 9007199254740991)
          throw hi("Exceed the acceptable array length");
        e4[l2] = u2;
      }
      l2++;
    }
    p2++;
  }
  return l2;
};
var di = Di;
var fi = {};
fi[Tt("toStringTag")] = "z";
var gi = x;
var mi = String(fi) === "[object z]";
var Ei = pe;
var Ci = K;
var yi = Tt("toStringTag");
var bi = gi.Object;
var Si = Ci(function() {
  return arguments;
}()) == "Arguments";
var Ti = mi ? Ci : function(e4) {
  var t2, r2, n2;
  return e4 === void 0 ? "Undefined" : e4 === null ? "Null" : typeof (r2 = function(e5, t3) {
    try {
      return e5[t3];
    } catch (e6) {
    }
  }(t2 = bi(e4), yi)) == "string" ? r2 : Si ? Ci(t2) : (n2 = Ci(t2)) == "Object" && Ei(t2.callee) ? "Arguments" : n2;
};
var _i = Y;
var vi = P;
var Ai = pe;
var Fi = Ti;
var wi = mr;
var ki = function() {
};
var Ni = [];
var Oi = me("Reflect", "construct");
var xi = /^\s*(?:class|function)\b/;
var Ii = _i(xi.exec);
var Pi = !xi.exec(ki);
var Ri = function(e4) {
  if (!Ai(e4))
    return false;
  try {
    return Oi(ki, Ni, e4), true;
  } catch (e5) {
    return false;
  }
};
var Li = !Oi || vi(function() {
  var e4;
  return Ri(Ri.call) || !Ri(Object) || !Ri(function() {
    e4 = true;
  }) || e4;
}) ? function(e4) {
  if (!Ai(e4))
    return false;
  switch (Fi(e4)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  return Pi || !!Ii(xi, wi(e4));
} : Ri;
var Bi = x;
var qi = si;
var $i = Li;
var Mi = De;
var ji = Tt("species");
var Ui = Bi.Array;
var Gi = function(e4) {
  var t2;
  return qi(e4) && (t2 = e4.constructor, ($i(t2) && (t2 === Ui || qi(t2.prototype)) || Mi(t2) && (t2 = t2[ji]) === null) && (t2 = void 0)), t2 === void 0 ? Ui : t2;
};
var Vi = di;
var Xi = Ue;
var Hi = it;
var zi = mn;
var Wi = function(e4, t2) {
  return new (Gi(e4))(t2 === 0 ? 0 : t2);
};
ni({ target: "Array", proto: true }, { flatMap: function(e4) {
  var t2, r2 = Hi(this), n2 = zi(r2);
  return Xi(e4), (t2 = Wi(r2, 0)).length = Vi(t2, r2, r2, n2, 0, 1, e4, arguments.length > 1 ? arguments[1] : void 0), t2;
} });
var Yi = Ti;
var Qi = x.String;
var Ji = Y([].slice);
var Zi = Math.floor;
var Ki = function(e4, t2) {
  var r2 = e4.length, n2 = Zi(r2 / 2);
  return r2 < 8 ? es(e4, t2) : ts(e4, Ki(Ji(e4, 0, n2), t2), Ki(Ji(e4, n2), t2), t2);
};
var es = function(e4, t2) {
  for (var r2, n2, i2 = e4.length, s2 = 1; s2 < i2; ) {
    for (n2 = s2, r2 = e4[s2]; n2 && t2(e4[n2 - 1], r2) > 0; )
      e4[n2] = e4[--n2];
    n2 !== s2++ && (e4[n2] = r2);
  }
  return e4;
};
var ts = function(e4, t2, r2, n2) {
  for (var i2 = t2.length, s2 = r2.length, o2 = 0, a2 = 0; o2 < i2 || a2 < s2; )
    e4[o2 + a2] = o2 < i2 && a2 < s2 ? n2(t2[o2], r2[a2]) <= 0 ? t2[o2++] : r2[a2++] : o2 < i2 ? t2[o2++] : r2[a2++];
  return e4;
};
var rs = Ki;
var ns = P;
var is = Ce.match(/firefox\/(\d+)/i);
var ss = !!is && +is[1];
var os = /MSIE|Trident/.test(Ce);
var as = Ce.match(/AppleWebKit\/(\d+)\./);
var us = !!as && +as[1];
var cs = ni;
var ls = Y;
var ps = Ue;
var hs = it;
var Ds = mn;
var ds = function(e4) {
  if (Yi(e4) === "Symbol")
    throw TypeError("Cannot convert a Symbol value to a string");
  return Qi(e4);
};
var fs = P;
var gs = rs;
var ms = function(e4, t2) {
  var r2 = [][e4];
  return !!r2 && ns(function() {
    r2.call(null, t2 || function() {
      throw 1;
    }, 1);
  });
};
var Es = ss;
var Cs = os;
var ys = Ae;
var bs = us;
var Ss = [];
var Ts = ls(Ss.sort);
var _s = ls(Ss.push);
var vs = fs(function() {
  Ss.sort(void 0);
});
var As = fs(function() {
  Ss.sort(null);
});
var Fs = ms("sort");
var ws = !fs(function() {
  if (ys)
    return ys < 70;
  if (!(Es && Es > 3)) {
    if (Cs)
      return true;
    if (bs)
      return bs < 603;
    var e4, t2, r2, n2, i2 = "";
    for (e4 = 65; e4 < 76; e4++) {
      switch (t2 = String.fromCharCode(e4), e4) {
        case 66:
        case 69:
        case 70:
        case 72:
          r2 = 3;
          break;
        case 68:
        case 71:
          r2 = 4;
          break;
        default:
          r2 = 2;
      }
      for (n2 = 0; n2 < 47; n2++)
        Ss.push({ k: t2 + n2, v: r2 });
    }
    for (Ss.sort(function(e5, t3) {
      return t3.v - e5.v;
    }), n2 = 0; n2 < Ss.length; n2++)
      t2 = Ss[n2].k.charAt(0), i2.charAt(i2.length - 1) !== t2 && (i2 += t2);
    return i2 !== "DGBEFHACIJK";
  }
});
cs({ target: "Array", proto: true, forced: vs || !As || !Fs || !ws }, { sort: function(e4) {
  e4 !== void 0 && ps(e4);
  var t2 = hs(this);
  if (ws)
    return e4 === void 0 ? Ts(t2) : Ts(t2, e4);
  var r2, n2, i2 = [], s2 = Ds(t2);
  for (n2 = 0; n2 < s2; n2++)
    n2 in t2 && _s(i2, t2[n2]);
  for (gs(i2, function(e5) {
    return function(t3, r3) {
      return r3 === void 0 ? -1 : t3 === void 0 ? 1 : e5 !== void 0 ? +e5(t3, r3) || 0 : ds(t3) > ds(r3) ? 1 : -1;
    };
  }(e4)), r2 = i2.length, n2 = 0; n2 < r2; )
    t2[n2] = i2[n2++];
  for (; n2 < s2; )
    delete t2[n2++];
  return t2;
} });
var ks = {};
var Ns = ks;
var Os = Tt("iterator");
var xs = Array.prototype;
var Is = Ti;
var Ps = Ve;
var Rs = ks;
var Ls = Tt("iterator");
var Bs = function(e4) {
  if (e4 != null)
    return Ps(e4, Ls) || Ps(e4, "@@iterator") || Rs[Is(e4)];
};
var qs = B;
var $s = Ue;
var Ms = er;
var js = qe;
var Us = Bs;
var Gs = x.TypeError;
var Vs = B;
var Xs = er;
var Hs = Ve;
var zs = ui;
var Ws = B;
var Ys = er;
var Qs = qe;
var Js = function(e4) {
  return e4 !== void 0 && (Ns.Array === e4 || xs[Os] === e4);
};
var Zs = mn;
var Ks = Ee;
var eo = function(e4, t2) {
  var r2 = arguments.length < 2 ? Us(e4) : t2;
  if ($s(r2))
    return Ms(qs(r2, e4));
  throw Gs(js(e4) + " is not iterable");
};
var to = Bs;
var ro = function(e4, t2, r2) {
  var n2, i2;
  Xs(e4);
  try {
    if (!(n2 = Hs(e4, "return"))) {
      if (t2 === "throw")
        throw r2;
      return r2;
    }
    n2 = Vs(n2, e4);
  } catch (e5) {
    i2 = true, n2 = e5;
  }
  if (t2 === "throw")
    throw r2;
  if (i2)
    throw n2;
  return Xs(n2), r2;
};
var no = x.TypeError;
var io = function(e4, t2) {
  this.stopped = e4, this.result = t2;
};
var so = io.prototype;
var oo = Pt;
var ao = Yt;
var uo = V;
var co = function(e4, t2, r2) {
  var n2, i2, s2, o2, a2, u2, c2, l2 = r2 && r2.that, p2 = !(!r2 || !r2.AS_ENTRIES), h2 = !(!r2 || !r2.IS_ITERATOR), D2 = !(!r2 || !r2.INTERRUPTED), d2 = zs(t2, l2), f2 = function(e5) {
    return n2 && ro(n2, "normal", e5), new io(true, e5);
  }, g2 = function(e5) {
    return p2 ? (Ys(e5), D2 ? d2(e5[0], e5[1], f2) : d2(e5[0], e5[1])) : D2 ? d2(e5, f2) : d2(e5);
  };
  if (h2)
    n2 = e4;
  else {
    if (!(i2 = to(e4)))
      throw no(Qs(e4) + " is not iterable");
    if (Js(i2)) {
      for (s2 = 0, o2 = Zs(e4); o2 > s2; s2++)
        if ((a2 = g2(e4[s2])) && Ks(so, a2))
          return a2;
      return new io(false);
    }
    n2 = eo(e4, i2);
  }
  for (u2 = n2.next; !(c2 = Ws(u2, n2)).done; ) {
    try {
      a2 = g2(c2.value);
    } catch (e5) {
      ro(n2, "throw", e5);
    }
    if (typeof a2 == "object" && a2 && Ks(so, a2))
      return a2;
  }
  return new io(false);
};
var lo = function(e4, t2, r2) {
  var n2 = oo(t2);
  n2 in e4 ? ao.f(e4, n2, uo(0, r2)) : e4[n2] = r2;
};
ni({ target: "Object", stat: true }, { fromEntries: function(e4) {
  var t2 = {};
  return co(e4, function(e5, r2) {
    lo(t2, e5, r2);
  }, { AS_ENTRIES: true }), t2;
} });
var po = po !== void 0 ? po : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {};
function ho() {
  throw new Error("setTimeout has not been defined");
}
function Do() {
  throw new Error("clearTimeout has not been defined");
}
var fo = ho;
var go = Do;
function mo(e4) {
  if (fo === setTimeout)
    return setTimeout(e4, 0);
  if ((fo === ho || !fo) && setTimeout)
    return fo = setTimeout, setTimeout(e4, 0);
  try {
    return fo(e4, 0);
  } catch (t2) {
    try {
      return fo.call(null, e4, 0);
    } catch (t3) {
      return fo.call(this, e4, 0);
    }
  }
}
typeof po.setTimeout == "function" && (fo = setTimeout), typeof po.clearTimeout == "function" && (go = clearTimeout);
var Eo;
var Co = [];
var yo = false;
var bo = -1;
function So() {
  yo && Eo && (yo = false, Eo.length ? Co = Eo.concat(Co) : bo = -1, Co.length && To());
}
function To() {
  if (!yo) {
    var e4 = mo(So);
    yo = true;
    for (var t2 = Co.length; t2; ) {
      for (Eo = Co, Co = []; ++bo < t2; )
        Eo && Eo[bo].run();
      bo = -1, t2 = Co.length;
    }
    Eo = null, yo = false, function(e5) {
      if (go === clearTimeout)
        return clearTimeout(e5);
      if ((go === Do || !go) && clearTimeout)
        return go = clearTimeout, clearTimeout(e5);
      try {
        go(e5);
      } catch (t3) {
        try {
          return go.call(null, e5);
        } catch (t4) {
          return go.call(this, e5);
        }
      }
    }(e4);
  }
}
function _o(e4, t2) {
  this.fun = e4, this.array = t2;
}
_o.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function vo() {
}
var Ao = vo;
var Fo = vo;
var wo = vo;
var ko = vo;
var No = vo;
var Oo = vo;
var xo = vo;
var Io = po.performance || {};
var Po = Io.now || Io.mozNow || Io.msNow || Io.oNow || Io.webkitNow || function() {
  return new Date().getTime();
};
var Ro = new Date();
var Lo = { nextTick: function(e4) {
  var t2 = new Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var r2 = 1; r2 < arguments.length; r2++)
      t2[r2 - 1] = arguments[r2];
  Co.push(new _o(e4, t2)), Co.length !== 1 || yo || mo(To);
}, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: Ao, addListener: Fo, once: wo, off: ko, removeListener: No, removeAllListeners: Oo, emit: xo, binding: function(e4) {
  throw new Error("process.binding is not supported");
}, cwd: function() {
  return "/";
}, chdir: function(e4) {
  throw new Error("process.chdir is not supported");
}, umask: function() {
  return 0;
}, hrtime: function(e4) {
  var t2 = 1e-3 * Po.call(Io), r2 = Math.floor(t2), n2 = Math.floor(t2 % 1 * 1e9);
  return e4 && (r2 -= e4[0], (n2 -= e4[1]) < 0 && (r2--, n2 += 1e9)), [r2, n2];
}, platform: "browser", release: {}, config: {}, uptime: function() {
  return (new Date() - Ro) / 1e3;
} };
var Bo = typeof Lo == "object" && Lo.env && Lo.env.NODE_DEBUG && /\bsemver\b/i.test(Lo.env.NODE_DEBUG) ? function() {
  for (var e4 = arguments.length, t2 = new Array(e4), r2 = 0; r2 < e4; r2++)
    t2[r2] = arguments[r2];
  return console.error("SEMVER", ...t2);
} : () => {
};
var qo = { SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16 };
var $o = { exports: {} };
!function(e4, t2) {
  const { MAX_SAFE_COMPONENT_LENGTH: r2 } = qo, n2 = Bo, i2 = (t2 = e4.exports = {}).re = [], s2 = t2.src = [], o2 = t2.t = {};
  let a2 = 0;
  const u2 = (e5, t3, r3) => {
    const u3 = a2++;
    n2(u3, t3), o2[e5] = u3, s2[u3] = t3, i2[u3] = new RegExp(t3, r3 ? "g" : void 0);
  };
  u2("NUMERICIDENTIFIER", "0|[1-9]\\d*"), u2("NUMERICIDENTIFIERLOOSE", "[0-9]+"), u2("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), u2("MAINVERSION", "(".concat(s2[o2.NUMERICIDENTIFIER], ")\\.") + "(".concat(s2[o2.NUMERICIDENTIFIER], ")\\.") + "(".concat(s2[o2.NUMERICIDENTIFIER], ")")), u2("MAINVERSIONLOOSE", "(".concat(s2[o2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(s2[o2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(s2[o2.NUMERICIDENTIFIERLOOSE], ")")), u2("PRERELEASEIDENTIFIER", "(?:".concat(s2[o2.NUMERICIDENTIFIER], "|").concat(s2[o2.NONNUMERICIDENTIFIER], ")")), u2("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(s2[o2.NUMERICIDENTIFIERLOOSE], "|").concat(s2[o2.NONNUMERICIDENTIFIER], ")")), u2("PRERELEASE", "(?:-(".concat(s2[o2.PRERELEASEIDENTIFIER], "(?:\\.").concat(s2[o2.PRERELEASEIDENTIFIER], ")*))")), u2("PRERELEASELOOSE", "(?:-?(".concat(s2[o2.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(s2[o2.PRERELEASEIDENTIFIERLOOSE], ")*))")), u2("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), u2("BUILD", "(?:\\+(".concat(s2[o2.BUILDIDENTIFIER], "(?:\\.").concat(s2[o2.BUILDIDENTIFIER], ")*))")), u2("FULLPLAIN", "v?".concat(s2[o2.MAINVERSION]).concat(s2[o2.PRERELEASE], "?").concat(s2[o2.BUILD], "?")), u2("FULL", "^".concat(s2[o2.FULLPLAIN], "$")), u2("LOOSEPLAIN", "[v=\\s]*".concat(s2[o2.MAINVERSIONLOOSE]).concat(s2[o2.PRERELEASELOOSE], "?").concat(s2[o2.BUILD], "?")), u2("LOOSE", "^".concat(s2[o2.LOOSEPLAIN], "$")), u2("GTLT", "((?:<|>)?=?)"), u2("XRANGEIDENTIFIERLOOSE", "".concat(s2[o2.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), u2("XRANGEIDENTIFIER", "".concat(s2[o2.NUMERICIDENTIFIER], "|x|X|\\*")), u2("XRANGEPLAIN", "[v=\\s]*(".concat(s2[o2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(s2[o2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(s2[o2.XRANGEIDENTIFIER], ")") + "(?:".concat(s2[o2.PRERELEASE], ")?").concat(s2[o2.BUILD], "?") + ")?)?"), u2("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(s2[o2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(s2[o2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(s2[o2.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(s2[o2.PRERELEASELOOSE], ")?").concat(s2[o2.BUILD], "?") + ")?)?"), u2("XRANGE", "^".concat(s2[o2.GTLT], "\\s*").concat(s2[o2.XRANGEPLAIN], "$")), u2("XRANGELOOSE", "^".concat(s2[o2.GTLT], "\\s*").concat(s2[o2.XRANGEPLAINLOOSE], "$")), u2("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(r2, "})") + "(?:\\.(\\d{1,".concat(r2, "}))?") + "(?:\\.(\\d{1,".concat(r2, "}))?") + "(?:$|[^\\d])"), u2("COERCERTL", s2[o2.COERCE], true), u2("LONETILDE", "(?:~>?)"), u2("TILDETRIM", "(\\s*)".concat(s2[o2.LONETILDE], "\\s+"), true), t2.tildeTrimReplace = "$1~", u2("TILDE", "^".concat(s2[o2.LONETILDE]).concat(s2[o2.XRANGEPLAIN], "$")), u2("TILDELOOSE", "^".concat(s2[o2.LONETILDE]).concat(s2[o2.XRANGEPLAINLOOSE], "$")), u2("LONECARET", "(?:\\^)"), u2("CARETTRIM", "(\\s*)".concat(s2[o2.LONECARET], "\\s+"), true), t2.caretTrimReplace = "$1^", u2("CARET", "^".concat(s2[o2.LONECARET]).concat(s2[o2.XRANGEPLAIN], "$")), u2("CARETLOOSE", "^".concat(s2[o2.LONECARET]).concat(s2[o2.XRANGEPLAINLOOSE], "$")), u2("COMPARATORLOOSE", "^".concat(s2[o2.GTLT], "\\s*(").concat(s2[o2.LOOSEPLAIN], ")$|^$")), u2("COMPARATOR", "^".concat(s2[o2.GTLT], "\\s*(").concat(s2[o2.FULLPLAIN], ")$|^$")), u2("COMPARATORTRIM", "(\\s*)".concat(s2[o2.GTLT], "\\s*(").concat(s2[o2.LOOSEPLAIN], "|").concat(s2[o2.XRANGEPLAIN], ")"), true), t2.comparatorTrimReplace = "$1$2$3", u2("HYPHENRANGE", "^\\s*(".concat(s2[o2.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(s2[o2.XRANGEPLAIN], ")") + "\\s*$"), u2("HYPHENRANGELOOSE", "^\\s*(".concat(s2[o2.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(s2[o2.XRANGEPLAINLOOSE], ")") + "\\s*$"), u2("STAR", "(<|>)?=?\\s*\\*"), u2("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), u2("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
}($o, $o.exports);
var Mo = ["includePrerelease", "loose", "rtl"];
var jo = (e4) => e4 ? typeof e4 != "object" ? { loose: true } : Mo.filter((t2) => e4[t2]).reduce((e5, t2) => (e5[t2] = true, e5), {}) : {};
var Uo = /^[0-9]+$/;
var Go = (e4, t2) => {
  const r2 = Uo.test(e4), n2 = Uo.test(t2);
  return r2 && n2 && (e4 = +e4, t2 = +t2), e4 === t2 ? 0 : r2 && !n2 ? -1 : n2 && !r2 ? 1 : e4 < t2 ? -1 : 1;
};
var Vo = { compareIdentifiers: Go, rcompareIdentifiers: (e4, t2) => Go(t2, e4) };
var Xo = Bo;
var { MAX_LENGTH: Ho, MAX_SAFE_INTEGER: zo } = qo;
var { re: Wo, t: Yo } = $o.exports;
var Qo = jo;
var { compareIdentifiers: Jo } = Vo;
var Zo = class {
  constructor(e4, t2) {
    if (t2 = Qo(t2), e4 instanceof Zo) {
      if (e4.loose === !!t2.loose && e4.includePrerelease === !!t2.includePrerelease)
        return e4;
      e4 = e4.version;
    } else if (typeof e4 != "string")
      throw new TypeError("Invalid Version: ".concat(e4));
    if (e4.length > Ho)
      throw new TypeError("version is longer than ".concat(Ho, " characters"));
    Xo("SemVer", e4, t2), this.options = t2, this.loose = !!t2.loose, this.includePrerelease = !!t2.includePrerelease;
    const r2 = e4.trim().match(t2.loose ? Wo[Yo.LOOSE] : Wo[Yo.FULL]);
    if (!r2)
      throw new TypeError("Invalid Version: ".concat(e4));
    if (this.raw = e4, this.major = +r2[1], this.minor = +r2[2], this.patch = +r2[3], this.major > zo || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > zo || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > zo || this.patch < 0)
      throw new TypeError("Invalid patch version");
    r2[4] ? this.prerelease = r2[4].split(".").map((e5) => {
      if (/^[0-9]+$/.test(e5)) {
        const t3 = +e5;
        if (t3 >= 0 && t3 < zo)
          return t3;
      }
      return e5;
    }) : this.prerelease = [], this.build = r2[5] ? r2[5].split(".") : [], this.format();
  }
  format() {
    return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e4) {
    if (Xo("SemVer.compare", this.version, this.options, e4), !(e4 instanceof Zo)) {
      if (typeof e4 == "string" && e4 === this.version)
        return 0;
      e4 = new Zo(e4, this.options);
    }
    return e4.version === this.version ? 0 : this.compareMain(e4) || this.comparePre(e4);
  }
  compareMain(e4) {
    return e4 instanceof Zo || (e4 = new Zo(e4, this.options)), Jo(this.major, e4.major) || Jo(this.minor, e4.minor) || Jo(this.patch, e4.patch);
  }
  comparePre(e4) {
    if (e4 instanceof Zo || (e4 = new Zo(e4, this.options)), this.prerelease.length && !e4.prerelease.length)
      return -1;
    if (!this.prerelease.length && e4.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e4.prerelease.length)
      return 0;
    let t2 = 0;
    do {
      const r2 = this.prerelease[t2], n2 = e4.prerelease[t2];
      if (Xo("prerelease compare", t2, r2, n2), r2 === void 0 && n2 === void 0)
        return 0;
      if (n2 === void 0)
        return 1;
      if (r2 === void 0)
        return -1;
      if (r2 !== n2)
        return Jo(r2, n2);
    } while (++t2);
  }
  compareBuild(e4) {
    e4 instanceof Zo || (e4 = new Zo(e4, this.options));
    let t2 = 0;
    do {
      const r2 = this.build[t2], n2 = e4.build[t2];
      if (Xo("prerelease compare", t2, r2, n2), r2 === void 0 && n2 === void 0)
        return 0;
      if (n2 === void 0)
        return 1;
      if (r2 === void 0)
        return -1;
      if (r2 !== n2)
        return Jo(r2, n2);
    } while (++t2);
  }
  inc(e4, t2) {
    switch (e4) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t2);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t2);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", t2), this.inc("pre", t2);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", t2), this.inc("pre", t2);
        break;
      case "major":
        this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre":
        if (this.prerelease.length === 0)
          this.prerelease = [0];
        else {
          let e5 = this.prerelease.length;
          for (; --e5 >= 0; )
            typeof this.prerelease[e5] == "number" && (this.prerelease[e5]++, e5 = -2);
          e5 === -1 && this.prerelease.push(0);
        }
        t2 && (this.prerelease[0] === t2 ? isNaN(this.prerelease[1]) && (this.prerelease = [t2, 0]) : this.prerelease = [t2, 0]);
        break;
      default:
        throw new Error("invalid increment argument: ".concat(e4));
    }
    return this.format(), this.raw = this.version, this;
  }
};
var Ko = Zo;
var ea = (e4, t2, r2) => new Ko(e4, r2).compare(new Ko(t2, r2));
var ta = ea;
var ra = (e4, t2, r2) => ta(e4, t2, r2) < 0;
var na = ea;
var ia;
var sa;
var oa;
var aa;
var ua;
var ca;
var la = (e4, t2, r2) => na(e4, t2, r2) >= 0;
var pa = { exports: {} };
!function(e4, t2) {
  function r2() {
    for (var e5 = [], t3 = 0; t3 < arguments.length; t3++)
      e5[t3] = arguments[t3];
  }
  function n2() {
    return typeof WeakMap != "undefined" ? new WeakMap() : { add: r2, delete: r2, get: r2, set: r2, has: function(e5) {
      return false;
    } };
  }
  Object.defineProperty(t2, "__esModule", { value: true }), t2.outdent = void 0;
  var i2 = Object.prototype.hasOwnProperty, s2 = function(e5, t3) {
    return i2.call(e5, t3);
  };
  function o2(e5, t3) {
    for (var r3 in t3)
      s2(t3, r3) && (e5[r3] = t3[r3]);
    return e5;
  }
  var a2 = /^[ \t]*(?:\r\n|\r|\n)/, u2 = /(?:\r\n|\r|\n)[ \t]*$/, c2 = /^(?:[\r\n]|$)/, l2 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, p2 = /^[ \t]*[\r\n][ \t\r\n]*$/;
  function h2(e5, t3, r3) {
    var n3 = 0, i3 = e5[0].match(l2);
    i3 && (n3 = i3[1].length);
    var s3 = new RegExp("(\\r\\n|\\r|\\n).{0," + n3 + "}", "g");
    t3 && (e5 = e5.slice(1));
    var o3 = r3.newline, c3 = r3.trimLeadingNewline, p3 = r3.trimTrailingNewline, h3 = typeof o3 == "string", D3 = e5.length;
    return e5.map(function(e6, t4) {
      return e6 = e6.replace(s3, "$1"), t4 === 0 && c3 && (e6 = e6.replace(a2, "")), t4 === D3 - 1 && p3 && (e6 = e6.replace(u2, "")), h3 && (e6 = e6.replace(/\r\n|\n|\r/g, function(e7) {
        return o3;
      })), e6;
    });
  }
  function D2(e5, t3) {
    for (var r3 = "", n3 = 0, i3 = e5.length; n3 < i3; n3++)
      r3 += e5[n3], n3 < i3 - 1 && (r3 += t3[n3]);
    return r3;
  }
  function d2(e5) {
    return s2(e5, "raw") && s2(e5, "length");
  }
  var f2 = function e5(t3) {
    var r3 = n2(), i3 = n2(), s3 = o2(function n3(s4) {
      for (var a3 = [], u3 = 1; u3 < arguments.length; u3++)
        a3[u3 - 1] = arguments[u3];
      if (d2(s4)) {
        var l3 = s4, g2 = (a3[0] === n3 || a3[0] === f2) && p2.test(l3[0]) && c2.test(l3[1]), m2 = g2 ? i3 : r3, E2 = m2.get(l3);
        if (E2 || (E2 = h2(l3, g2, t3), m2.set(l3, E2)), a3.length === 0)
          return E2[0];
        var C2 = D2(E2, g2 ? a3.slice(1) : a3);
        return C2;
      }
      return e5(o2(o2({}, t3), s4 || {}));
    }, { string: function(e6) {
      return h2([e6], false, t3)[0];
    } });
    return s3;
  }({ trimLeadingNewline: true, trimTrailingNewline: true });
  t2.outdent = f2, t2.default = f2;
  try {
    e4.exports = f2, Object.defineProperty(f2, "__esModule", { value: true }), f2.default = f2, f2.outdent = f2;
  } catch (e5) {
  }
}(pa, pa.exports);
var { outdent: ha } = pa.exports;
var Da = { cursorOffset: { since: "1.4.0", category: "Special", type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: ha(ia || (ia = N(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]))), cliCategory: "Editor" }, endOfLine: { since: "1.15.0", category: "Global", type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: ha(sa || (sa = N(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]))) }] }, filepath: { since: "1.4.0", category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { since: "0.0.10", category: "Global", type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (e4) => typeof e4 == "string" || typeof e4 == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e4) => typeof e4 == "string" || typeof e4 == "object", cliName: "plugin", cliCategory: "Config" }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: "Global", description: ha(oa || (oa = N(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]))), exception: (e4) => typeof e4 == "string" || typeof e4 == "object", cliName: "plugin-search-dir", cliCategory: "Config" }, printWidth: { since: "0.0.0", category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: "Special", type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: ha(aa || (aa = N(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: "Editor" }, rangeStart: { since: "1.4.0", category: "Special", type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: ha(ua || (ua = N(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: "Editor" }, requirePragma: { since: "1.7.0", category: "Special", type: "boolean", default: false, description: ha(ca || (ca = N(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]))), cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: "Global", type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
var da = ["cliName", "cliCategory", "cliDescription"];
var fa = { compare: ea, lt: ra, gte: la };
var ga = (e4, t2) => Object.entries(e4).map((e5) => {
  let [r2, n2] = e5;
  return Object.assign({ [t2]: r2 }, n2);
});
var ma = "2.5.1";
var Ea = { CATEGORY_CONFIG: "Config", CATEGORY_EDITOR: "Editor", CATEGORY_FORMAT: "Format", CATEGORY_OTHER: "Other", CATEGORY_OUTPUT: "Output", CATEGORY_GLOBAL: "Global", CATEGORY_SPECIAL: "Special", options: Da }.options;
function Ca(e4, t2, r2) {
  const n2 = new Set(e4.choices.map((e5) => e5.value));
  for (const i2 of t2)
    if (i2.parsers) {
      for (const t3 of i2.parsers)
        if (!n2.has(t3)) {
          n2.add(t3);
          const s2 = r2.find((e5) => e5.parsers && e5.parsers[t3]);
          let o2 = i2.name;
          s2 && s2.name && (o2 += " (plugin: ".concat(s2.name, ")")), e4.choices.push({ value: t3, description: o2 });
        }
    }
}
var ya = { getSupportInfo: function() {
  let { plugins: e4 = [], showUnreleased: t2 = false, showDeprecated: r2 = false, showInternal: n2 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const i2 = ma.split("-", 1)[0], s2 = e4.flatMap((e5) => e5.languages || []).filter(a2), o2 = ga(Object.assign({}, ...e4.map((e5) => {
    let { options: t3 } = e5;
    return t3;
  }), Ea), "name").filter((e5) => a2(e5) && u2(e5)).sort((e5, t3) => e5.name === t3.name ? 0 : e5.name < t3.name ? -1 : 1).map(c2).map((t3) => {
    t3 = Object.assign({}, t3), Array.isArray(t3.default) && (t3.default = t3.default.length === 1 ? t3.default[0].value : t3.default.filter(a2).sort((e5, t4) => fa.compare(t4.since, e5.since))[0].value), Array.isArray(t3.choices) && (t3.choices = t3.choices.filter((e5) => a2(e5) && u2(e5)), t3.name === "parser" && Ca(t3, s2, e4));
    const r3 = Object.fromEntries(e4.filter((e5) => e5.defaultOptions && e5.defaultOptions[t3.name] !== void 0).map((e5) => [e5.name, e5.defaultOptions[t3.name]]));
    return Object.assign(Object.assign({}, t3), {}, { pluginDefaults: r3 });
  });
  return { languages: s2, options: o2 };
  function a2(e5) {
    return t2 || !("since" in e5) || e5.since && fa.gte(i2, e5.since);
  }
  function u2(e5) {
    return r2 || !("deprecated" in e5) || e5.deprecated && fa.lt(i2, e5.deprecated);
  }
  function c2(e5) {
    if (n2)
      return e5;
    return k(e5, da);
  }
} };
var ba = b.exports;
var Sa = (e4) => {
  if (typeof e4 != "string")
    throw new TypeError("Expected a string");
  return e4.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
};
var Ta = C;
var { getSupportInfo: _a } = ya;
var va = /[^\x20-\x7F]/;
function Aa(e4) {
  return (t2, r2, n2) => {
    const i2 = n2 && n2.backwards;
    if (r2 === false)
      return false;
    const { length: s2 } = t2;
    let o2 = r2;
    for (; o2 >= 0 && o2 < s2; ) {
      const r3 = t2.charAt(o2);
      if (e4 instanceof RegExp) {
        if (!e4.test(r3))
          return o2;
      } else if (!e4.includes(r3))
        return o2;
      i2 ? o2-- : o2++;
    }
    return (o2 === -1 || o2 === s2) && o2;
  };
}
var Fa = Aa(/\s/);
var wa = Aa(" 	");
var ka = Aa(",; 	");
var Na = Aa(/[^\n\r]/);
function Oa(e4, t2) {
  if (t2 === false)
    return false;
  if (e4.charAt(t2) === "/" && e4.charAt(t2 + 1) === "*") {
    for (let r2 = t2 + 2; r2 < e4.length; ++r2)
      if (e4.charAt(r2) === "*" && e4.charAt(r2 + 1) === "/")
        return r2 + 2;
  }
  return t2;
}
function xa(e4, t2) {
  return t2 !== false && (e4.charAt(t2) === "/" && e4.charAt(t2 + 1) === "/" ? Na(e4, t2) : t2);
}
function Ia(e4, t2, r2) {
  const n2 = r2 && r2.backwards;
  if (t2 === false)
    return false;
  const i2 = e4.charAt(t2);
  if (n2) {
    if (e4.charAt(t2 - 1) === "\r" && i2 === "\n")
      return t2 - 2;
    if (i2 === "\n" || i2 === "\r" || i2 === "\u2028" || i2 === "\u2029")
      return t2 - 1;
  } else {
    if (i2 === "\r" && e4.charAt(t2 + 1) === "\n")
      return t2 + 2;
    if (i2 === "\n" || i2 === "\r" || i2 === "\u2028" || i2 === "\u2029")
      return t2 + 1;
  }
  return t2;
}
function Pa(e4, t2) {
  let r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n2 = wa(e4, r2.backwards ? t2 - 1 : t2, r2), i2 = Ia(e4, n2, r2);
  return n2 !== i2;
}
function Ra(e4, t2) {
  let r2 = null, n2 = t2;
  for (; n2 !== r2; )
    r2 = n2, n2 = ka(e4, n2), n2 = Oa(e4, n2), n2 = wa(e4, n2);
  return n2 = xa(e4, n2), n2 = Ia(e4, n2), n2 !== false && Pa(e4, n2);
}
function La(e4, t2) {
  let r2 = null, n2 = t2;
  for (; n2 !== r2; )
    r2 = n2, n2 = wa(e4, n2), n2 = Oa(e4, n2), n2 = xa(e4, n2), n2 = Ia(e4, n2);
  return n2;
}
function Ba(e4, t2, r2) {
  return La(e4, r2(t2));
}
function qa(e4, t2) {
  let r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n2 = 0;
  for (let i2 = r2; i2 < e4.length; ++i2)
    e4[i2] === "	" ? n2 = n2 + t2 - n2 % t2 : n2++;
  return n2;
}
function $a(e4, t2) {
  const r2 = { quote: '"', regex: /"/g, escaped: "&quot;" }, n2 = { quote: "'", regex: /'/g, escaped: "&apos;" }, i2 = t2 === "'" ? n2 : r2, s2 = i2 === n2 ? r2 : n2;
  let o2 = i2;
  if (e4.includes(i2.quote) || e4.includes(s2.quote)) {
    o2 = (e4.match(i2.regex) || []).length > (e4.match(s2.regex) || []).length ? s2 : i2;
  }
  return o2;
}
function Ma(e4, t2, r2) {
  const n2 = t2 === '"' ? "'" : '"', i2 = e4.replace(/\\(.)|(["'])/gs, (e5, i3, s2) => i3 === n2 ? i3 : s2 === t2 ? "\\" + s2 : s2 || (r2 && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(i3) ? i3 : "\\" + i3));
  return t2 + i2 + t2;
}
function ja(e4, t2) {
  (e4.comments || (e4.comments = [])).push(t2), t2.printed = false, t2.nodeDescription = function(e5) {
    const t3 = e5.type || e5.kind || "(unknown type)";
    let r2 = String(e5.name || e5.id && (typeof e5.id == "object" ? e5.id.name : e5.id) || e5.key && (typeof e5.key == "object" ? e5.key.name : e5.key) || e5.value && (typeof e5.value == "object" ? "" : String(e5.value)) || e5.operator || "");
    r2.length > 20 && (r2 = r2.slice(0, 19) + "\u2026");
    return t3 + (r2 ? " " + r2 : "");
  }(e4);
}
var Ua = { inferParserByLanguage: function(e4, t2) {
  const { languages: r2 } = _a({ plugins: t2.plugins }), n2 = r2.find((t3) => {
    let { name: r3 } = t3;
    return r3.toLowerCase() === e4;
  }) || r2.find((t3) => {
    let { aliases: r3 } = t3;
    return Array.isArray(r3) && r3.includes(e4);
  }) || r2.find((t3) => {
    let { extensions: r3 } = t3;
    return Array.isArray(r3) && r3.includes(".".concat(e4));
  });
  return n2 && n2.parsers[0];
}, getStringWidth: function(e4) {
  return e4 ? va.test(e4) ? ba(e4) : e4.length : 0;
}, getMaxContinuousCount: function(e4, t2) {
  const r2 = e4.match(new RegExp("(".concat(Sa(t2), ")+"), "g"));
  return r2 === null ? 0 : r2.reduce((e5, r3) => Math.max(e5, r3.length / t2.length), 0);
}, getMinNotPresentContinuousCount: function(e4, t2) {
  const r2 = e4.match(new RegExp("(".concat(Sa(t2), ")+"), "g"));
  if (r2 === null)
    return 0;
  const n2 = new Map();
  let i2 = 0;
  for (const e5 of r2) {
    const r3 = e5.length / t2.length;
    n2.set(r3, true), r3 > i2 && (i2 = r3);
  }
  for (let e5 = 1; e5 < i2; e5++)
    if (!n2.get(e5))
      return e5;
  return i2 + 1;
}, getPenultimate: (e4) => e4[e4.length - 2], getLast: Ta, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: La, getNextNonSpaceNonCommentCharacterIndex: Ba, getNextNonSpaceNonCommentCharacter: function(e4, t2, r2) {
  return e4.charAt(Ba(e4, t2, r2));
}, skip: Aa, skipWhitespace: Fa, skipSpaces: wa, skipToLineEnd: ka, skipEverythingButNewLine: Na, skipInlineComment: Oa, skipTrailingComment: xa, skipNewline: Ia, isNextLineEmptyAfterIndex: Ra, isNextLineEmpty: function(e4, t2, r2) {
  return Ra(e4, r2(t2));
}, isPreviousLineEmpty: function(e4, t2, r2) {
  let n2 = r2(t2) - 1;
  return n2 = wa(e4, n2, { backwards: true }), n2 = Ia(e4, n2, { backwards: true }), n2 = wa(e4, n2, { backwards: true }), n2 !== Ia(e4, n2, { backwards: true });
}, hasNewline: Pa, hasNewlineInRange: function(e4, t2, r2) {
  for (let n2 = t2; n2 < r2; ++n2)
    if (e4.charAt(n2) === "\n")
      return true;
  return false;
}, hasSpaces: function(e4, t2) {
  let r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const n2 = wa(e4, r2.backwards ? t2 - 1 : t2, r2);
  return n2 !== t2;
}, getAlignmentSize: qa, getIndentSize: function(e4, t2) {
  const r2 = e4.lastIndexOf("\n");
  return r2 === -1 ? 0 : qa(e4.slice(r2 + 1).match(/^[\t ]*/)[0], t2);
}, getPreferredQuote: $a, printString: function(e4, t2) {
  const r2 = e4.slice(1, -1);
  return Ma(r2, t2.parser === "json" || t2.parser === "json5" && t2.quoteProps === "preserve" && !t2.singleQuote ? '"' : t2.__isInHtmlAttribute ? "'" : $a(r2, t2.singleQuote ? "'" : '"').quote, !(t2.parser === "css" || t2.parser === "less" || t2.parser === "scss" || t2.__embeddedInHtml));
}, printNumber: function(e4) {
  return e4.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
}, makeString: Ma, addLeadingComment: function(e4, t2) {
  t2.leading = true, t2.trailing = false, ja(e4, t2);
}, addDanglingComment: function(e4, t2, r2) {
  t2.leading = false, t2.trailing = false, r2 && (t2.marker = r2), ja(e4, t2);
}, addTrailingComment: function(e4, t2) {
  t2.leading = false, t2.trailing = true, ja(e4, t2);
}, isFrontMatterNode: function(e4) {
  return e4 && e4.type === "front-matter";
}, getShebang: function(e4) {
  if (!e4.startsWith("#!"))
    return "";
  const t2 = e4.indexOf("\n");
  return t2 === -1 ? e4 : e4.slice(0, t2);
}, isNonEmptyArray: function(e4) {
  return Array.isArray(e4) && e4.length > 0;
}, createGroupIdMapper: function(e4) {
  const t2 = new WeakMap();
  return function(r2) {
    return t2.has(r2) || t2.set(r2, Symbol(e4)), t2.get(r2);
  };
} };
var Ga = { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"], abbr: ["title"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], bdo: ["dir"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dfn: ["title"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["accesskey", "for", "form"], legend: ["accesskey", "align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"], select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"], slot: ["name"], source: ["media", "sizes", "src", "srcset", "type"], style: ["media", "nonce", "title", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] };
function Va(e4) {
  return { type: "concat", parts: e4 };
}
function Xa(e4) {
  return { type: "indent", contents: e4 };
}
function Ha(e4, t2) {
  return { type: "align", contents: t2, n: e4 };
}
function za(e4) {
  let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return { type: "group", id: t2.id, contents: e4, break: Boolean(t2.shouldBreak), expandedStates: t2.expandedStates };
}
var Wa = { type: "break-parent" };
var Ya = { type: "line", hard: true };
var Qa = { type: "line", hard: true, literal: true };
var Ja = Va([Ya, Wa]);
var Za = Va([Qa, Wa]);
var Ka = { concat: Va, join: function(e4, t2) {
  const r2 = [];
  for (let n2 = 0; n2 < t2.length; n2++)
    n2 !== 0 && r2.push(e4), r2.push(t2[n2]);
  return Va(r2);
}, line: { type: "line" }, softline: { type: "line", soft: true }, hardline: Ja, literalline: Za, group: za, conditionalGroup: function(e4, t2) {
  return za(e4[0], Object.assign(Object.assign({}, t2), {}, { expandedStates: e4 }));
}, fill: function(e4) {
  return { type: "fill", parts: e4 };
}, lineSuffix: function(e4) {
  return { type: "line-suffix", contents: e4 };
}, lineSuffixBoundary: { type: "line-suffix-boundary" }, cursor: { type: "cursor", placeholder: Symbol("cursor") }, breakParent: Wa, ifBreak: function(e4, t2) {
  let r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return { type: "if-break", breakContents: e4, flatContents: t2, groupId: r2.groupId };
}, trim: { type: "trim" }, indent: Xa, indentIfBreak: function(e4, t2) {
  return { type: "indent-if-break", contents: e4, groupId: t2.groupId, negate: t2.negate };
}, align: Ha, addAlignmentToDoc: function(e4, t2, r2) {
  let n2 = e4;
  if (t2 > 0) {
    for (let e5 = 0; e5 < Math.floor(t2 / r2); ++e5)
      n2 = Xa(n2);
    n2 = Ha(t2 % r2, n2), n2 = Ha(Number.NEGATIVE_INFINITY, n2);
  }
  return n2;
}, markAsRoot: function(e4) {
  return Ha({ type: "root" }, e4);
}, dedentToRoot: function(e4) {
  return Ha(Number.NEGATIVE_INFINITY, e4);
}, dedent: function(e4) {
  return Ha(-1, e4);
}, hardlineWithoutBreakParent: Ya, literallineWithoutBreakParent: Qa, label: function(e4, t2) {
  return { type: "label", label: e4, contents: t2 };
} };
var eu = { guessEndOfLine: function(e4) {
  const t2 = e4.indexOf("\r");
  return t2 >= 0 ? e4.charAt(t2 + 1) === "\n" ? "crlf" : "cr" : "lf";
}, convertEndOfLineToChars: function(e4) {
  switch (e4) {
    case "cr":
      return "\r";
    case "crlf":
      return "\r\n";
    default:
      return "\n";
  }
}, countEndOfLineChars: function(e4, t2) {
  let r2;
  if (t2 === "\n")
    r2 = /\n/g;
  else if (t2 === "\r")
    r2 = /\r/g;
  else {
    if (t2 !== "\r\n")
      throw new Error('Unexpected "eol" '.concat(JSON.stringify(t2), "."));
    r2 = /\r\n/g;
  }
  const n2 = e4.match(r2);
  return n2 ? n2.length : 0;
}, normalizeEndOfLine: function(e4) {
  return e4.replace(/\r\n?/g, "\n");
} };
var tu = C;
var { literalline: ru, join: nu } = Ka;
var iu = (e4) => Array.isArray(e4) || e4 && e4.type === "concat";
var su = (e4) => {
  if (Array.isArray(e4))
    return e4;
  if (e4.type !== "concat" && e4.type !== "fill")
    throw new Error("Expect doc type to be `concat` or `fill`.");
  return e4.parts;
};
var ou = {};
function au(e4, t2, r2, n2) {
  const i2 = [e4];
  for (; i2.length > 0; ) {
    const e5 = i2.pop();
    if (e5 !== ou) {
      if (r2 && i2.push(e5, ou), !t2 || t2(e5) !== false)
        if (iu(e5) || e5.type === "fill") {
          const t3 = su(e5);
          for (let e6 = t3.length - 1; e6 >= 0; --e6)
            i2.push(t3[e6]);
        } else if (e5.type === "if-break")
          e5.flatContents && i2.push(e5.flatContents), e5.breakContents && i2.push(e5.breakContents);
        else if (e5.type === "group" && e5.expandedStates)
          if (n2)
            for (let t3 = e5.expandedStates.length - 1; t3 >= 0; --t3)
              i2.push(e5.expandedStates[t3]);
          else
            i2.push(e5.contents);
        else
          e5.contents && i2.push(e5.contents);
    } else
      r2(i2.pop());
  }
}
function uu(e4, t2) {
  const r2 = new Map();
  return n2(e4);
  function n2(e5) {
    if (r2.has(e5))
      return r2.get(e5);
    const i2 = function(e6) {
      if (Array.isArray(e6))
        return t2(e6.map(n2));
      if (e6.type === "concat" || e6.type === "fill") {
        const r3 = e6.parts.map(n2);
        return t2(Object.assign(Object.assign({}, e6), {}, { parts: r3 }));
      }
      if (e6.type === "if-break") {
        const r3 = e6.breakContents && n2(e6.breakContents), i3 = e6.flatContents && n2(e6.flatContents);
        return t2(Object.assign(Object.assign({}, e6), {}, { breakContents: r3, flatContents: i3 }));
      }
      if (e6.type === "group" && e6.expandedStates) {
        const r3 = e6.expandedStates.map(n2), i3 = r3[0];
        return t2(Object.assign(Object.assign({}, e6), {}, { contents: i3, expandedStates: r3 }));
      }
      if (e6.contents) {
        const r3 = n2(e6.contents);
        return t2(Object.assign(Object.assign({}, e6), {}, { contents: r3 }));
      }
      return t2(e6);
    }(e5);
    return r2.set(e5, i2), i2;
  }
}
function cu(e4, t2, r2) {
  let n2 = r2, i2 = false;
  return au(e4, function(e5) {
    const r3 = t2(e5);
    if (r3 !== void 0 && (i2 = true, n2 = r3), i2)
      return false;
  }), n2;
}
function lu(e4) {
  return !(e4.type !== "group" || !e4.break) || (!(e4.type !== "line" || !e4.hard) || (e4.type === "break-parent" || void 0));
}
function pu(e4) {
  if (e4.length > 0) {
    const t2 = tu(e4);
    t2.expandedStates || t2.break || (t2.break = "propagated");
  }
  return null;
}
function hu(e4) {
  return e4.type !== "line" || e4.hard ? e4.type === "if-break" ? e4.flatContents || "" : e4 : e4.soft ? "" : " ";
}
var Du = (e4, t2) => e4 && e4.type === "line" && e4.hard && t2 && t2.type === "break-parent";
function du(e4) {
  if (!e4)
    return e4;
  if (iu(e4) || e4.type === "fill") {
    const t2 = su(e4);
    for (; t2.length > 1 && Du(...t2.slice(-2)); )
      t2.length -= 2;
    if (t2.length > 0) {
      const e5 = du(tu(t2));
      t2[t2.length - 1] = e5;
    }
    return Array.isArray(e4) ? t2 : Object.assign(Object.assign({}, e4), {}, { parts: t2 });
  }
  switch (e4.type) {
    case "align":
    case "indent":
    case "indent-if-break":
    case "group":
    case "line-suffix":
    case "label": {
      const t2 = du(e4.contents);
      return Object.assign(Object.assign({}, e4), {}, { contents: t2 });
    }
    case "if-break": {
      const t2 = du(e4.breakContents), r2 = du(e4.flatContents);
      return Object.assign(Object.assign({}, e4), {}, { breakContents: t2, flatContents: r2 });
    }
  }
  return e4;
}
function fu(e4) {
  return uu(e4, (e5) => function(e6) {
    switch (e6.type) {
      case "fill":
        if (e6.parts.every((e7) => e7 === ""))
          return "";
        break;
      case "group":
        if (!(e6.contents || e6.id || e6.break || e6.expandedStates))
          return "";
        if (e6.contents.type === "group" && e6.contents.id === e6.id && e6.contents.break === e6.break && e6.contents.expandedStates === e6.expandedStates)
          return e6.contents;
        break;
      case "align":
      case "indent":
      case "indent-if-break":
      case "line-suffix":
        if (!e6.contents)
          return "";
        break;
      case "if-break":
        if (!e6.flatContents && !e6.breakContents)
          return "";
    }
    if (!iu(e6))
      return e6;
    const t2 = [];
    for (const r2 of su(e6)) {
      if (!r2)
        continue;
      const [e7, ...n2] = iu(r2) ? su(r2) : [r2];
      typeof e7 == "string" && typeof tu(t2) == "string" ? t2[t2.length - 1] += e7 : t2.push(e7), t2.push(...n2);
    }
    return t2.length === 0 ? "" : t2.length === 1 ? t2[0] : Array.isArray(e6) ? t2 : Object.assign(Object.assign({}, e6), {}, { parts: t2 });
  }(e5));
}
function gu(e4) {
  const t2 = [], r2 = e4.filter(Boolean);
  for (; r2.length > 0; ) {
    const e5 = r2.shift();
    e5 && (iu(e5) ? r2.unshift(...su(e5)) : t2.length > 0 && typeof tu(t2) == "string" && typeof e5 == "string" ? t2[t2.length - 1] += e5 : t2.push(e5));
  }
  return t2;
}
function mu(e4) {
  let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ru;
  return nu(t2, e4.split("\n")).parts;
}
function Eu(e4) {
  if (e4.type === "line")
    return true;
}
var Cu = { isConcat: iu, getDocParts: su, willBreak: function(e4) {
  return cu(e4, lu, false);
}, traverseDoc: au, findInDoc: cu, mapDoc: uu, propagateBreaks: function(e4) {
  const t2 = new Set(), r2 = [];
  au(e4, function(e5) {
    if (e5.type === "break-parent" && pu(r2), e5.type === "group") {
      if (r2.push(e5), t2.has(e5))
        return false;
      t2.add(e5);
    }
  }, function(e5) {
    if (e5.type === "group") {
      r2.pop().break && pu(r2);
    }
  }, true);
}, removeLines: function(e4) {
  return uu(e4, hu);
}, stripTrailingHardline: function(e4) {
  return du(fu(e4));
}, normalizeParts: gu, normalizeDoc: function(e4) {
  return uu(e4, (e5) => Array.isArray(e5) ? gu(e5) : e5.parts ? Object.assign(Object.assign({}, e5), {}, { parts: gu(e5.parts) }) : e5);
}, cleanDoc: fu, replaceTextEndOfLine: mu, replaceEndOfLine: function(e4) {
  return uu(e4, (e5) => typeof e5 == "string" && e5.includes("\n") ? mu(e5) : e5);
}, canBreak: function(e4) {
  return cu(e4, Eu, false);
} };
var { getStringWidth: yu, getLast: bu } = Ua;
var { convertEndOfLineToChars: Su } = eu;
var { fill: Tu, cursor: _u, indent: vu } = Ka;
var { isConcat: Au, getDocParts: Fu } = Cu;
var wu;
function ku(e4, t2) {
  return Ou(e4, { type: "indent" }, t2);
}
function Nu(e4, t2, r2) {
  if (t2 === Number.NEGATIVE_INFINITY)
    return e4.root || { value: "", length: 0, queue: [] };
  if (t2 < 0)
    return Ou(e4, { type: "dedent" }, r2);
  if (!t2)
    return e4;
  if (t2.type === "root")
    return Object.assign(Object.assign({}, e4), {}, { root: e4 });
  return Ou(e4, { type: typeof t2 == "string" ? "stringAlign" : "numberAlign", n: t2 }, r2);
}
function Ou(e4, t2, r2) {
  const n2 = t2.type === "dedent" ? e4.queue.slice(0, -1) : [...e4.queue, t2];
  let i2 = "", s2 = 0, o2 = 0, a2 = 0;
  for (const e5 of n2)
    switch (e5.type) {
      case "indent":
        l2(), r2.useTabs ? u2(1) : c2(r2.tabWidth);
        break;
      case "stringAlign":
        l2(), i2 += e5.n, s2 += e5.n.length;
        break;
      case "numberAlign":
        o2 += 1, a2 += e5.n;
        break;
      default:
        throw new Error("Unexpected type '".concat(e5.type, "'"));
    }
  return p2(), Object.assign(Object.assign({}, e4), {}, { value: i2, length: s2, queue: n2 });
  function u2(e5) {
    i2 += "	".repeat(e5), s2 += r2.tabWidth * e5;
  }
  function c2(e5) {
    i2 += " ".repeat(e5), s2 += e5;
  }
  function l2() {
    r2.useTabs ? function() {
      o2 > 0 && u2(o2);
      h2();
    }() : p2();
  }
  function p2() {
    a2 > 0 && c2(a2), h2();
  }
  function h2() {
    o2 = 0, a2 = 0;
  }
}
function xu(e4) {
  if (e4.length === 0)
    return 0;
  let t2 = 0;
  for (; e4.length > 0 && typeof bu(e4) == "string" && /^[\t ]*$/.test(bu(e4)); )
    t2 += e4.pop().length;
  if (e4.length > 0 && typeof bu(e4) == "string") {
    const r2 = bu(e4).replace(/[\t ]*$/, "");
    t2 += bu(e4).length - r2.length, e4[e4.length - 1] = r2;
  }
  return t2;
}
function Iu(e4, t2, r2, n2, i2, s2) {
  let o2 = t2.length;
  const a2 = [e4], u2 = [];
  for (; r2 >= 0; ) {
    if (a2.length === 0) {
      if (o2 === 0)
        return true;
      a2.push(t2[o2 - 1]), o2--;
      continue;
    }
    const [e5, c2, l2] = a2.pop();
    if (typeof l2 == "string")
      u2.push(l2), r2 -= yu(l2);
    else if (Au(l2)) {
      const t3 = Fu(l2);
      for (let r3 = t3.length - 1; r3 >= 0; r3--)
        a2.push([e5, c2, t3[r3]]);
    } else
      switch (l2.type) {
        case "indent":
          a2.push([ku(e5, n2), c2, l2.contents]);
          break;
        case "align":
          a2.push([Nu(e5, l2.n, n2), c2, l2.contents]);
          break;
        case "trim":
          r2 += xu(u2);
          break;
        case "group": {
          if (s2 && l2.break)
            return false;
          const t3 = l2.break ? 1 : c2;
          a2.push([e5, t3, l2.expandedStates && t3 === 1 ? bu(l2.expandedStates) : l2.contents]), l2.id && (wu[l2.id] = t3);
          break;
        }
        case "fill":
          for (let t3 = l2.parts.length - 1; t3 >= 0; t3--)
            a2.push([e5, c2, l2.parts[t3]]);
          break;
        case "if-break":
        case "indent-if-break": {
          const t3 = l2.groupId ? wu[l2.groupId] : c2;
          if (t3 === 1) {
            const t4 = l2.type === "if-break" ? l2.breakContents : l2.negate ? l2.contents : vu(l2.contents);
            t4 && a2.push([e5, c2, t4]);
          }
          if (t3 === 2) {
            const t4 = l2.type === "if-break" ? l2.flatContents : l2.negate ? vu(l2.contents) : l2.contents;
            t4 && a2.push([e5, c2, t4]);
          }
          break;
        }
        case "line":
          switch (c2) {
            case 2:
              if (!l2.hard) {
                l2.soft || (u2.push(" "), r2 -= 1);
                break;
              }
              return true;
            case 1:
              return true;
          }
          break;
        case "line-suffix":
          i2 = true;
          break;
        case "line-suffix-boundary":
          if (i2)
            return false;
          break;
        case "label":
          a2.push([e5, c2, l2.contents]);
      }
  }
  return false;
}
var Pu = { printDocToString: function(e4, t2) {
  wu = {};
  const r2 = t2.printWidth, n2 = Su(t2.endOfLine);
  let i2 = 0;
  const s2 = [[{ value: "", length: 0, queue: [] }, 1, e4]], o2 = [];
  let a2 = false, u2 = [];
  for (; s2.length > 0; ) {
    const [e5, c3, l2] = s2.pop();
    if (typeof l2 == "string") {
      const e6 = n2 !== "\n" ? l2.replace(/\n/g, n2) : l2;
      o2.push(e6), i2 += yu(e6);
    } else if (Au(l2)) {
      const t3 = Fu(l2);
      for (let r3 = t3.length - 1; r3 >= 0; r3--)
        s2.push([e5, c3, t3[r3]]);
    } else
      switch (l2.type) {
        case "cursor":
          o2.push(_u.placeholder);
          break;
        case "indent":
          s2.push([ku(e5, t2), c3, l2.contents]);
          break;
        case "align":
          s2.push([Nu(e5, l2.n, t2), c3, l2.contents]);
          break;
        case "trim":
          i2 -= xu(o2);
          break;
        case "group":
          switch (c3) {
            case 2:
              if (!a2) {
                s2.push([e5, l2.break ? 1 : 2, l2.contents]);
                break;
              }
            case 1: {
              a2 = false;
              const n3 = [e5, 2, l2.contents], o3 = r2 - i2, c4 = u2.length > 0;
              if (!l2.break && Iu(n3, s2, o3, t2, c4))
                s2.push(n3);
              else if (l2.expandedStates) {
                const r3 = bu(l2.expandedStates);
                if (l2.break) {
                  s2.push([e5, 1, r3]);
                  break;
                }
                for (let n4 = 1; n4 < l2.expandedStates.length + 1; n4++) {
                  if (n4 >= l2.expandedStates.length) {
                    s2.push([e5, 1, r3]);
                    break;
                  }
                  {
                    const r4 = [e5, 2, l2.expandedStates[n4]];
                    if (Iu(r4, s2, o3, t2, c4)) {
                      s2.push(r4);
                      break;
                    }
                  }
                }
              } else
                s2.push([e5, 1, l2.contents]);
              break;
            }
          }
          l2.id && (wu[l2.id] = bu(s2)[1]);
          break;
        case "fill": {
          const n3 = r2 - i2, { parts: o3 } = l2;
          if (o3.length === 0)
            break;
          const [a3, p2] = o3, h2 = [e5, 2, a3], D2 = [e5, 1, a3], d2 = Iu(h2, [], n3, t2, u2.length > 0, true);
          if (o3.length === 1) {
            d2 ? s2.push(h2) : s2.push(D2);
            break;
          }
          const f2 = [e5, 2, p2], g2 = [e5, 1, p2];
          if (o3.length === 2) {
            d2 ? s2.push(f2, h2) : s2.push(g2, D2);
            break;
          }
          o3.splice(0, 2);
          const m2 = [e5, c3, Tu(o3)];
          Iu([e5, 2, [a3, p2, o3[0]]], [], n3, t2, u2.length > 0, true) ? s2.push(m2, f2, h2) : d2 ? s2.push(m2, g2, h2) : s2.push(m2, g2, D2);
          break;
        }
        case "if-break":
        case "indent-if-break": {
          const t3 = l2.groupId ? wu[l2.groupId] : c3;
          if (t3 === 1) {
            const t4 = l2.type === "if-break" ? l2.breakContents : l2.negate ? l2.contents : vu(l2.contents);
            t4 && s2.push([e5, c3, t4]);
          }
          if (t3 === 2) {
            const t4 = l2.type === "if-break" ? l2.flatContents : l2.negate ? vu(l2.contents) : l2.contents;
            t4 && s2.push([e5, c3, t4]);
          }
          break;
        }
        case "line-suffix":
          u2.push([e5, c3, l2.contents]);
          break;
        case "line-suffix-boundary":
          u2.length > 0 && s2.push([e5, c3, { type: "line", hard: true }]);
          break;
        case "line":
          switch (c3) {
            case 2:
              if (!l2.hard) {
                l2.soft || (o2.push(" "), i2 += 1);
                break;
              }
              a2 = true;
            case 1:
              if (u2.length > 0) {
                s2.push([e5, c3, l2], ...u2.reverse()), u2 = [];
                break;
              }
              l2.literal ? e5.root ? (o2.push(n2, e5.root.value), i2 = e5.root.length) : (o2.push(n2), i2 = 0) : (i2 -= xu(o2), o2.push(n2 + e5.value), i2 = e5.length);
          }
          break;
        case "label":
          s2.push([e5, c3, l2.contents]);
      }
    s2.length === 0 && u2.length > 0 && (s2.push(...u2.reverse()), u2 = []);
  }
  const c2 = o2.indexOf(_u.placeholder);
  if (c2 !== -1) {
    const e5 = o2.indexOf(_u.placeholder, c2 + 1), t3 = o2.slice(0, c2).join(""), r3 = o2.slice(c2 + 1, e5).join("");
    return { formatted: t3 + r3 + o2.slice(e5 + 1).join(""), cursorNodeStart: t3.length, cursorNodeText: r3 };
  }
  return { formatted: o2.join("") };
} };
var { isConcat: Ru, getDocParts: Lu } = Cu;
function Bu(e4) {
  if (!e4)
    return "";
  if (Ru(e4)) {
    const t2 = [];
    for (const r2 of Lu(e4))
      if (Ru(r2))
        t2.push(...Bu(r2).parts);
      else {
        const e5 = Bu(r2);
        e5 !== "" && t2.push(e5);
      }
    return { type: "concat", parts: t2 };
  }
  return e4.type === "if-break" ? Object.assign(Object.assign({}, e4), {}, { breakContents: Bu(e4.breakContents), flatContents: Bu(e4.flatContents) }) : e4.type === "group" ? Object.assign(Object.assign({}, e4), {}, { contents: Bu(e4.contents), expandedStates: e4.expandedStates && e4.expandedStates.map(Bu) }) : e4.type === "fill" ? { type: "fill", parts: e4.parts.map(Bu) } : e4.contents ? Object.assign(Object.assign({}, e4), {}, { contents: Bu(e4.contents) }) : e4;
}
var qu = { printDocToDebug: function(e4) {
  const t2 = Object.create(null), r2 = new Set();
  return function e5(t3, r3, i2) {
    if (typeof t3 == "string")
      return JSON.stringify(t3);
    if (Ru(t3)) {
      const r4 = Lu(t3).map(e5).filter(Boolean);
      return r4.length === 1 ? r4[0] : "[".concat(r4.join(", "), "]");
    }
    if (t3.type === "line") {
      const e6 = Array.isArray(i2) && i2[r3 + 1] && i2[r3 + 1].type === "break-parent";
      return t3.literal ? e6 ? "literalline" : "literallineWithoutBreakParent" : t3.hard ? e6 ? "hardline" : "hardlineWithoutBreakParent" : t3.soft ? "softline" : "line";
    }
    if (t3.type === "break-parent") {
      return Array.isArray(i2) && i2[r3 - 1] && i2[r3 - 1].type === "line" && i2[r3 - 1].hard ? void 0 : "breakParent";
    }
    if (t3.type === "trim")
      return "trim";
    if (t3.type === "indent")
      return "indent(" + e5(t3.contents) + ")";
    if (t3.type === "align")
      return t3.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + e5(t3.contents) + ")" : t3.n < 0 ? "dedent(" + e5(t3.contents) + ")" : t3.n.type === "root" ? "markAsRoot(" + e5(t3.contents) + ")" : "align(" + JSON.stringify(t3.n) + ", " + e5(t3.contents) + ")";
    if (t3.type === "if-break")
      return "ifBreak(" + e5(t3.breakContents) + (t3.flatContents ? ", " + e5(t3.flatContents) : "") + (t3.groupId ? (t3.flatContents ? "" : ', ""') + ", { groupId: ".concat(n2(t3.groupId), " }") : "") + ")";
    if (t3.type === "indent-if-break") {
      const r4 = [];
      t3.negate && r4.push("negate: true"), t3.groupId && r4.push("groupId: ".concat(n2(t3.groupId)));
      const i3 = r4.length > 0 ? ", { ".concat(r4.join(", "), " }") : "";
      return "indentIfBreak(".concat(e5(t3.contents)).concat(i3, ")");
    }
    if (t3.type === "group") {
      const r4 = [];
      t3.break && t3.break !== "propagated" && r4.push("shouldBreak: true"), t3.id && r4.push("id: ".concat(n2(t3.id)));
      const i3 = r4.length > 0 ? ", { ".concat(r4.join(", "), " }") : "";
      return t3.expandedStates ? "conditionalGroup([".concat(t3.expandedStates.map((t4) => e5(t4)).join(","), "]").concat(i3, ")") : "group(".concat(e5(t3.contents)).concat(i3, ")");
    }
    if (t3.type === "fill")
      return "fill([".concat(t3.parts.map((t4) => e5(t4)).join(", "), "])");
    if (t3.type === "line-suffix")
      return "lineSuffix(" + e5(t3.contents) + ")";
    if (t3.type === "line-suffix-boundary")
      return "lineSuffixBoundary";
    if (t3.type === "label")
      return "label(".concat(JSON.stringify(t3.label), ", ").concat(e5(t3.contents), ")");
    throw new Error("Unknown doc type " + t3.type);
  }(Bu(e4));
  function n2(e5) {
    if (typeof e5 != "symbol")
      return JSON.stringify(String(e5));
    if (e5 in t2)
      return t2[e5];
    const n3 = String(e5).slice(7, -1) || "symbol";
    for (let i2 = 0; ; i2++) {
      const s2 = n3 + (i2 > 0 ? " #".concat(i2) : "");
      if (!r2.has(s2))
        return r2.add(s2), t2[e5] = "Symbol.for(".concat(JSON.stringify(s2), ")");
    }
  }
} };
var $u = { builders: Ka, printer: Pu, utils: Cu, debug: qu };
var Mu = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"];
var ju = Ga;
var { inferParserByLanguage: Uu, isFrontMatterNode: Gu } = Ua;
var { builders: { line: Vu, hardline: Xu, join: Hu }, utils: { getDocParts: zu, replaceTextEndOfLine: Wu } } = $u;
var { CSS_DISPLAY_TAGS: Yu, CSS_DISPLAY_DEFAULT: Qu, CSS_WHITE_SPACE_TAGS: Ju, CSS_WHITE_SPACE_DEFAULT: Zu } = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
var Ku = sc(Mu);
var ec = function(e4, t2) {
  const r2 = Object.create(null);
  for (const [n2, i2] of Object.entries(e4))
    r2[n2] = t2(i2, n2);
  return r2;
}(ju, sc);
var tc = new Set(["	", "\n", "\f", "\r", " "]);
var rc = (e4) => e4.replace(/[\t\n\f\r ]+$/, "");
var nc = (e4) => ((e5) => e5.replace(/^[\t\f\r ]*?\n/g, ""))(rc(e4));
var ic = (e4) => e4.split(/[\t\n\f\r ]+/);
function sc(e4) {
  const t2 = Object.create(null);
  for (const r2 of e4)
    t2[r2] = true;
  return t2;
}
function oc(e4) {
  return e4.type === "element" && (e4.fullName === "script" || e4.fullName === "style" || e4.fullName === "svg:style" || mc(e4) && (e4.name === "script" || e4.name === "style"));
}
function ac(e4) {
  return Ec(e4).startsWith("pre");
}
function uc(e4) {
  return e4.type === "element" && e4.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e4.name) || e4.cssDisplay.startsWith("table") && e4.cssDisplay !== "table-cell");
}
function cc(e4) {
  return Dc(e4) || e4.type === "element" && e4.fullName === "br" || lc(e4);
}
function lc(e4) {
  return pc(e4) && hc(e4);
}
function pc(e4) {
  return e4.hasLeadingSpaces && (e4.prev ? e4.prev.sourceSpan.end.line < e4.sourceSpan.start.line : e4.parent.type === "root" || e4.parent.startSourceSpan.end.line < e4.sourceSpan.start.line);
}
function hc(e4) {
  return e4.hasTrailingSpaces && (e4.next ? e4.next.sourceSpan.start.line > e4.sourceSpan.end.line : e4.parent.type === "root" || e4.parent.endSourceSpan && e4.parent.endSourceSpan.start.line > e4.sourceSpan.end.line);
}
function Dc(e4) {
  switch (e4.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(e4.name);
  }
  return false;
}
function dc(e4) {
  const { type: t2, lang: r2 } = e4.attrMap;
  return t2 === "module" || t2 === "text/javascript" || t2 === "text/babel" || t2 === "application/javascript" || r2 === "jsx" ? "babel" : t2 === "application/x-typescript" || r2 === "ts" || r2 === "tsx" ? "typescript" : t2 === "text/markdown" ? "markdown" : t2 === "text/html" ? "html" : t2 && (t2.endsWith("json") || t2.endsWith("importmap")) ? "json" : t2 === "text/x-handlebars-template" ? "glimmer" : void 0;
}
function fc(e4) {
  return e4 === "block" || e4 === "list-item" || e4.startsWith("table");
}
function gc(e4) {
  return Ec(e4).startsWith("pre");
}
function mc(e4) {
  return e4.type === "element" && !e4.hasExplicitNamespace && !["html", "svg"].includes(e4.namespace);
}
function Ec(e4) {
  return e4.type === "element" && (!e4.namespace || mc(e4)) && Ju[e4.name] || Zu;
}
function Cc(e4) {
  let t2 = Number.POSITIVE_INFINITY;
  for (const n2 of e4.split("\n")) {
    if (n2.length === 0)
      continue;
    if (!tc.has(n2[0]))
      return 0;
    const e5 = (r2 = n2, r2.match(/^[\t\n\f\r ]*/)[0]).length;
    n2.length !== e5 && (e5 < t2 && (t2 = e5));
  }
  var r2;
  return t2 === Number.POSITIVE_INFINITY ? 0 : t2;
}
function yc(e4) {
  let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Cc(e4);
  return t2 === 0 ? e4 : e4.split("\n").map((e5) => e5.slice(t2)).join("\n");
}
var bc = new Set(["template", "style", "script"]);
function Sc(e4, t2) {
  return Tc(e4, t2) && !bc.has(e4.fullName);
}
function Tc(e4, t2) {
  return t2.parser === "vue" && e4.type === "element" && e4.parent.type === "root" && e4.fullName.toLowerCase() !== "html";
}
function _c(e4, t2) {
  return Tc(e4, t2) && (Sc(e4, t2) || e4.attrMap.lang && e4.attrMap.lang !== "html");
}
var vc = { HTML_ELEMENT_ATTRIBUTES: ec, HTML_TAGS: Ku, htmlTrim: (e4) => ((e5) => e5.replace(/^[\t\n\f\r ]+/, ""))(rc(e4)), htmlTrimPreserveIndentation: nc, hasHtmlWhitespace: (e4) => /[\t\n\f\r ]/.test(e4), getLeadingAndTrailingHtmlWhitespace: (e4) => {
  const [, t2, r2, n2] = e4.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
  return { leadingWhitespace: t2, trailingWhitespace: n2, text: r2 };
}, canHaveInterpolation: function(e4) {
  return e4.children && !oc(e4);
}, countChars: function(e4, t2) {
  let r2 = 0;
  for (let n2 = 0; n2 < e4.length; n2++)
    e4[n2] === t2 && r2++;
  return r2;
}, countParents: function(e4, t2) {
  let r2 = 0;
  for (let n2 = e4.stack.length - 1; n2 >= 0; n2--) {
    const i2 = e4.stack[n2];
    i2 && typeof i2 == "object" && !Array.isArray(i2) && t2(i2) && r2++;
  }
  return r2;
}, dedentString: yc, forceBreakChildren: uc, forceBreakContent: function(e4) {
  return uc(e4) || e4.type === "element" && e4.children.length > 0 && (["body", "script", "style"].includes(e4.name) || e4.children.some((e5) => function(e6) {
    return e6.children && e6.children.some((e7) => e7.type !== "text");
  }(e5))) || e4.firstChild && e4.firstChild === e4.lastChild && e4.firstChild.type !== "text" && pc(e4.firstChild) && (!e4.lastChild.isTrailingSpaceSensitive || hc(e4.lastChild));
}, forceNextEmptyLine: function(e4) {
  return Gu(e4) || e4.next && e4.sourceSpan.end && e4.sourceSpan.end.line + 1 < e4.next.sourceSpan.start.line;
}, getLastDescendant: function e3(t2) {
  return t2.lastChild ? e3(t2.lastChild) : t2;
}, getNodeCssStyleDisplay: function(e4, t2) {
  if (e4.prev && e4.prev.type === "comment") {
    const t3 = e4.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
    if (t3)
      return t3[1];
  }
  let r2 = false;
  if (e4.type === "element" && e4.namespace === "svg") {
    if (!function(e5, t3) {
      let r3 = e5;
      for (; r3; ) {
        if (t3(r3))
          return true;
        r3 = r3.parent;
      }
      return false;
    }(e4, (e5) => e5.fullName === "svg:foreignObject"))
      return e4.name === "svg" ? "inline-block" : "block";
    r2 = true;
  }
  switch (t2.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return t2.parser === "vue" && e4.parent && e4.parent.type === "root" ? "block" : e4.type === "element" && (!e4.namespace || r2 || mc(e4)) && Yu[e4.name] || Qu;
  }
}, getNodeCssStyleWhiteSpace: Ec, hasPrettierIgnore: function(e4) {
  return e4.type !== "attribute" && (!!e4.parent && (typeof e4.index == "number" && e4.index !== 0 && function(e5) {
    return e5.type === "comment" && e5.value.trim() === "prettier-ignore";
  }(e4.parent.children[e4.index - 1])));
}, inferScriptParser: function(e4, t2) {
  return e4.name !== "script" || e4.attrMap.src ? e4.name === "style" ? function(e5) {
    const { lang: t3 } = e5.attrMap;
    return t3 && t3 !== "postcss" && t3 !== "css" ? t3 === "scss" ? "scss" : t3 === "less" ? "less" : void 0 : "css";
  }(e4) : t2 && _c(e4, t2) ? dc(e4) || !("src" in e4.attrMap) && Uu(e4.attrMap.lang, t2) : void 0 : e4.attrMap.lang || e4.attrMap.type ? dc(e4) : "babel";
}, isVueCustomBlock: Sc, isVueNonHtmlBlock: _c, isVueSlotAttribute: function(e4) {
  const t2 = e4.fullName;
  return t2.charAt(0) === "#" || t2 === "slot-scope" || t2 === "v-slot" || t2.startsWith("v-slot:");
}, isVueSfcBindingsAttribute: function(e4, t2) {
  const r2 = e4.parent;
  if (!Tc(r2, t2))
    return false;
  const n2 = r2.fullName, i2 = e4.fullName;
  return n2 === "script" && i2 === "setup" || n2 === "style" && i2 === "vars";
}, isDanglingSpaceSensitiveNode: function(e4) {
  return !(t2 = e4.cssDisplay, fc(t2) || t2 === "inline-block" || oc(e4));
  var t2;
}, isIndentationSensitiveNode: ac, isLeadingSpaceSensitiveNode: function(e4, t2) {
  const r2 = function() {
    if (Gu(e4))
      return false;
    if ((e4.type === "text" || e4.type === "interpolation") && e4.prev && (e4.prev.type === "text" || e4.prev.type === "interpolation"))
      return true;
    if (!e4.parent || e4.parent.cssDisplay === "none")
      return false;
    if (gc(e4.parent))
      return true;
    if (!e4.prev && (e4.parent.type === "root" || gc(e4) && e4.parent || oc(e4.parent) || Sc(e4.parent, t2) || (r3 = e4.parent.cssDisplay, fc(r3) || r3 === "inline-block")))
      return false;
    var r3;
    if (e4.prev && !function(e5) {
      return !fc(e5);
    }(e4.prev.cssDisplay))
      return false;
    return true;
  }();
  return r2 && !e4.prev && e4.parent && e4.parent.tagDefinition && e4.parent.tagDefinition.ignoreFirstLf ? e4.type === "interpolation" : r2;
}, isPreLikeNode: gc, isScriptLikeTag: oc, isTextLikeNode: function(e4) {
  return e4.type === "text" || e4.type === "comment";
}, isTrailingSpaceSensitiveNode: function(e4, t2) {
  return !Gu(e4) && (!(e4.type !== "text" && e4.type !== "interpolation" || !e4.next || e4.next.type !== "text" && e4.next.type !== "interpolation") || !(!e4.parent || e4.parent.cssDisplay === "none") && (!!gc(e4.parent) || !(!e4.next && (e4.parent.type === "root" || gc(e4) && e4.parent || oc(e4.parent) || Sc(e4.parent, t2) || (r2 = e4.parent.cssDisplay, fc(r2) || r2 === "inline-block"))) && !(e4.next && !function(e5) {
    return !fc(e5);
  }(e4.next.cssDisplay))));
  var r2;
}, isWhitespaceSensitiveNode: function(e4) {
  return oc(e4) || e4.type === "interpolation" || ac(e4);
}, isUnknownNamespace: mc, preferHardlineAsLeadingSpaces: function(e4) {
  return Dc(e4) || e4.prev && cc(e4.prev) || lc(e4);
}, preferHardlineAsTrailingSpaces: cc, shouldPreserveContent: function(e4, t2) {
  return !(e4.type !== "ieConditionalComment" || !e4.lastChild || e4.lastChild.isSelfClosing || e4.lastChild.endSourceSpan) || (e4.type === "ieConditionalComment" && !e4.complete || (!(!gc(e4) || !e4.children.some((e5) => e5.type !== "text" && e5.type !== "interpolation")) || !(!_c(e4, t2) || oc(e4) || e4.type === "interpolation")));
}, unescapeQuoteEntities: function(e4) {
  return e4.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
}, getTextValueParts: function(e4) {
  let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e4.value;
  return e4.parent.isWhitespaceSensitive ? e4.parent.isIndentationSensitive ? Wu(t2) : Wu(yc(nc(t2)), Xu) : zu(Hu(Vu, ic(t2)));
} };
var Ac = { hasPragma: function(e4) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e4);
}, insertPragma: function(e4) {
  return "<!-- @format -->\n\n" + e4.replace(/^\s*\n/, "");
} };
var { isNonEmptyArray: Fc } = Ua;
var wc = C;
var kc = { attrs: true, children: true };
var Nc = class {
  constructor() {
    let e4 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    for (const [t2, r2] of Object.entries(e4))
      t2 in kc ? this._setNodes(t2, r2) : this[t2] = r2;
  }
  _setNodes(e4, t2) {
    t2 !== this[e4] && (this[e4] = function(e5, t3) {
      const r2 = e5.map((e6) => e6 instanceof Nc ? e6.clone() : new Nc(e6));
      let n2 = null, i2 = r2[0], s2 = r2[1] || null;
      for (let e6 = 0; e6 < r2.length; e6++)
        xc(i2, { index: e6, siblings: r2, prev: n2, next: s2, parent: t3 }), n2 = i2, i2 = s2, s2 = r2[e6 + 2] || null;
      return r2;
    }(t2, this), e4 === "attrs" && xc(this, { attrMap: Object.fromEntries(this[e4].map((e5) => [e5.fullName, e5.value])) }));
  }
  map(e4) {
    let t2 = null;
    for (const r2 in kc) {
      const n2 = this[r2];
      if (n2) {
        const i2 = Oc(n2, (t3) => t3.map(e4));
        t2 !== n2 && (t2 || (t2 = new Nc()), t2._setNodes(r2, i2));
      }
    }
    if (t2) {
      for (const e6 in this)
        e6 in kc || (t2[e6] = this[e6]);
      const { index: e5, siblings: r2, prev: n2, next: i2, parent: s2 } = this;
      xc(t2, { index: e5, siblings: r2, prev: n2, next: i2, parent: s2 });
    }
    return e4(t2 || this);
  }
  walk(e4) {
    for (const t2 in kc) {
      const r2 = this[t2];
      if (r2)
        for (let t3 = 0; t3 < r2.length; t3++)
          r2[t3].walk(e4);
    }
    e4(this);
  }
  clone(e4) {
    return new Nc(e4 ? Object.assign(Object.assign({}, this), e4) : this);
  }
  setChildren(e4) {
    this._setNodes("children", e4);
  }
  get firstChild() {
    return Fc(this.children) ? this.children[0] : null;
  }
  get lastChild() {
    return Fc(this.children) ? wc(this.children) : null;
  }
  get rawName() {
    return this.hasExplicitNamespace ? this.fullName : this.name;
  }
  get fullName() {
    return this.namespace ? this.namespace + ":" + this.name : this.name;
  }
};
function Oc(e4, t2) {
  const r2 = e4.map(t2);
  return r2.some((t3, r3) => t3 !== e4[r3]) ? r2 : e4;
}
function xc(e4, t2) {
  const r2 = Object.fromEntries(Object.entries(t2).map((e5) => {
    let [t3, r3] = e5;
    return [t3, { value: r3, enumerable: false }];
  }));
  Object.defineProperties(e4, r2);
}
var Ic = { Node: Nc };
var { ParseSourceSpan: Pc } = t;
var Rc = [{ regex: /^(\[if([^\]]*?)]>)(.*?)<!\s*\[endif]$/s, parse: function(e4, t2, r2) {
  const [, n2, i2, s2] = r2, o2 = "<!--".length + n2.length, a2 = e4.sourceSpan.start.moveBy(o2), u2 = a2.moveBy(s2.length), [c2, l2] = (() => {
    try {
      return [true, t2(s2, a2).children];
    } catch {
      return [false, [{ type: "text", value: s2, sourceSpan: new Pc(a2, u2) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: c2, children: l2, condition: i2.trim().replace(/\s+/g, " "), sourceSpan: e4.sourceSpan, startSourceSpan: new Pc(e4.sourceSpan.start, a2), endSourceSpan: new Pc(u2, e4.sourceSpan.end) };
} }, { regex: /^\[if([^\]]*?)]><!$/, parse: function(e4, t2, r2) {
  const [, n2] = r2;
  return { type: "ieConditionalStartComment", condition: n2.trim().replace(/\s+/g, " "), sourceSpan: e4.sourceSpan };
} }, { regex: /^<!\s*\[endif]$/, parse: function(e4) {
  return { type: "ieConditionalEndComment", sourceSpan: e4.sourceSpan };
} }];
var Lc = { parseIeConditionalComment: function(e4, t2) {
  if (e4.value)
    for (const { regex: r2, parse: n2 } of Rc) {
      const i2 = e4.value.match(r2);
      if (i2)
        return n2(e4, t2, i2);
    }
  return null;
} };
var Bc = { locStart: function(e4) {
  return e4.sourceSpan.start.offset;
}, locEnd: function(e4) {
  return e4.sourceSpan.end.offset;
} };
var qc = {};
var $c = {};
var Mc = {};
var jc = {};
!function(e4) {
  var t2;
  function r2(e5) {
    if (e5[0] != ":")
      return [null, e5];
    const t3 = e5.indexOf(":", 1);
    if (t3 == -1)
      throw new Error('Unsupported format "'.concat(e5, '" expecting ":namespace:name"'));
    return [e5.slice(1, t3), e5.slice(t3 + 1)];
  }
  Object.defineProperty(e4, "__esModule", { value: true }), (t2 = e4.TagContentType || (e4.TagContentType = {}))[t2.RAW_TEXT = 0] = "RAW_TEXT", t2[t2.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t2[t2.PARSABLE_DATA = 2] = "PARSABLE_DATA", e4.splitNsName = r2, e4.isNgContainer = function(e5) {
    return r2(e5)[1] === "ng-container";
  }, e4.isNgContent = function(e5) {
    return r2(e5)[1] === "ng-content";
  }, e4.isNgTemplate = function(e5) {
    return r2(e5)[1] === "ng-template";
  }, e4.getNsPrefix = function(e5) {
    return e5 === null ? null : r2(e5)[0];
  }, e4.mergeNsAndName = function(e5, t3) {
    return e5 ? ":".concat(e5, ":").concat(t3) : t3;
  }, e4.NAMED_ENTITIES = { Aacute: "\xC1", aacute: "\xE1", Abreve: "\u0102", abreve: "\u0103", ac: "\u223E", acd: "\u223F", acE: "\u223E\u0333", Acirc: "\xC2", acirc: "\xE2", acute: "\xB4", Acy: "\u0410", acy: "\u0430", AElig: "\xC6", aelig: "\xE6", af: "\u2061", Afr: "\u{1D504}", afr: "\u{1D51E}", Agrave: "\xC0", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", Alpha: "\u0391", alpha: "\u03B1", Amacr: "\u0100", amacr: "\u0101", amalg: "\u2A3F", AMP: "&", amp: "&", And: "\u2A53", and: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", ange: "\u29A4", angle: "\u2220", angmsd: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angst: "\xC5", angzarr: "\u237C", Aogon: "\u0104", aogon: "\u0105", Aopf: "\u{1D538}", aopf: "\u{1D552}", ap: "\u2248", apacir: "\u2A6F", apE: "\u2A70", ape: "\u224A", apid: "\u224B", apos: "'", ApplyFunction: "\u2061", approx: "\u2248", approxeq: "\u224A", Aring: "\xC5", aring: "\xE5", Ascr: "\u{1D49C}", ascr: "\u{1D4B6}", Assign: "\u2254", ast: "*", asymp: "\u2248", asympeq: "\u224D", Atilde: "\xC3", atilde: "\xE3", Auml: "\xC4", auml: "\xE4", awconint: "\u2233", awint: "\u2A11", backcong: "\u224C", backepsilon: "\u03F6", backprime: "\u2035", backsim: "\u223D", backsimeq: "\u22CD", Backslash: "\u2216", Barv: "\u2AE7", barvee: "\u22BD", Barwed: "\u2306", barwed: "\u2305", barwedge: "\u2305", bbrk: "\u23B5", bbrktbrk: "\u23B6", bcong: "\u224C", Bcy: "\u0411", bcy: "\u0431", bdquo: "\u201E", becaus: "\u2235", Because: "\u2235", because: "\u2235", bemptyv: "\u29B0", bepsi: "\u03F6", bernou: "\u212C", Bernoullis: "\u212C", Beta: "\u0392", beta: "\u03B2", beth: "\u2136", between: "\u226C", Bfr: "\u{1D505}", bfr: "\u{1D51F}", bigcap: "\u22C2", bigcirc: "\u25EF", bigcup: "\u22C3", bigodot: "\u2A00", bigoplus: "\u2A01", bigotimes: "\u2A02", bigsqcup: "\u2A06", bigstar: "\u2605", bigtriangledown: "\u25BD", bigtriangleup: "\u25B3", biguplus: "\u2A04", bigvee: "\u22C1", bigwedge: "\u22C0", bkarow: "\u290D", blacklozenge: "\u29EB", blacksquare: "\u25AA", blacktriangle: "\u25B4", blacktriangledown: "\u25BE", blacktriangleleft: "\u25C2", blacktriangleright: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bNot: "\u2AED", bnot: "\u2310", Bopf: "\u{1D539}", bopf: "\u{1D553}", bot: "\u22A5", bottom: "\u22A5", bowtie: "\u22C8", boxbox: "\u29C9", boxDL: "\u2557", boxDl: "\u2556", boxdL: "\u2555", boxdl: "\u2510", boxDR: "\u2554", boxDr: "\u2553", boxdR: "\u2552", boxdr: "\u250C", boxH: "\u2550", boxh: "\u2500", boxHD: "\u2566", boxHd: "\u2564", boxhD: "\u2565", boxhd: "\u252C", boxHU: "\u2569", boxHu: "\u2567", boxhU: "\u2568", boxhu: "\u2534", boxminus: "\u229F", boxplus: "\u229E", boxtimes: "\u22A0", boxUL: "\u255D", boxUl: "\u255C", boxuL: "\u255B", boxul: "\u2518", boxUR: "\u255A", boxUr: "\u2559", boxuR: "\u2558", boxur: "\u2514", boxV: "\u2551", boxv: "\u2502", boxVH: "\u256C", boxVh: "\u256B", boxvH: "\u256A", boxvh: "\u253C", boxVL: "\u2563", boxVl: "\u2562", boxvL: "\u2561", boxvl: "\u2524", boxVR: "\u2560", boxVr: "\u255F", boxvR: "\u255E", boxvr: "\u251C", bprime: "\u2035", Breve: "\u02D8", breve: "\u02D8", brvbar: "\xA6", Bscr: "\u212C", bscr: "\u{1D4B7}", bsemi: "\u204F", bsim: "\u223D", bsime: "\u22CD", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bump: "\u224E", bumpE: "\u2AAE", bumpe: "\u224F", Bumpeq: "\u224E", bumpeq: "\u224F", Cacute: "\u0106", cacute: "\u0107", Cap: "\u22D2", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", CapitalDifferentialD: "\u2145", caps: "\u2229\uFE00", caret: "\u2041", caron: "\u02C7", Cayleys: "\u212D", ccaps: "\u2A4D", Ccaron: "\u010C", ccaron: "\u010D", Ccedil: "\xC7", ccedil: "\xE7", Ccirc: "\u0108", ccirc: "\u0109", Cconint: "\u2230", ccups: "\u2A4C", ccupssm: "\u2A50", Cdot: "\u010A", cdot: "\u010B", cedil: "\xB8", Cedilla: "\xB8", cemptyv: "\u29B2", cent: "\xA2", CenterDot: "\xB7", centerdot: "\xB7", Cfr: "\u212D", cfr: "\u{1D520}", CHcy: "\u0427", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", Chi: "\u03A7", chi: "\u03C7", cir: "\u25CB", circ: "\u02C6", circeq: "\u2257", circlearrowleft: "\u21BA", circlearrowright: "\u21BB", circledast: "\u229B", circledcirc: "\u229A", circleddash: "\u229D", CircleDot: "\u2299", circledR: "\xAE", circledS: "\u24C8", CircleMinus: "\u2296", CirclePlus: "\u2295", CircleTimes: "\u2297", cirE: "\u29C3", cire: "\u2257", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", ClockwiseContourIntegral: "\u2232", CloseCurlyDoubleQuote: "\u201D", CloseCurlyQuote: "\u2019", clubs: "\u2663", clubsuit: "\u2663", Colon: "\u2237", colon: ":", Colone: "\u2A74", colone: "\u2254", coloneq: "\u2254", comma: ",", commat: "@", comp: "\u2201", compfn: "\u2218", complement: "\u2201", complexes: "\u2102", cong: "\u2245", congdot: "\u2A6D", Congruent: "\u2261", Conint: "\u222F", conint: "\u222E", ContourIntegral: "\u222E", Copf: "\u2102", copf: "\u{1D554}", coprod: "\u2210", Coproduct: "\u2210", COPY: "\xA9", copy: "\xA9", copysr: "\u2117", CounterClockwiseContourIntegral: "\u2233", crarr: "\u21B5", Cross: "\u2A2F", cross: "\u2717", Cscr: "\u{1D49E}", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", cuesc: "\u22DF", cularr: "\u21B6", cularrp: "\u293D", Cup: "\u22D3", cup: "\u222A", cupbrcap: "\u2A48", CupCap: "\u224D", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curarrm: "\u293C", curlyeqprec: "\u22DE", curlyeqsucc: "\u22DF", curlyvee: "\u22CE", curlywedge: "\u22CF", curren: "\xA4", curvearrowleft: "\u21B6", curvearrowright: "\u21B7", cuvee: "\u22CE", cuwed: "\u22CF", cwconint: "\u2232", cwint: "\u2231", cylcty: "\u232D", Dagger: "\u2021", dagger: "\u2020", daleth: "\u2138", Darr: "\u21A1", dArr: "\u21D3", darr: "\u2193", dash: "\u2010", Dashv: "\u2AE4", dashv: "\u22A3", dbkarow: "\u290F", dblac: "\u02DD", Dcaron: "\u010E", dcaron: "\u010F", Dcy: "\u0414", dcy: "\u0434", DD: "\u2145", dd: "\u2146", ddagger: "\u2021", ddarr: "\u21CA", DDotrahd: "\u2911", ddotseq: "\u2A77", deg: "\xB0", Del: "\u2207", Delta: "\u0394", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", Dfr: "\u{1D507}", dfr: "\u{1D521}", dHar: "\u2965", dharl: "\u21C3", dharr: "\u21C2", DiacriticalAcute: "\xB4", DiacriticalDot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", DiacriticalGrave: "`", DiacriticalTilde: "\u02DC", diam: "\u22C4", Diamond: "\u22C4", diamond: "\u22C4", diamondsuit: "\u2666", diams: "\u2666", die: "\xA8", DifferentialD: "\u2146", digamma: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", DJcy: "\u0402", djcy: "\u0452", dlcorn: "\u231E", dlcrop: "\u230D", dollar: "$", Dopf: "\u{1D53B}", dopf: "\u{1D555}", Dot: "\xA8", dot: "\u02D9", DotDot: "\u20DC", doteq: "\u2250", doteqdot: "\u2251", DotEqual: "\u2250", dotminus: "\u2238", dotplus: "\u2214", dotsquare: "\u22A1", doublebarwedge: "\u2306", DoubleContourIntegral: "\u222F", DoubleDot: "\xA8", DoubleDownArrow: "\u21D3", DoubleLeftArrow: "\u21D0", DoubleLeftRightArrow: "\u21D4", DoubleLeftTee: "\u2AE4", DoubleLongLeftArrow: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", DoubleLongRightArrow: "\u27F9", DoubleRightArrow: "\u21D2", DoubleRightTee: "\u22A8", DoubleUpArrow: "\u21D1", DoubleUpDownArrow: "\u21D5", DoubleVerticalBar: "\u2225", DownArrow: "\u2193", Downarrow: "\u21D3", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", DownBreve: "\u0311", downdownarrows: "\u21CA", downharpoonleft: "\u21C3", downharpoonright: "\u21C2", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", DownTeeArrow: "\u21A7", drbkarow: "\u2910", drcorn: "\u231F", drcrop: "\u230C", Dscr: "\u{1D49F}", dscr: "\u{1D4B9}", DScy: "\u0405", dscy: "\u0455", dsol: "\u29F6", Dstrok: "\u0110", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", dtrif: "\u25BE", duarr: "\u21F5", duhar: "\u296F", dwangle: "\u29A6", DZcy: "\u040F", dzcy: "\u045F", dzigrarr: "\u27FF", Eacute: "\xC9", eacute: "\xE9", easter: "\u2A6E", Ecaron: "\u011A", ecaron: "\u011B", ecir: "\u2256", Ecirc: "\xCA", ecirc: "\xEA", ecolon: "\u2255", Ecy: "\u042D", ecy: "\u044D", eDDot: "\u2A77", Edot: "\u0116", eDot: "\u2251", edot: "\u0117", ee: "\u2147", efDot: "\u2252", Efr: "\u{1D508}", efr: "\u{1D522}", eg: "\u2A9A", Egrave: "\xC8", egrave: "\xE8", egs: "\u2A96", egsdot: "\u2A98", el: "\u2A99", Element: "\u2208", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", elsdot: "\u2A97", Emacr: "\u0112", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", EmptySmallSquare: "\u25FB", emptyv: "\u2205", EmptyVerySmallSquare: "\u25AB", emsp: "\u2003", emsp13: "\u2004", emsp14: "\u2005", ENG: "\u014A", eng: "\u014B", ensp: "\u2002", Eogon: "\u0118", eogon: "\u0119", Eopf: "\u{1D53C}", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", Epsilon: "\u0395", epsilon: "\u03B5", epsiv: "\u03F5", eqcirc: "\u2256", eqcolon: "\u2255", eqsim: "\u2242", eqslantgtr: "\u2A96", eqslantless: "\u2A95", Equal: "\u2A75", equals: "=", EqualTilde: "\u2242", equest: "\u225F", Equilibrium: "\u21CC", equiv: "\u2261", equivDD: "\u2A78", eqvparsl: "\u29E5", erarr: "\u2971", erDot: "\u2253", Escr: "\u2130", escr: "\u212F", esdot: "\u2250", Esim: "\u2A73", esim: "\u2242", Eta: "\u0397", eta: "\u03B7", ETH: "\xD0", eth: "\xF0", Euml: "\xCB", euml: "\xEB", euro: "\u20AC", excl: "!", exist: "\u2203", Exists: "\u2203", expectation: "\u2130", ExponentialE: "\u2147", exponentiale: "\u2147", fallingdotseq: "\u2252", Fcy: "\u0424", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", Ffr: "\u{1D509}", ffr: "\u{1D523}", filig: "\uFB01", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", Fopf: "\u{1D53D}", fopf: "\u{1D557}", ForAll: "\u2200", forall: "\u2200", fork: "\u22D4", forkv: "\u2AD9", Fouriertrf: "\u2131", fpartint: "\u2A0D", frac12: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", Fscr: "\u2131", fscr: "\u{1D4BB}", gacute: "\u01F5", Gamma: "\u0393", gamma: "\u03B3", Gammad: "\u03DC", gammad: "\u03DD", gap: "\u2A86", Gbreve: "\u011E", gbreve: "\u011F", Gcedil: "\u0122", Gcirc: "\u011C", gcirc: "\u011D", Gcy: "\u0413", gcy: "\u0433", Gdot: "\u0120", gdot: "\u0121", gE: "\u2267", ge: "\u2265", gEl: "\u2A8C", gel: "\u22DB", geq: "\u2265", geqq: "\u2267", geqslant: "\u2A7E", ges: "\u2A7E", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", Gfr: "\u{1D50A}", gfr: "\u{1D524}", Gg: "\u22D9", gg: "\u226B", ggg: "\u22D9", gimel: "\u2137", GJcy: "\u0403", gjcy: "\u0453", gl: "\u2277", gla: "\u2AA5", glE: "\u2A92", glj: "\u2AA4", gnap: "\u2A8A", gnapprox: "\u2A8A", gnE: "\u2269", gne: "\u2A88", gneq: "\u2A88", gneqq: "\u2269", gnsim: "\u22E7", Gopf: "\u{1D53E}", gopf: "\u{1D558}", grave: "`", GreaterEqual: "\u2265", GreaterEqualLess: "\u22DB", GreaterFullEqual: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", GreaterSlantEqual: "\u2A7E", GreaterTilde: "\u2273", Gscr: "\u{1D4A2}", gscr: "\u210A", gsim: "\u2273", gsime: "\u2A8E", gsiml: "\u2A90", GT: ">", Gt: "\u226B", gt: ">", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrapprox: "\u2A86", gtrarr: "\u2978", gtrdot: "\u22D7", gtreqless: "\u22DB", gtreqqless: "\u2A8C", gtrless: "\u2277", gtrsim: "\u2273", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", Hacek: "\u02C7", hairsp: "\u200A", half: "\xBD", hamilt: "\u210B", HARDcy: "\u042A", hardcy: "\u044A", hArr: "\u21D4", harr: "\u2194", harrcir: "\u2948", harrw: "\u21AD", Hat: "^", hbar: "\u210F", Hcirc: "\u0124", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", hercon: "\u22B9", Hfr: "\u210C", hfr: "\u{1D525}", HilbertSpace: "\u210B", hksearow: "\u2925", hkswarow: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", hookrightarrow: "\u21AA", Hopf: "\u210D", hopf: "\u{1D559}", horbar: "\u2015", HorizontalLine: "\u2500", Hscr: "\u210B", hscr: "\u{1D4BD}", hslash: "\u210F", Hstrok: "\u0126", hstrok: "\u0127", HumpDownHump: "\u224E", HumpEqual: "\u224F", hybull: "\u2043", hyphen: "\u2010", Iacute: "\xCD", iacute: "\xED", ic: "\u2063", Icirc: "\xCE", icirc: "\xEE", Icy: "\u0418", icy: "\u0438", Idot: "\u0130", IEcy: "\u0415", iecy: "\u0435", iexcl: "\xA1", iff: "\u21D4", Ifr: "\u2111", ifr: "\u{1D526}", Igrave: "\xCC", igrave: "\xEC", ii: "\u2148", iiiint: "\u2A0C", iiint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", IJlig: "\u0132", ijlig: "\u0133", Im: "\u2111", Imacr: "\u012A", imacr: "\u012B", image: "\u2111", ImaginaryI: "\u2148", imagline: "\u2110", imagpart: "\u2111", imath: "\u0131", imof: "\u22B7", imped: "\u01B5", Implies: "\u21D2", in: "\u2208", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", inodot: "\u0131", Int: "\u222C", int: "\u222B", intcal: "\u22BA", integers: "\u2124", Integral: "\u222B", intercal: "\u22BA", Intersection: "\u22C2", intlarhk: "\u2A17", intprod: "\u2A3C", InvisibleComma: "\u2063", InvisibleTimes: "\u2062", IOcy: "\u0401", iocy: "\u0451", Iogon: "\u012E", iogon: "\u012F", Iopf: "\u{1D540}", iopf: "\u{1D55A}", Iota: "\u0399", iota: "\u03B9", iprod: "\u2A3C", iquest: "\xBF", Iscr: "\u2110", iscr: "\u{1D4BE}", isin: "\u2208", isindot: "\u22F5", isinE: "\u22F9", isins: "\u22F4", isinsv: "\u22F3", isinv: "\u2208", it: "\u2062", Itilde: "\u0128", itilde: "\u0129", Iukcy: "\u0406", iukcy: "\u0456", Iuml: "\xCF", iuml: "\xEF", Jcirc: "\u0134", jcirc: "\u0135", Jcy: "\u0419", jcy: "\u0439", Jfr: "\u{1D50D}", jfr: "\u{1D527}", jmath: "\u0237", Jopf: "\u{1D541}", jopf: "\u{1D55B}", Jscr: "\u{1D4A5}", jscr: "\u{1D4BF}", Jsercy: "\u0408", jsercy: "\u0458", Jukcy: "\u0404", jukcy: "\u0454", Kappa: "\u039A", kappa: "\u03BA", kappav: "\u03F0", Kcedil: "\u0136", kcedil: "\u0137", Kcy: "\u041A", kcy: "\u043A", Kfr: "\u{1D50E}", kfr: "\u{1D528}", kgreen: "\u0138", KHcy: "\u0425", khcy: "\u0445", KJcy: "\u040C", kjcy: "\u045C", Kopf: "\u{1D542}", kopf: "\u{1D55C}", Kscr: "\u{1D4A6}", kscr: "\u{1D4C0}", lAarr: "\u21DA", Lacute: "\u0139", lacute: "\u013A", laemptyv: "\u29B4", lagran: "\u2112", Lambda: "\u039B", lambda: "\u03BB", Lang: "\u27EA", lang: "\u27E8", langd: "\u2991", langle: "\u27E8", lap: "\u2A85", Laplacetrf: "\u2112", laquo: "\xAB", Larr: "\u219E", lArr: "\u21D0", larr: "\u2190", larrb: "\u21E4", larrbfs: "\u291F", larrfs: "\u291D", larrhk: "\u21A9", larrlp: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", lat: "\u2AAB", lAtail: "\u291B", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lBarr: "\u290E", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lbrack: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", Lcaron: "\u013D", lcaron: "\u013E", Lcedil: "\u013B", lcedil: "\u013C", lceil: "\u2308", lcub: "{", Lcy: "\u041B", lcy: "\u043B", ldca: "\u2936", ldquo: "\u201C", ldquor: "\u201E", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", lE: "\u2266", le: "\u2264", LeftAngleBracket: "\u27E8", LeftArrow: "\u2190", Leftarrow: "\u21D0", leftarrow: "\u2190", LeftArrowBar: "\u21E4", LeftArrowRightArrow: "\u21C6", leftarrowtail: "\u21A2", LeftCeiling: "\u2308", LeftDoubleBracket: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", leftharpoondown: "\u21BD", leftharpoonup: "\u21BC", leftleftarrows: "\u21C7", LeftRightArrow: "\u2194", Leftrightarrow: "\u21D4", leftrightarrow: "\u2194", leftrightarrows: "\u21C6", leftrightharpoons: "\u21CB", leftrightsquigarrow: "\u21AD", LeftRightVector: "\u294E", LeftTee: "\u22A3", LeftTeeArrow: "\u21A4", LeftTeeVector: "\u295A", leftthreetimes: "\u22CB", LeftTriangle: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", LeftVectorBar: "\u2952", lEg: "\u2A8B", leg: "\u22DA", leq: "\u2264", leqq: "\u2266", leqslant: "\u2A7D", les: "\u2A7D", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessapprox: "\u2A85", lessdot: "\u22D6", lesseqgtr: "\u22DA", lesseqqgtr: "\u2A8B", LessEqualGreater: "\u22DA", LessFullEqual: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", LessLess: "\u2AA1", lesssim: "\u2272", LessSlantEqual: "\u2A7D", LessTilde: "\u2272", lfisht: "\u297C", lfloor: "\u230A", Lfr: "\u{1D50F}", lfr: "\u{1D529}", lg: "\u2276", lgE: "\u2A91", lHar: "\u2962", lhard: "\u21BD", lharu: "\u21BC", lharul: "\u296A", lhblk: "\u2584", LJcy: "\u0409", ljcy: "\u0459", Ll: "\u22D8", ll: "\u226A", llarr: "\u21C7", llcorner: "\u231E", Lleftarrow: "\u21DA", llhard: "\u296B", lltri: "\u25FA", Lmidot: "\u013F", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnap: "\u2A89", lnapprox: "\u2A89", lnE: "\u2268", lne: "\u2A87", lneq: "\u2A87", lneqq: "\u2268", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", lobrk: "\u27E6", LongLeftArrow: "\u27F5", Longleftarrow: "\u27F8", longleftarrow: "\u27F5", LongLeftRightArrow: "\u27F7", Longleftrightarrow: "\u27FA", longleftrightarrow: "\u27F7", longmapsto: "\u27FC", LongRightArrow: "\u27F6", Longrightarrow: "\u27F9", longrightarrow: "\u27F6", looparrowleft: "\u21AB", looparrowright: "\u21AC", lopar: "\u2985", Lopf: "\u{1D543}", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", lowbar: "_", LowerLeftArrow: "\u2199", LowerRightArrow: "\u2198", loz: "\u25CA", lozenge: "\u25CA", lozf: "\u29EB", lpar: "(", lparlt: "\u2993", lrarr: "\u21C6", lrcorner: "\u231F", lrhar: "\u21CB", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", Lscr: "\u2112", lscr: "\u{1D4C1}", Lsh: "\u21B0", lsh: "\u21B0", lsim: "\u2272", lsime: "\u2A8D", lsimg: "\u2A8F", lsqb: "[", lsquo: "\u2018", lsquor: "\u201A", Lstrok: "\u0141", lstrok: "\u0142", LT: "<", Lt: "\u226A", lt: "<", ltcc: "\u2AA6", ltcir: "\u2A79", ltdot: "\u22D6", lthree: "\u22CB", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltri: "\u25C3", ltrie: "\u22B4", ltrif: "\u25C2", ltrPar: "\u2996", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", macr: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", Map: "\u2905", map: "\u21A6", mapsto: "\u21A6", mapstodown: "\u21A7", mapstoleft: "\u21A4", mapstoup: "\u21A5", marker: "\u25AE", mcomma: "\u2A29", Mcy: "\u041C", mcy: "\u043C", mdash: "\u2014", mDDot: "\u223A", measuredangle: "\u2221", MediumSpace: "\u205F", Mellintrf: "\u2133", Mfr: "\u{1D510}", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", mid: "\u2223", midast: "*", midcir: "\u2AF0", middot: "\xB7", minus: "\u2212", minusb: "\u229F", minusd: "\u2238", minusdu: "\u2A2A", MinusPlus: "\u2213", mlcp: "\u2ADB", mldr: "\u2026", mnplus: "\u2213", models: "\u22A7", Mopf: "\u{1D544}", mopf: "\u{1D55E}", mp: "\u2213", Mscr: "\u2133", mscr: "\u{1D4C2}", mstpos: "\u223E", Mu: "\u039C", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nabla: "\u2207", Nacute: "\u0143", nacute: "\u0144", nang: "\u2220\u20D2", nap: "\u2249", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", napprox: "\u2249", natur: "\u266E", natural: "\u266E", naturals: "\u2115", nbsp: "\xA0", nbump: "\u224E\u0338", nbumpe: "\u224F\u0338", ncap: "\u2A43", Ncaron: "\u0147", ncaron: "\u0148", Ncedil: "\u0145", ncedil: "\u0146", ncong: "\u2247", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", Ncy: "\u041D", ncy: "\u043D", ndash: "\u2013", ne: "\u2260", nearhk: "\u2924", neArr: "\u21D7", nearr: "\u2197", nearrow: "\u2197", nedot: "\u2250\u0338", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", nequiv: "\u2262", nesear: "\u2928", nesim: "\u2242\u0338", NestedGreaterGreater: "\u226B", NestedLessLess: "\u226A", NewLine: "\n", nexist: "\u2204", nexists: "\u2204", Nfr: "\u{1D511}", nfr: "\u{1D52B}", ngE: "\u2267\u0338", nge: "\u2271", ngeq: "\u2271", ngeqq: "\u2267\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", nGg: "\u22D9\u0338", ngsim: "\u2275", nGt: "\u226B\u20D2", ngt: "\u226F", ngtr: "\u226F", nGtv: "\u226B\u0338", nhArr: "\u21CE", nharr: "\u21AE", nhpar: "\u2AF2", ni: "\u220B", nis: "\u22FC", nisd: "\u22FA", niv: "\u220B", NJcy: "\u040A", njcy: "\u045A", nlArr: "\u21CD", nlarr: "\u219A", nldr: "\u2025", nlE: "\u2266\u0338", nle: "\u2270", nLeftarrow: "\u21CD", nleftarrow: "\u219A", nLeftrightarrow: "\u21CE", nleftrightarrow: "\u21AE", nleq: "\u2270", nleqq: "\u2266\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", nless: "\u226E", nLl: "\u22D8\u0338", nlsim: "\u2274", nLt: "\u226A\u20D2", nlt: "\u226E", nltri: "\u22EA", nltrie: "\u22EC", nLtv: "\u226A\u0338", nmid: "\u2224", NoBreak: "\u2060", NonBreakingSpace: "\xA0", Nopf: "\u2115", nopf: "\u{1D55F}", Not: "\u2AEC", not: "\xAC", NotCongruent: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", NotElement: "\u2209", NotEqual: "\u2260", NotEqualTilde: "\u2242\u0338", NotExists: "\u2204", NotGreater: "\u226F", NotGreaterEqual: "\u2271", NotGreaterFullEqual: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", NotGreaterLess: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", NotGreaterTilde: "\u2275", NotHumpDownHump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", notin: "\u2209", notindot: "\u22F5\u0338", notinE: "\u22F9\u0338", notinva: "\u2209", notinvb: "\u22F7", notinvc: "\u22F6", NotLeftTriangle: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", NotLess: "\u226E", NotLessEqual: "\u2270", NotLessGreater: "\u2278", NotLessLess: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", NotLessTilde: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", notni: "\u220C", notniva: "\u220C", notnivb: "\u22FE", notnivc: "\u22FD", NotPrecedes: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", NotReverseElement: "\u220C", NotRightTriangle: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", NotSubset: "\u2282\u20D2", NotSubsetEqual: "\u2288", NotSucceeds: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", NotSupersetEqual: "\u2289", NotTilde: "\u2241", NotTildeEqual: "\u2244", NotTildeFullEqual: "\u2247", NotTildeTilde: "\u2249", NotVerticalBar: "\u2224", npar: "\u2226", nparallel: "\u2226", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", npr: "\u2280", nprcue: "\u22E0", npre: "\u2AAF\u0338", nprec: "\u2280", npreceq: "\u2AAF\u0338", nrArr: "\u21CF", nrarr: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nRightarrow: "\u21CF", nrightarrow: "\u219B", nrtri: "\u22EB", nrtrie: "\u22ED", nsc: "\u2281", nsccue: "\u22E1", nsce: "\u2AB0\u0338", Nscr: "\u{1D4A9}", nscr: "\u{1D4C3}", nshortmid: "\u2224", nshortparallel: "\u2226", nsim: "\u2241", nsime: "\u2244", nsimeq: "\u2244", nsmid: "\u2224", nspar: "\u2226", nsqsube: "\u22E2", nsqsupe: "\u22E3", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsube: "\u2288", nsubset: "\u2282\u20D2", nsubseteq: "\u2288", nsubseteqq: "\u2AC5\u0338", nsucc: "\u2281", nsucceq: "\u2AB0\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupe: "\u2289", nsupset: "\u2283\u20D2", nsupseteq: "\u2289", nsupseteqq: "\u2AC6\u0338", ntgl: "\u2279", Ntilde: "\xD1", ntilde: "\xF1", ntlg: "\u2278", ntriangleleft: "\u22EA", ntrianglelefteq: "\u22EC", ntriangleright: "\u22EB", ntrianglerighteq: "\u22ED", Nu: "\u039D", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvap: "\u224D\u20D2", nVDash: "\u22AF", nVdash: "\u22AE", nvDash: "\u22AD", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvHarr: "\u2904", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwarhk: "\u2923", nwArr: "\u21D6", nwarr: "\u2196", nwarrow: "\u2196", nwnear: "\u2927", Oacute: "\xD3", oacute: "\xF3", oast: "\u229B", ocir: "\u229A", Ocirc: "\xD4", ocirc: "\xF4", Ocy: "\u041E", ocy: "\u043E", odash: "\u229D", Odblac: "\u0150", odblac: "\u0151", odiv: "\u2A38", odot: "\u2299", odsold: "\u29BC", OElig: "\u0152", oelig: "\u0153", ofcir: "\u29BF", Ofr: "\u{1D512}", ofr: "\u{1D52C}", ogon: "\u02DB", Ograve: "\xD2", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", ohm: "\u03A9", oint: "\u222E", olarr: "\u21BA", olcir: "\u29BE", olcross: "\u29BB", oline: "\u203E", olt: "\u29C0", Omacr: "\u014C", omacr: "\u014D", Omega: "\u03A9", omega: "\u03C9", Omicron: "\u039F", omicron: "\u03BF", omid: "\u29B6", ominus: "\u2296", Oopf: "\u{1D546}", oopf: "\u{1D560}", opar: "\u29B7", OpenCurlyDoubleQuote: "\u201C", OpenCurlyQuote: "\u2018", operp: "\u29B9", oplus: "\u2295", Or: "\u2A54", or: "\u2228", orarr: "\u21BB", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oS: "\u24C8", Oscr: "\u{1D4AA}", oscr: "\u2134", Oslash: "\xD8", oslash: "\xF8", osol: "\u2298", Otilde: "\xD5", otilde: "\xF5", Otimes: "\u2A37", otimes: "\u2297", otimesas: "\u2A36", Ouml: "\xD6", ouml: "\xF6", ovbar: "\u233D", OverBar: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", OverParenthesis: "\u23DC", par: "\u2225", para: "\xB6", parallel: "\u2225", parsim: "\u2AF3", parsl: "\u2AFD", part: "\u2202", PartialD: "\u2202", Pcy: "\u041F", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", perp: "\u22A5", pertenk: "\u2031", Pfr: "\u{1D513}", pfr: "\u{1D52D}", Phi: "\u03A6", phi: "\u03C6", phiv: "\u03D5", phmmat: "\u2133", phone: "\u260E", Pi: "\u03A0", pi: "\u03C0", pitchfork: "\u22D4", piv: "\u03D6", planck: "\u210F", planckh: "\u210E", plankv: "\u210F", plus: "+", plusacir: "\u2A23", plusb: "\u229E", pluscir: "\u2A22", plusdo: "\u2214", plusdu: "\u2A25", pluse: "\u2A72", PlusMinus: "\xB1", plusmn: "\xB1", plussim: "\u2A26", plustwo: "\u2A27", pm: "\xB1", Poincareplane: "\u210C", pointint: "\u2A15", Popf: "\u2119", popf: "\u{1D561}", pound: "\xA3", Pr: "\u2ABB", pr: "\u227A", prap: "\u2AB7", prcue: "\u227C", prE: "\u2AB3", pre: "\u2AAF", prec: "\u227A", precapprox: "\u2AB7", preccurlyeq: "\u227C", Precedes: "\u227A", PrecedesEqual: "\u2AAF", PrecedesSlantEqual: "\u227C", PrecedesTilde: "\u227E", preceq: "\u2AAF", precnapprox: "\u2AB9", precneqq: "\u2AB5", precnsim: "\u22E8", precsim: "\u227E", Prime: "\u2033", prime: "\u2032", primes: "\u2119", prnap: "\u2AB9", prnE: "\u2AB5", prnsim: "\u22E8", prod: "\u220F", Product: "\u220F", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prop: "\u221D", Proportion: "\u2237", Proportional: "\u221D", propto: "\u221D", prsim: "\u227E", prurel: "\u22B0", Pscr: "\u{1D4AB}", pscr: "\u{1D4C5}", Psi: "\u03A8", psi: "\u03C8", puncsp: "\u2008", Qfr: "\u{1D514}", qfr: "\u{1D52E}", qint: "\u2A0C", Qopf: "\u211A", qopf: "\u{1D562}", qprime: "\u2057", Qscr: "\u{1D4AC}", qscr: "\u{1D4C6}", quaternions: "\u210D", quatint: "\u2A16", quest: "?", questeq: "\u225F", QUOT: '"', quot: '"', rAarr: "\u21DB", race: "\u223D\u0331", Racute: "\u0154", racute: "\u0155", radic: "\u221A", raemptyv: "\u29B3", Rang: "\u27EB", rang: "\u27E9", rangd: "\u2992", range: "\u29A5", rangle: "\u27E9", raquo: "\xBB", Rarr: "\u21A0", rArr: "\u21D2", rarr: "\u2192", rarrap: "\u2975", rarrb: "\u21E5", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrhk: "\u21AA", rarrlp: "\u21AC", rarrpl: "\u2945", rarrsim: "\u2974", Rarrtl: "\u2916", rarrtl: "\u21A3", rarrw: "\u219D", rAtail: "\u291C", ratail: "\u291A", ratio: "\u2236", rationals: "\u211A", RBarr: "\u2910", rBarr: "\u290F", rbarr: "\u290D", rbbrk: "\u2773", rbrace: "}", rbrack: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", Rcaron: "\u0158", rcaron: "\u0159", Rcedil: "\u0156", rcedil: "\u0157", rceil: "\u2309", rcub: "}", Rcy: "\u0420", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdquo: "\u201D", rdquor: "\u201D", rdsh: "\u21B3", Re: "\u211C", real: "\u211C", realine: "\u211B", realpart: "\u211C", reals: "\u211D", rect: "\u25AD", REG: "\xAE", reg: "\xAE", ReverseElement: "\u220B", ReverseEquilibrium: "\u21CB", ReverseUpEquilibrium: "\u296F", rfisht: "\u297D", rfloor: "\u230B", Rfr: "\u211C", rfr: "\u{1D52F}", rHar: "\u2964", rhard: "\u21C1", rharu: "\u21C0", rharul: "\u296C", Rho: "\u03A1", rho: "\u03C1", rhov: "\u03F1", RightAngleBracket: "\u27E9", RightArrow: "\u2192", Rightarrow: "\u21D2", rightarrow: "\u2192", RightArrowBar: "\u21E5", RightArrowLeftArrow: "\u21C4", rightarrowtail: "\u21A3", RightCeiling: "\u2309", RightDoubleBracket: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rightharpoondown: "\u21C1", rightharpoonup: "\u21C0", rightleftarrows: "\u21C4", rightleftharpoons: "\u21CC", rightrightarrows: "\u21C9", rightsquigarrow: "\u219D", RightTee: "\u22A2", RightTeeArrow: "\u21A6", RightTeeVector: "\u295B", rightthreetimes: "\u22CC", RightTriangle: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", RightVectorBar: "\u2953", ring: "\u02DA", risingdotseq: "\u2253", rlarr: "\u21C4", rlhar: "\u21CC", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", robrk: "\u27E7", ropar: "\u2986", Ropf: "\u211D", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", RoundImplies: "\u2970", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rrarr: "\u21C9", Rrightarrow: "\u21DB", rsaquo: "\u203A", Rscr: "\u211B", rscr: "\u{1D4C7}", Rsh: "\u21B1", rsh: "\u21B1", rsqb: "]", rsquo: "\u2019", rsquor: "\u2019", rthree: "\u22CC", rtimes: "\u22CA", rtri: "\u25B9", rtrie: "\u22B5", rtrif: "\u25B8", rtriltri: "\u29CE", RuleDelayed: "\u29F4", ruluhar: "\u2968", rx: "\u211E", Sacute: "\u015A", sacute: "\u015B", sbquo: "\u201A", Sc: "\u2ABC", sc: "\u227B", scap: "\u2AB8", Scaron: "\u0160", scaron: "\u0161", sccue: "\u227D", scE: "\u2AB4", sce: "\u2AB0", Scedil: "\u015E", scedil: "\u015F", Scirc: "\u015C", scirc: "\u015D", scnap: "\u2ABA", scnE: "\u2AB6", scnsim: "\u22E9", scpolint: "\u2A13", scsim: "\u227F", Scy: "\u0421", scy: "\u0441", sdot: "\u22C5", sdotb: "\u22A1", sdote: "\u2A66", searhk: "\u2925", seArr: "\u21D8", searr: "\u2198", searrow: "\u2198", sect: "\xA7", semi: ";", seswar: "\u2929", setminus: "\u2216", setmn: "\u2216", sext: "\u2736", Sfr: "\u{1D516}", sfr: "\u{1D530}", sfrown: "\u2322", sharp: "\u266F", SHCHcy: "\u0429", shchcy: "\u0449", SHcy: "\u0428", shcy: "\u0448", ShortDownArrow: "\u2193", ShortLeftArrow: "\u2190", shortmid: "\u2223", shortparallel: "\u2225", ShortRightArrow: "\u2192", ShortUpArrow: "\u2191", shy: "\xAD", Sigma: "\u03A3", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", sim: "\u223C", simdot: "\u2A6A", sime: "\u2243", simeq: "\u2243", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", slarr: "\u2190", SmallCircle: "\u2218", smallsetminus: "\u2216", smashp: "\u2A33", smeparsl: "\u29E4", smid: "\u2223", smile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", SOFTcy: "\u042C", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", Sopf: "\u{1D54A}", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", spar: "\u2225", sqcap: "\u2293", sqcaps: "\u2293\uFE00", sqcup: "\u2294", sqcups: "\u2294\uFE00", Sqrt: "\u221A", sqsub: "\u228F", sqsube: "\u2291", sqsubset: "\u228F", sqsubseteq: "\u2291", sqsup: "\u2290", sqsupe: "\u2292", sqsupset: "\u2290", sqsupseteq: "\u2292", squ: "\u25A1", Square: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", SquareSubset: "\u228F", SquareSubsetEqual: "\u2291", SquareSuperset: "\u2290", SquareSupersetEqual: "\u2292", SquareUnion: "\u2294", squarf: "\u25AA", squf: "\u25AA", srarr: "\u2192", Sscr: "\u{1D4AE}", sscr: "\u{1D4C8}", ssetmn: "\u2216", ssmile: "\u2323", sstarf: "\u22C6", Star: "\u22C6", star: "\u2606", starf: "\u2605", straightepsilon: "\u03F5", straightphi: "\u03D5", strns: "\xAF", Sub: "\u22D0", sub: "\u2282", subdot: "\u2ABD", subE: "\u2AC5", sube: "\u2286", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subne: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", Subset: "\u22D0", subset: "\u2282", subseteq: "\u2286", subseteqq: "\u2AC5", SubsetEqual: "\u2286", subsetneq: "\u228A", subsetneqq: "\u2ACB", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", succ: "\u227B", succapprox: "\u2AB8", succcurlyeq: "\u227D", Succeeds: "\u227B", SucceedsEqual: "\u2AB0", SucceedsSlantEqual: "\u227D", SucceedsTilde: "\u227F", succeq: "\u2AB0", succnapprox: "\u2ABA", succneqq: "\u2AB6", succnsim: "\u22E9", succsim: "\u227F", SuchThat: "\u220B", Sum: "\u2211", sum: "\u2211", sung: "\u266A", Sup: "\u22D1", sup: "\u2283", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supdot: "\u2ABE", supdsub: "\u2AD8", supE: "\u2AC6", supe: "\u2287", supedot: "\u2AC4", Superset: "\u2283", SupersetEqual: "\u2287", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supne: "\u228B", supplus: "\u2AC0", Supset: "\u22D1", supset: "\u2283", supseteq: "\u2287", supseteqq: "\u2AC6", supsetneq: "\u228B", supsetneqq: "\u2ACC", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swarhk: "\u2926", swArr: "\u21D9", swarr: "\u2199", swarrow: "\u2199", swnwar: "\u292A", szlig: "\xDF", Tab: "	", target: "\u2316", Tau: "\u03A4", tau: "\u03C4", tbrk: "\u23B4", Tcaron: "\u0164", tcaron: "\u0165", Tcedil: "\u0162", tcedil: "\u0163", Tcy: "\u0422", tcy: "\u0442", tdot: "\u20DB", telrec: "\u2315", Tfr: "\u{1D517}", tfr: "\u{1D531}", there4: "\u2234", Therefore: "\u2234", therefore: "\u2234", Theta: "\u0398", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", thickapprox: "\u2248", thicksim: "\u223C", ThickSpace: "\u205F\u200A", thinsp: "\u2009", ThinSpace: "\u2009", thkap: "\u2248", thksim: "\u223C", THORN: "\xDE", thorn: "\xFE", Tilde: "\u223C", tilde: "\u02DC", TildeEqual: "\u2243", TildeFullEqual: "\u2245", TildeTilde: "\u2248", times: "\xD7", timesb: "\u22A0", timesbar: "\u2A31", timesd: "\u2A30", tint: "\u222D", toea: "\u2928", top: "\u22A4", topbot: "\u2336", topcir: "\u2AF1", Topf: "\u{1D54B}", topf: "\u{1D565}", topfork: "\u2ADA", tosa: "\u2929", tprime: "\u2034", TRADE: "\u2122", trade: "\u2122", triangle: "\u25B5", triangledown: "\u25BF", triangleleft: "\u25C3", trianglelefteq: "\u22B4", triangleq: "\u225C", triangleright: "\u25B9", trianglerighteq: "\u22B5", tridot: "\u25EC", trie: "\u225C", triminus: "\u2A3A", TripleDot: "\u20DB", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", Tscr: "\u{1D4AF}", tscr: "\u{1D4C9}", TScy: "\u0426", tscy: "\u0446", TSHcy: "\u040B", tshcy: "\u045B", Tstrok: "\u0166", tstrok: "\u0167", twixt: "\u226C", twoheadleftarrow: "\u219E", twoheadrightarrow: "\u21A0", Uacute: "\xDA", uacute: "\xFA", Uarr: "\u219F", uArr: "\u21D1", uarr: "\u2191", Uarrocir: "\u2949", Ubrcy: "\u040E", ubrcy: "\u045E", Ubreve: "\u016C", ubreve: "\u016D", Ucirc: "\xDB", ucirc: "\xFB", Ucy: "\u0423", ucy: "\u0443", udarr: "\u21C5", Udblac: "\u0170", udblac: "\u0171", udhar: "\u296E", ufisht: "\u297E", Ufr: "\u{1D518}", ufr: "\u{1D532}", Ugrave: "\xD9", ugrave: "\xF9", uHar: "\u2963", uharl: "\u21BF", uharr: "\u21BE", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", Umacr: "\u016A", umacr: "\u016B", uml: "\xA8", UnderBar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", UnionPlus: "\u228E", Uogon: "\u0172", uogon: "\u0173", Uopf: "\u{1D54C}", uopf: "\u{1D566}", UpArrow: "\u2191", Uparrow: "\u21D1", uparrow: "\u2191", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", UpDownArrow: "\u2195", Updownarrow: "\u21D5", updownarrow: "\u2195", UpEquilibrium: "\u296E", upharpoonleft: "\u21BF", upharpoonright: "\u21BE", uplus: "\u228E", UpperLeftArrow: "\u2196", UpperRightArrow: "\u2197", Upsi: "\u03D2", upsi: "\u03C5", upsih: "\u03D2", Upsilon: "\u03A5", upsilon: "\u03C5", UpTee: "\u22A5", UpTeeArrow: "\u21A5", upuparrows: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", Uring: "\u016E", uring: "\u016F", urtri: "\u25F9", Uscr: "\u{1D4B0}", uscr: "\u{1D4CA}", utdot: "\u22F0", Utilde: "\u0168", utilde: "\u0169", utri: "\u25B5", utrif: "\u25B4", uuarr: "\u21C8", Uuml: "\xDC", uuml: "\xFC", uwangle: "\u29A7", vangrt: "\u299C", varepsilon: "\u03F5", varkappa: "\u03F0", varnothing: "\u2205", varphi: "\u03D5", varpi: "\u03D6", varpropto: "\u221D", vArr: "\u21D5", varr: "\u2195", varrho: "\u03F1", varsigma: "\u03C2", varsubsetneq: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vartheta: "\u03D1", vartriangleleft: "\u22B2", vartriangleright: "\u22B3", Vbar: "\u2AEB", vBar: "\u2AE8", vBarv: "\u2AE9", Vcy: "\u0412", vcy: "\u0432", VDash: "\u22AB", Vdash: "\u22A9", vDash: "\u22A8", vdash: "\u22A2", Vdashl: "\u2AE6", Vee: "\u22C1", vee: "\u2228", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", Verbar: "\u2016", verbar: "|", Vert: "\u2016", vert: "|", VerticalBar: "\u2223", VerticalLine: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", VeryThinSpace: "\u200A", Vfr: "\u{1D519}", vfr: "\u{1D533}", vltri: "\u22B2", vnsub: "\u2282\u20D2", vnsup: "\u2283\u20D2", Vopf: "\u{1D54D}", vopf: "\u{1D567}", vprop: "\u221D", vrtri: "\u22B3", Vscr: "\u{1D4B1}", vscr: "\u{1D4CB}", vsubnE: "\u2ACB\uFE00", vsubne: "\u228A\uFE00", vsupnE: "\u2ACC\uFE00", vsupne: "\u228B\uFE00", Vvdash: "\u22AA", vzigzag: "\u299A", Wcirc: "\u0174", wcirc: "\u0175", wedbar: "\u2A5F", Wedge: "\u22C0", wedge: "\u2227", wedgeq: "\u2259", weierp: "\u2118", Wfr: "\u{1D51A}", wfr: "\u{1D534}", Wopf: "\u{1D54E}", wopf: "\u{1D568}", wp: "\u2118", wr: "\u2240", wreath: "\u2240", Wscr: "\u{1D4B2}", wscr: "\u{1D4CC}", xcap: "\u22C2", xcirc: "\u25EF", xcup: "\u22C3", xdtri: "\u25BD", Xfr: "\u{1D51B}", xfr: "\u{1D535}", xhArr: "\u27FA", xharr: "\u27F7", Xi: "\u039E", xi: "\u03BE", xlArr: "\u27F8", xlarr: "\u27F5", xmap: "\u27FC", xnis: "\u22FB", xodot: "\u2A00", Xopf: "\u{1D54F}", xopf: "\u{1D569}", xoplus: "\u2A01", xotime: "\u2A02", xrArr: "\u27F9", xrarr: "\u27F6", Xscr: "\u{1D4B3}", xscr: "\u{1D4CD}", xsqcup: "\u2A06", xuplus: "\u2A04", xutri: "\u25B3", xvee: "\u22C1", xwedge: "\u22C0", Yacute: "\xDD", yacute: "\xFD", YAcy: "\u042F", yacy: "\u044F", Ycirc: "\u0176", ycirc: "\u0177", Ycy: "\u042B", ycy: "\u044B", yen: "\xA5", Yfr: "\u{1D51C}", yfr: "\u{1D536}", YIcy: "\u0407", yicy: "\u0457", Yopf: "\u{1D550}", yopf: "\u{1D56A}", Yscr: "\u{1D4B4}", yscr: "\u{1D4CE}", YUcy: "\u042E", yucy: "\u044E", Yuml: "\u0178", yuml: "\xFF", Zacute: "\u0179", zacute: "\u017A", Zcaron: "\u017D", zcaron: "\u017E", Zcy: "\u0417", zcy: "\u0437", Zdot: "\u017B", zdot: "\u017C", zeetrf: "\u2128", ZeroWidthSpace: "\u200B", Zeta: "\u0396", zeta: "\u03B6", Zfr: "\u2128", zfr: "\u{1D537}", ZHcy: "\u0416", zhcy: "\u0436", zigrarr: "\u21DD", Zopf: "\u2124", zopf: "\u{1D56B}", Zscr: "\u{1D4B5}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" }, e4.NGSP_UNICODE = "\uE500", e4.NAMED_ENTITIES.ngsp = e4.NGSP_UNICODE;
}(jc), Object.defineProperty(Mc, "__esModule", { value: true });
var Uc = jc;
var Gc = class {
  constructor() {
    let { closedByChildren: e4, implicitNamespacePrefix: t2, contentType: r2 = Uc.TagContentType.PARSABLE_DATA, closedByParent: n2 = false, isVoid: i2 = false, ignoreFirstLf: s2 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    this.closedByChildren = {}, this.closedByParent = false, this.canSelfClose = false, e4 && e4.length > 0 && e4.forEach((e5) => this.closedByChildren[e5] = true), this.isVoid = i2, this.closedByParent = n2 || i2, this.implicitNamespacePrefix = t2 || null, this.contentType = r2, this.ignoreFirstLf = s2;
  }
  isClosedByChild(e4) {
    return this.isVoid || e4.toLowerCase() in this.closedByChildren;
  }
};
var Vc;
var Xc;
Mc.HtmlTagDefinition = Gc, Mc.getHtmlTagDefinition = function(e4) {
  return Xc || (Vc = new Gc(), Xc = { base: new Gc({ isVoid: true }), meta: new Gc({ isVoid: true }), area: new Gc({ isVoid: true }), embed: new Gc({ isVoid: true }), link: new Gc({ isVoid: true }), img: new Gc({ isVoid: true }), input: new Gc({ isVoid: true }), param: new Gc({ isVoid: true }), hr: new Gc({ isVoid: true }), br: new Gc({ isVoid: true }), source: new Gc({ isVoid: true }), track: new Gc({ isVoid: true }), wbr: new Gc({ isVoid: true }), p: new Gc({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new Gc({ closedByChildren: ["tbody", "tfoot"] }), tbody: new Gc({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new Gc({ closedByChildren: ["tbody"], closedByParent: true }), tr: new Gc({ closedByChildren: ["tr"], closedByParent: true }), td: new Gc({ closedByChildren: ["td", "th"], closedByParent: true }), th: new Gc({ closedByChildren: ["td", "th"], closedByParent: true }), col: new Gc({ isVoid: true }), svg: new Gc({ implicitNamespacePrefix: "svg" }), math: new Gc({ implicitNamespacePrefix: "math" }), li: new Gc({ closedByChildren: ["li"], closedByParent: true }), dt: new Gc({ closedByChildren: ["dt", "dd"] }), dd: new Gc({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new Gc({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new Gc({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new Gc({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new Gc({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new Gc({ closedByChildren: ["optgroup"], closedByParent: true }), option: new Gc({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new Gc({ ignoreFirstLf: true }), listing: new Gc({ ignoreFirstLf: true }), style: new Gc({ contentType: Uc.TagContentType.RAW_TEXT }), script: new Gc({ contentType: Uc.TagContentType.RAW_TEXT }), title: new Gc({ contentType: Uc.TagContentType.ESCAPABLE_RAW_TEXT }), textarea: new Gc({ contentType: Uc.TagContentType.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), Xc[e4] || Vc;
};
var Hc = {};
var zc = {};
var Wc = {};
Object.defineProperty(Wc, "__esModule", { value: true });
Wc.AstPath = class {
  constructor(e4) {
    let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : -1;
    this.path = e4, this.position = t2;
  }
  get empty() {
    return !this.path || !this.path.length;
  }
  get head() {
    return this.path[0];
  }
  get tail() {
    return this.path[this.path.length - 1];
  }
  parentOf(e4) {
    return e4 && this.path[this.path.indexOf(e4) - 1];
  }
  childOf(e4) {
    return this.path[this.path.indexOf(e4) + 1];
  }
  first(e4) {
    for (let t2 = this.path.length - 1; t2 >= 0; t2--) {
      let r2 = this.path[t2];
      if (r2 instanceof e4)
        return r2;
    }
  }
  push(e4) {
    this.path.push(e4);
  }
  pop() {
    return this.path.pop();
  }
}, Object.defineProperty(zc, "__esModule", { value: true });
var Yc = Wc;
zc.Text = class {
  constructor(e4, t2, r2) {
    this.value = e4, this.sourceSpan = t2, this.i18n = r2, this.type = "text";
  }
  visit(e4, t2) {
    return e4.visitText(this, t2);
  }
};
zc.CDATA = class {
  constructor(e4, t2) {
    this.value = e4, this.sourceSpan = t2, this.type = "cdata";
  }
  visit(e4, t2) {
    return e4.visitCdata(this, t2);
  }
};
zc.Expansion = class {
  constructor(e4, t2, r2, n2, i2, s2) {
    this.switchValue = e4, this.type = t2, this.cases = r2, this.sourceSpan = n2, this.switchValueSourceSpan = i2, this.i18n = s2;
  }
  visit(e4, t2) {
    return e4.visitExpansion(this, t2);
  }
};
zc.ExpansionCase = class {
  constructor(e4, t2, r2, n2, i2) {
    this.value = e4, this.expression = t2, this.sourceSpan = r2, this.valueSourceSpan = n2, this.expSourceSpan = i2;
  }
  visit(e4, t2) {
    return e4.visitExpansionCase(this, t2);
  }
};
zc.Attribute = class {
  constructor(e4, t2, r2) {
    let n2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, s2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null;
    this.name = e4, this.value = t2, this.sourceSpan = r2, this.valueSpan = n2, this.nameSpan = i2, this.i18n = s2, this.type = "attribute";
  }
  visit(e4, t2) {
    return e4.visitAttribute(this, t2);
  }
};
var Qc = class {
  constructor(e4, t2, r2, n2) {
    let i2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : null, s2 = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, o2 = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, a2 = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null;
    this.name = e4, this.attrs = t2, this.children = r2, this.sourceSpan = n2, this.startSourceSpan = i2, this.endSourceSpan = s2, this.nameSpan = o2, this.i18n = a2, this.type = "element";
  }
  visit(e4, t2) {
    return e4.visitElement(this, t2);
  }
};
zc.Element = Qc;
zc.Comment = class {
  constructor(e4, t2) {
    this.value = e4, this.sourceSpan = t2, this.type = "comment";
  }
  visit(e4, t2) {
    return e4.visitComment(this, t2);
  }
};
function Jc(e4, t2) {
  let r2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
  const n2 = [], i2 = e4.visit ? (t3) => e4.visit(t3, r2) || t3.visit(e4, r2) : (t3) => t3.visit(e4, r2);
  return t2.forEach((e5) => {
    const t3 = i2(e5);
    t3 && n2.push(t3);
  }), n2;
}
zc.DocType = class {
  constructor(e4, t2) {
    this.value = e4, this.sourceSpan = t2, this.type = "docType";
  }
  visit(e4, t2) {
    return e4.visitDocType(this, t2);
  }
}, zc.visitAll = Jc;
var Zc = class {
  constructor() {
  }
  visitElement(e4, t2) {
    this.visitChildren(t2, (t3) => {
      t3(e4.attrs), t3(e4.children);
    });
  }
  visitAttribute(e4, t2) {
  }
  visitText(e4, t2) {
  }
  visitCdata(e4, t2) {
  }
  visitComment(e4, t2) {
  }
  visitDocType(e4, t2) {
  }
  visitExpansion(e4, t2) {
    return this.visitChildren(t2, (t3) => {
      t3(e4.cases);
    });
  }
  visitExpansionCase(e4, t2) {
  }
  visitChildren(e4, t2) {
    let r2 = [], n2 = this;
    return t2(function(t3) {
      t3 && r2.push(Jc(n2, t3, e4));
    }), Array.prototype.concat.apply([], r2);
  }
};
function Kc(e4) {
  const t2 = e4.sourceSpan.start.offset;
  let r2 = e4.sourceSpan.end.offset;
  return e4 instanceof Qc && (e4.endSourceSpan ? r2 = e4.endSourceSpan.end.offset : e4.children && e4.children.length && (r2 = Kc(e4.children[e4.children.length - 1]).end)), { start: t2, end: r2 };
}
zc.RecursiveVisitor = Zc, zc.findNode = function(e4, t2) {
  const r2 = [], n2 = new class extends Zc {
    visit(e5, n3) {
      const i2 = Kc(e5);
      if (!(i2.start <= t2 && t2 < i2.end))
        return true;
      r2.push(e5);
    }
  }();
  return Jc(n2, e4), new Yc.AstPath(r2, t2);
};
var el = {};
var tl = {};
var rl = {};
Object.defineProperty(rl, "__esModule", { value: true }), rl.assertArrayOfStrings = function(e4, t2) {
  if (t2 != null) {
    if (!Array.isArray(t2))
      throw new Error("Expected '".concat(e4, "' to be an array of strings."));
    for (let r2 = 0; r2 < t2.length; r2 += 1)
      if (typeof t2[r2] != "string")
        throw new Error("Expected '".concat(e4, "' to be an array of strings."));
  }
};
var nl = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
rl.assertInterpolationSymbols = function(e4, t2) {
  if (!(t2 == null || Array.isArray(t2) && t2.length == 2))
    throw new Error("Expected '".concat(e4, "' to be an array, [start, end]."));
  if (t2 != null) {
    const e5 = t2[0], r2 = t2[1];
    nl.forEach((t3) => {
      if (t3.test(e5) || t3.test(r2))
        throw new Error("['".concat(e5, "', '").concat(r2, "'] contains unusable interpolation symbol."));
    });
  }
}, function(e4) {
  Object.defineProperty(e4, "__esModule", { value: true });
  const t2 = rl;
  class r2 {
    constructor(e5, t3) {
      this.start = e5, this.end = t3;
    }
    static fromArray(n2) {
      return n2 ? (t2.assertInterpolationSymbols("interpolation", n2), new r2(n2[0], n2[1])) : e4.DEFAULT_INTERPOLATION_CONFIG;
    }
  }
  e4.InterpolationConfig = r2, e4.DEFAULT_INTERPOLATION_CONFIG = new r2("{{", "}}");
}(tl), function(e4) {
  Object.defineProperty(e4, "__esModule", { value: true });
  const n2 = r, i2 = t, s2 = tl, o2 = jc;
  var a2;
  !function(e5) {
    e5[e5.TAG_OPEN_START = 0] = "TAG_OPEN_START", e5[e5.TAG_OPEN_END = 1] = "TAG_OPEN_END", e5[e5.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", e5[e5.TAG_CLOSE = 3] = "TAG_CLOSE", e5[e5.TEXT = 4] = "TEXT", e5[e5.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", e5[e5.RAW_TEXT = 6] = "RAW_TEXT", e5[e5.COMMENT_START = 7] = "COMMENT_START", e5[e5.COMMENT_END = 8] = "COMMENT_END", e5[e5.CDATA_START = 9] = "CDATA_START", e5[e5.CDATA_END = 10] = "CDATA_END", e5[e5.ATTR_NAME = 11] = "ATTR_NAME", e5[e5.ATTR_QUOTE = 12] = "ATTR_QUOTE", e5[e5.ATTR_VALUE = 13] = "ATTR_VALUE", e5[e5.DOC_TYPE_START = 14] = "DOC_TYPE_START", e5[e5.DOC_TYPE_END = 15] = "DOC_TYPE_END", e5[e5.EXPANSION_FORM_START = 16] = "EXPANSION_FORM_START", e5[e5.EXPANSION_CASE_VALUE = 17] = "EXPANSION_CASE_VALUE", e5[e5.EXPANSION_CASE_EXP_START = 18] = "EXPANSION_CASE_EXP_START", e5[e5.EXPANSION_CASE_EXP_END = 19] = "EXPANSION_CASE_EXP_END", e5[e5.EXPANSION_FORM_END = 20] = "EXPANSION_FORM_END", e5[e5.EOF = 21] = "EOF";
  }(a2 = e4.TokenType || (e4.TokenType = {}));
  class u2 {
    constructor(e5, t2, r2) {
      this.type = e5, this.parts = t2, this.sourceSpan = r2;
    }
  }
  e4.Token = u2;
  class c2 extends i2.ParseError {
    constructor(e5, t2, r2) {
      super(r2, e5), this.tokenType = t2;
    }
  }
  e4.TokenError = c2;
  class l2 {
    constructor(e5, t2) {
      this.tokens = e5, this.errors = t2;
    }
  }
  e4.TokenizeResult = l2, e4.tokenize = function(e5, t2, r2) {
    let n3 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return new f2(new i2.ParseSourceFile(e5, t2), r2, n3).tokenize();
  };
  const p2 = /\r\n?/g;
  function h2(e5) {
    const t2 = e5 === n2.$EOF ? "EOF" : String.fromCharCode(e5);
    return 'Unexpected character "'.concat(t2, '"');
  }
  function D2(e5) {
    return 'Unknown entity "'.concat(e5, '" - use the "&#<decimal>;" or  "&#x<hex>;" syntax');
  }
  class d2 {
    constructor(e5) {
      this.error = e5;
    }
  }
  class f2 {
    constructor(e5, t2, r2) {
      this._getTagContentType = t2, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this._tokenizeIcu = r2.tokenizeExpansionForms || false, this._interpolationConfig = r2.interpolationConfig || s2.DEFAULT_INTERPOLATION_CONFIG, this._leadingTriviaCodePoints = r2.leadingTriviaChars && r2.leadingTriviaChars.map((e6) => e6.codePointAt(0) || 0), this._canSelfClose = r2.canSelfClose || false, this._allowHtmComponentClosingTags = r2.allowHtmComponentClosingTags || false;
      const n3 = r2.range || { endPos: e5.content.length, startPos: 0, startLine: 0, startCol: 0 };
      this._cursor = r2.escapedString ? new S2(e5, n3) : new b2(e5, n3);
      try {
        this._cursor.init();
      } catch (e6) {
        this.handleError(e6);
      }
    }
    _processCarriageReturns(e5) {
      return e5.replace(p2, "\n");
    }
    tokenize() {
      for (; this._cursor.peek() !== n2.$EOF; ) {
        const e5 = this._cursor.clone();
        try {
          if (this._attemptCharCode(n2.$LT))
            if (this._attemptCharCode(n2.$BANG))
              this._attemptStr("[CDATA[") ? this._consumeCdata(e5) : this._attemptStr("--") ? this._consumeComment(e5) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e5) : this._consumeBogusComment(e5);
            else if (this._attemptCharCode(n2.$SLASH))
              this._consumeTagClose(e5);
            else {
              const t2 = this._cursor.clone();
              this._attemptCharCode(n2.$QUESTION) ? (this._cursor = t2, this._consumeBogusComment(e5)) : this._consumeTagOpen(e5);
            }
          else
            this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText();
        } catch (e6) {
          this.handleError(e6);
        }
      }
      return this._beginToken(a2.EOF), this._endToken([]), new l2(function(e5) {
        const t2 = [];
        let r2;
        for (let n3 = 0; n3 < e5.length; n3++) {
          const i3 = e5[n3];
          r2 && r2.type == a2.TEXT && i3.type == a2.TEXT ? (r2.parts[0] += i3.parts[0], r2.sourceSpan.end = i3.sourceSpan.end) : (r2 = i3, t2.push(r2));
        }
        return t2;
      }(this.tokens), this.errors);
    }
    _tokenizeExpansionForm() {
      if (this.isExpansionFormStart())
        return this._consumeExpansionFormStart(), true;
      if (((e5 = this._cursor.peek()) === n2.$EQ || n2.isAsciiLetter(e5) || n2.isDigit(e5)) && this._isInExpansionForm())
        return this._consumeExpansionCaseStart(), true;
      var e5;
      if (this._cursor.peek() === n2.$RBRACE) {
        if (this._isInExpansionCase())
          return this._consumeExpansionCaseEnd(), true;
        if (this._isInExpansionForm())
          return this._consumeExpansionFormEnd(), true;
      }
      return false;
    }
    _beginToken(e5) {
      let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
      this._currentTokenStart = t2, this._currentTokenType = e5;
    }
    _endToken(e5) {
      let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._cursor.clone();
      if (this._currentTokenStart === null)
        throw new c2("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(t2));
      if (this._currentTokenType === null)
        throw new c2("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
      const r2 = new u2(this._currentTokenType, e5, this._cursor.getSpan(this._currentTokenStart, this._leadingTriviaCodePoints));
      return this.tokens.push(r2), this._currentTokenStart = null, this._currentTokenType = null, r2;
    }
    _createError(e5, t2) {
      this._isInExpansionForm() && (e5 += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
      const r2 = new c2(e5, this._currentTokenType, t2);
      return this._currentTokenStart = null, this._currentTokenType = null, new d2(r2);
    }
    handleError(e5) {
      if (e5 instanceof T2 && (e5 = this._createError(e5.msg, this._cursor.getSpan(e5.cursor))), !(e5 instanceof d2))
        throw e5;
      this.errors.push(e5.error);
    }
    _attemptCharCode(e5) {
      return this._cursor.peek() === e5 && (this._cursor.advance(), true);
    }
    _attemptCharCodeCaseInsensitive(e5) {
      return t2 = this._cursor.peek(), r2 = e5, y2(t2) == y2(r2) && (this._cursor.advance(), true);
      var t2, r2;
    }
    _requireCharCode(e5) {
      const t2 = this._cursor.clone();
      if (!this._attemptCharCode(e5))
        throw this._createError(h2(this._cursor.peek()), this._cursor.getSpan(t2));
    }
    _attemptStr(e5) {
      const t2 = e5.length;
      if (this._cursor.charsLeft() < t2)
        return false;
      const r2 = this._cursor.clone();
      for (let n3 = 0; n3 < t2; n3++)
        if (!this._attemptCharCode(e5.charCodeAt(n3)))
          return this._cursor = r2, false;
      return true;
    }
    _attemptStrCaseInsensitive(e5) {
      for (let t2 = 0; t2 < e5.length; t2++)
        if (!this._attemptCharCodeCaseInsensitive(e5.charCodeAt(t2)))
          return false;
      return true;
    }
    _requireStr(e5) {
      const t2 = this._cursor.clone();
      if (!this._attemptStr(e5))
        throw this._createError(h2(this._cursor.peek()), this._cursor.getSpan(t2));
    }
    _requireStrCaseInsensitive(e5) {
      const t2 = this._cursor.clone();
      if (!this._attemptStrCaseInsensitive(e5))
        throw this._createError(h2(this._cursor.peek()), this._cursor.getSpan(t2));
    }
    _attemptCharCodeUntilFn(e5) {
      for (; !e5(this._cursor.peek()); )
        this._cursor.advance();
    }
    _requireCharCodeUntilFn(e5, t2) {
      const r2 = this._cursor.clone();
      this._attemptCharCodeUntilFn(e5);
      if (this._cursor.clone().diff(r2) < t2)
        throw this._createError(h2(this._cursor.peek()), this._cursor.getSpan(r2));
    }
    _attemptUntilChar(e5) {
      for (; this._cursor.peek() !== e5; )
        this._cursor.advance();
    }
    _readChar(e5) {
      if (e5 && this._cursor.peek() === n2.$AMPERSAND)
        return this._decodeEntity();
      {
        const e6 = String.fromCodePoint(this._cursor.peek());
        return this._cursor.advance(), e6;
      }
    }
    _decodeEntity() {
      const e5 = this._cursor.clone();
      if (this._cursor.advance(), !this._attemptCharCode(n2.$HASH)) {
        const t2 = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(C2), this._cursor.peek() != n2.$SEMICOLON)
          return this._cursor = t2, "&";
        const r2 = this._cursor.getChars(t2);
        this._cursor.advance();
        const i3 = o2.NAMED_ENTITIES[r2];
        if (!i3)
          throw this._createError(D2(r2), this._cursor.getSpan(e5));
        return i3;
      }
      {
        const t2 = this._attemptCharCode(n2.$x) || this._attemptCharCode(n2.$X), r2 = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(E2), this._cursor.peek() != n2.$SEMICOLON)
          throw this._createError(h2(this._cursor.peek()), this._cursor.getSpan());
        const i3 = this._cursor.getChars(r2);
        this._cursor.advance();
        try {
          const e6 = parseInt(i3, t2 ? 16 : 10);
          return String.fromCharCode(e6);
        } catch (t3) {
          throw this._createError(D2(this._cursor.getChars(e5)), this._cursor.getSpan());
        }
      }
    }
    _consumeRawText(e5, t2) {
      this._beginToken(e5 ? a2.ESCAPABLE_RAW_TEXT : a2.RAW_TEXT);
      const r2 = [];
      for (; ; ) {
        const n3 = this._cursor.clone(), i3 = t2();
        if (this._cursor = n3, i3)
          break;
        r2.push(this._readChar(e5));
      }
      return this._endToken([this._processCarriageReturns(r2.join(""))]);
    }
    _consumeComment(e5) {
      this._beginToken(a2.COMMENT_START, e5), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(a2.COMMENT_END), this._requireStr("-->"), this._endToken([]);
    }
    _consumeBogusComment(e5) {
      this._beginToken(a2.COMMENT_START, e5), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === n2.$GT), this._beginToken(a2.COMMENT_END), this._cursor.advance(), this._endToken([]);
    }
    _consumeCdata(e5) {
      this._beginToken(a2.CDATA_START, e5), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(a2.CDATA_END), this._requireStr("]]>"), this._endToken([]);
    }
    _consumeDocType(e5) {
      this._beginToken(a2.DOC_TYPE_START, e5), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === n2.$GT), this._beginToken(a2.DOC_TYPE_END), this._cursor.advance(), this._endToken([]);
    }
    _consumePrefixAndName() {
      const e5 = this._cursor.clone();
      let t2 = "";
      for (; this._cursor.peek() !== n2.$COLON && !(((r2 = this._cursor.peek()) < n2.$a || n2.$z < r2) && (r2 < n2.$A || n2.$Z < r2) && (r2 < n2.$0 || r2 > n2.$9)); )
        this._cursor.advance();
      var r2;
      let i3;
      this._cursor.peek() === n2.$COLON ? (t2 = this._cursor.getChars(e5), this._cursor.advance(), i3 = this._cursor.clone()) : i3 = e5, this._requireCharCodeUntilFn(m2, t2 === "" ? 0 : 1);
      return [t2, this._cursor.getChars(i3)];
    }
    _consumeTagOpen(e5) {
      let t2, r2, i3, s3 = this.tokens.length;
      const u3 = this._cursor.clone(), c3 = [];
      try {
        if (!n2.isAsciiLetter(this._cursor.peek()))
          throw this._createError(h2(this._cursor.peek()), this._cursor.getSpan(e5));
        for (i3 = this._consumeTagOpenStart(e5), r2 = i3.parts[0], t2 = i3.parts[1], this._attemptCharCodeUntilFn(g2); this._cursor.peek() !== n2.$SLASH && this._cursor.peek() !== n2.$GT; ) {
          const [e6, t3] = this._consumeAttributeName();
          if (this._attemptCharCodeUntilFn(g2), this._attemptCharCode(n2.$EQ)) {
            this._attemptCharCodeUntilFn(g2);
            const r3 = this._consumeAttributeValue();
            c3.push({ prefix: e6, name: t3, value: r3 });
          } else
            c3.push({ prefix: e6, name: t3 });
          this._attemptCharCodeUntilFn(g2);
        }
        this._consumeTagOpenEnd();
      } catch (t3) {
        if (t3 instanceof d2)
          return this._cursor = u3, i3 && (this.tokens.length = s3), this._beginToken(a2.TEXT, e5), void this._endToken(["<"]);
        throw t3;
      }
      if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === a2.TAG_OPEN_END_VOID)
        return;
      const l3 = this._getTagContentType(t2, r2, this._fullNameStack.length > 0, c3);
      this._handleFullNameStackForTagOpen(r2, t2), l3 === o2.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(r2, t2, false) : l3 === o2.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(r2, t2, true);
    }
    _consumeRawTextWithTagClose(e5, t2, r2) {
      this._consumeRawText(r2, () => !!this._attemptCharCode(n2.$LT) && (!!this._attemptCharCode(n2.$SLASH) && (this._attemptCharCodeUntilFn(g2), !!this._attemptStrCaseInsensitive(e5 ? "".concat(e5, ":").concat(t2) : t2) && (this._attemptCharCodeUntilFn(g2), this._attemptCharCode(n2.$GT))))), this._beginToken(a2.TAG_CLOSE), this._requireCharCodeUntilFn((e6) => e6 === n2.$GT, 3), this._cursor.advance(), this._endToken([e5, t2]), this._handleFullNameStackForTagClose(e5, t2);
    }
    _consumeTagOpenStart(e5) {
      this._beginToken(a2.TAG_OPEN_START, e5);
      const t2 = this._consumePrefixAndName();
      return this._endToken(t2);
    }
    _consumeAttributeName() {
      const e5 = this._cursor.peek();
      if (e5 === n2.$SQ || e5 === n2.$DQ)
        throw this._createError(h2(e5), this._cursor.getSpan());
      this._beginToken(a2.ATTR_NAME);
      const t2 = this._consumePrefixAndName();
      return this._endToken(t2), t2;
    }
    _consumeAttributeValue() {
      let e5;
      if (this._cursor.peek() === n2.$SQ || this._cursor.peek() === n2.$DQ) {
        this._beginToken(a2.ATTR_QUOTE);
        const t2 = this._cursor.peek();
        this._cursor.advance(), this._endToken([String.fromCodePoint(t2)]), this._beginToken(a2.ATTR_VALUE);
        const r2 = [];
        for (; this._cursor.peek() !== t2; )
          r2.push(this._readChar(true));
        e5 = this._processCarriageReturns(r2.join("")), this._endToken([e5]), this._beginToken(a2.ATTR_QUOTE), this._cursor.advance(), this._endToken([String.fromCodePoint(t2)]);
      } else {
        this._beginToken(a2.ATTR_VALUE);
        const t2 = this._cursor.clone();
        this._requireCharCodeUntilFn(m2, 1), e5 = this._processCarriageReturns(this._cursor.getChars(t2)), this._endToken([e5]);
      }
      return e5;
    }
    _consumeTagOpenEnd() {
      const e5 = this._attemptCharCode(n2.$SLASH) ? a2.TAG_OPEN_END_VOID : a2.TAG_OPEN_END;
      this._beginToken(e5), this._requireCharCode(n2.$GT), this._endToken([]);
    }
    _consumeTagClose(e5) {
      if (this._beginToken(a2.TAG_CLOSE, e5), this._attemptCharCodeUntilFn(g2), this._allowHtmComponentClosingTags && this._attemptCharCode(n2.$SLASH))
        this._attemptCharCodeUntilFn(g2), this._requireCharCode(n2.$GT), this._endToken([]);
      else {
        const [e6, t2] = this._consumePrefixAndName();
        this._attemptCharCodeUntilFn(g2), this._requireCharCode(n2.$GT), this._endToken([e6, t2]), this._handleFullNameStackForTagClose(e6, t2);
      }
    }
    _consumeExpansionFormStart() {
      this._beginToken(a2.EXPANSION_FORM_START), this._requireCharCode(n2.$LBRACE), this._endToken([]), this._expansionCaseStack.push(a2.EXPANSION_FORM_START), this._beginToken(a2.RAW_TEXT);
      const e5 = this._readUntil(n2.$COMMA);
      this._endToken([e5]), this._requireCharCode(n2.$COMMA), this._attemptCharCodeUntilFn(g2), this._beginToken(a2.RAW_TEXT);
      const t2 = this._readUntil(n2.$COMMA);
      this._endToken([t2]), this._requireCharCode(n2.$COMMA), this._attemptCharCodeUntilFn(g2);
    }
    _consumeExpansionCaseStart() {
      this._beginToken(a2.EXPANSION_CASE_VALUE);
      const e5 = this._readUntil(n2.$LBRACE).trim();
      this._endToken([e5]), this._attemptCharCodeUntilFn(g2), this._beginToken(a2.EXPANSION_CASE_EXP_START), this._requireCharCode(n2.$LBRACE), this._endToken([]), this._attemptCharCodeUntilFn(g2), this._expansionCaseStack.push(a2.EXPANSION_CASE_EXP_START);
    }
    _consumeExpansionCaseEnd() {
      this._beginToken(a2.EXPANSION_CASE_EXP_END), this._requireCharCode(n2.$RBRACE), this._endToken([]), this._attemptCharCodeUntilFn(g2), this._expansionCaseStack.pop();
    }
    _consumeExpansionFormEnd() {
      this._beginToken(a2.EXPANSION_FORM_END), this._requireCharCode(n2.$RBRACE), this._endToken([]), this._expansionCaseStack.pop();
    }
    _consumeText() {
      const e5 = this._cursor.clone();
      this._beginToken(a2.TEXT, e5);
      const t2 = [];
      do {
        this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (t2.push(this._interpolationConfig.start), this._inInterpolation = true) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (t2.push(this._interpolationConfig.end), this._inInterpolation = false) : t2.push(this._readChar(true));
      } while (!this._isTextEnd());
      this._endToken([this._processCarriageReturns(t2.join(""))]);
    }
    _isTextEnd() {
      if (this._cursor.peek() === n2.$LT || this._cursor.peek() === n2.$EOF)
        return true;
      if (this._tokenizeIcu && !this._inInterpolation) {
        if (this.isExpansionFormStart())
          return true;
        if (this._cursor.peek() === n2.$RBRACE && this._isInExpansionCase())
          return true;
      }
      return false;
    }
    _readUntil(e5) {
      const t2 = this._cursor.clone();
      return this._attemptUntilChar(e5), this._cursor.getChars(t2);
    }
    _isInExpansionCase() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === a2.EXPANSION_CASE_EXP_START;
    }
    _isInExpansionForm() {
      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === a2.EXPANSION_FORM_START;
    }
    isExpansionFormStart() {
      if (this._cursor.peek() !== n2.$LBRACE)
        return false;
      if (this._interpolationConfig) {
        const e5 = this._cursor.clone(), t2 = this._attemptStr(this._interpolationConfig.start);
        return this._cursor = e5, !t2;
      }
      return true;
    }
    _handleFullNameStackForTagOpen(e5, t2) {
      const r2 = o2.mergeNsAndName(e5, t2);
      this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] !== r2 || this._fullNameStack.push(r2);
    }
    _handleFullNameStackForTagClose(e5, t2) {
      const r2 = o2.mergeNsAndName(e5, t2);
      this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === r2 && this._fullNameStack.pop();
    }
  }
  function g2(e5) {
    return !n2.isWhitespace(e5) || e5 === n2.$EOF;
  }
  function m2(e5) {
    return n2.isWhitespace(e5) || e5 === n2.$GT || e5 === n2.$SLASH || e5 === n2.$SQ || e5 === n2.$DQ || e5 === n2.$EQ;
  }
  function E2(e5) {
    return e5 == n2.$SEMICOLON || e5 == n2.$EOF || !n2.isAsciiHexDigit(e5);
  }
  function C2(e5) {
    return e5 == n2.$SEMICOLON || e5 == n2.$EOF || !n2.isAsciiLetter(e5);
  }
  function y2(e5) {
    return e5 >= n2.$a && e5 <= n2.$z ? e5 - n2.$a + n2.$A : e5;
  }
  class b2 {
    constructor(e5, t2) {
      if (e5 instanceof b2)
        this.file = e5.file, this.input = e5.input, this.end = e5.end, this.state = Object.assign({}, e5.state);
      else {
        if (!t2)
          throw new Error("Programming error: the range argument must be provided with a file argument.");
        this.file = e5, this.input = e5.content, this.end = t2.endPos, this.state = { peek: -1, offset: t2.startPos, line: t2.startLine, column: t2.startCol };
      }
    }
    clone() {
      return new b2(this);
    }
    peek() {
      return this.state.peek;
    }
    charsLeft() {
      return this.end - this.state.offset;
    }
    diff(e5) {
      return this.state.offset - e5.state.offset;
    }
    advance() {
      this.advanceState(this.state);
    }
    init() {
      this.updatePeek(this.state);
    }
    getSpan(e5, t2) {
      if (e5 = e5 || this, t2)
        for (e5 = e5.clone(); this.diff(e5) > 0 && t2.indexOf(e5.peek()) !== -1; )
          e5.advance();
      return new i2.ParseSourceSpan(new i2.ParseLocation(e5.file, e5.state.offset, e5.state.line, e5.state.column), new i2.ParseLocation(this.file, this.state.offset, this.state.line, this.state.column));
    }
    getChars(e5) {
      return this.input.substring(e5.state.offset, this.state.offset);
    }
    charAt(e5) {
      return this.input.charCodeAt(e5);
    }
    advanceState(e5) {
      if (e5.offset >= this.end)
        throw this.state = e5, new T2('Unexpected character "EOF"', this);
      const t2 = this.charAt(e5.offset);
      t2 === n2.$LF ? (e5.line++, e5.column = 0) : n2.isNewLine(t2) || e5.column++, e5.offset++, this.updatePeek(e5);
    }
    updatePeek(e5) {
      e5.peek = e5.offset >= this.end ? n2.$EOF : this.charAt(e5.offset);
    }
  }
  class S2 extends b2 {
    constructor(e5, t2) {
      e5 instanceof S2 ? (super(e5), this.internalState = Object.assign({}, e5.internalState)) : (super(e5, t2), this.internalState = this.state);
    }
    advance() {
      this.state = this.internalState, super.advance(), this.processEscapeSequence();
    }
    init() {
      super.init(), this.processEscapeSequence();
    }
    clone() {
      return new S2(this);
    }
    getChars(e5) {
      const t2 = e5.clone();
      let r2 = "";
      for (; t2.internalState.offset < this.internalState.offset; )
        r2 += String.fromCodePoint(t2.peek()), t2.advance();
      return r2;
    }
    processEscapeSequence() {
      const e5 = () => this.internalState.peek;
      if (e5() === n2.$BACKSLASH)
        if (this.internalState = Object.assign({}, this.state), this.advanceState(this.internalState), e5() === n2.$n)
          this.state.peek = n2.$LF;
        else if (e5() === n2.$r)
          this.state.peek = n2.$CR;
        else if (e5() === n2.$v)
          this.state.peek = n2.$VTAB;
        else if (e5() === n2.$t)
          this.state.peek = n2.$TAB;
        else if (e5() === n2.$b)
          this.state.peek = n2.$BSPACE;
        else if (e5() === n2.$f)
          this.state.peek = n2.$FF;
        else if (e5() === n2.$u)
          if (this.advanceState(this.internalState), e5() === n2.$LBRACE) {
            this.advanceState(this.internalState);
            const t2 = this.clone();
            let r2 = 0;
            for (; e5() !== n2.$RBRACE; )
              this.advanceState(this.internalState), r2++;
            this.state.peek = this.decodeHexDigits(t2, r2);
          } else {
            const e6 = this.clone();
            this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(e6, 4);
          }
        else if (e5() === n2.$x) {
          this.advanceState(this.internalState);
          const e6 = this.clone();
          this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(e6, 2);
        } else if (n2.isOctalDigit(e5())) {
          let t2 = "", r2 = 0, i3 = this.clone();
          for (; n2.isOctalDigit(e5()) && r2 < 3; )
            i3 = this.clone(), t2 += String.fromCodePoint(e5()), this.advanceState(this.internalState), r2++;
          this.state.peek = parseInt(t2, 8), this.internalState = i3.internalState;
        } else
          n2.isNewLine(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
    }
    decodeHexDigits(e5, t2) {
      const r2 = this.input.substr(e5.internalState.offset, t2), n3 = parseInt(r2, 16);
      if (isNaN(n3))
        throw e5.state = e5.internalState, new T2("Invalid hexadecimal escape sequence", e5);
      return n3;
    }
  }
  class T2 {
    constructor(e5, t2) {
      this.msg = e5, this.cursor = t2;
    }
  }
  e4.CursorError = T2;
}(el), Object.defineProperty(Hc, "__esModule", { value: true });
var il = t;
var sl = zc;
var ol = el;
var al = jc;
var ul = class extends il.ParseError {
  constructor(e4, t2, r2) {
    super(t2, r2), this.elementName = e4;
  }
  static create(e4, t2, r2) {
    return new ul(e4, t2, r2);
  }
};
Hc.TreeError = ul;
var cl = class {
  constructor(e4, t2) {
    this.rootNodes = e4, this.errors = t2;
  }
};
Hc.ParseTreeResult = cl;
Hc.Parser = class {
  constructor(e4) {
    this.getTagDefinition = e4;
  }
  parse(e4, t2, r2) {
    let n2 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], i2 = arguments.length > 4 ? arguments[4] : void 0;
    const s2 = (e5) => function(t3) {
      for (var r3 = arguments.length, n3 = new Array(r3 > 1 ? r3 - 1 : 0), i3 = 1; i3 < r3; i3++)
        n3[i3 - 1] = arguments[i3];
      return e5(t3.toLowerCase(), ...n3);
    }, o2 = n2 ? this.getTagDefinition : s2(this.getTagDefinition), a2 = (e5) => o2(e5).contentType, u2 = n2 ? i2 : s2(i2), c2 = i2 ? (e5, t3, r3, n3) => {
      const i3 = u2(e5, t3, r3, n3);
      return i3 !== void 0 ? i3 : a2(e5);
    } : a2, l2 = ol.tokenize(e4, t2, c2, r2), p2 = r2 && r2.canSelfClose || false, h2 = r2 && r2.allowHtmComponentClosingTags || false, D2 = new ll(l2.tokens, o2, p2, h2, n2).build();
    return new cl(D2.rootNodes, l2.errors.concat(D2.errors));
  }
};
var ll = class {
  constructor(e4, t2, r2, n2, i2) {
    this.tokens = e4, this.getTagDefinition = t2, this.canSelfClose = r2, this.allowHtmComponentClosingTags = n2, this.isTagNameCaseSensitive = i2, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance();
  }
  build() {
    for (; this._peek.type !== ol.TokenType.EOF; )
      this._peek.type === ol.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === ol.TokenType.TAG_CLOSE ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === ol.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === ol.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === ol.TokenType.TEXT || this._peek.type === ol.TokenType.RAW_TEXT || this._peek.type === ol.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === ol.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === ol.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
    return new cl(this._rootNodes, this._errors);
  }
  _advance() {
    const e4 = this._peek;
    return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e4;
  }
  _advanceIf(e4) {
    return this._peek.type === e4 ? this._advance() : null;
  }
  _consumeCdata(e4) {
    const t2 = this._advance(), r2 = this._getText(t2), n2 = this._advanceIf(ol.TokenType.CDATA_END);
    this._addToParent(new sl.CDATA(r2, new il.ParseSourceSpan(e4.sourceSpan.start, (n2 || t2).sourceSpan.end)));
  }
  _consumeComment(e4) {
    const t2 = this._advanceIf(ol.TokenType.RAW_TEXT), r2 = this._advanceIf(ol.TokenType.COMMENT_END), n2 = t2 != null ? t2.parts[0].trim() : null, i2 = new il.ParseSourceSpan(e4.sourceSpan.start, (r2 || t2 || e4).sourceSpan.end);
    this._addToParent(new sl.Comment(n2, i2));
  }
  _consumeDocType(e4) {
    const t2 = this._advanceIf(ol.TokenType.RAW_TEXT), r2 = this._advanceIf(ol.TokenType.DOC_TYPE_END), n2 = t2 != null ? t2.parts[0].trim() : null, i2 = new il.ParseSourceSpan(e4.sourceSpan.start, (r2 || t2 || e4).sourceSpan.end);
    this._addToParent(new sl.DocType(n2, i2));
  }
  _consumeExpansion(e4) {
    const t2 = this._advance(), r2 = this._advance(), n2 = [];
    for (; this._peek.type === ol.TokenType.EXPANSION_CASE_VALUE; ) {
      const e5 = this._parseExpansionCase();
      if (!e5)
        return;
      n2.push(e5);
    }
    if (this._peek.type !== ol.TokenType.EXPANSION_FORM_END)
      return void this._errors.push(ul.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
    const i2 = new il.ParseSourceSpan(e4.sourceSpan.start, this._peek.sourceSpan.end);
    this._addToParent(new sl.Expansion(t2.parts[0], r2.parts[0], n2, i2, t2.sourceSpan)), this._advance();
  }
  _parseExpansionCase() {
    const e4 = this._advance();
    if (this._peek.type !== ol.TokenType.EXPANSION_CASE_EXP_START)
      return this._errors.push(ul.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
    const t2 = this._advance(), r2 = this._collectExpansionExpTokens(t2);
    if (!r2)
      return null;
    const n2 = this._advance();
    r2.push(new ol.Token(ol.TokenType.EOF, [], n2.sourceSpan));
    const i2 = new ll(r2, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
    if (i2.errors.length > 0)
      return this._errors = this._errors.concat(i2.errors), null;
    const s2 = new il.ParseSourceSpan(e4.sourceSpan.start, n2.sourceSpan.end), o2 = new il.ParseSourceSpan(t2.sourceSpan.start, n2.sourceSpan.end);
    return new sl.ExpansionCase(e4.parts[0], i2.rootNodes, s2, e4.sourceSpan, o2);
  }
  _collectExpansionExpTokens(e4) {
    const t2 = [], r2 = [ol.TokenType.EXPANSION_CASE_EXP_START];
    for (; ; ) {
      if (this._peek.type !== ol.TokenType.EXPANSION_FORM_START && this._peek.type !== ol.TokenType.EXPANSION_CASE_EXP_START || r2.push(this._peek.type), this._peek.type === ol.TokenType.EXPANSION_CASE_EXP_END) {
        if (!pl(r2, ol.TokenType.EXPANSION_CASE_EXP_START))
          return this._errors.push(ul.create(null, e4.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        if (r2.pop(), r2.length == 0)
          return t2;
      }
      if (this._peek.type === ol.TokenType.EXPANSION_FORM_END) {
        if (!pl(r2, ol.TokenType.EXPANSION_FORM_START))
          return this._errors.push(ul.create(null, e4.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
        r2.pop();
      }
      if (this._peek.type === ol.TokenType.EOF)
        return this._errors.push(ul.create(null, e4.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
      t2.push(this._advance());
    }
  }
  _getText(e4) {
    let t2 = e4.parts[0];
    if (t2.length > 0 && t2[0] == "\n") {
      const e5 = this._getParentElement();
      e5 != null && e5.children.length == 0 && this.getTagDefinition(e5.name).ignoreFirstLf && (t2 = t2.substring(1));
    }
    return t2;
  }
  _consumeText(e4) {
    const t2 = this._getText(e4);
    t2.length > 0 && this._addToParent(new sl.Text(t2, e4.sourceSpan));
  }
  _closeVoidElement() {
    const e4 = this._getParentElement();
    e4 && this.getTagDefinition(e4.name).isVoid && this._elementStack.pop();
  }
  _consumeStartTag(e4) {
    const t2 = e4.parts[0], r2 = e4.parts[1], n2 = [];
    for (; this._peek.type === ol.TokenType.ATTR_NAME; )
      n2.push(this._consumeAttr(this._advance()));
    const i2 = this._getElementFullName(t2, r2, this._getParentElement());
    let s2 = false;
    if (this._peek.type === ol.TokenType.TAG_OPEN_END_VOID) {
      this._advance(), s2 = true;
      const t3 = this.getTagDefinition(i2);
      this.canSelfClose || t3.canSelfClose || al.getNsPrefix(i2) !== null || t3.isVoid || this._errors.push(ul.create(i2, e4.sourceSpan, 'Only void and foreign elements can be self closed "'.concat(e4.parts[1], '"')));
    } else
      this._peek.type === ol.TokenType.TAG_OPEN_END && (this._advance(), s2 = false);
    const o2 = this._peek.sourceSpan.start, a2 = new il.ParseSourceSpan(e4.sourceSpan.start, o2), u2 = new il.ParseSourceSpan(e4.sourceSpan.start.moveBy(1), e4.sourceSpan.end), c2 = new sl.Element(i2, n2, [], a2, a2, void 0, u2);
    this._pushElement(c2), s2 && (this._popElement(i2), c2.endSourceSpan = a2);
  }
  _pushElement(e4) {
    const t2 = this._getParentElement();
    t2 && this.getTagDefinition(t2.name).isClosedByChild(e4.name) && this._elementStack.pop(), this._addToParent(e4), this._elementStack.push(e4);
  }
  _consumeEndTag(e4) {
    const t2 = this.allowHtmComponentClosingTags && e4.parts.length === 0 ? null : this._getElementFullName(e4.parts[0], e4.parts[1], this._getParentElement());
    if (this._getParentElement() && (this._getParentElement().endSourceSpan = e4.sourceSpan), t2 && this.getTagDefinition(t2).isVoid)
      this._errors.push(ul.create(t2, e4.sourceSpan, 'Void elements do not have end tags "'.concat(e4.parts[1], '"')));
    else if (!this._popElement(t2)) {
      const r2 = 'Unexpected closing tag "'.concat(t2, '". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags');
      this._errors.push(ul.create(t2, e4.sourceSpan, r2));
    }
  }
  _popElement(e4) {
    for (let t2 = this._elementStack.length - 1; t2 >= 0; t2--) {
      const r2 = this._elementStack[t2];
      if (!e4 || (al.getNsPrefix(r2.name) ? r2.name == e4 : r2.name.toLowerCase() == e4.toLowerCase()))
        return this._elementStack.splice(t2, this._elementStack.length - t2), true;
      if (!this.getTagDefinition(r2.name).closedByParent)
        return false;
    }
    return false;
  }
  _consumeAttr(e4) {
    const t2 = al.mergeNsAndName(e4.parts[0], e4.parts[1]);
    let r2, n2, i2 = e4.sourceSpan.end, s2 = "";
    if (this._peek.type === ol.TokenType.ATTR_QUOTE) {
      n2 = this._advance().sourceSpan.start;
    }
    if (this._peek.type === ol.TokenType.ATTR_VALUE) {
      const e5 = this._advance();
      s2 = e5.parts[0], i2 = e5.sourceSpan.end, r2 = e5.sourceSpan;
    }
    if (this._peek.type === ol.TokenType.ATTR_QUOTE) {
      i2 = this._advance().sourceSpan.end, r2 = new il.ParseSourceSpan(n2, i2);
    }
    return new sl.Attribute(t2, s2, new il.ParseSourceSpan(e4.sourceSpan.start, i2), r2, e4.sourceSpan);
  }
  _getParentElement() {
    return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null;
  }
  _getParentElementSkippingContainers() {
    let e4 = null;
    for (let t2 = this._elementStack.length - 1; t2 >= 0; t2--) {
      if (!al.isNgContainer(this._elementStack[t2].name))
        return { parent: this._elementStack[t2], container: e4 };
      e4 = this._elementStack[t2];
    }
    return { parent: null, container: e4 };
  }
  _addToParent(e4) {
    const t2 = this._getParentElement();
    t2 != null ? t2.children.push(e4) : this._rootNodes.push(e4);
  }
  _insertBeforeContainer(e4, t2, r2) {
    if (t2) {
      if (e4) {
        const n2 = e4.children.indexOf(t2);
        e4.children[n2] = r2;
      } else
        this._rootNodes.push(r2);
      r2.children.push(t2), this._elementStack.splice(this._elementStack.indexOf(t2), 0, r2);
    } else
      this._addToParent(r2), this._elementStack.push(r2);
  }
  _getElementFullName(e4, t2, r2) {
    return e4 === "" && (e4 = this.getTagDefinition(t2).implicitNamespacePrefix || "") === "" && r2 != null && (e4 = al.getNsPrefix(r2.name)), al.mergeNsAndName(e4, t2);
  }
};
function pl(e4, t2) {
  return e4.length > 0 && e4[e4.length - 1] === t2;
}
Object.defineProperty($c, "__esModule", { value: true });
var hl = Mc;
var Dl = Hc;
var dl = Hc;
$c.ParseTreeResult = dl.ParseTreeResult, $c.TreeError = dl.TreeError;
var fl = class extends Dl.Parser {
  constructor() {
    super(hl.getHtmlTagDefinition);
  }
  parse(e4, t2, r2) {
    let n2 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3], i2 = arguments.length > 4 ? arguments[4] : void 0;
    return super.parse(e4, t2, r2, n2, i2);
  }
};
$c.HtmlParser = fl, Object.defineProperty(qc, "__esModule", { value: true });
var gl = $c;
var ml = jc;
qc.TagContentType = ml.TagContentType;
var El = null;
var Cl = () => (El || (El = new gl.HtmlParser()), El);
qc.parse = function(e4) {
  let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { canSelfClose: r2 = false, allowHtmComponentClosingTags: n2 = false, isTagNameCaseSensitive: i2 = false, getTagContentType: s2 } = t2;
  return Cl().parse(e4, "angular-html-parser", { tokenizeExpansionForms: false, interpolationConfig: void 0, canSelfClose: r2, allowHtmComponentClosingTags: n2 }, i2, s2);
};
var { ParseSourceSpan: yl, ParseLocation: bl, ParseSourceFile: Sl } = t;
var Tl = E;
var _l = C;
var vl = y;
var { inferParserByLanguage: Al } = Ua;
var { HTML_ELEMENT_ATTRIBUTES: Fl, HTML_TAGS: wl, isUnknownNamespace: kl } = vc;
var { hasPragma: Nl } = Ac;
var { Node: Ol } = Ic;
var { parseIeConditionalComment: xl } = Lc;
var { locStart: Il, locEnd: Pl } = Bc;
function Rl(e4, r2, n2) {
  let { recognizeSelfClosing: i2, normalizeTagName: s2, normalizeAttributeName: o2, allowHtmComponentClosingTags: a2, isTagNameCaseSensitive: u2, getTagContentType: c2 } = r2;
  const l2 = qc, { RecursiveVisitor: p2, visitAll: h2 } = zc, { ParseSourceSpan: D2 } = t, { getHtmlTagDefinition: d2 } = Mc;
  let { rootNodes: f2, errors: g2 } = l2.parse(e4, { canSelfClose: i2, allowHtmComponentClosingTags: a2, isTagNameCaseSensitive: u2, getTagContentType: c2 });
  if (n2.parser === "vue") {
    if (f2.some((e5) => e5.type === "docType" && e5.value === "html" || e5.type === "element" && e5.name.toLowerCase() === "html")) {
      i2 = true, s2 = true, o2 = true, a2 = true, u2 = false;
      const t2 = l2.parse(e4, { canSelfClose: i2, allowHtmComponentClosingTags: a2, isTagNameCaseSensitive: u2 });
      f2 = t2.rootNodes, g2 = t2.errors;
    } else {
      const t2 = (e5) => {
        if (!e5)
          return false;
        if (e5.type !== "element" || e5.name !== "template")
          return false;
        const t3 = e5.attrs.find((e6) => e6.name === "lang"), r3 = t3 && t3.value;
        return !r3 || Al(r3, n2) === "html";
      };
      if (f2.some(t2)) {
        let r3;
        const n3 = () => l2.parse(e4, { canSelfClose: i2, allowHtmComponentClosingTags: a2, isTagNameCaseSensitive: u2 }), s3 = () => r3 || (r3 = n3()), o3 = (e5) => s3().rootNodes.find((t3) => {
          let { startSourceSpan: r4 } = t3;
          return r4 && r4.start.offset === e5.startSourceSpan.start.offset;
        });
        for (let e5 = 0; e5 < f2.length; e5++) {
          const r4 = f2[e5], { endSourceSpan: n4, startSourceSpan: i3 } = r4;
          if (n4 === null) {
            g2 = s3().errors, f2[e5] = o3(r4) || r4;
          } else if (t2(r4)) {
            const t3 = s3(), a3 = i3.end.offset, u3 = n4.start.offset;
            for (const e6 of t3.errors) {
              const { offset: t4 } = e6.span.start;
              if (a3 < t4 && t4 < u3) {
                g2 = [e6];
                break;
              }
            }
            f2[e5] = o3(r4) || r4;
          }
        }
      }
    }
  }
  if (g2.length > 0) {
    const { msg: e5, span: { start: t2, end: r3 } } = g2[0];
    throw vl(e5, { start: { line: t2.line + 1, column: t2.col + 1 }, end: { line: r3.line + 1, column: r3.col + 1 } });
  }
  const m2 = (e5) => {
    const t2 = e5.name.startsWith(":") ? e5.name.slice(1).split(":")[0] : null, r3 = e5.nameSpan.toString(), n3 = t2 !== null && r3.startsWith("".concat(t2, ":")), i3 = n3 ? r3.slice(t2.length + 1) : r3;
    e5.name = i3, e5.namespace = t2, e5.hasExplicitNamespace = n3;
  }, E2 = (e5, t2) => {
    const r3 = e5.toLowerCase();
    return t2(r3) ? r3 : e5;
  };
  return h2(new class extends p2 {
    visit(e5) {
      ((e6) => {
        if (e6.type === "element") {
          m2(e6);
          for (const t2 of e6.attrs)
            m2(t2), t2.valueSpan ? (t2.value = t2.valueSpan.toString(), /["']/.test(t2.value[0]) && (t2.value = t2.value.slice(1, -1))) : t2.value = null;
        } else
          e6.type === "comment" ? e6.value = e6.sourceSpan.toString().slice("<!--".length, -"-->".length) : e6.type === "text" && (e6.value = e6.sourceSpan.toString());
      })(e5), ((e6) => {
        if (e6.type === "element") {
          const t2 = d2(u2 ? e6.name : e6.name.toLowerCase());
          !e6.namespace || e6.namespace === t2.implicitNamespacePrefix || kl(e6) ? e6.tagDefinition = t2 : e6.tagDefinition = d2("");
        }
      })(e5), ((e6) => {
        if (e6.type === "element" && (!s2 || e6.namespace && e6.namespace !== e6.tagDefinition.implicitNamespacePrefix && !kl(e6) || (e6.name = E2(e6.name, (e7) => e7 in wl)), o2)) {
          const t2 = Fl[e6.name] || Object.create(null);
          for (const r3 of e6.attrs)
            r3.namespace || (r3.name = E2(r3.name, (r4) => e6.name in Fl && (r4 in Fl["*"] || r4 in t2)));
        }
      })(e5), ((e6) => {
        e6.sourceSpan && e6.endSourceSpan && (e6.sourceSpan = new D2(e6.sourceSpan.start, e6.endSourceSpan.end));
      })(e5);
    }
  }(), f2), f2;
}
function Ll(e4, t2, r2) {
  let n2 = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3];
  const { frontMatter: i2, content: s2 } = n2 ? Tl(e4) : { frontMatter: null, content: e4 }, o2 = new Sl(e4, t2.filepath), a2 = new bl(o2, 0, 0, 0), u2 = a2.moveBy(e4.length), c2 = { type: "root", sourceSpan: new yl(a2, u2), children: Rl(s2, r2, t2) };
  if (i2) {
    const e5 = new bl(o2, 0, 0, 0), t3 = e5.moveBy(i2.raw.length);
    i2.sourceSpan = new yl(e5, t3), c2.children.unshift(i2);
  }
  const l2 = new Ol(c2), p2 = (n3, i3) => {
    const { offset: s3 } = i3, o3 = Ll(e4.slice(0, s3).replace(/[^\n\r]/g, " ") + n3, t2, r2, false);
    o3.sourceSpan = new yl(i3, _l(o3.children).sourceSpan.end);
    const a3 = o3.children[0];
    return a3.length === s3 ? o3.children.shift() : (a3.sourceSpan = new yl(a3.sourceSpan.start.moveBy(s3), a3.sourceSpan.end), a3.value = a3.value.slice(s3)), o3;
  };
  return l2.map((e5) => {
    if (e5.type === "comment") {
      const t3 = xl(e5, p2);
      if (t3)
        return t3;
    }
    return e5;
  });
}
function Bl() {
  let { name: e4, recognizeSelfClosing: t2 = false, normalizeTagName: r2 = false, normalizeAttributeName: n2 = false, allowHtmComponentClosingTags: i2 = false, isTagNameCaseSensitive: s2 = false, getTagContentType: o2 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return { parse: (a2, u2, c2) => Ll(a2, Object.assign({ parser: e4 }, c2), { recognizeSelfClosing: t2, normalizeTagName: r2, normalizeAttributeName: n2, allowHtmComponentClosingTags: i2, isTagNameCaseSensitive: s2, getTagContentType: o2 }), hasPragma: Nl, astFormat: "html", locStart: Il, locEnd: Pl };
}
var ql = { parsers: { html: Bl({ name: "html", recognizeSelfClosing: true, normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true }), angular: Bl({ name: "angular" }), vue: Bl({ name: "vue", recognizeSelfClosing: true, isTagNameCaseSensitive: true, getTagContentType: (e4, t2, r2, n2) => {
  if (e4.toLowerCase() !== "html" && !r2 && (e4 !== "template" || n2.some((e5) => {
    let { name: t3, value: r3 } = e5;
    return t3 === "lang" && r3 !== "html";
  })))
    return qc.TagContentType.RAW_TEXT;
} }), lwc: Bl({ name: "lwc" }) } };

// dep:prettier_esm_parser-html
var prettier_esm_parser_html_default = ql;
export {
  prettier_esm_parser_html_default as default
};
/**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=prettier_esm_parser-html.js.map
