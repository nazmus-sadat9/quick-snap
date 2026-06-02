type RandomType = "int" | "floor";
type EventTargetEl = string | Element | null;
type EventCallback = (ev: Event) => void;
type ElementAttributes = Record<string, string | number | boolean>;
interface MakeOptions {
    classes?: string[];
    attributes?: ElementAttributes;
    text?: string;
    child?: HTMLElement[];
}

declare function random(type: RandomType, min: number, max: number): number;

declare const math_random: typeof random;
declare namespace math {
  export { math_random as random };
}

declare function event(element: EventTargetEl, // html target element
type: string, // event type
callback: EventCallback): void;

declare function make<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: MakeOptions): HTMLElementTagNameMap[K];

declare global {
    function _(selector: string): HTMLElement | null;
    function $(selector: string): HTMLElement | null;
}
declare const _: (selector: string) => HTMLElement | null;
declare const $: (selector: string) => HTMLElement | null;

declare const lightMath: {
    randNum: typeof random;
};

export { $, type ElementAttributes, type EventCallback, type EventTargetEl, type MakeOptions, type RandomType, _, event, lightMath, make, math as mathfunc };
