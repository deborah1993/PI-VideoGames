import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing/Landing.js";
import Form from "./components/Form/Form.js";
import Home from "./components/Home/Home.js";
import GameDetail from "./components/GameDetail/GameDetail.js";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/videogame/:id" element={<GameDetail />}></Route>
          <Route path="/add" element={<Form />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
