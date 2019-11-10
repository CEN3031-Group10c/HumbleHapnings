import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"

import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div> 
        <Switch>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register}/> 
          <Route exact path="/Home" component={Home} />
          <Route exact path="/">
            <Redirect to="/Login" />
          </Route>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Provider> 
  );
}

export default App;
