import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/global/header/Header";
import RegisterForm from "./components/registerForm/RegisterForm";
import LoginForm from "./components/loginForm/LoginForm";
import PostFormContainer from "./components/dashboard/addPost/PostFormContainer";
import Dashboard from "./screens/Dashboard";
import UserDetail from "./screens/UserDetail";
import Test from "./screens/Test";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signUp" component={RegisterForm} />
          <Route exact path="/signIn" component={LoginForm} />
          <Route exact path="/post" component={PostFormContainer} />
          <Route exact path="/user/:username" component={UserDetail} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
