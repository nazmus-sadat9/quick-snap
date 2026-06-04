# lighting.js
This is a JavaScript library that makes coding easier and it made by TypeScript. This is also a frontend library. The JavaScript function are very simple at there.

## Features
The unique part is type safety, easier and no compilation.

1. Math functions 
2. makeEvent function
3. makeTag function
4. Selectors

## randNum utility
```
import { light } from "lightingjs"; // ES Module
const { light } = require("lightingjs"); // CommonJS

// the arguments are type, minimum and maximum number.
const num = light.randNum("int", 1, 15);

console.log(num);
```

## makeEvent function
```
// the arguments are element, event type, callback
makeEvent("#button", "click", () => {
  console.log("clicked!");
});
```

## makeTag function
```
// this function is easier Version of 'document.createElement()'
const box = makeTag("div", {
  text: "hello world", // inner text
  classes: ["box"] // add multiple class name
});

document.body.appendChild(box); // add in body
```

## Selectors
```
// query selector 
query(".box");

// id selector
id("box");
```

## copy utility
``` 
import { light } from "lightingjs"; // ES Module
const { light } = require("lightingjs"); // CommonJS

// make a button tag 
const btn = makeTag("button", {
  text: "copy"
});

makeEvent(btn, "click", async () => {

  const result = await light.copy("hello world"); // return true or false

});
```

## Installation
```
npm i lightingjs
```

## CDNs 
```
<script src="https://unpkg.com/lightingjs"></script> 

// or 

<script src="https://cdn.jsdelivr.net/npm/lightingjs"></script>
```

## Update
```
npm update lightingjs
```

## Version
```
npm list lightingjs
```

