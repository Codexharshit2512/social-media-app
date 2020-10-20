import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/global/Header";
import RegisterForm from "./components/registerForm/RegisterForm";
import LoginForm from "./components/loginForm/LoginForm";
import PostForm from "./components/dashboard/PostForm";
import Dashboard from "./screens/Dashboard";
import UserDetail from "./screens/UserDetail";
import Test from "./screens/Test";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/signUp" component={RegisterForm} />
          <Route exact path="/signIn" component={LoginForm} />
          <Route exact path="/post" component={PostForm} />
          <Route exact path="/user" component={UserDetail} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
