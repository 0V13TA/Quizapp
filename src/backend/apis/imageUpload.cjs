function handleError(res, errorMessage) {
  console.error(errorMessage);
  return res.status(500).json({ message: "Internal server error" });
}

async function uploadUserWithImage(req, res, database) {
  try {
    const file = req.file.path || "https://via.placeholder.com/150";

    const { username, password, email } = req.body;
    if (!username || !password || !email || !file) {
      return res.status(400).json({
        message: "All fields are required: username, password and email",
      });
    }

    const user = {
      username: username,
      password: password,
      image: file,
      email: email,
    };

    const createdUser = await database.create(user);
    res
      .status(200)
      .json({ message: "User  created successfully", user: createdUser });
  } catch (error) {
    return handleError(res, "Error creating user: " + error);
  }
}

async function uploadTagImage(req, res, database) {
  try {
    const image = req.file.path;
    const { tagName } = req.body;
    if (!image || !tagName) {
      return res
        .status(400)
        .json({ message: "All fields required: tagImage, tagName" });
    }

    const tag = {
      tagImage: image,
      tagName: tagName,
    };

    const createdTag = await database.create(tag);
    res
      .status(200)
      .json({ message: "User  created successfully", user: createdTag });
  } catch (error) {
    return handleError(res, "Error creating tag: " + error);
  }
}

module.exports = { uploadUserWithImage, uploadTagImage };
