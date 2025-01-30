// Importing the Chai library to use its assert method, which offers more features than the built-in Node.js assertions
import { assert } from "chai";
//We are importing our Functions from src/index.js
import {
  helloWorld,
  addition,
  subtraction,
  multiplication,
  division,
  remainder,
  exponentiation,
} from "../src/index.js";

const assert = require('chai');
const {helloWorld, addition, subtraction, multiplication, division, remainder, exponentiation}=require("../src/index.js");
// Writing tests
// Use the describe function, passing "helloWorld Function" as the first argument and an anonymous arrow function as the second.
// Within the body of the anonymous function, use the it function, passing "should return a string" as the first argument and an anonymous function as the second.
//Inside the body of the it function's anonymous function, create a variable called result and set it to helloWorld().
//Use the assert.typeOf method to test the result. Pass result as the first argument, "string" as the second argument, and "The return value should be a string" as the third argument.
// Write another it function under the first one (still inside the describe function).
// Create a new variable called result and set it to helloWorld().
// Call assert.equal, passing result as the first argument, "Hello World" as the second argument, and "The return value should be 'Hello World'" as the third argument.


describe("helloWorld Function", ()=>{
  it("should return a string", ()=>{
    const result = helloWorld();
    assert.typeOf(result, "string", "The result should be a string");
  })
  it("should return 'Hello World'", ()=>{
    const result = helloWorld();
    assert.equal(result, "Hello World", "The result should be 'Hello World'");

  });
});

// Testing the simple calculator
// Repeat the describe and it steps for the addition function.
// Inside the it function, create a variable called result and set it to addition(5, 10).
// Use the assert.equal method, passing result as the first argument, 15 as the second argument, and "5 + 10 should equal 15" as the third argument
// In your terminal run npm test to view your test results.
// Repeat the describe and it steps for each function (subtraction, multiplication, division, remainder, exponentiation), updating the inputs in the assert.equal method to match the relevant function and expected outputs.

describe("calculator function",()=>{
  it("should return correct sum for addition",()=>{
    const result = addition(5,10);
    assert.equal(result,15, "5 + 10 should equal 15")

  })
  it("should return correct result for subtraction",()=>{
    const result = subtraction(10,5);
    assert.equal(result,5, "10 - 5 should equal 5");
  })
  it("should return correct result for multiplication", ()=>{
    const result = multiplication(5,3);
    assert.equal(result,15, "5 * 3 should equal 15");
  })
  it("should return correct result for division", ()=>{
    const result = division(15,3);
    assert.equal(result,5, "15 / 3 should equal 5");
  })
  it("should return correct result for remainder", ()=>{
    const result = remainder(10,3);
    assert.equal(result,1, "10 % 3 should equal 1");
  })
  it("should return correct result for exponentiation", ()=>{
    const result = exponentiation(2,3);
    assert.equal(result,8, "2^3 should equal 8");
  });

});