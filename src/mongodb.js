const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/LoginSignup")
  .then(() => {
    console.log("mongodb connected");
  })
  .catch(() => {
    console.log("failed to connect");
  });

const SignUpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  telefon: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("Collectionn1", LogInSchema);
