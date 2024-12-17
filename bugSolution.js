function foo(a = 0, b = 0) {
  return a + b;
}

function bar() {
  let a = 10;
  let b = 20;
  return foo(a, b);
}

console.log(bar()); // This will print 30

//The solution handles the case where parameters are not defined, by setting default values for a and b.

function baz() {
  return foo(); // This will return 0.
}

console.log(baz()); // 0