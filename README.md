# Unexpected behavior when using a function with undefined parameters in JavaScript

This repository contains a demonstration of an unexpected behavior that can occur when using a function with undefined parameters in JavaScript. The function `foo` expects two parameters (`a` and `b`), but if you call it without any parameters, it will throw an error, because it tries to access the 0 index of `undefined`, resulting in a `TypeError`.  The solution provides a way to handle undefined parameters by using default parameters. This ensures the function will not throw an error when called with fewer than two arguments.

## Bug Report

The unexpected behavior occurs when you try to use the function in a context where the variables a and b are not defined.

```javascript
function foo(a, b) {
  return a + b; 
}

function baz() {
  return foo(); // This will throw an error. 
}
console.log(baz()); // Uncaught TypeError: Cannot read properties of undefined (reading '0')
```

## Solution

The best way to solve this issue is to use default parameters in the function declaration. This way, if the parameters are not passed, they default to a specific value. This avoids accessing `undefined` properties and stops unexpected errors.

```javascript
function foo(a = 0, b = 0) {
  return a + b;
}

function baz() {
  return foo(); // This will return 0. 
}
console.log(baz()); // 0
```