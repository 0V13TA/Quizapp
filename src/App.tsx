import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import { shareContext } from "./context/shareContext.tsx";

function App() {
  const [loggedIn, setLoggedIn] = useState("");
  return (
    <div>
      <shareContext.Provider
        value={{
          loggedIn,
          setLoggedIn,
        }}
      >
        <Navbar></Navbar>
      </shareContext.Provider>
    </div>
  );
}

export default App;
