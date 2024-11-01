// App.tsx
import "./scss/globals.scss";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
import Test from "./auth/Test.tsx";
import Profile from "./auth/Profile.tsx";
import Leaderboard from "./auth/Leaderboard.tsx";
import Noroutes from "./components/Noroutes.tsx";
import { ShareProvider } from "./context/shareContext.tsx"; // Adjust the import as needed

function App() {
  return (
    <div className="main">
      <ShareProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/test" element={<Test />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scoreboard" element={<Leaderboard />} />
          <Route path="*" element={<Noroutes />} />
        </Routes>
      </ShareProvider>
    </div>
  );
}

export default App;
