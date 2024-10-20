const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const mongoose = require("mongoose");

const tempelatePath = path.join(__dirname, "../tempelates");

app.use(express.json());
app.set("view engine", "hbs");
app.set("views", tempelatePath);

mongoose
  .connect("mongodb://localhost:27017/Signup")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });

app.get("/", (req, res) => {
  res.render("signup");
});

app.post("/signup", async (req, res) => {
  const data = req.body;
  console.log(data);

  const SignUpSchema = mongoose.model(
    "SignUp",
    mongoose.Schema({
      email: String,
      telefon: String,
    })
  );

  const saveit = new SignUpSchema({ email: data.email, telefon: data.telefon });

  await saveit.save();

  res.render("mainpage.html");
});

app.listen(3000, () => {
  console.log("Faleminderit!");
});
