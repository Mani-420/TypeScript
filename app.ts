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
// type arg = string | number | boolean;

// function printValue(value: arg): void {
//   console.log(`Value: ${value}`);
// }
// printValue('Hello');
// printValue(42);
// printValue(true);

// Types of Intersection-------------------------------------------
// type User = {
//     name: string;
//   email: string;
// };

// type Admin = User & {
//     role: string;
// };

// function createAdmin(admin: Admin): void {
//     console.log(
//         `Admin Created: ${admin.name}, Email: ${admin.email}, Role: ${admin.role}`
//     );
// }

// OOP--------------------------------------------------------------------------
// class Student {
//     name: string;
//     age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     greet(): void {
//         console.log(
//             `Hello, my name is ${this.name} and I am ${this.age} years old.`
//         );
//     }
// }

// let s1 = new Student('Alice', 30);
// s1.greet();

// OOP--------------------------------------------------------------------------
// class University {
//   constructor(public name: string, public location: string) {
//     console.log(`University Name: ${this.name}, Location: ${this.location}`);
//   }
// }

// let uni1 = new University('Harvard', 'Cambridge, MA');

// Access Specifiers--------------------------------------------------------------------------
// class Bottle {
//   constructor(private brand: string, private price: number) {
//     console.log(`Brand: ${this.brand}, Price: ${this.price}`);
//   }

//   getBrand(): string {
//     return this.brand;
//   }
// }

// let b1 = new Bottle('Coca Next', 100);
// console.log(b1.getBrand()); // Accessing private property through a public method

// ReadOnly--------------------------------------------------------------------------
// Readonly properties can only be assigned during initialization or in the constructor. by using the `readonly` keyword.
// Their values cannot be changed after that.

// Getters and Setters--------------------------------------------------------------------------
// Getters and setters allow you to define methods that can be used to get or set the value of a property.

// Static Members--------------------------------------------------------------------------
// Static members belong to the class itself rather than to instances of the class.
// They can be accessed without creating an instance of the class.

// Abstract Classes--------------------------------------------------------------------------
// Abstract classes cannot be instantiated directly and are meant to be extended by other classes.

// Functions--------------------------------------------------------------------------
//Functions in TypeScript can be defined with types for parameters and return values.
// They are used to encapsulate reusable logic and can be either named or anonymous.
// function add(a: number, b: number): number {
//     return a + b;
// }
// function greet(name: string): string {
//     return `Hello, ${name}!`;
// }

// function mnop(name: string, age: number, cb: (arg: string) => void) {
//   cb(`Name: ${name}, Age: ${age}`);
// }

// mnop('Mithu', 30, (arg: string) => {
//   console.log(`Callback called with argument: ${arg}`);
// });

// Rest and Spread--------------------------------------------------------------------------
// The rest operator allows you to represent an indefinite number of arguments as an array.

// function sum(...args: number[]): void {
//   console.log(`Arguments: ${args}`);
// }

// sum(1, 2, 3, 4, 5); // Returns 15

// Spread operator can be used to combine arrays or objects.---------
// The spread operator allows you to expand an array or object into individual elements.

// let arr3: number[] = [1, 2, 3];
// let arr4: number[] = [...arr3, 4, 5];
// console.log(`Combined Array: ${arr4}`);

// Generics--------------------------------------------------------------------------
// Generics allow you to create reusable components that can work with any data type.
// They are defined using angle brackets and can be used with functions, classes, and interfaces.

// Generics functions--------------------------------------------------------------------------
// function anyValue<T>(value: T): T {
//     return value;
// }

// console.log(anyValue<string>('Hello, Generics!'));
// console.log(anyValue<number>(42));
// console.log(anyValue<boolean>(true));
// console.log(anyValue<Array<number>>([1, 2, 3, 4, 5]));

// Type Assertions--------------------------------------------------------------------------
// Type assertions allow you to tell the TypeScript compiler to treat a value as a specific type.
// let someValue: any = 'Hello, TypeScript!';
// let strLength: number = (someValue as string).length;
// console.log(`Length of string: ${strLength}`);

// Type Casting--------------------------------------------------------------------------
// Type casting is similar to type assertions but is used to convert a value from one type to another.
// let num: any = '123';
// let numValue: number = Number(num);
// console.log(`Converted number: ${numValue}`);

// Non-Null Assertion Operator--------------------------------------------------------------------------
// The non-null assertion operator (`!`) is used to assert that a value is not null or undefined.
// let someValue: string | null = 'Hello, TypeScript!';
// let strLength: number = someValue!.length;

// Type Guards--------------------------------------------------------------------------
// Type guards are used to narrow down the type of a variable within a conditional block.

function jkl(arg: string | number): void {
  if (typeof arg === 'string') {
    console.log(arg.toUpperCase());
  } else if (typeof arg === 'number') {
    console.log(`Number value: ${arg}`);
  } else {
    console.log('Unknown type');
  }
}
