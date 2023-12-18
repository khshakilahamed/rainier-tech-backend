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
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  const hashPass = await bcrypt.hash(this.password, process.env.SALT_ROUNDS);
  this.password = hashPass;

  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
