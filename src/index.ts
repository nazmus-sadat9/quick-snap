// global functions 
declare global {
  function _(selector: string): HTMLElement | null;
  //function _all(selector: string);
  function $(selector: string): HTMLElement | null;
}

// describe the global functions
// Query Selector
export const _ = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

// Id Selector
export const $ = (selector: string): HTMLElement | null => {
  return document.getElementById(selector);
};

// use for browser and frontend 
(window as any)._ = _;
(window as any).$ = $;


// ES modules
import * as mathfunc from "./math";
export * from "./types";
export { event } from "./events";
export { make } from "./make";


export { mathfunc };

// math object
export const lightMath = {
  randNum: mathfunc.random,
}
