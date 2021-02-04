import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import Login from "./pages/Login";
import FriendsList from "./pages/FriendsList";
import ProtectedRoute from "./pages/ProtectedRoute";
import AddFriend from "./pages/AddFriend";
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
        <li>
          <Link to="/add-new-friend">Add Friend</Link>
        </li>
      </nav>
      <Switch>
        <ProtectedRoute exact path="/protected">
          <FriendsList />
        </ProtectedRoute>
        <ProtectedRoute exact path="/add-new-friend">
          <AddFriend />
        </ProtectedRoute>
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
