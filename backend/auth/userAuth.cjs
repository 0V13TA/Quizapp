const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function userAuth(req, res, database) {
  try {
    const { username, password } = req.body;
    const user = await database.findOne({ username: username });

    if (!user) {
      return res.status(404).json({
        message: "Username does not exist",
      });
    }

    const passwordCompare = bcrypt.compareSync(password, user.password);

    if (!passwordCompare) {
      return res.status(401).json({ message: "Incorrect Password" });
    } else {
      const jwtToken = process.env.VITE_JWT_TOKEN;
      const token = jwt.sign({ username: user.username }, jwtToken, {
        expiresIn: "1h",
      });
      return res.status(200).json({
        message: "Login Successful",
        token: token,
        username: username,
      });
    }
  } catch (error) {
    console.error("Authentication Failed: ", error);
    res
      .status(500)
      .json({ message: "Sorry Login Failed. Pls Try Again Later" });
  }
}

module.exports = userAuth;
