# Quizapp

## What the quizapp will be able to do

- Register users
- Login users
- Display questions to users
- Keep track of user's score
- Display the final score of the user
- Display the questions and answers in a random order
- Retrieve users password
- Allow the to share thier results
- Show the top three with the highest scores

---

## Technologies I will be using

- Express.js
  > This is used for creating api endpoints and handling routes
- Nodemailer
  > This is for handling emails
- Framer motion
  > This is for handling animations
- Mongoose
  > This is for connecting to the database
- bcrypt
  > This is password encryption and security
- React route dom
  > This is for handling navigations and creating protected routes for unauthorised access

---

## Themes I will be using

- Blue
- Black
- Purple

## Mongoose Methods

### Query Methods

- `find(query, projection)`: Finds all documents that match the query.
- `findOne(query, projection)`: Finds the first document that matches the query.
- `findById(id)`: Finds a document by its id.
- `findByIdAndUpdate(id, update, options)`: Finds a document by its id and updates it.
- `findByIdAndRemove(id, options)`: Finds a document by its id and removes it.

### Insert Methods

- `insertOne(document)`: Inserts a single document into the collection.
- `insertMany(documents)`: Inserts multiple documents into the collection.

### Update Methods

- `updateOne(filter, update, options)`: Updates the first document that matches the filter.
- `updateMany(filter, update, options)`: Updates all documents that match the filter.
- `findOneAndUpdate(filter, update, options)`: Finds the first document that matches the filter and updates it.

### Delete Methods

- `deleteOne(filter, options)`: Deletes the first document that matches the filter.
- `deleteMany(filter, options)`: Deletes all documents that match the filter.
- `findOneAndDelete(filter, options)`: Finds the first document that matches the filter and deletes it.

### Aggregate Methods

- `aggregate(pipeline)`: Performs an aggregation operation on the collection.

### Count Methods

- `countDocuments(query, options)`: Counts the number of documents that match the query.

### Distinct Methods

- `distinct(field, query, options)`: Finds the distinct values of a field that match the query.

### Find and Modify Methods

- `findAndModify(query, sort, doc, options)`: Finds a document that matches the query and modifies it.
- `findAndRemove(query, sort, options)`: Finds a document that matches the query and removes it.
- `findAndReplace(query, replacement, options)`: Finds a document that matches the query and replaces it.
