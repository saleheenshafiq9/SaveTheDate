import React from "react";
import Main from "./Components/Main";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import store from "./Components/redux/store";
import {Provider} from "react-redux";


function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>
      <Main />
      </BrowserRouter>
      </Provider>
      
    </div>
  );
}

export default App;
