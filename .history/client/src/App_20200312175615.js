import React from 'react';
import Signin from './containers/SignIn/SignIn'
import Signup from './containers/Signup/Signup'
import { Switch, Route, Redirect } from 'react-router-dom'
const App = () => {


  return (
    <div>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Redirect tp="/signin" />
    </div>
  );
}

export default App;
