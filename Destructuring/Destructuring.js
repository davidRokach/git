(function () {
  // 1. Destructuring
  // Array
  {
    const fruits = ["Apple", "Banana", "Orange"];
    const [a, b, c] = fruits;
    console.log(a); // Apple
    console.log(b); // Banana
    console.log(c); // Orange
  }
  // Object
  {
    let user = { name: "John", age: 17 };
    const { name, age } = user;
    console.log(name); // John
    console.log(age); // 17
  }
  // 2. Spread syntax ...
  {
    const fruits = ["Apple", "Banana", "Orange"];
    const [a, ...rest] = fruits;
    console.log(a); // Apple
    console.log(rest); // ['Banana', 'Orange']
  }
  // 3. Default values
  {
    const fruits = ["Apple", "Banana"];
    const [a = "asd", b, c = "Orange"] = fruits;
    console.log(a); // Apple
    console.log(b); // Banana
    console.log(c); // Orange
  }
  // 4. Nullish coalescing operator
  {
    const name = null;
    const userName = name ?? "Guest";
    console.log(userName); // Guest

    const obj = { a: 1, b: 2 };
    const { a, b, c } = obj;
  }

  // class exercise
  //#region Exercise 1
  {
    console.log("EXERCISE 1");
    let item = ["Egg", 0.25, 12];

    let [name, price, quantity] = item;
    //   let name = item[0];
    //   let price = item[1];
    //   let quantity = item[2];
    console.log(`Item: ${name}, Quantity: ${quantity}, Price: ${price}`);
    console.log();
  }
  //#endregion

  //#region Exercise 2

  {
    let numbers = [3, 5, 4, 2, 6, 1];
    let newNumbers = numbers.sort();
    let [one, two, three, four, five, six] = newNumbers;
    console.log(
      `One: ${one}, Two: ${two}, Three: ${three}, Four: ${four}, Five: ${five}, Six: ${six}`
    );
  }
  //#endregion

  //#region Exercise 3
  {
    let user = { name: "John", years: 30 };
    let { name, years: age, isAdmin = false } = user;
    console.log(name);
    console.log(age);
    console.log(isAdmin);
    console.log();
  }
  //#endregion

  //#region Exercise 4
  {
    console.log("EXERCISE 4");

    let person = [12, "Chris", "Owen"];

    //   let firstName = person[1];
    //   let lastName = person[2];
    //   let age = person[0];
    let [age, firstName, lastName] = person;

    console.log(`Person - Age: ${age}, Name: ${firstName} ${lastName}`);
  }
  //#endregion

  //#region Exercise 5
  {
    console.log("EXERCISE 5");

    let person = ["Chris", 12, "Owen"];

    //   let firstName = person[0];
    //   let lastName = person[2];
    let [firstName, , lastName] = person;

    console.log(`Name: ${firstName} ${lastName} `);
    console.log();
  }
  //#endregion Exercise 6
  {
    console.log("EXERCISE 6");

    const students = ["Christina", "Jon", "Alexandare"];

    // Write your code here
    const [, , lastName] = students;

    console.log(lastName);
    console.log();
  }
  //#endregion
  {
    console.log("EXERCISE 7");

    const moreStudents = ["Chris", ["Ahmad", "Antigoni"], ["Toby", "Sam"]];

    // Write your code here
    const [student1, [student2, student3], [student4, student5]] = moreStudents;

    console.log(student1, student2, student3, student4, student5);
    console.log();
  }
  //#endregion
})();
