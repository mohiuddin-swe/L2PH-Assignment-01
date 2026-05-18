"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Problem 1
function filterEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 === 0);
}
// Problem 2
function reverseString(input) {
    return input.split("").reverse().join("");
}
function checkType(value) {
    if (typeof value === "string") {
        return "String";
    }
    return "Number";
}
// Problem 4
function getProperty(obj, key) {
    return obj[key];
}
function toggleReadStatus(book) {
    return {
        ...book,
        isRead: true,
    };
}
// Problem 6
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Student extends Person {
    grade;
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}
// Problem 7
function getIntersection(array1, array2) {
    return array1.filter((item) => array2.includes(item));
}
// Problem 1 Test
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// Problem 2 Test
console.log(reverseString("typescript"));
// Problem 3 Test
console.log(checkType("Hello"));
console.log(checkType(42));
// Problem 4 Test
const user = {
    id: 1,
    name: "John Doe",
    age: 21,
};
console.log(getProperty(user, "name"));
// Problem 5 Test
const myBook = {
    title: "TypeScript Guide",
    author: "Jane Doe",
    publishedYear: 2024,
};
console.log(toggleReadStatus(myBook));
// Problem 6 Test
const student = new Student("Alice", 20, "A");
console.log(student.getDetails());
// Problem 7 Test
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
//# sourceMappingURL=solutions.js.map