import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import MarkertingApp from "./components/MarkertingApp";
import Header from "./components/Header";

const generateClassName = createGenerateClassName({
  productionPrefix: "cont",
});

const App = () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarkertingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
