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
function random(type, min, max) {
  if (min > max) {
    throw new RangeError("Invalid range: minmun number can't greater than maximum number.");
  }
  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new TypeError("Invalid input: argument must be a number.");
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

// src/index.ts
var lightMath = {
  randNum: random
};
export {
  lightMath,
  math_exports as mathfunc
};
