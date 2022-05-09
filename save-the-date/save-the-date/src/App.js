import React from "react";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import {UserProvider} from "./contexts/user-context";

function App() {
  return (
    <div>
      <BrowserRouter>
      <UserProvider>
      <Main />
        <Footer />
      </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
