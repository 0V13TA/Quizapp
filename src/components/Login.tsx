import { useContext, useRef, useState } from "react";
import "../scss/form.scss";
import { Link, useNavigate } from "react-router-dom";
import { shareContext } from "../context/shareContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const button = useRef(null);
  const { setSharedUsername } = useContext(shareContext);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await fetch("http://localhost:3000/users/auth", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.message.toLowerCase() === "login successful") {
        setSharedUsername(username);
        button.current.value = data.message;
        sessionStorage.setItem("token", data.token);

        setTimeout(() => {
          navigate("/profile");
        }, 2000);
      } else if (data.message.toLowerCase() === "username does not exist") {
        button.current.value = data.message;
      } else if (data.message.toLowerCase() === "incorrect password") {
        button.current.value = data.message;
      }
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  }

  return (
    <div className="form">
      <h1>Login</h1>
      <form className="form-inputs" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="form-username"
          placeholder="Username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="form-password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" ref={button} />
      </form>

      <p>
        Don't Have An Account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}
