What are some differences between interfaces and types in TypeScript?

Extending: 
`interface` can extend other interface and types.
`type` can extend interface and types using intersection operator (&)

Use Cases: 
`interface` is preferred for object shapes and class contracts.
`type` is more flexible, supporting unions, intersections, and more complex types.

Syntax Differences:
`interface` is limited to object-like structures.
`type` can define primitives, unions, tuples, etc., not just object shapes.


----------------------------------------------------------------------------


What is the use of the keyof keyword in TypeScript? Provide an example.

It allows for safer code when you want to work with object property names dynamically.

type Person = {
  name: string;
  age: number;
};

type PersonKeys = keyof Person; 

"name" | "age"
