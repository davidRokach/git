// simple function

function callTheForce(forceElement) {
  // var emoji = ` `;
  // switch (forceElement) {
  //   case `lightning`:
  //     emoji = `⚡`;
  //     break;
  // }

  if (forceElement === "lightning") {
    emoji = `⚡`;
  } else if (forceElement === "fire") {
    emoji = "🔥";
  } else if (
    forceElement === "telekinesis" ||
    forceElement === "mind control" ||
    forceElement === "mind reading" ||
    forceElement === "telepathy"
  ) {
    emoji = "🧠";
  } else if (
    forceElement === "jump" ||
    forceElement === "speed" ||
    forceElement === "strength"
  ) {
    emoji = "💪";
  }

  document.write(`You called the ${emoji} power`);
}

const theQuestion = "What power do you want to call?";

// prompt the user for input and store it in a variable

// const power = prompt(theQuestion, "lightning");

// callTheForce(power);

// hoisting
//

// home work

// exercise 1 - start

function addition(x, y) {
  let num1 = prompt("write number");
  let num2 = prompt("write another number");
  let sum = Number(num1) + Number(num2);

  document.getElementById("result").innerHTML = sum;
}
// exercise 1 - end

// exercise 2 - start
function remainder(x, y) {
  let num1 = prompt("write number");
  let num2 = prompt("write another number");

  if (Number(num1) % Number(num2) === 0) {
    document.getElementById("result2").innerHTML += "no remainder";
  } else {
    document.getElementById("result2").innerHTML +=
      "the remainder is " + (Number(num1) % Number(num2));
  }
}
// exercise 2 - end

// exercise 3 - start
function capitalize() {
  let word = prompt("write word");
  let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  document.getElementById("result3").innerHTML += capitalizedWord;
  word.match();
}
// exercise 3 - end

// exercise 4 - start
function capitalizeWords() {
  let words = prompt("write words");

  const arry = words.split(" ");
  for (i = 0; i < arry.length; i++) {
    arry[i] = arry[i].charAt(0).toUpperCase() + arry[i].slice(1);
  }
  document.getElementById("result4").innerHTML += arry.join(" ");
}
// exercise 4 - end

// exercise 5 - start
function substring() {
  let Sentence = prompt("write Sentence");
  let word = prompt("write a word");

  document.getElementById("result5").innerHTML += Sentence.includes(word);
}
// exercise 6 - start
function isEven() {
  let num = prompt("write a number");
  if (num <= 0) {
    document.getElementById("result6").innerHTML = null;
  } else if (num % 2 === 0) {
    document.getElementById("result6").innerHTML = true;
  } else if (num % 2 !== 0) {
    document.getElementById("result6").innerHTML = false;
  }
}
// exercise 6 - end

// exercise 7 - start

function factorial() {
  let num = prompt("write a number");
  if (num === 0 || num === 1) {
    ocument.getElementById("result7").innerHTML = 1;
  }
  for (let i = num - 1; i >= 1; i--) {
    num = num * i;
    /* 
                    num      var i = num - 1       num *= i         i--       i >= 1?
    1st iteration:   5           4 = 5 - 1         20 = 5 * 4        3          yes   
    2nd iteration:  20           3 = 4 - 1         60 = 20 * 3       2          yes
    3rd iteration:  60           2 = 3 - 1        120 = 60 * 2       1          yes  
    4th iteration: 120           1 = 2 - 1        120 = 120 * 1      0          no             
    5th iteration: 120               0                120
    End of the FOR loop 
    */
    document.getElementById("result7").innerHTML = num;
  }
}
// exercise 7 - end

function destination(youAre, citys) {
  const cityFunc = citys();
  console.log(`${youAre} - ${cityFunc}`);
}
function tl() {
  return "Tel aviv";
}
function pt() {
  return "Petch tikva";
}

function somting() {
  let answer = "You are at ";
  destination(answer, tl);
}
