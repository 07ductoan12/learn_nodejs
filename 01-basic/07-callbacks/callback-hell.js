const fs = require("fs");
const path = require("path");

filePath = path.join(__dirname, "input.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file", err);
    return;
  }

  const modifyFileData = data.toUpperCase();
  fs.writeFile("output.txt", modifyFileData, (err) => {
    if (err) {
      console.error("Error writing file", err);
      return;
    }

    console.log("data written to the new file");

    fs.readFile("output.txt", "utf8", (err, data) => {
      if (err) {
        console.error("Error reading file", err);
        return;
      }

      console.log(data);
    });
  });
});
