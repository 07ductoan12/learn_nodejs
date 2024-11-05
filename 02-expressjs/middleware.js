const express = require("express");
const app = express();

// define middleware function
const myFirstMiddleware = (req, res, next) => {
  console.log("this first middleware will run on the every request");

  next();
};

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("Home page");
});

app.get("/about", (req, res) => {
  res.send("About page");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
