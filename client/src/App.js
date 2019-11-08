import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import Events from "./views/Events/Events"


const App = () => {
  return (
    <div> 
      <Switch>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/> 
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Events" component={Events}></Route>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
