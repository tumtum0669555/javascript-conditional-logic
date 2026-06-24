//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
/*let lightBulbStatus = "On";
lightBulbStatus = "";

// Start coding here.
if (lightBulbStatus === "On") {
  console.log("Light bulb is On.");
} else if (lightBulbStatus === "Broken") {
  console.log("Light bulb is Broken.");
} else if (lightBulbStatus === "Off") {
  console.log("Light bulb is Off.");
} else {
  console.log("Please choose the correct input (On/Off/Broken)");
}*/

let x =
  lightBulbStatus === "On"
    ? `Light bulb is ${lightBulbStatus}`
    : lightBulbStatus === "Off"
      ? `Light bulb is ${lightBulbStatus}`
      : lightBulbStatus === "Broken"
        ? `Light bulb is ${lightBulbStatus}`
        : "Please choose the correct input (On/Off/Broken)";
console.log(x);
