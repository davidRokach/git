const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 6, 7];
console.log(arr);
const set = new Set(arr);
console.log(set);
const rtnArr = Array.from(arr);
console.log(rtnArr);

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
