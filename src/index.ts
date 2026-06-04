// modules
import { randNum } from "./utilities/math";
import { copy } from "./utilities/copy"
import { makeTag } from "./make";
import { makeEvent } from "./events";
export * from "./types";
export { makeEvent } from "./events";
export { makeTag } from "./make";


// light object
export const light = {
  randNum,
  copy,
}

// global functions 
declare global {
  function query(selector: string): HTMLElement | null;
  function id(selector: string): HTMLElement | null;
  function makeTag<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: any): HTMLElementTagNameMap[K];
  function makeEvent(element: any, type: string, callback: any): void;
  const light: { randNum: (type: "int" | "float", min: number, max: number) => number };
}

// describe the global functions
// Query Selector
export const query = (selector: string): HTMLElement | null => {
  return document.querySelector(selector);
};

// Id Selector
export const id = (selector: string): HTMLElement | null => {
  return document.getElementById(selector);
};

// use for browser and frontend 
if (typeof window !== "undefined"){
  (window as any).query = query;
  (window as any).id = id;
  (window as any).makeTag = makeTag;
  (window as any).makeEvent = makeEvent;
  (window as any).light = light;
}
