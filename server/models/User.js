const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt")

const validateEmail = function (email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const UserSchema = new Schema(
  {
  username: { 
    type: String,
    required: [true, "Username is required"],
    unique: true,
    trim: true
  },
  email: { 
    type: String,
    required: [true, "Email address is required"],
    unique: true,
    trim: true,
    lowercase: true,
    validate: [validateEmail, "Please provide a valid email address"],
  },
  password: { 
    type: String,
    required: [true, "Password is required"],
    trim: true,
  },
  score: [{ type: Object }]
}
);

UserSchema.pre("save", async function(next) {
  this.password = await bcrypt.hash(this._doc.password, 10)
  next();
});

const User = model("User", UserSchema);
module.exports = User;