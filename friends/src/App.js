import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./pages/Login";
import FriendsList from "./pages/FriendsList";
import ProtectedRoute from "./pages/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page </Link>
        </li>
      </nav>
      <Switch>
        <ProtectedRoute exact path="/protected" component={FriendsList} />
        <Route
          path="/login"
          component={Login}
          render={(props) => <Login {...props} />}
        />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
