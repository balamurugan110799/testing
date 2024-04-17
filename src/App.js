import logo from "./logo.svg";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Hello from "./Hello";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
