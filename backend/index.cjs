//#region Declarations
require("dotenv").config();
const express = require("express");
const connectDB = require("./database/db.cjs");
const { Question, User, TagImages } = require("./database/schematic.cjs");
const interactWithDb = require("./apis/apis.cjs");
const userAuth = require("./auth/userAuth.cjs");
const cors = require("cors");
const {
  uploadUserWithImage,
  uploadTagImage,
} = require("./apis/imageUpload.cjs");
const app = express();

const storage = require("./config/multer.cjs");
const multer = require("multer");

const parser = multer({ storage: storage });
app.use(express.json());
app.use(cors());

//#endregion

//#region Users
app.get("/users/:limit?/:page?", (req, res) =>
  interactWithDb.getAllData(res, User, req.params.page, req.params.limit)
);

app.get("/users", (req, res) => interactWithDb.getOneData(req, res, User));

app.post("/users", parser.single("image"), (req, res) =>
  uploadUserWithImage(req, res, User)
);

app.put("/users/:id", (req, res) => {
  interactWithDb.updateData(req, res, User);
});

app.delete("/users", (req, res) => {
  interactWithDb.deleteData(req, res, User);
});

// Authentication

app.post("/users/auth", parser.none(), (req, res) => userAuth(req, res, User));

//#endregion Users

//#region Question

app.get("/questions/:limit?/:page?", (req, res) =>
  interactWithDb.getAllData(res, Question, req.params.page, req.params.limit)
);

app.get("/questions", (req, res) =>
  interactWithDb.getOneData(req, res, Question)
);

app.post("/questions", (req, res) =>
  interactWithDb.insertData(req, res, Question)
);

app.put("/questions/:id", (req, res) =>
  interactWithDb.updateData(req, res, Question)
);

app.delete("/questions", (req, res) =>
  interactWithDb.deleteData(req, res, Question)
);

//#endregion

//#region Tags
app.get("/tags/:limit?/:page?", (req, res) =>
  interactWithDb.getAllData(res, TagImages, req.params.page, req.params.limit)
);

app.get("/tags", (req, res) => interactWithDb.getOneData(req, res, TagImages));

app.post("/tags", parser.single("tagImage"), (req, res) =>
  uploadTagImage(req, res, TagImages)
);

app.delete("/tags", (req, res) =>
  interactWithDb.deleteData(req, res, TagImages)
);

//#endregion

connectDB();
const port = process.env.VITE_API_URL || 3000;

app.listen(port, () =>
  console.log(
    `Server ${port === 3000 ? "listening on port 3000" : "running on " + port}`
  )
);
