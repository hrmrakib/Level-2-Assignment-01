function formatString(input: string, toUpper?: boolean): string {
  if (toUpper) {
    return input.toLocaleUpperCase();
  } else {
    return input.toLocaleLowerCase();
  }
}


function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  const filtered = items.filter((i) => i.rating >= 4);
  return filtered;
}



function concatenateArrays<T>(...arrays: T[][]): T[]{
  return arrays.flat();
}

const x1 = concatenateArrays<string>(["a", "b"], ["c"]);     
const x2 = concatenateArrays([1, 2], [3, 4], [5]);  


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


function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  products.sort((a, b) => b.price - a.price);
  return products[0] || null;
}


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (
    day === Day.Monday ||
    day === Day.Tuesday ||
    day === Day.Wednesday ||
    day === Day.Thursday ||
    day === Day.Friday
  ) {
    return "Weekday";
  } else {
    return "Weekend";
  }
}

async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n); 
      }
    }, 1000);
  });
}

