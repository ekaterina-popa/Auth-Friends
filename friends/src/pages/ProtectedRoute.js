import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        const token = window.localStorage.getItem("token");
        console.log("token", token);
        if (token) {
          return <Component {...props} />;
        }

        return <Redirect to="/login" />;
      }}
    />
  );
};
export default ProtectedRoute;
