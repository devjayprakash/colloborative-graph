import React from "react";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import LoginPage from "./pages/LogIn";
import SignUpPage from "./pages/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/signin">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
