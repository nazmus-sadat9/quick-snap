"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  $: () => $,
  _: () => _,
  event: () => event,
  lightMath: () => lightMath,
  make: () => make,
  mathfunc: () => math_exports
});
module.exports = __toCommonJS(index_exports);

// src/math.ts
var math_exports = {};
__export(math_exports, {
  random: () => random
});
function random(type, min, max) {
  if (min > max) {
    throw new RangeError("Invalid range: minmun number can't greater than maximum number.");
  }
  if (isNaN(min) || isNaN(max)) {
    throw new TypeError("Invalid input: arguments must be a number.");
  }
  switch (type) {
    case "int":
      return Math.floor(Math.random() * (max - min + 1)) + min;
      break;
    case "floor":
      return Math.random() * (max - min) + min;
      break;
    default:
      throw new TypeError(`Invalid type: '${type}'. Expected 'int' or 'floor'.`);
  }
}

// src/events.ts
function event(element, type, callback) {
  const target = typeof element === "string" ? document.querySelector(element) : element;
  if (target) {
    target.addEventListener(type, callback);
  } else {
    console.warn(`light-kitjs: Element not found for event ${type}`);
  }
}

// src/make.ts
function make(tagName, options = {}) {
  const element = document.createElement(tagName);
  if (options.classes && options.classes.length > 0) {
    element.classList.add(...options.classes.filter(Boolean));
  }
  if (options.text !== void 0) {
    element.textContent = options.text;
  }
  return element;
}

// src/index.ts
var _ = (selector) => {
  return document.querySelector(selector);
};
var $ = (selector) => {
  return document.getElementById(selector);
};
window._ = _;
window.$ = $;
var lightMath = {
  randNum: random
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  $,
  _,
  event,
  lightMath,
  make,
  mathfunc
});
