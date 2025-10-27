// traditional
function greetTraditional(name) {
  var name = name || "Guest";
  return "Hello, " + name;
}
console.log(greetTraditional()); // "Hello, Guest"

const greetArrow = (name = "Guest") => `Hello, ${name}`;
console.log(greetArrow()); // "Hello, Guest"