# How the Four Pillars of OOP Help Manage Complexity in TypeScript Projects

## Introduction

Object-Oriented Programming (OOP) is a programming approach used to organize and structure code efficiently. In TypeScript, OOP helps developers build scalable and maintainable applications.

The four main pillars of OOP are:
- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

These concepts help reduce complexity and improve code organization in large projects.

---

# 1. Inheritance

Inheritance allows one class to use properties and methods from another class.

This helps reduce repeated code.

## Example

```ts
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
}
```

Here:
- `Student` inherits properties from `Person`
- The same logic does not need to be written again

---

# Benefits of Inheritance

- Reduces duplicate code
- Improves code structure
- Makes projects easier to maintain

---

# 2. Polymorphism

Polymorphism allows different classes to use the same method in different ways.

## Example

```ts
class Animal {
  makeSound(): string {
    return "Animal sound";
  }
}

class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}
```

Each class provides its own implementation of the same method.

---

# Benefits of Polymorphism

- Makes applications more flexible
- Simplifies method handling
- Helps manage large systems

---

# 3. Abstraction

Abstraction hides internal implementation details and shows only necessary functionality.

## Example

```ts
abstract class Payment {
  abstract processPayment(): void;
}

class CreditCardPayment extends Payment {
  processPayment(): void {
    console.log("Payment processed");
  }
}
```

The user only interacts with the required functionality without knowing internal details.

---

# Benefits of Abstraction

- Reduces complexity
- Improves readability
- Makes systems easier to understand

---

# 4. Encapsulation

Encapsulation protects data from direct access.

It is commonly implemented using access modifiers such as:
- `private`
- `protected`
- `public`

## Example

```ts
class BankAccount {
  private balance: number = 0;

  deposit(amount: number): void {
    this.balance += amount;
  }

  getBalance(): number {
    return this.balance;
  }
}
```

The balance cannot be changed directly outside the class.

---

# Benefits of Encapsulation

- Protects data
- Prevents unwanted modifications
- Improves security and reliability

---

# How OOP Helps in Large Projects

Large TypeScript projects often contain many files, components, and business logic. OOP helps by:
- Separating responsibilities
- Organizing related logic into classes
- Making code reusable
- Improving maintainability

This makes the project easier to manage as it grows.

---

# Conclusion

The four pillars of OOP help developers build clean and maintainable TypeScript applications.

- Inheritance reduces repetition
- Polymorphism improves flexibility
- Abstraction hides unnecessary complexity
- Encapsulation protects data

Using these concepts properly makes large-scale projects easier to develop and maintain.