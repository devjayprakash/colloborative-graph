import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/LogIn";
import SignUpPage from "./pages/SignUp";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signin">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
