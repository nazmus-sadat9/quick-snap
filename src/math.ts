// math random function
type RandomType = "int" | "floor";

export function random(type: RandomType ,min: number, max: number): number {
  
  // if min greater than max 
  if (min > max) {
    throw new RangeError("Invalid range: minmun number can't greater than maximum number.");
  }

  // if input values aren't number
  if (Number.isNaN(min) || Number.isNaN(max)) {
    throw new TypeError("Invalid input: argument must be a number.")
  }


  switch (type) {
    case "int": // integer random value
      return Math.floor(Math.random() * (max - min + 1)) + min;
      break;
  
    case "floor": // floor random value
      return Math.random() * (max - min) + mim;
      break;
  }
}


