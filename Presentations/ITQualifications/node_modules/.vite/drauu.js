import "./chunk-AW43RHKU.js";

// node_modules/perfect-freehand/dist/esm/index.js
function W(e, t, s, h = (b) => b) {
  return e * h(0.5 - t * (0.5 - s));
}
function re(e) {
  return [-e[0], -e[1]];
}
function l(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function a(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function f(e, t) {
  return [e[0] * t, e[1] * t];
}
function le(e, t) {
  return [e[0] / t, e[1] / t];
}
function L(e) {
  return [e[1], -e[0]];
}
function ne(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function oe(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function fe(e) {
  return Math.hypot(e[0], e[1]);
}
function be(e) {
  return e[0] * e[0] + e[1] * e[1];
}
function Y(e, t) {
  return be(a(e, t));
}
function G(e) {
  return le(e, fe(e));
}
function ue(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function T(e, t, s) {
  let h = Math.sin(s), b = Math.cos(s), v = e[0] - t[0], n = e[1] - t[1], g = v * b - n * h, E = v * h + n * b;
  return [g + t[0], E + t[1]];
}
function V(e, t, s) {
  return l(e, f(a(t, e), s));
}
function Z(e, t, s) {
  return l(e, f(t, s));
}
var { min: _, PI: ge } = Math;
var se = 0.275;
var j = ge + 1e-4;
function ie(e, t = {}) {
  let { size: s = 16, smoothing: h = 0.5, thinning: b = 0.5, simulatePressure: v = true, easing: n = (r) => r, start: g = {}, end: E = {}, last: z = false } = t, { cap: d = true, taper: x = 0, easing: q = (r) => r * (2 - r) } = g, { cap: m = true, taper: c = 0, easing: M = (r) => --r * r * r + 1 } = E;
  if (e.length === 0 || s <= 0)
    return [];
  let H = e[e.length - 1].runningLength, $ = Math.pow(s * h, 2), D2 = [], R = [], N = e.slice(0, 10).reduce((r, i) => {
    let o = i.pressure;
    if (v) {
      let u = _(1, i.distance / s), J = _(1, 1 - u);
      o = _(1, r + (J - r) * (u * se));
    }
    return (r + o) / 2;
  }, e[0].pressure), p = W(s, b, e[e.length - 1].pressure, n), U, B = e[0].vector, I = e[0].point, C = I, y = I, O = C;
  for (let r = 0; r < e.length; r++) {
    let { pressure: i } = e[r], { point: o, vector: u, distance: J, runningLength: K } = e[r];
    if (r < e.length - 1 && H - K < 3)
      continue;
    if (b) {
      if (v) {
        let P = _(1, J / s), Q = _(1, 1 - P);
        i = _(1, N + (Q - N) * (P * se));
      }
      p = W(s, b, i, n);
    } else
      p = s / 2;
    U === void 0 && (U = p);
    let pe = K < x ? q(K / x) : 1, ae = H - K < c ? M((H - K) / c) : 1;
    if (p = Math.max(0.01, p * Math.min(pe, ae)), r === e.length - 1) {
      let P = f(L(u), p);
      D2.push(a(o, P)), R.push(l(o, P));
      continue;
    }
    let A = e[r + 1].vector, ee = ne(u, A);
    if (ee < 0) {
      let P = f(L(B), p);
      for (let Q = 1 / 13, w = 0; w <= 1; w += Q)
        y = T(a(o, P), o, j * w), D2.push(y), O = T(l(o, P), o, j * -w), R.push(O);
      I = y, C = O;
      continue;
    }
    let te = f(L(V(A, u, ee)), p);
    y = a(o, te), (r <= 1 || Y(I, y) > $) && (D2.push(y), I = y), O = l(o, te), (r <= 1 || Y(C, O) > $) && (R.push(O), C = O), N = i, B = u;
  }
  let S = e[0].point.slice(0, 2), k = e.length > 1 ? e[e.length - 1].point.slice(0, 2) : l(e[0].point, [1, 1]), X = [], F = [];
  if (e.length === 1) {
    if (!(x || c) || z) {
      let r = Z(S, G(L(a(S, k))), -(U || p)), i = [];
      for (let o = 1 / 13, u = o; u <= 1; u += o)
        i.push(T(r, S, j * 2 * u));
      return i;
    }
  } else {
    if (!(x || c && e.length === 1))
      if (d)
        for (let i = 1 / 13, o = i; o <= 1; o += i) {
          let u = T(R[0], S, j * o);
          X.push(u);
        }
      else {
        let i = a(D2[0], R[0]), o = f(i, 0.5), u = f(i, 0.51);
        X.push(a(S, o), a(S, u), l(S, u), l(S, o));
      }
    let r = L(re(e[e.length - 1].vector));
    if (c || x && e.length === 1)
      F.push(k);
    else if (m) {
      let i = Z(k, r, p);
      for (let o = 1 / 29, u = o; u < 1; u += o)
        F.push(T(i, k, j * 3 * u));
    } else
      F.push(l(k, f(r, p)), l(k, f(r, p * 0.99)), a(k, f(r, p * 0.99)), a(k, f(r, p)));
  }
  return D2.concat(F, R.reverse(), X);
}
function ce(e, t = {}) {
  var q;
  let { streamline: s = 0.5, size: h = 16, last: b = false } = t;
  if (e.length === 0)
    return [];
  let v = 0.15 + (1 - s) * 0.85, n = Array.isArray(e[0]) ? e : e.map(({ x: m, y: c, pressure: M = 0.5 }) => [m, c, M]);
  if (n.length === 2) {
    let m = n[1];
    n = n.slice(0, -1);
    for (let c = 1; c < 5; c++)
      n.push(V(n[0], m, c / 4));
  }
  n.length === 1 && (n = [...n, [...l(n[0], [1, 1]), ...n[0].slice(2)]]);
  let g = [{ point: [n[0][0], n[0][1]], pressure: n[0][2] >= 0 ? n[0][2] : 0.25, vector: [1, 1], distance: 0, runningLength: 0 }], E = false, z = 0, d = g[0], x = n.length - 1;
  for (let m = 1; m < n.length; m++) {
    let c = b && m === x ? n[m].slice(0, 2) : V(d.point, n[m], v);
    if (oe(d.point, c))
      continue;
    let M = ue(c, d.point);
    if (z += M, m < x && !E) {
      if (z < h)
        continue;
      E = true;
    }
    d = { point: c, pressure: n[m][2] >= 0 ? n[m][2] : 0.5, vector: G(a(d.point, c)), distance: M, runningLength: z }, g.push(d);
  }
  return g[0].vector = ((q = g[1]) == null ? void 0 : q.vector) || [0, 0], g;
}
function me(e, t = {}) {
  return ie(ce(e, t), t);
}
var Te = me;

// node_modules/@drauu/core/dist/index.mjs
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
var createNanoEvents = () => ({
  events: {},
  emit(event, ...args) {
    ;
    (this.events[event] || []).forEach((i) => i(...args));
  },
  on(event, cb) {
    ;
    (this.events[event] = this.events[event] || []).push(cb);
    return () => this.events[event] = (this.events[event] || []).filter((i) => i !== cb);
  }
});
function numSort(a2, b) {
  return a2 - b;
}
function getSymbol(a2) {
  if (a2 < 0)
    return -1;
  return 1;
}
function splitNum(a2) {
  return [Math.abs(a2), getSymbol(a2)];
}
function guid() {
  const S4 = () => ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  return `${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`;
}
var DECIMAL = 2;
var D = DECIMAL;
var BaseModel = class {
  constructor(drauu) {
    this.drauu = drauu;
    this.event = void 0;
    this.point = void 0;
    this.start = void 0;
    this.el = null;
  }
  onStart(point) {
    return void 0;
  }
  onMove(point) {
    return false;
  }
  onEnd(point) {
    return void 0;
  }
  get brush() {
    return this.drauu.brush;
  }
  get shiftPressed() {
    return this.drauu.shiftPressed;
  }
  get altPressed() {
    return this.drauu.altPressed;
  }
  getMousePosition(event) {
    var _a, _b;
    const el = this.drauu.el;
    const scale = (_a = this.drauu.options.coordinateScale) != null ? _a : 1;
    if (this.drauu.options.coordinateTransform === false) {
      const rect = this.drauu.el.getBoundingClientRect();
      return {
        x: (event.pageX - rect.left) * scale,
        y: (event.pageY - rect.top) * scale,
        pressure: event.pressure
      };
    } else {
      const point = this.drauu.svgPoint;
      point.x = event.clientX;
      point.y = event.clientY;
      const loc = point.matrixTransform((_b = el.getScreenCTM()) == null ? void 0 : _b.inverse());
      return {
        x: loc.x * scale,
        y: loc.y * scale,
        pressure: event.pressure
      };
    }
  }
  createElement(name, overrides) {
    var _a;
    const el = document.createElementNS("http://www.w3.org/2000/svg", name);
    const brush = overrides ? __spreadValues(__spreadValues({}, this.brush), overrides) : this.brush;
    el.setAttribute("fill", (_a = brush.fill) != null ? _a : "transparent");
    el.setAttribute("stroke", brush.color);
    el.setAttribute("stroke-width", brush.size.toString());
    el.setAttribute("stroke-linecap", "round");
    if (brush.dasharray)
      el.setAttribute("stroke-dasharray", brush.dasharray);
    return el;
  }
  attr(name, value) {
    this.el.setAttribute(name, typeof value === "string" ? value : value.toFixed(D));
  }
  _setEvent(event) {
    this.event = event;
    this.point = this.getMousePosition(event);
  }
  _eventDown(event) {
    this._setEvent(event);
    this.start = this.point;
    return this.onStart(this.point);
  }
  _eventMove(event) {
    this._setEvent(event);
    return this.onMove(this.point);
  }
  _eventUp(event) {
    this._setEvent(event);
    return this.onEnd(this.point);
  }
};
var StylusModel = class extends BaseModel {
  constructor() {
    super(...arguments);
    this.points = [];
  }
  onStart(point) {
    this.el = document.createElementNS("http://www.w3.org/2000/svg", "path");
    this.points = [point];
    this.attr("fill", this.brush.color);
    this.attr("d", this.getSvgData(this.points));
    return this.el;
  }
  onMove(point) {
    if (!this.el)
      this.onStart(point);
    if (this.points[this.points.length - 1] !== point)
      this.points.push(point);
    this.attr("d", this.getSvgData(this.points));
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path)
      return false;
    return true;
  }
  getSvgData(points) {
    const stroke = Te(points, __spreadValues({
      size: this.brush.size * 2,
      thinning: 0.9,
      simulatePressure: false,
      start: {
        taper: 5
      },
      end: {
        taper: 5
      }
    }, this.brush.stylusOptions));
    if (!stroke.length)
      return "";
    const d = stroke.reduce((acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    }, ["M", ...stroke[0], "Q"]);
    d.push("Z");
    return d.map((i) => typeof i === "number" ? i.toFixed(2) : i).join(" ");
  }
};
var EllipseModel = class extends BaseModel {
  onStart(point) {
    this.el = this.createElement("ellipse");
    this.attr("cx", point.x);
    this.attr("cy", point.y);
    return this.el;
  }
  onMove(point) {
    if (!this.el || !this.start)
      return false;
    let [dx, sx] = splitNum(point.x - this.start.x);
    let [dy, sy] = splitNum(point.y - this.start.y);
    if (this.shiftPressed) {
      const d = Math.min(dx, dy);
      dx = d;
      dy = d;
    }
    if (this.altPressed) {
      this.attr("cx", this.start.x);
      this.attr("cy", this.start.y);
      this.attr("rx", dx);
      this.attr("ry", dy);
    } else {
      const [x1, x2] = [this.start.x, this.start.x + dx * sx].sort(numSort);
      const [y1, y2] = [this.start.y, this.start.y + dy * sy].sort(numSort);
      this.attr("cx", (x1 + x2) / 2);
      this.attr("cy", (y1 + y2) / 2);
      this.attr("rx", (x2 - x1) / 2);
      this.attr("ry", (y2 - y1) / 2);
    }
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path)
      return false;
    if (!path.getTotalLength())
      return false;
    return true;
  }
};
function createArrowHead(id, fill) {
  const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  const marker = document.createElementNS("http://www.w3.org/2000/svg", "marker");
  const head = document.createElementNS("http://www.w3.org/2000/svg", "path");
  head.setAttribute("fill", fill);
  marker.setAttribute("id", id);
  marker.setAttribute("viewBox", "0 -5 10 10");
  marker.setAttribute("refX", "5");
  marker.setAttribute("refY", "0");
  marker.setAttribute("markerWidth", "4");
  marker.setAttribute("markerHeight", "4");
  marker.setAttribute("orient", "auto");
  head.setAttribute("d", "M0,-5L10,0L0,5");
  marker.appendChild(head);
  defs.appendChild(marker);
  return defs;
}
var LineModel = class extends BaseModel {
  onStart(point) {
    this.el = this.createElement("line", { fill: "transparent" });
    this.attr("x1", point.x);
    this.attr("y1", point.y);
    this.attr("x2", point.x);
    this.attr("y2", point.y);
    if (this.brush.arrowEnd) {
      const id = guid();
      const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
      g.append(createArrowHead(id, this.brush.color));
      g.append(this.el);
      this.attr("marker-end", `url(#${id})`);
      return g;
    }
    return this.el;
  }
  onMove(point) {
    if (!this.el)
      return false;
    let { x, y } = point;
    if (this.shiftPressed) {
      const dx = point.x - this.start.x;
      const dy = point.y - this.start.y;
      if (dy !== 0) {
        let slope = dx / dy;
        slope = Math.round(slope);
        if (Math.abs(slope) <= 1) {
          x = this.start.x + dy * slope;
          y = this.start.y + dy;
        } else {
          x = this.start.x + dx;
          y = this.start.y;
        }
      }
    }
    if (this.altPressed) {
      this.attr("x1", this.start.x * 2 - x);
      this.attr("y1", this.start.y * 2 - y);
      this.attr("x2", x);
      this.attr("y2", y);
    } else {
      this.attr("x1", this.start.x);
      this.attr("y1", this.start.y);
      this.attr("x2", x);
      this.attr("y2", y);
    }
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path)
      return false;
    if (path.getTotalLength() < 5)
      return false;
    return true;
  }
};
var RectModel = class extends BaseModel {
  onStart(point) {
    this.el = this.createElement("rect");
    if (this.brush.cornerRadius) {
      this.attr("rx", this.brush.cornerRadius);
      this.attr("ry", this.brush.cornerRadius);
    }
    this.attr("x", point.x);
    this.attr("y", point.y);
    return this.el;
  }
  onMove(point) {
    if (!this.el || !this.start)
      return false;
    let [dx, sx] = splitNum(point.x - this.start.x);
    let [dy, sy] = splitNum(point.y - this.start.y);
    if (this.shiftPressed) {
      const d = Math.min(dx, dy);
      dx = d;
      dy = d;
    }
    if (this.altPressed) {
      this.attr("x", this.start.x - dx);
      this.attr("y", this.start.y - dy);
      this.attr("width", dx * 2);
      this.attr("height", dy * 2);
    } else {
      const [x1, x2] = [this.start.x, this.start.x + dx * sx].sort(numSort);
      const [y1, y2] = [this.start.y, this.start.y + dy * sy].sort(numSort);
      this.attr("x", x1);
      this.attr("y", y1);
      this.attr("width", x2 - x1);
      this.attr("height", y2 - y1);
    }
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path)
      return false;
    if (!path.getTotalLength())
      return false;
    return true;
  }
};
function getSqDist(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return dx * dx + dy * dy;
}
function getSqSegDist(p, p1, p2) {
  let x = p1.x;
  let y = p1.y;
  let dx = p2.x - x;
  let dy = p2.y - y;
  if (dx !== 0 || dy !== 0) {
    const t = ((p.x - x) * dx + (p.y - y) * dy) / (dx * dx + dy * dy);
    if (t > 1) {
      x = p2.x;
      y = p2.y;
    } else if (t > 0) {
      x += dx * t;
      y += dy * t;
    }
  }
  dx = p.x - x;
  dy = p.y - y;
  return dx * dx + dy * dy;
}
function simplifyRadialDist(points, sqTolerance) {
  let prevPoint = points[0];
  const newPoints = [prevPoint];
  let point;
  for (let i = 1, len = points.length; i < len; i++) {
    point = points[i];
    if (getSqDist(point, prevPoint) > sqTolerance) {
      newPoints.push(point);
      prevPoint = point;
    }
  }
  if (prevPoint !== point && point)
    newPoints.push(point);
  return newPoints;
}
function simplifyDPStep(points, first, last, sqTolerance, simplified) {
  let maxSqDist = sqTolerance;
  let index = 0;
  for (let i = first + 1; i < last; i++) {
    const sqDist = getSqSegDist(points[i], points[first], points[last]);
    if (sqDist > maxSqDist) {
      index = i;
      maxSqDist = sqDist;
    }
  }
  if (maxSqDist > sqTolerance) {
    if (index - first > 1)
      simplifyDPStep(points, first, index, sqTolerance, simplified);
    simplified.push(points[index]);
    if (last - index > 1)
      simplifyDPStep(points, index, last, sqTolerance, simplified);
  }
}
function simplifyDouglasPeucker(points, sqTolerance) {
  const last = points.length - 1;
  const simplified = [points[0]];
  simplifyDPStep(points, 0, last, sqTolerance, simplified);
  simplified.push(points[last]);
  return simplified;
}
function simplify(points, tolerance, highestQuality = false) {
  if (points.length <= 2)
    return points;
  const sqTolerance = tolerance !== void 0 ? tolerance * tolerance : 1;
  points = highestQuality ? points : simplifyRadialDist(points, sqTolerance);
  points = simplifyDouglasPeucker(points, sqTolerance);
  return points;
}
var DrawModel = class extends BaseModel {
  constructor() {
    super(...arguments);
    this.points = [];
    this.count = 0;
  }
  onStart(point) {
    this.el = this.createElement("path", { fill: "transparent" });
    this.points = [point];
    if (this.brush.arrowEnd) {
      this.arrowId = guid();
      const head = createArrowHead(this.arrowId, this.brush.color);
      this.el.appendChild(head);
    }
    return this.el;
  }
  onMove(point) {
    if (!this.el)
      this.onStart(point);
    if (this.points[this.points.length - 1] !== point) {
      this.points.push(point);
      this.count += 1;
    }
    if (this.count > 5) {
      this.points = simplify(this.points, 1, true);
      this.count = 0;
    }
    this.attr("d", toSvgData(this.points));
    return true;
  }
  onEnd() {
    const path = this.el;
    this.el = null;
    if (!path)
      return false;
    path.setAttribute("d", toSvgData(simplify(this.points, 1, true)));
    if (!path.getTotalLength())
      return false;
    return true;
  }
};
function line(a2, b) {
  const lengthX = b.x - a2.x;
  const lengthY = b.y - a2.y;
  return {
    length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
    angle: Math.atan2(lengthY, lengthX)
  };
}
function controlPoint(current, previous, next, reverse) {
  const p = previous || current;
  const n = next || current;
  const smoothing = 0.2;
  const o = line(p, n);
  const angle = o.angle + (reverse ? Math.PI : 0);
  const length = o.length * smoothing;
  const x = current.x + Math.cos(angle) * length;
  const y = current.y + Math.sin(angle) * length;
  return { x, y };
}
function bezierCommand(point, i, points) {
  const cps = controlPoint(points[i - 1], points[i - 2], point);
  const cpe = controlPoint(point, points[i - 1], points[i + 1], true);
  return `C ${cps.x.toFixed(D)},${cps.y.toFixed(D)} ${cpe.x.toFixed(D)},${cpe.y.toFixed(D)} ${point.x.toFixed(D)},${point.y.toFixed(D)}`;
}
function toSvgData(points) {
  return points.reduce((acc, point, i, a2) => i === 0 ? `M ${point.x.toFixed(D)},${point.y.toFixed(D)}` : `${acc} ${bezierCommand(point, i, a2)}`, "");
}
function createModels(drauu) {
  return {
    draw: new DrawModel(drauu),
    stylus: new StylusModel(drauu),
    line: new LineModel(drauu),
    rectangle: new RectModel(drauu),
    ellipse: new EllipseModel(drauu)
  };
}
var Drauu = class {
  constructor(options = {}) {
    this.options = options;
    this.el = null;
    this.svgPoint = null;
    this.eventEl = null;
    this.shiftPressed = false;
    this.altPressed = false;
    this.drawing = false;
    this._emitter = createNanoEvents();
    this._models = createModels(this);
    this._undoStack = [];
    this._disposables = [];
    if (!this.options.brush)
      this.options.brush = { color: "black", size: 3, mode: "stylus" };
    if (options.el)
      this.mount(options.el, options.eventTarget);
  }
  get model() {
    return this._models[this.mode];
  }
  get mounted() {
    return !!this.el;
  }
  get mode() {
    return this.options.brush.mode || "stylus";
  }
  set mode(v) {
    this.options.brush.mode = v;
  }
  get brush() {
    return this.options.brush;
  }
  set brush(v) {
    this.options.brush = v;
  }
  resolveSelector(selector) {
    if (typeof selector === "string")
      return document.querySelector(selector);
    else
      return selector || null;
  }
  mount(el, eventEl) {
    if (this.el)
      throw new Error("[drauu] already mounted, unmount previous target first");
    this.el = this.resolveSelector(el);
    if (!this.el)
      throw new Error("[drauu] target element not found");
    if (this.el.tagName.toLocaleLowerCase() !== "svg")
      throw new Error("[drauu] can only mount to a SVG element");
    if (!this.el.createSVGPoint) {
      throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/sv', 'svg')");
    }
    this.svgPoint = this.el.createSVGPoint();
    const target = this.resolveSelector(eventEl) || this.el;
    const start = this.eventStart.bind(this);
    const move = this.eventMove.bind(this);
    const end = this.eventEnd.bind(this);
    const keyboard = this.eventKeyboard.bind(this);
    target.addEventListener("pointerdown", start, { passive: false });
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", end, { passive: false });
    window.addEventListener("pointercancel", end, { passive: false });
    window.addEventListener("keydown", keyboard, false);
    window.addEventListener("keyup", keyboard, false);
    this._disposables.push(() => {
      target.removeEventListener("pointerdown", start);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", end);
      window.removeEventListener("pointercancel", end);
      window.removeEventListener("keydown", keyboard, false);
      window.removeEventListener("keyup", keyboard, false);
    });
    this._emitter.emit("mounted");
  }
  unmount() {
    this._disposables.forEach((fn) => fn());
    this._disposables.length = 0;
    this.el = null;
    this._emitter.emit("unmounted");
  }
  on(type, fn) {
    return this._emitter.on(type, fn);
  }
  undo() {
    const el = this.el;
    if (!el.lastElementChild)
      return false;
    this._undoStack.push(el.lastElementChild.cloneNode(true));
    el.lastElementChild.remove();
    this._emitter.emit("changed");
    return true;
  }
  redo() {
    if (!this._undoStack.length)
      return false;
    this.el.appendChild(this._undoStack.pop());
    this._emitter.emit("changed");
    return true;
  }
  canRedo() {
    return !!this._undoStack.length;
  }
  canUndo() {
    var _a;
    return !!((_a = this.el) == null ? void 0 : _a.lastElementChild);
  }
  eventMove(event) {
    if (!this.acceptsInput(event) || !this.drawing)
      return;
    if (this.model._eventMove(event)) {
      event.stopPropagation();
      event.preventDefault();
      this._emitter.emit("changed");
    }
  }
  eventStart(event) {
    if (!this.acceptsInput(event))
      return;
    event.stopPropagation();
    event.preventDefault();
    if (this._currentNode)
      this.cancel();
    this.drawing = true;
    this._emitter.emit("start");
    this._currentNode = this.model._eventDown(event);
    if (this._currentNode)
      this.el.appendChild(this._currentNode);
    this._emitter.emit("changed");
  }
  eventEnd(event) {
    if (!this.acceptsInput(event) || !this.drawing)
      return;
    const result = this.model._eventUp(event);
    if (!result) {
      this.cancel();
    } else {
      if (result instanceof Element && result !== this._currentNode)
        this._currentNode = result;
      this.commit();
    }
    this.drawing = false;
    this._emitter.emit("end");
    this._emitter.emit("changed");
  }
  acceptsInput(event) {
    return !this.options.acceptsInputTypes || this.options.acceptsInputTypes.includes(event.pointerType);
  }
  eventKeyboard(event) {
    if (this.shiftPressed === event.shiftKey && this.altPressed === event.altKey)
      return;
    this.shiftPressed = event.shiftKey;
    this.altPressed = event.altKey;
    if (this.model.point) {
      if (this.model.onMove(this.model.point))
        this._emitter.emit("changed");
    }
  }
  commit() {
    this._undoStack.length = 0;
    const node = this._currentNode;
    this._currentNode = void 0;
    this._emitter.emit("committed", node);
  }
  clear() {
    this._undoStack.length = 0;
    this.cancel();
    this.el.innerHTML = "";
    this._emitter.emit("changed");
  }
  cancel() {
    if (this._currentNode) {
      this.el.removeChild(this._currentNode);
      this._currentNode = void 0;
      this._emitter.emit("canceled");
    }
  }
  dump() {
    return this.el.innerHTML;
  }
  load(svg) {
    this.clear();
    this.el.innerHTML = svg;
  }
};
function createDrauu(options) {
  return new Drauu(options);
}
export {
  Drauu,
  createDrauu
};
//# sourceMappingURL=drauu.js.map
