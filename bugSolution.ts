function greet(person: string, date: string) {
  console.log(`Hello ${person}, today is ${date}`);
}

greet("John Doe", new Date().toDateString());