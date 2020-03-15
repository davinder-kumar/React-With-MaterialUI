import React from 'react';
import Signin from './containers/Auth/SignIn'
import Signup from './containers/Auth/Signup'
import { Switch, Route, Redirect } from 'react-router-dom'
const App = () => {


  return (
    <div>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/" render={()=>{
          
        }} />
        <Redirect to="/signin" />
      </Switch>
    </div>
  );
}

export default App;
