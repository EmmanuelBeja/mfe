import React, { Lazy, Suspense, useState, useEffect } from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Header from "./components/Header";
const MarkertingLazy = React.lazy(() => import("./components/MarkertingApp"));
const AuthLazy = React.lazy(() => import("./components/AuthApp"));
const DashboardLazy = React.lazy(() => import("./components/DashboardApp"));
import Progress from "./components/Progress";

const generateClassName = createGenerateClassName({
  productionPrefix: "cont",
});

const history = createBrowserHistory();
const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth">
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              <Route path="/dashboard">
                {!isSignedIn ? <Redirect to="/" /> : <DashboardLazy />}
              </Route>
              <Route path="/" component={MarkertingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

export default App;
