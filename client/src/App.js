import React from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import Home from "./views/Home/Home"
import NotFound from "./views/NotFound"
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import ChurchCreation from "./views/ChurchDirectoryCreation/ChurchDirectoryCreation"


const App = () => {
  return (
    <div> 
      <Switch>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Register" component={Register}/> 
        <Route exact path="/Home" component={Home} />
        <Route exact path="/ChurchCreation" component={ChurchCreation} />
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
