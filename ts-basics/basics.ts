// Primitives: number, string, boolean
//More complex types: arrays, objects
// Function types, parameters

let age: number;
age = 12;

let userName: string;

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray: Array<number> = [1,2,3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c', 'd'], 'e');

updatedArray[0].split('');