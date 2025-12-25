import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Songs from "./pages/Songs";
import NavBar from "./components/Navigation/NavBar";
import FullScreenNav from "./components/Navigation/FullScreenNav";

const App = () => {
  

  return (
    <div className="overflow-x-hidden">
      <NavBar/>
      <FullScreenNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/songs" element={<Songs />} />
      </Routes>
    </div>
  );
};

export default App;
