// Primitives: number, string, boolean
// More complex: arrays, objects
// Function types, parameters

// Primitives

// Declare and initialize a variable 'age' of type 'number' with the value 13
let age: number = 13;

// Update the value of 'age' to 21
age = 21;

// Declare a variable 'userName' of type 'string'
let userName: string;

// Assign the value 'Lorena' to the variable 'userName'
userName = 'Lorena';

// Declare a variable 'isInstructor' of type 'boolean'
let isInstructor: boolean;

// Assign the value 'true' to the variable 'isInstructor'
isInstructor = true;

// More complex types

// Declare a variable 'hobbies' as an array of strings
let hobbies: string[];

// Assign an array of strings to the 'hobbies' variable
hobbies = ['Reading', 'Shopping'];

// Declare a variable 'person' as an object with properties 'name' and 'age'
// let person: {
//     name: string, 
//     age: number
// };

// Assign an object with 'name' and 'age' properties to the 'person' variable
// person = {
//     name: 'Lorena',
//     age: 21
// };

// Uncommenting the following code would result in a type error, 
// as the object structure does not match the declared type of 'person'

// person = {
//     isEmployee: true
// };

// Declare a variable 'people' as an array of objects with 'name' and 'age' properties
// let people: {
//     name: string;
//     age: number
// }[];

// Type inference

// TypeScript infers the type of the variable 'course' based on the value assigned to it
// In this case, 'course' is inferred as type 'string' because it is initially assigned a string value
// let course = 'React - The Complete Guide';

// Attempting to assign a number to 'course' after it has been inferred as a string will result in a type error
// TypeScript will flag this as an error because 'course' has been inferred as a string type
// course = 12341;

// Union Types

// Declare a variable 'course' with a union type of 'string' or 'number'
// This means that 'course' can hold values of either type 'string' or 'number'
let course: string | number = 'React - The Complete Guide';

// Assigning a number to 'course' is allowed because it is compatible with the union type
course = 12341;

// Assigning Type Aliases

// Define a type alias 'Person' for objects with 'name' of type 'string' and 'age' of type 'number'
type Person = {
    name: string, 
    age: number
}

// Declare a variable 'person' with the type alias 'Person'
let person: Person;

// Declare a variable 'people' as an array of objects with the type alias 'Person'
let people: Person[];

// Functions & types

// Define a function named 'add' that takes two parameters, 'a' and 'b', both of type 'number'
// The function returns the sum of 'a' and 'b'
function add(a: number, b: number) {
    return a + b;
}

// Define a function named 'printOutput' that takes a parameter 'value' of type 'any'
// The function logs the value to the console
function printOutput(value: any) {
    console.log(value);
}

// Generics

// Define a function named 'insertAtBeggining' that takes a generic type 'T'
// It takes two parameters: an array of type 'T' named 'array' and a value of type 'T' named 'value'
function insertAtBeggining<T>(array: T[], value: T) {
    // Create a new array 'newArray' with 'value' added at the beginning using spread syntax
    const newArray = [value, ...array];
    // Return the new array
    return newArray; 
}

// Create a demo array of numbers
const demoArray = [1, 2, 3];

// Call the 'insertAtBeggining' function with the demo array and -1
// The function returns a new array with -1 inserted at the beginning
const updatedArray = insertAtBeggining(demoArray, -1); // [-1, 1, 2, 3]

// Call the 'insertAtBeggining' function with a string array and 'd'
// The function returns a new array with 'd' inserted at the beginning
const stringArray = insertAtBeggining(['a', 'b', 'c'], 'd');

// Uncommenting the following line would result in a type error
// TypeScript will flag this as an error because 'updatedArray[0]' is inferred as a number
// updatedArray[0].split(''); // Can't call split on a number

// Classes & TypeScript

// Define a class named 'Student'
class Student {
    // Define properties for firstName, lastName, age, and make courses private
    // Uncommented properties will be created by TypeScript based on constructor parameters

    // firstName: string;
    // lastName: string;
    // age: number;
    // private courses: string[];

    // Define the constructor for the class
    constructor(
        public firstName: string, 
        public lastName: string, 
        public age: number, 
        private courses: string[]
    ) {}

    // Define a method 'enrol' to enroll the student in a course
    enrol(courseName: string) {
        this.courses.push(courseName);
    }

    // Define a method 'listCourses' to list the courses the student is enrolled in
    listCourses() {
        return this.courses.slice();
    }
}

// Create an instance of the 'Student' class
const student = new Student('Lorena', 'Silva', 21, ['Angular']);

// Enroll the student in a new course
student.enrol('React Native');

// Uncommenting the following line would result in an error
// TypeScript will flag this as an error because 'courses' is a private property
// student.listCourses(); => Angular, React Native

// Uncommenting the following line would result in an error
// TypeScript will flag this as an error because 'courses' is a private property
// student.courses => Angular, React Native

// Working with Interfaces

// Define an interface named 'Human'
interface Human {
    // Declare properties firstName and age of type string and number respectively
    firstName: string;
    age: number;

    // Declare a method greet with no parameters and void return type
    greet: () => void;
}

// Declare a variable Luan of type Human
let Luan: Human;

// Assign an object to 'Luan' that adheres to the Human interface
Luan = {
    firstName: 'Luan',
    age: 22,
    // Implement the greet method
    greet() {
        console.log('Hello!');
    },
};

// Define a class named 'Instructor' that implements the Human interface
class Instructor implements Human {
    // Define properties firstName and age
    firstName: string;
    age: number;
    
    // Implement the greet method
    greet() {
        console.log('Hi!');
    }
}
