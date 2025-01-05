function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("John Doe", new Date());

//Error: Argument of type 'Date' is not assignable to parameter of type 'string'.