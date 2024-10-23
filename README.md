# Quizapp

## What the quizapp will be able to do

- [x] Register users
- [x] Login users
- [ ] Display questions to users
- [ ] Keep track of user's score
- [ ] Display the final score of the user
- [ ] Display the questions and answers in a random order
- [ ] Retrieve users password
- [ ] Allow the to share thier results
- [ ] Show the top three with the highest scores

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

## Session Storage Explanation and Usage

Session storage is a type of web storage that allows you to store data locally within the user's browser. The data is stored in key-value pairs and is only accessible during the current browsing session. When the user closes the browser, the data is automatically deleted.

### Usage

Session storage is useful for storing temporary data that needs to be accessed across multiple pages. Here are some use cases:

- **User authentication**: You can store the user's authentication token in session storage to verify their identity across multiple pages.
- **Shopping cart**: You can store the user's shopping cart items in session storage to retrieve them when the user navigates to the checkout page.
- **Form data**: You can store form data in session storage to prefill the form fields when the user navigates back to the page.

### Example Usage

```javascript
// Set a value in session storage
sessionStorage.setItem("username", "johnDoe");

// Get a value from session storage
const username = sessionStorage.getItem("username");

// Remove a value from session storage
sessionStorage.removeItem("username");

// Clear all values from session storage
sessionStorage.clear();
```

### Use Cases

- **Quiz App**: In the quiz app, you can store the user's score and answers in session storage to display the final score at the end of the quiz.
- **Login System**: In the login system, you can store the user's authentication token in session storage to verify their identity across multiple pages.
- **E-commerce Website**: In the e-commerce website, you can store the user's shopping cart items in session storage to retrieve them when the user navigates to the checkout page.

### Advantages

- **Security**: Session storage is more secure than local storage because the data is automatically deleted when the user closes the browser.
- **Temporary Storage**: Session storage is useful for storing temporary data that needs to be accessed across multiple pages.
- **Easy to Use**: Session storage is easy to use and provides a simple way to store and retrieve data locally within the user's browser.

### Disadvantages

- **Limited Storage**: Session storage has limited storage capacity, typically around 5MB.
- **Browser Support**: Session storage may not be supported by older browsers.
- **Data Persistence**: Session storage data is automatically deleted when the user closes the browser, which may not be desirable in some cases.

## React Router DOM

React Router DOM is a popular library for managing client-side routing in React applications. It provides a simple and efficient way to navigate between different routes in your application.

### Installation

To install React Router DOM, run the following command in your terminal:

```bash
npm install react-router-dom
```

### Basic Usage

Here's an example of how to use React Router DOM to create a simple routing system:

```jsx
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </div>
    </BrowserRouter>
  );
}
```

### Route Parameters

React Router DOM allows you to pass parameters to routes using the `:param` syntax. Here's an example:

```jsx
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function User({ match }) {
  return <h1>User {match.params.id}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li>
            <Link to="/user/1">User 1</Link>
          </li>
          <li>
            <Link to="/user/2">User 2</Link>
          </li>
        </ul>
        <Route path="/user/:id" component={User} />
      </div>
    </BrowserRouter>
  );
}
```

### Nested Routes

React Router DOM allows you to create nested routes using the `children` prop. Here's an example:

```jsx
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link to="/home/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/home/settings">Settings</Link>
        </li>
      </ul>
      <Route path="/home/dashboard" component={Dashboard} />
      <Route path="/home/settings" component={Settings} />
    </div>
  );
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

function Settings() {
  return <h1>Settings</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
        <Route path="/home" component={Home} />
      </div>
    </BrowserRouter>
  );
}
```

### Protected Routes

React Router DOM allows you to create protected routes using the `render` method. Here's an example:

```jsx
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li>
            <Link to="/protected">Protected</Link>
          </li>
        </ul>
        <ProtectedRoute path="/protected" component={Protected} />
      </div>
    </BrowserRouter>
  );
}
```

### Redirects

React Router DOM allows you to create redirects using the `Redirect` component. Here's an example:

```jsx
import React from "react";
import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li>
            <Link to="/old-path">Old Path</Link>
          </li>
        </ul>
        <Route path="/old-path" render={() => <Redirect to="/new-path" />} />
        <Route path="/new-path" component={NewPath} />
      </div>
    </BrowserRouter>
  );
}
```

### Switch

React Router DOM allows you to use the `Switch` component to render the first matching route. Here's an example:

```jsx
import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>React Router DOM Example</h1>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
```

# JSON Web Tokens (JWT)

==========================

## Overview

---

