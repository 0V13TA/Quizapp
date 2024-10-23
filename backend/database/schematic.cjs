const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const tagImageSchematics = new mongoose.Schema(
  {
    tagImage: {
      type: String,
      required: true,
    },
    tagName: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const tagImages = mongoose.model("TagImages", tagImageSchematics);

const questionSchema = new mongoose.Schema(
  {
    questionType: {
      type: String,
      required: true,
      enum: ["multiple-choice", "true-false"],
    },
    tag: {
      type: String,
      required: true,
      ref: "TagImages",
      validate: {
        validator: async (value) => {
          const tagImage = await tagImages.findOne({ tagName: value });
          return tagImage !== null;
        },
        message: "Tag does not exist",
      },
    },
    question: { type: String, required: true, unique: true },
    options: {
      type: Array,
      required: true,
      unique: true,
      validate: (v) => v.length >= 2,
    },
    answer: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return this.options.includes(v);
        },
        message: "Answer must be one of the options",
      },
    },
  },
  {
    timestamps: true,
  }
);

const question = mongoose.model("Question", questionSchema);

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      set: (v) => bcrypt.hashSync(v, 10),
    },
    image: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) =>
          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v),
        message: "Invalid email address",
      },
    },
    points: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true }
);

const user = mongoose.model("User", userSchema);

module.exports = {
  Question: question,
  User: user,
  TagImages: tagImages,
};
