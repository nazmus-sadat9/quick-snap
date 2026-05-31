declare function random(min: number, max: number): number;

declare const math_random: typeof random;
declare namespace math {
  export { math_random as random };
}

declare const lightMath: {
    randNum: typeof random;
};

export { lightMath, math as mathfunc };
