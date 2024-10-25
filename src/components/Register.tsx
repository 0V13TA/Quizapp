import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShareContext } from "../context/useShareContext";
import * as jwtDecode from "jwt-decode";
import "../scss/form.scss";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const { setSharedUsername } = useShareContext();
  const navigate = useNavigate();

  const decodeToken = (token: string) => {
    try {
      const decoded = jwtDecode(token); // Decode the token
      return decoded; // Return the decoded token
    } catch (error) {
      console.log("Error decoding json web token: ", error);
      return null; // or return false
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (
      !image ||
      !["image/jpeg", "image/png", "image/jpg"].includes(image.type)
    ) {
      alert("Please upload a valid image file (JPG, JPEG, or PNG).");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("image", image as Blob);
    formData.append("email", email);

    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok && decodeToken(data.token)) {
        // Use the modified decodeToken function
        navigate("/profile");
        setSharedUsername(data.username);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form">
      <h1>Register</h1>
      <form className="form-inputs" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="form-username"
          placeholder="Username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="form-email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="form-password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="confirmPassword"
          id="form-confirm-password"
          placeholder="Confirm Password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div className="form-image">
          <label htmlFor="image">Image: </label>
          <input
            type="file"
            name="image"
            id="form-image"
            onChange={(e) => {
              const files = e.target.files;
              setImage(files && files.length > 0 ? files[0] : null); // Set to null if no file is selected
            }}
            placeholder="image"
          />
        </div>
        <input type="submit" value="Register" />
      </form>

      <p>
        Already Have An Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}
