// Import the isValidObjectId function from mongoose
const { isValidObjectId } = require("mongoose");

// Function to get all data from the database with pagination
async function getAllData(res, database, page = 1, limit = 10) {
  try {
    // Calculate the skip value for pagination
    const skip = (page - 1) * limit;

    // Find all data in the database with pagination
    const users = await database.find().skip(skip).limit(limit);

    // Get the total count of documents in the database
    const count = await database.countDocuments();

    // Return the data with pagination information
    res.status(200).json({
      data: users,
      pagination: {
        page,
        limit,
        totalPages: Math.ceil(count / limit),
        totalRecords: count,
      },
    });
  } catch (error) {
    // Return an internal server error if an error occurs
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Function to get a single data from the database by ID
async function getOneData(req, res, database) {
  try {
    // Get the ID from the request parameters
    const query = req.body;

    // Find the data in the database by ID
    const data = await database.findOne(query);

    // If the data is not found, return a 404 error
    if (!data) {
      res.status(404).json({ message: "Data not found" });
    } else {
      // Return the data
      res.status(200).json(data);
    }
  } catch (error) {
    // Return an internal server error if an error occurs
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Function to insert data into the database
async function insertData(req, res, database) {
  try {
    // Get the data from the request body
    const data = req.body;

    // Check if the data already exists in the database
    // const existingData = await database.findOne({
    //   $or: [
    //     { question: data.question },
    //     { options: data.options },
    //     { answer: data.answer },
    //     { tagImage: data.tagImage },
    //   ],
    // });

    // // If the data already exists, return a 409 error
    // if (existingData) {
    //   return res.status(409).json({ message: "This entry already exists." });
    // }

    // Create a new document in the database
    const newData = await database.create(data);

    // Return the new data
    res.status(201).json(newData);
  } catch (error) {
    // Log the error and return an internal server error
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Function to update data in the database by ID
async function updateData(req, res, database) {
  try {
    // Get the ID from the request parameters
    const id = req.params.id;

    // Get the update data from the request body
    const updateToBeMade = req.body;

    // Check if the ID is a valid MongoDB ID
    if (isValidObjectId(id)) {
      // Update the data in the database
      const update = await database.updateOne({ _id: id }, updateToBeMade);

      // If the data is not found, return a 404 error
      if (update.matchedCount === 0) {
        return res.status(404).json({
          message: "No document with that id was found!",
          data: update,
        });
      }

      // Get the updated data
      const updatedData = await database.findById(id);

      // Return the updated data
      res.status(200).json(updatedData);
    } else {
      // Return a 400 error if the ID is not valid
      res.status(400).json({ message: "This is not a valid ID" });
    }
  } catch (error) {
    // Return an internal server error if an error occurs
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Function to delete data from the database by ID
async function deleteData(req, res, database) {
  try {
    // Get the ID from the request parameters
    const query = req.body;

    // Delete the data from the database
    const deleteResult = await database.deleteOne(query);

    // If the data is not found, return a 404 error
    if (deleteResult.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "No document with that id was found!" });
    }

    // Return a 204 success response
    res.status(204).send();
  } catch (error) {
    // Return an internal server error if an error occurs
    res.status(500).json({ message: "Internal Server Error" });
  }
}

// Export the functions
module.exports = {
  getAllData,
  getOneData,
  insertData,
  updateData,
  deleteData,
};
