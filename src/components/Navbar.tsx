import { NavLink } from "react-router-dom";
import "../scss/navbar.scss";
export default function Navbar() {
  return (
    <nav className="navbar">
      <p>Quovieta</p>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/test">Test</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/register">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
}
