const lodash = require("lodash")

const names = ["duc", "toan", "nguyen", "dasa"]
const capitalize = lodash.map(names, lodash.capitalize());

console.log(capitalize)
