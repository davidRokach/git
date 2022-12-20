//#region clas
const someObject = {
  friends: [{ name: "Vic" }, { name: "John" }, { name: "Jane" }],
  color: "red",
  isEvil: true,
};
console.log(someObject.friends[1].name);
//#endregion

//#region 1. Upvotes vs Downvotes - Easy

function getVoteCount(object) {
  console.log(object);
  return object.upvotes - object.downvotes;
}
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })); // ➞ 13

console.log(getVoteCount({ upvotes: 2, downvotes: 33 })); //➞ -31

console.log(getVoteCount({ upvotes: 132, downvotes: 132 })); //➞ 0
//#endregion

//#region 2. 50-30-20 Strategy - Easy
function fiftyThirtyTwenty(ati) {
  const object = {
    Needs: ati / 2,
    Wants: ati / (1 / 3),
    Savings: ati / 5,
  };
  return object;
}
console.log(fiftyThirtyTwenty(10000)); //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

//#endregion

//#region 3. from class - Easy
function watchedSeries(arr) {
  arr.forEach((element) => {
    if (element.hasWatched) {
      console.log(`i have watched ${element.Title} - ${element.rating} stars`);
    } else {
      console.log(
        `i have not watched ${element.Title} - ${element.rating}stars`
      );
    }
  });
}
const ArraySeries = [
  { Title: "The Wire", rating: 5, hasWatched: true },
  { Title: "Rick and morty", rating: 4.4, hasWatched: true },
  { Title: "True detective", rating: 4.3, hasWatched: false },
];
watchedSeries(ArraySeries);
//#endregion

//#region 4. Volume of a Box - Easy
function volumeOfBox(object) {
  return object.width * object.length * object.height;
}
console.log(volumeOfBox({ width: 2, length: 5, height: 1 })); //➞ 10 }
//#endregion

//#region 5. Luke, I Am Your ... - Easy

function LukeRelation(str, arr) {
  for (const Character of arr) {
    if (Character.name === str) {
      console.log(`Luke, I am your ${Character.Relation}.`);
    }
  }
}
const LukeFamily = [
  { name: "Darth Vader", Relation: "father" },
  { name: "Leia", Relation: "sister" },
  { name: "Han", Relation: "brother in law" },
  { name: "R2D2", Relation: "droid" },
];
LukeRelation("R2D2", LukeFamily);
//#endregion

//#region 1. Which Generation Are You? - Medium

function generationFun(
  num,
  string,
  arr,
  gener = 3,
  great = `great `,
  generM = -3
) {
  let name = "";

  if (num > 0) {
    for (const element of arr) {
      if (element.generation === num && element.sex === string) {
        return (name = element.name);
      }
    }
    arr.push({ name: `${great}grandsun`, generation: gener, sex: "m" });
    arr.push({ name: `${great}granddaughter`, generation: gener, sex: "f" });

    return generationFun(num, string, arr, gener + 1, great + "great ");
  } else if (num < 0) {
    for (const element of arr) {
      if (element.generation === num && element.sex === string) {
        return (name = element.name);
      }
    }
    arr.push({ name: `${great}grandsun`, generation: generM, sex: "m" });
    arr.push({ name: `${great}granddaughter`, generation: generM, sex: "f" });
    return generationFun(num, string, arr, gener, great + "great ", generM - 1);
  } else {
    return (name = arr[0].name);
  }
}
const generation = [
  { name: "me", generation: 0 },
  { name: "daughter", generation: 1, sex: "f" },
  { name: "son", generation: 1, sex: "m" },
  { name: "granddaughter", generation: 2, sex: "f" },
  { name: "grandsun", generation: 2, sex: "m" },
  { name: "father", generation: -1, sex: "m" },
  { name: "mother", generation: -1, sex: "f" },
  { name: "grandfather", generation: -2, sex: "m" },
  { name: "grandmother", generation: -2, sex: "f" },
];
console.log(generationFun(-8, "f", generation));

//#endregion