JSON Web Tokens (JWT) are a type of token-based authentication mechanism. They are digitally signed and contain a payload that can be verified and trusted.

## Advantages

---

### 1. Statelessness

JWTs are stateless, meaning that the server does not need to store any information about the user.

### 2. Security

JWTs are digitally signed, which makes them secure and tamper-proof.

### 3. Scalability

JWTs are easy to scale, as they do not require any server-side storage.

## Disadvantages

---

### 1. Limited Payload Size

JWTs have a limited payload size, which can make them unsuitable for large amounts of data.

### 2. No Built-in Revocation

JWTs do not have a built-in revocation mechanism, which means that once a token is issued, it cannot be revoked.

### 3. Vulnerability to Token Theft

JWTs are vulnerable to token theft, which can allow an attacker to access sensitive data.

## Uses

---

### 1. Authentication

JWTs are commonly used for authentication, as they provide a secure way to verify the identity of a user.

### 2. Authorization

JWTs can be used for authorization, as they can contain information about the user's permissions and roles.

### 3. Data Encryption

JWTs can be used to encrypt data, as they provide a secure way to protect sensitive information.

## Example Usage

---

### Generating a JWT Token

```javascript
const jwt = require("jsonwebtoken");

const secretKey = "my-secret-key";

function generateToken(user) {
  const token = jwt.sign(user, secretKey, { expiresIn: "1h" });
  return token;
}
```

### Verifying a JWT Token

```javascript
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    return null;
  }
}
```

### Example Usage with Session Storage

```javascript
function login(user) {
  const token = generateToken(user);
  sessionStorage.setItem("token", token);
}

function authenticate() {
  const token = sessionStorage.getItem("token");
  const user = verifyToken(token);
  if (user) {
    return user;
  } else {
    return null;
  }
}
```

## Environment Variables in React Vite App

### Overview

---

Environment variables are values that can be set outside of your code, and are often used to store sensitive information such as API keys or database credentials. In a React Vite app, you can use environment variables to configure your application's behavior without having to hardcode values.

### Setting Environment Variables

---

To set environment variables in a React Vite app, you can use the `.env` file. This file is used to store environment variables that can be accessed by your application.

#### Creating a `.env` File

To create a `.env` file, navigate to the root of your project and create a new file called `.env`. This file should be in the same directory as your `vite.config.js` file.

#### Setting Environment Variables in the `.env` File

In the `.env` file, you can set environment variables using the following syntax:

```makefile
VARIABLE_NAME=value
```

For example:

```makefile
API_KEY=1234567890
DATABASE_URL=https://example.com/database
```

#### Using Environment Variables in Your Code

To use environment variables in your code, you can access them using the `import.meta.env` object. For example:

```javascript
import { createApp } from "vue";

const app = createApp(App);

console.log(import.meta.env.API_KEY); // outputs "1234567890"
console.log(import.meta.env.DATABASE_URL); // outputs "https://example.com/database"
```

Note that environment variables are only available in the browser if they are prefixed with `VITE_`. For example:

```makefile
VITE_API_KEY=1234567890
VITE_DATABASE_URL=https://example.com/database
```

#### Using Environment Variables in Vite Config

You can also use environment variables in your `vite.config.js` file. For example:

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  // ...
  env: {
    API_KEY: process.env.VITE_API_KEY,
    DATABASE_URL: process.env.VITE_DATABASE_URL,
  },
});
```

### Best Practices

---

Here are some best practices to keep in mind when using environment variables in your React Vite app:

- Use the `.env` file to store environment variables, rather than hardcoding them in your code.
- Use the `VITE_` prefix for environment variables that need to be available in the browser.
- Use the `import.meta.env` object to access environment variables in your code.
- Avoid committing sensitive information such as API keys or database credentials to your Git repository. Instead, use environment variables to store this information.

### Example Use Case

---

Here is an example of how you might use environment variables in a React Vite app:

```javascript
// .env
VITE_API_KEY=1234567890
VITE_DATABASE_URL=https://example.com/database

// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // ...
  env: {
    API_KEY: process.env.VITE_API_KEY,
    DATABASE_URL: process.env.VITE_DATABASE_URL,
  },
})

// App.vue
<template>
  <div>
    <h1>API Key: {{ apiKey }}</h1>
    <h1>Database URL: {{ databaseUrl }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apiKey: import.meta.env.API_KEY,
      databaseUrl: import.meta.env.DATABASE_URL,
    }
  }
}
</script>
```

In this example, we define two environment variables `VITE_API_KEY` and `VITE_DATABASE_URL` in the `.env` file. We then access these variables in our `vite.config.js` file and make them available to our React component using the `import.meta.env` object.
