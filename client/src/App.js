import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect  } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Home from "./views/Home/Home"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import Events from "./views/Events/Events"
import ChurchCreation from "./views/ChurchDirectoryCreation/ChurchDirectoryCreation"
import ChurchDirectory from "./components/ChurchDirectory/ChurchDirectory"
import { Provider } from "react-redux";
import store from "./store";

//Test
import Landing from "./components/layout/Landing";
import PrivateRoute from "./components/private-route/PrivateRoute";
import AdminPage from './views/Admin/AdminPage';
import ChurchLeader from './views/ChurchLeader/ChurchLeader';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/landing" component={Landing} />
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register}/> 
          <Switch>
            <PrivateRoute exact path="/Home" component={Home} />
            <PrivateRoute exact path="/Events" component={Events}/>
            <PrivateRoute exact path="/ChurchDirectory" component={ChurchDirectory}/>
            <PrivateRoute exact path="/ChurchCreation" component={ChurchCreation} />
            <PrivateRoute exact path="/Admin" component={AdminPage} />
            <PrivateRoute exact path="/ChurchLeader" component={ChurchLeader} />
          </Switch>
          <Route path="/">
            <Redirect to="/landing" />
          </Route>
        </div>
      </Router>   
    </Provider> 
  );
}

export default App;
