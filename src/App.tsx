import "./scss/globals.scss";
import { useState } from "react";
import Home from "./components/Home.tsx";
import Test from "./components/Test.tsx";
import Login from "./components/Login.tsx";
import Navbar from "./components/Navbar.tsx";
import Profile from "./components/Profile.tsx";
import { Route, Routes } from "react-router-dom";
import Noroutes from "./components/Noroutes.tsx";
import Register from "./components/Register.tsx";
import Leaderboard from "./components/Leaderboard.tsx";
import { shareContext } from "./context/shareContext.tsx";

function App() {
  const [sharedUsername, setSharedUsername] = useState("");
  return (
    <div className="main">
      <shareContext.Provider
        value={{
          sharedUsername,
          setSharedUsername,
        }}
      >
        <Navbar></Navbar>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/test" Component={Test} />
          <Route path="/profile" Component={Profile} />
          <Route path="/scoreboard" Component={Leaderboard} />
          <Route path="*" Component={Noroutes} />
        </Routes>
      </shareContext.Provider>
    </div>
  );
}

export default App;
