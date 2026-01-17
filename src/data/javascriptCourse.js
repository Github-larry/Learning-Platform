export const javascriptCourse = {
  id: 'javascript-basics',
  title: 'JavaScript Fundamentals',
  description: 'Master the basics of JavaScript programming',
  lessons: [
    {
      id: 1,
      title: "Introduction to JavaScript",
      topic: "JavaScript Basics",
      difficulty: "Beginner",
      duration: "15 min",
      content: `
# Welcome to JavaScript!

JavaScript is a programming language that runs in web browsers and powers interactive websites. It's one of the most popular programming languages in the world!

## Why Learn JavaScript?

JavaScript allows you to:
- Create interactive websites
- Build mobile apps
- Develop server applications with Node.js
- Create games and animations

## Your First Program

Every programmer starts with "Hello World". In JavaScript, we use **console.log()** to print messages:

\`\`\`javascript
console.log("Hello World!");
\`\`\`

**Try it yourself!** Copy this code to the editor and click Run.

## Variables: Storing Information

Variables are like containers that hold data. Think of them as labeled boxes where you store information.

\`\`\`javascript
let name = "Alice";
let age = 25;
let isStudent = true;

console.log(name);  // Prints: Alice
console.log(age);   // Prints: 25
\`\`\`

### Variable Types:
- **let**: For values that can change
- **const**: For values that stay the same

\`\`\`javascript
const PI = 3.14159;  // This won't change
let score = 0;        // This can change
score = 100;          // Updated!
\`\`\`

## Data Types

JavaScript has several data types:

\`\`\`javascript
let text = "Hello";           // String
let number = 42;              // Number
let isTrue = true;            // Boolean
let nothing = null;           // Null
let notDefined;               // Undefined
\`\`\`

**Practice Time!** Create variables with your own name, age, and favorite color.
      `,
      quiz: [
        {
          question: "What does console.log() do in JavaScript?",
          options: [
            "Prints output to the console",
            "Creates a new variable",
            "Deletes a variable",
            "Saves a file"
          ],
          correct: 0,
          explanation: "console.log() prints messages to the browser console, which is useful for debugging and seeing output."
        },
        {
          question: "Which keyword is used for variables that won't change?",
          options: ["let", "const", "var", "static"],
          correct: 1,
          explanation: "The 'const' keyword is used for constant values that won't be reassigned."
        },
        {
          question: "What is the output of: console.log(typeof 42)?",
          options: ["string", "number", "integer", "float"],
          correct: 1,
          explanation: "The typeof operator returns 'number' for numeric values in JavaScript."
        }
      ]
    },
    {
      id: 2,
      title: "Functions in JavaScript",
      topic: "JavaScript Basics",
      difficulty: "Beginner",
      duration: "20 min",
      content: `
# JavaScript Functions

Functions are reusable blocks of code that perform specific tasks. They're like recipes - you write them once and use them many times!

## Why Use Functions?

Functions help you:
- **Organize code**: Keep related code together
- **Reuse code**: Write once, use many times
- **Make code readable**: Give meaningful names to operations

## Creating a Function

Here's the basic syntax:

\`\`\`javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));  // Hello, Alice!
console.log(greet("Bob"));    // Hello, Bob!
\`\`\`

**Components:**
- **function**: The keyword to declare a function
- **greet**: The function name
- **(name)**: Parameter - input to the function
- **return**: Sends a value back

## Functions with Multiple Parameters

\`\`\`javascript
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));      // 8
console.log(add(10, 20));    // 30
\`\`\`

## Arrow Functions (Modern Syntax)

Arrow functions are a shorter way to write functions:

\`\`\`javascript
// Traditional function
function multiply(a, b) {
  return a * b;
}

// Arrow function (same thing!)
const multiply = (a, b) => a * b;

console.log(multiply(4, 5));  // 20
\`\`\`

**When to use arrow functions:**
- For short, simple functions
- When you want cleaner syntax
- In modern JavaScript code

## Real-World Example

\`\`\`javascript
// Calculate discount price
const getDiscountPrice = (price, discount) => {
  const discountAmount = price * (discount / 100);
  return price - discountAmount;
};

console.log(getDiscountPrice(100, 20));  // 80
console.log(getDiscountPrice(50, 10));   // 45
\`\`\`

**Challenge:** Create a function that converts Celsius to Fahrenheit!
Formula: (celsius × 9/5) + 32
      `,
      quiz: [
        {
          question: "What keyword is used to send a value back from a function?",
          options: ["send", "return", "output", "give"],
          correct: 1,
          explanation: "The 'return' keyword is used to send a value back from a function to where it was called."
        },
        {
          question: "What is the output of this code?\n\nconst double = x => x * 2;\nconsole.log(double(5));",
          options: ["5", "10", "25", "Error"],
          correct: 1,
          explanation: "The arrow function doubles the input value. double(5) returns 5 * 2 = 10."
        },
        {
          question: "How many parameters can a function have?",
          options: ["Only 1", "Maximum 2", "Maximum 10", "As many as needed"],
          correct: 3,
          explanation: "Functions can have any number of parameters, though too many can make code hard to read."
        }
      ]
    },
    {
      id: 3,
      title: "Arrays and Loops",
      topic: "JavaScript Basics",
      difficulty: "Intermediate",
      duration: "25 min",
      content: `
# Working with Arrays

Arrays are like lists - they store multiple values in a single variable. Think of them as a shopping list or a to-do list!

## Creating Arrays

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = ["text", 42, true, null];

console.log(fruits[0]);  // apple (first item)
console.log(fruits[2]);  // orange (third item)
\`\`\`

**Remember:** Arrays start counting from 0!

## Array Properties and Methods

\`\`\`javascript
let colors = ["red", "green", "blue"];

console.log(colors.length);    // 3
colors.push("yellow");         // Add to end
console.log(colors);           // ["red", "green", "blue", "yellow"]

colors.pop();                  // Remove from end
console.log(colors);           // ["red", "green", "blue"]
\`\`\`

## Looping Through Arrays

### For Loop (Traditional)

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Prints: 1, 2, 3, 4, 5
\`\`\`

### For...of Loop (Modern)

\`\`\`javascript
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Prints: apple, banana, orange
\`\`\`

## Modern Array Methods

These are powerful tools for working with arrays:

### .map() - Transform Each Item

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(num => num * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
\`\`\`

### .filter() - Keep Only Some Items

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);  // [2, 4, 6]
\`\`\`

### .reduce() - Combine Into One Value

\`\`\`javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);  // 15
\`\`\`

## Real-World Example

\`\`\`javascript
let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 75 }
];

// Get all prices
let prices = products.map(p => p.price);
console.log(prices);  // [1000, 25, 75]

// Find expensive items
let expensive = products.filter(p => p.price > 50);
console.log(expensive);
// [{ name: "Laptop", price: 1000 }, { name: "Keyboard", price: 75 }]

// Calculate total
let total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total);  // 1100
\`\`\`

**Challenge:** Create an array of numbers and use .map() to square each one!
      `,
      quiz: [
        {
          question: "What is the index of the first item in an array?",
          options: ["1", "0", "-1", "first"],
          correct: 1,
          explanation: "Arrays in JavaScript (and most programming languages) are zero-indexed, meaning the first item is at index 0."
        },
        {
          question: "Which method adds an item to the end of an array?",
          options: ["add()", "push()", "append()", "insert()"],
          correct: 1,
          explanation: "The push() method adds one or more items to the end of an array."
        },
        {
          question: "What does [1,2,3].map(x => x * 2) return?",
          options: ["[1,2,3]", "[2,4,6]", "[3,6,9]", "6"],
          correct: 1,
          explanation: "The map() method transforms each element. Here it doubles each number: [1*2, 2*2, 3*2] = [2,4,6]."
        }
      ]
    }
  ]
};