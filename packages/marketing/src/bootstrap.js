import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    // This function is called when the user navigates from one page to another
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname: currentPathname } = history.location;
      if (currentPathname !== nextPathname) {
        // nextPathname is the path that the user is trying to navigate to
        history.push(nextPathname);
      }
    },
  };
};

// Context/Situation #1
// We are running this file in development in isolation
// we are using our local index.html file
// which DEFINITELY has an element with an id of '_marketing-dev-root'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  // Assuming our container doesn't have an element  with id '_marketing-dev-root'...
  if (devRoot) {
    // We are probably running in isolation
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// Context/Situation #2
// We are running this file in development or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of '_marketing-dev-root' exists
// WE DO NOT WANT try to immediately render the app
export { mount };
