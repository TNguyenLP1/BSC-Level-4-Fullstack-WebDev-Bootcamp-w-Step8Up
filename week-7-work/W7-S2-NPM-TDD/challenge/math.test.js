// math.test.js
// Import the calculator functions
const { add, subtract, multiply, divide } = require("./math");

//
//ADD TESTS
//
describe("add()", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("adds positive and negative numbers", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds with zero", () => {
    expect(add(0, 7)).toBe(7);
  });
});

//
//SUBTRACT TESTS
//
describe("subtract()", () => {
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -2)).toBe(-3);
  });

  test("subtracts a positive and a negative number", () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test("subtracting from zero", () => {
    expect(subtract(0, 5)).toBe(-5);
  });
});

//
//MULTIPLY TESTS
//
describe("multiply()", () => {
  test("multiplies two positive numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiplies by zero", () => {
    expect(multiply(10, 0)).toBe(0);
  });

  test("multiplies negative and positive numbers", () => {
    expect(multiply(-2, 6)).toBe(-12);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -3)).toBe(9);
  });
});

//
//DIVIDE TESTS
//
describe("divide()", () => {
  test("divides two positive numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divides negative by positive", () => {
    expect(divide(-6, 3)).toBe(-2);
  });

  test("divides positive by negative", () => {
    expect(divide(6, -3)).toBe(-2);
  });

  test("divides two negative numbers", () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test("returns null when dividing by zero", () => {
    expect(divide(5, 0)).toBeNull();
  });

  test("returns a float for non-integer division", () => {
    expect(divide(5, 2)).toBeCloseTo(2.5);
  });
});
