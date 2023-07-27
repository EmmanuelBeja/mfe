import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// Context/Situation #1
// We are running this file in development in isolation
// we are using our local index.html file
// which DEFINITELY has an element with an id of 'dev-marketing'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  // Assuming our container doesn't have an element
  // with id 'dev-marketing'...
  if (devRoot) {
    // We are probably running in isolation
    mount(devRoot);
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-marketing' exists
// WE DO NOT WANT try to immediately render the app
export { mount };
