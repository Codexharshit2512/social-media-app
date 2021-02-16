import React from "react";
import { Switch, Route, useHistory, withRouter } from "react-router-dom";
import Header from "../components/global/header/Header";
import SignUp from "../screens/SignUp";
import SignIn from "../screens/SignIn";
import PostFormContainer from "../components/dashboard/addPost/PostFormContainer";
import Test from "../screens/Test";
import Dashboard from "../screens/Dashboard";
import UserDetail from "../screens/UserDetail";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

const AppRouter = (props) => {
  // const history = useHistory();
  const path = props.history.location.pathname.toLowerCase();
  console.log(path);
  return (
    <>
      {path == "/signup" || path == "/signin" ? null : <Header />}
      <Switch>
        <PublicRoute exact path="/signUp" component={SignUp} />
        <PublicRoute exact path="/signIn" component={SignIn} />
        <PrivateRoute exact path="/" component={Dashboard} />
        <PrivateRoute exact path="/post" component={PostFormContainer} />
        <PrivateRoute exact path="/user/:uid" component={UserDetail} />
        <PrivateRoute exact path="/test" component={Test} />
      </Switch>
    </>
  );
};

export default withRouter(AppRouter);
