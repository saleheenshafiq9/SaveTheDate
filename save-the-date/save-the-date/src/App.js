import React from "react";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
