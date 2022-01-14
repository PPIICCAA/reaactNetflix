import './App.css';
import React from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./pages/home.js"
import Second from "./pages/serie.js"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/series" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;