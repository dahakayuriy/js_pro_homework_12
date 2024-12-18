"use strict";

function removeChars(inputString, charsToRemove) {
  if (typeof inputString !== "string" || !Array.isArray(charsToRemove)) {
    return "Error: You need to enter a string and a list of characters to delete.";
  }

  const charsToRemoveLower = charsToRemove.map((char) => char.toLowerCase());

  let result = "";

  for (let char of inputString) {
    if (!charsToRemoveLower.includes(char.toLowerCase())) {
      result += char;
    }
  }

  return result;
}

const inputString = prompt("Enter the string:");

const charsToRemove = prompt(
  "Enter the characters to delete (separated by commas):"
)
  .split(",")
  .map((char) => char.trim());

alert(removeChars(inputString, charsToRemove));
