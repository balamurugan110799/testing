import logo from "./logo.svg";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import Home from "./Home";
import Hello from "./Hello";
import NotFound from "./NotFound";

function App() {

  console.log(window.location)
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
