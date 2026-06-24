//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

//Start coding here
/*if (lightBulbStatus === "On") {
  console.log(`Light bulb is ${lightBulbStatus}`);
} else if (lightBulbStatus === "Off") {
  console.log(`Light bulb is ${lightBulbStatus}`);
} else {
  console.log("Please choose the correct input (On/Off)");
}*/
let x =
  lightBulbStatus === "Off"
    ? `Light bulb is ${lightBulbStatus}`
    : lightBulbStatus === "On"
      ? `Light bulb is ${lightBulbStatus}`
      : "Please choose the correct input (On/Off)";
console.log(x);
