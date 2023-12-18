const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const hashPass = await bcrypt.hash(this.password, 12);
  this.password = hashPass;

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
