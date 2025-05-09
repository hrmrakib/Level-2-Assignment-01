// Problem 1:
function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toLocaleUpperCase();
  } else {
    return input.toLocaleLowerCase();
  }
}

const str = formatString("Hello", false);
// console.log(str);

// Problem 2:
function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filtered = items.filter((i) => i.rating >= 4);
  return filtered;
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

const f = filterByRating(books);
//   console.log(f)

// Problem 3:
function concatenateArrays<T>(...arrays: T[][]): T[]{
  return arrays.flat();
}

const x1 = concatenateArrays<string>(["a", "b"], ["c"]);     
const x2 = concatenateArrays([1, 2], [3, 4], [5]);  

console.log(x1);

// Problem 4:

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    console.log(`Make: ${this.make}, Year: ${this.year}`);
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    console.log(`Model: ${this.model}`);
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
// myCar.getInfo();
// myCar.getModel();

// Problem 5:
function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

// console.log(processValue(45))

// Problem 6:

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
 products.filter((product)=> Math.max(product.price))
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

getMostExpensiveProduct(products);
// Output: { name: "Bag", price: 50 }
