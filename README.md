# light-kit.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
The unique part is type safety, easier and no compilation.

1. Math functions 
2. Event function
3. Make function
4. Selectors

## Math functions
```
// import math functions from light-kit js 
import { lightMath } from "light-kitjs";

// the arguments are type, minimum and maximum number.
const num = lightMath.randNum("int", 1, 15);

console.log(num);
```

## Event function
```
// import the event function
import { event } from "light-kitjs";

// the arguments are element, event type, callback
event("#button", "click", () => {
  console.log("clicked!");
});
```

## Make function
```
// import the make function
import { make } from "light-kitjs";

// this function is easier Version of 'document.createElement()'
const box = make("div", {
  text: "hello world", // inner text
  classes: ["box"] // multiple classes
});

document.body.appendChild(box); // add in body
```

## Selectors
```
// Selectors are built in functions 
// query selector 
_(".box");

// id selector
$("box");
```

## Installation
```
npm i light-kitjs
```

## Update
```
npm update light-kitjs
```

## Version
```
npm list light-kitjs
```
