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

// function xyz(): never {
//     console.log("This function never returns a value.");
// } // Never Type. Used for functions that never return, like throwing an error or infinite loops.

// Interface-------------------------------------------
// interface User {
//   name: string;
//   email: string;
//   password: string;
//   age?: number;
// }

// interface Admin extends User {
//   role: string;
// }

// function createUser(obj: Admin): void {
//   console.log(
//     `User Created: ${obj.name}, Email: ${obj.email}, IsAdmin: ${obj.role}`
//   );
// }

// createUser({
//   name: 'John Doe',
//   email: 'john@gmail.com',
//   password: 'password123',
//   age: 30,
//   role: 'admin'
// });

// Type Aliases-------------------------------------------
// Type aliases are used to create a new name for a type.
type arg = string | number | boolean;

function printValue(value: arg): void {
  console.log(`Value: ${value}`);
}
printValue('Hello');
printValue(42);
printValue(true);
