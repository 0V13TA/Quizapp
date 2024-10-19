const bcrypt = require("bcrypt");

async function userAuth(req, res, database) {
  try {
    const { username, password } = req.body;
    const user = await database.findOne({ username: username });

    if (!user) {
      return res.status(404).json({ message: "Username does not exist" });
    }

    const passwordCompare = bcrypt.compareSync(password, user.password);

    if (!passwordCompare) {
      return res.status(401).json({ message: "Incorrect Password" });
    } else {
      return res.status(200).json({ message: "Authentication successful" });
    }
  } catch (error) {
    console.error("Authentication Failed: ", error);
    res.status(500).json({ message: error });
  }
}

module.exports = userAuth;
