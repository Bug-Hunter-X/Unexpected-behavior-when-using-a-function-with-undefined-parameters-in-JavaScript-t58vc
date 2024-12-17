function foo(a, b) {
  return a + b;
}

function bar() {
  let a = 10;
  let b = 20;
  return foo(a, b);
}

console.log(bar()); // This will print 30

// The unexpected behavior occurs when you try to use the function in a context where the variables a and b are not defined.

function baz() {
  return foo(); // This will throw an error.
}

console.log(baz()); // Uncaught TypeError: Cannot read properties of undefined (reading '0')