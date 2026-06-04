import { RandomType } from "../types";
// math random function

export function randNum(type: RandomType ,min: number, max: number): number {

  // if min greater than max
  if (min > max) {
    throw new RangeError("Invalid range: minmun number can't greater than maximum number.");
  }

  // if argument missing or not a number
  if (isNaN(min) || isNaN(max)) {
    throw new TypeError("Invalid input: arguments must be a number.");
  }


  switch (type) {
    case "int": // integer random value
      return Math.floor(Math.random() * (max - min + 1)) + min;
      break;

    case "float": // float random value
      return Math.random() * (max - min) + min;
      break;

    default:
      throw new TypeError(`Invalid type: '${type}'. Expected 'int' or 'float'.`);
  }
}
