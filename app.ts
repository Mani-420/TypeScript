// Array-------------------------------------------
// Arrays in TypeScript can be defined using the type followed by square brackets.
// let arr: number[] = [1, 2, 3, 4, 5];
// console.log(arr.map((item) => item * 2));

// Tuples-------------------------------------------
// Tuples are a fixed-length array with specific types for each index.
// let arr2: [number, string, boolean] = [1, 'hello', true];
// console.log(arr2[0]);

// Enums-------------------------------------------
// Enums are a way to define a set of named constants.
// They can be numeric or string-based.
// enum Color {
//   Red = 'RED',
//   Green = 'GREEN',
//   Blue = 'BLUE'
// }
// console.log(Color.Blue);

// Any, Unknown, Void, Null, Undefined, Never-------------------------------------------
// The 'any' type allows any value, 'unknown' is safer than 'any', 'void' is used for functions that do not return a value,
// 'null' and 'undefined' are used for absence of value, and 'never' is used for functions that never return.
// let age: number;    // Number Type
// let name;       // Any Type
// let isActive: boolean = true; // Boolean Type

// let rollNo: unknown; // Unknown Type. Can be any type but must be checked before use.
// function abcd(): void {
//     console.log("This function does not return anything.");
// }       // Void Type. Used for functions that do not return a value.
// let data: null = null; // Null Type. Represents no value.
// let notDefined: undefined = undefined; // Undefined Type. Represents a variable that has not been assigned a value.
