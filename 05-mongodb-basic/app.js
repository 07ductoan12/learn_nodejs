const mongoose = require("mongoose");

mongoose
  .connect("mongodb://root:rootpassword@localhost:27017")
  .then(() => console.log("database connected successfully"))
  .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActivate: Boolean,
  tags: [String],
  createAt: { type: Date, default: Date.now() },
});

const User = mongoose.model("User", userSchema);

async function runQueryExample() {
  try {
    // const newUser = await User.create({
    //   name: "Duc Toan",
    //   email: "ductoan@gmail.com",
    //   age: 24,
    //   isActivate: true,
    //   tags: ["developer", "design", "manager"],
    // });

    // const newUser2 = await User.create({
    //   name: "DToan",
    //   email: "ductoan@gmail.com",
    //   age: 24,
    //   isActivate: true,
    //   tags: ["developer", "design", "manager"],
    // });

    // await newUser.save();
    // await newUser2.save();

    // console.log("Created new user", newUser);

    // const allUsers = await User.find({})
    // console.log(allUsers)

    // const allUsers = await User.find({ isActivate: true });
    // console.log(allUsers);

    const getDToan = await User.findOne({ name: "DToan" });
    console.log(getDToan)
  } catch (error) {
    console.log("Error ->", error);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExample();
