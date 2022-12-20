(function (window, document) {
  console.log("clases homeWork:");
  //#region clases
  //Esay
  //#region 1. simple class creation:

  class createPreson {
    constructor(name, age, eyeColor) {
      this.name = name;
      this.age = age;
      this.eyeColor = eyeColor;
    }
    thisMe() {
      console.log(
        `my name is ${this.name}, my age is ${this.age} and the color of my eyes is ${this.eyeColor}`
      );
    }
  }

  const David = new createPreson("David", 23, "brown");
  const Yori = new createPreson("Yori", 30, "blue");

  console.log(David);
  console.log(Yori);
  Yori.thisMe();
  //#endregion

  //#region 4. upgrade exercises 2 and 3
  const DiameterInput = document.querySelector("#DiameterInput");
  const circle_drow = document.querySelector("#circle_drow");

  const x_dot1Input = document.querySelector("#x_dot1Input");
  const y_dot1Input = document.querySelector("#y_dot1Input");
  const x_dot2Input = document.querySelector("#x_dot2Input");
  const y_dot2Input = document.querySelector("#y_dot2Input");
  const rectangle_drow = document.querySelector("#rectangle_drow");

  const circleBut = document.querySelector("#circleBut");
  const rectangleBut = document.querySelector("#rectangleBut");

  //#endregion

  //#region 2. Circle
  circleBut.addEventListener("click", function () {
    class CircleCreate {
      constructor(diameter) {
        this.diameter = diameter;
      }
      scope() {
        console.log(this.diameter * Math.PI);
      }
      drow() {
        circle_drow.innerHTML = `<div
      style="
        background: lightblue;
        border-radius: 50%;
        width: ${this.diameter}px;
        height: ${this.diameter}px;
      "
    ></div>`;
      }
    }
    const inputnum = DiameterInput.value;
    const Circle = new CircleCreate(inputnum);
    Circle.scope();
    Circle.drow();
  });

  //#endregion

  //#region 3. Dot
  rectangleBut.addEventListener("click", function () {
    class Dot {
      constructor(x, y) {
        this.x = x;
        this.y = y;
      }
    }
    class RectangleCreate {
      constructor(dot1, dot2) {
        this.dot1 = dot1;
        this.dot2 = dot2;
      }
      Scope() {
        const Side1 = dot1.x - dot2.x;
        const Side2 = dot1.y - dot2.y;
        let scope = (Side1 + Side2) * 2;
        if (scope < 0) {
          scope = scope * -1;
          return scope;
        }
        return scope;
      }
      Area() {
        const Side1 = dot1.x - dot2.x;
        const Side2 = dot1.y - dot2.y;
        const Area = Side1 * Side2;
        return Area;
      }
      drow() {
        const Side1 = dot1.x - dot2.x;
        const Side2 = dot1.y - dot2.y;
        rectangle_drow.innerHTML = `<div
      style="
        background: lightblue;
        border: 1px, solid, black;
        width: ${Side1}px;
        height: ${Side2}px;
      "
    ></div>`;
      }
    }
    const dot1 = new Dot(x_dot1Input.value, y_dot1Input.value);
    const dot2 = new Dot(x_dot2Input.value, y_dot2Input.value);
    const Rectangl = new RectangleCreate(dot1, dot2);
    console.log(`the scope is: ${Rectangl.Scope()}`);
    console.log(`the Area is: ${Rectangl.Area()}`);
    Rectangl.drow();
  });
  //#endregion

  //#region 5. Classes For Fetching Information on a Sports Player
  class createPlayer {
    constructor(name, age, height, weight) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
    }
    getAge() {
      console.log(`${this.name} is age ${this.age}`);
    }
    getHeight() {
      console.log(`${this.name} is ${this.height}cm`);
    }
    getWeight() {
      console.log(`${this.name} weight ${this.weight}kg`);
    }
  }

  const p1 = new createPlayer("David Jones", 25, 174, 75);
  p1.getAge();
  p1.getHeight();
  p1.getWeight();
  //#endregion
  //Hard

  //#region 1 2D Array

  class Matrix {
    constructor(numbers) {
      this.numbers = numbers;
    }
    print() {
      console.log(...this.numbers[0]);
      console.log(...this.numbers[1]);
      console.log(...this.numbers[2]);
    }
    alter(row, col, num) {
      this.numbers[row][col] = num;
    }
    get(row, col) {
      console.log(this.numbers[row][col]);
    }
  }
  let matrix = new Matrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);
  console.log(matrix);
  matrix.print();
  console.log("new 2d print (1, 1, 9):");
  matrix.alter(1, 1, 9);
  matrix.print();
  console.log("get from 2d array (1, 1):");
  matrix.get(1, 1);
  //#endregion

  //#endregion
  // ***********************

  //#region Practice inheritance
  console.log("");
  console.log("Practice inheritance");
  class JediKnight {
    constructor(name, age, isJedi, lightSaber) {
      this.name = name;
      this.age = age;
      this.isJedi = isJedi;
      this.lightSaber = lightSaber;
    }
    myName() {
      console.log(this.name);
    }
    lightSaberSound() {
      console.log(`${this.lightSaber} go's vvvv sh sh sh sh sh`);
    }
  }
  const ObiOne = new JediKnight("ObiOne", 30, true, "red");
  console.log(ObiOne);
  ObiOne.myName();
  ObiOne.lightSaberSound();

  // ********

  class sith extends JediKnight {
    constructor(name, age, isJedi, lightSaber, darkSide) {
      super(name, age, isJedi, lightSaber);
      this.darkSide = darkSide;
    }
    strike() {
      return `vash sh sh sh ${this.darkSide}`;
    }
  }
  const starWars = new sith("ObiOne", 30, true, "red", false);
  console.log(starWars);
  console.log(starWars.strike());

  class Apprentice extends sith {
    constructor(name, age, isJedi, lightSaber, darkSide, master) {
      super(name, age, isJedi, lightSaber, darkSide);
      this.master = master;
    }
    strike() {
      console.log(`${super.strike()} ${this.master} `);
    }
  }
  const starWars23 = new Apprentice("ObiOne", 30, true, "red", false, true);
  console.log(starWars23);
  starWars23.strike();

  console.log("homeWork inheritance:");
  //#region Shape 1
  console.log("Shape 1:");

  class Shape {
    constructor(name, sides, sideLength) {
      this.name = name;
      this.sides = sides;
      this.sideLength = sideLength;
    }
    calcPerimeter() {
      const Perimeter = this.sides * this.sideLength;
      return `${this.name} perimeter = ${Perimeter} `;
    }
  }
  const square = new Shape("square", 4, 5);
  console.log(square.calcPerimeter());
  const triangle = new Shape("triangle", 3, 3);
  console.log(triangle.calcPerimeter());
  //#endregion

  //#region Shape 2
  console.log("Shape 2:");
  class Square extends Shape {
    constructor(sideLength, name, sides) {
      super(name, sides, sideLength);
      this.name = "square";
      this.sides = 4;
    }
    calcArea() {
      return `${this.name} square's area = ${this.sideLength ** 2} `;
    }
  }
  const newSquare = new Square(5);
  console.log(newSquare.calcArea());
  console.log(newSquare.calcPerimeter());
  //#endregion
  //#endregion
})(window, document);
