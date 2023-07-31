import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarkertingApp from "./components/MarkertingApp";
import Header from "./components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarkertingApp />
      </div>
    </BrowserRouter>
  );
};

export default App;
