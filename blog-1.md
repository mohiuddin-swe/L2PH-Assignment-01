# How Generics Help Build Reusable and Type-Safe Code in TypeScript

## Introduction

When developing applications in TypeScript, we often need to write functions or components that work with different types of data. Writing separate code for every type can make the project repetitive and difficult to maintain.

Generics solve this problem by allowing us to create reusable logic while still keeping strong type checking.

---

# What Are Generics?

Generics allow a function, class, or interface to work with different types dynamically.

Instead of using a fixed type like `string` or `number`, we use a placeholder type.

Example:

```ts
function identity<T>(value: T): T {
  return value;
}
```

In this example:
- `T` represents a type
- The actual type is determined when the function is called

---

# Why Generics Are Useful

Without Generics, we may need multiple functions for similar tasks.

Example:

```ts
function getString(value: string): string {
  return value;
}

function getNumber(value: number): number {
  return value;
}
```

Both functions do the same thing but for different types.

Using Generics:

```ts
function identity<T>(value: T): T {
  return value;
}
```

Now one function can handle multiple data types.

---

# Using Generics With Arrays

Generics are commonly used with arrays.

```ts
function getFirstElement<T>(array: T[]): T {
  return array[0];
}
```

Example:

```ts
const firstNumber = getFirstElement([1, 2, 3]);
const firstString = getFirstElement(["A", "B", "C"]);
```

TypeScript automatically understands:
- `firstNumber` is a number
- `firstString` is a string

This keeps the code type-safe.

---

# Using Generics With Objects

Generics also work well with object properties.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

Example:

```ts
const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

getProperty(user, "name");
```

This ensures that only valid keys can be accessed from the object.

---

# Advantages of Generics

## Reusability

One function can work with multiple types.

---

## Type Safety

TypeScript can detect invalid types during development.

---

## Cleaner Code

Less duplicate code makes projects easier to manage.

---

## Better Scalability

Generics are very useful in large applications where many data types are used.

---

# Conclusion

Generics are an important feature in TypeScript because they help create reusable and type-safe code. They reduce duplication, improve maintainability, and make applications easier to scale.

For large projects, Generics help developers write cleaner and more flexible code without losing strict typing.