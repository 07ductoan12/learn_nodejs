// module.exports -> export
// require -> import

const firstModule = require("./first-module.js");

console.log(firstModule.add(10, 20));

try {
  console.log("trying to divide by zero");
  let results = firstModule.divide(0, 0);
  console.log(results);
} catch (error) {
  console.log("Caught an error", error.message);
}

try {
  console.log("trying to divide by zero");
  let results = firstModule.divide(0, 100);
  console.log(results, "results");
} catch (error) {
  console.log("Caught an error", error.message);
}

// module wrapper
// {
//   function(exports, require, module, __filename, __dirname){
//     // code
//   }
// }
