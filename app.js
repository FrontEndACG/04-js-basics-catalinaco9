// Sum of Elements: Write a program that calculates the sum of all elements in an array of numbers.
const sumOfElements = (array) => {
  if (array.length === 0) return null;
  if (array.length === 1) return array[0];

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

var ex1Array = [1, 2, 3, 4, 5];
console.log("\nArray: ", ex1Array);
console.log("Sum: ", sumOfElements(ex1Array));

// Average of Elements: Calculate the average of elements in an array of numbers.
const averageOfElements = (array) => {
  if (array.length === 0) return null;
  if (array.length === 1) return array[0];

  return sumOfElements(array) / array.length;
};

var ex2Array = [10, 20, 30, 40, 50];
console.log("\nArray: ", ex2Array);
console.log("Average: ", averageOfElements(ex2Array));

// Finding the Smallest/Largest Element: Find the smallest and largest element in an array of numbers.
const findSmallestLargestElement = (array) => {
  if (array.length === 0) return { min: null, max: null };
  if (array.length === 1) return { min: array[0], max: array[0] };

  let minVal = array[0];
  let maxVal = array[0];

  for (let i = 1; i < array.length; i++) {
    if (minVal > array[i]) minVal = array[i];
    if (maxVal < array[i]) maxVal = array[i];
  }

  return { min: minVal, max: maxVal };
};

var ex3Array = [8, 2, 7, 3, 11];
console.log("\nArray: ", ex3Array);
console.log("Smallest: ", findSmallestLargestElement(ex3Array)["min"]);
console.log("Biggest: ", findSmallestLargestElement(ex3Array)["max"]);

// Reverse an Array: Create a function that reverses an array of elements.
const reverseArray = (array) => {
  if (array.length === 0 || array.length === 1) return array;

  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
};

var ex4Array = [1, 2, 3, 4, 5];
console.log("\nArray: ", ex4Array);
console.log("Reversed Array: ", reverseArray(ex4Array));

// Search for an Element: Write a program that searches for a specific element in an array and
// returns its position or an error message if the element is not found.

// OBSERVATION: function returns first position found of element in case of multiple equal elements requested
const searchForElement = (array, element) => {
  if (array.length === 0) return null;

  for (let i = 0; i < array.length; i++) {
    if (element === array[i]) return i;
  }

  return "Error 404: Element could not be found.";
};

var ex5Array = [10, 20, 30, 40, 50];
let elementToFind = 30;
console.log("\nArray: ", ex5Array);
console.log("Element to find: ", elementToFind);
console.log(
  `Element found at position ${searchForElement(ex5Array, elementToFind)}.`
);

// Counting Characters: Write a program that counts how many characters of a
// specific type (e.g., uppercase letters) are in a given string.
const countCharacters = (string, type) => {
  type = type.toLowerCase().trim().replace(" ", "");
  if (!(type.includes("uppercase") || type.includes("lowercase")))
    return "Invalid type.";

  let counterUpper = 0;
  let counterLower = 0;
  for (let i = 0; i < string.length; i++) {
    // check if letter
    if (string[i].toUpperCase() != string[i].toLowerCase()) {
      counterUpper += string[i].toUpperCase() === string[i];
      counterLower += string[i].toLowerCase() === string[i];
    }
  }

  if (type.includes("lowercase")) return counterLower;
  return counterUpper;
};

var ex1String = "Hello World";
let typeOfChar = "Uppercase letters";
console.log("\nString: ", ex1String);
console.log("Type of characters to count: ", typeOfChar);
console.log(
  `Number of ${typeOfChar.toLowerCase()}: ${countCharacters(
    ex1String,
    typeOfChar
  )}`
);

// Palindrome Check: Check if a given string is a palindrome (reads the same forwards and backward).
const palindromeCheck = (string) => {
  string = string.toLowerCase().trim();

  for (let i = 0; i <= string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) return false;
  }
  return true;
};

var ex2String = "racecar";
console.log("\nString: ", ex2String);
console.log(
  `The string "${ex2String}" is ${
    palindromeCheck(ex2String) ? "" : "NOT "
  }a palindrome.`
);

// Reverse a String: Create a function that reverses a given string.
const reverseString = (string) => {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }

  return reversed;
};

var ex3String = "javascript";
console.log("\nString: ", ex3String);
console.log("Reversed String: ", reverseString(ex3String));

// Removing Whitespace: Remove all whitespace from a given string.
const removeWhitespace = (string) => {
  let trimmed = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== " ") trimmed += string[i];
  }

  return trimmed;
};

var ex4String = "  Hello   World  ";
console.log("\nString: ", ex4String);
console.log("Modified String: ", removeWhitespace(ex4String));

// Checking for Substrings: Write a program that checks if a given string contains a specific substring.
const checkSubstrings = (string, substring) => {
  if (string.length < substring.length) return false;

  let check = false;
  let j = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substring[j]) {
      j++;
    } else {
      if (j === substring.length) return true;
      j = 0;
    }
  }
  if (j === substring.length) return true;
  return false;
};

var ex5String = "JavaScript is a powerful language";
let substringToCheck = "powerful";
console.log("\nString: ", ex5String);
console.log("Substring to check for: ", substringToCheck);
console.log(
  `The string ${
    checkSubstrings(ex5String, substringToCheck)
      ? "contains"
      : "does NOT contain"
  } the substring ${substringToCheck}.`
);

// Multiplication Table: Display the multiplication table for a given number using a for loop.
const multiplicationTable = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
  }
};

var ex1Number = 7;
console.log("\nNumber: ", ex1Number);
console.log(`Multiplication Table for ${ex1Number}:`);
multiplicationTable(ex1Number);

// Prime Numbers: Find all prime numbers up to a given number using a for loop.
const primeNumbers = (n) => {
  let numbers = "";
  if (n < 2) console.log("No prime numbers.");
  for (let i = 2; i < n; i++) {
    let ok = true;
    for (let j = 2; j < Math.sqrt(i); j++) {
      if (i % j === 0) {
        ok = false;
        break;
      }
    }
    if (ok === true) numbers += `${i}, `;
  }
  console.log(numbers);
};

var ex2Number = 20;
console.log("\nLimit: ", ex2Number);
console.log(`Prime numbers up to ${ex2Number}:`);
primeNumbers(ex2Number);

// Fibonacci Series: Display the first n numbers in the Fibonacci series using a for loop.
const fibonacci = (n) => {
  if (n < 1) return "n cannot be zero.";
  if (n === 1) return "0";
  if (n === 2) return "0, 1";

  let fib = [0, 1];
  n -= 2;

  while (n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
    n--;
  }

  return fib.toString();
};

var ex3Number = 8;
console.log("\nCount: ", ex3Number);
console.log(
  `Fibonacci Series (first ${ex3Number} numbers): `,
  fibonacci(ex3Number)
);
