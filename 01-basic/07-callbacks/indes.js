const fs = require("fs");
const path = require("path");

function person(name, callbackFn) {
  console.log(`Hello ${name}`);
  callbackFn();
}

function address() {
  console.log("India");
}

person("Duc Toan", address);

filePath = path.join(__dirname, "input.txt");
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  console.log(data);
});
