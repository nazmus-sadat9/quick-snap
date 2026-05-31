var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/math.ts
var math_exports = {};
__export(math_exports, {
  random: () => random
});
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// src/index.ts
var lightMath = {
  randNum: random
};
export {
  lightMath,
  math_exports as mathfunc
};
