import React from 'react';
import Signin from './containers/SignIn/SignIn'
import Signup from './containers/Signup/Signup'
import { Switch, Route } from 'react-router-dom'
const App = () => {


  return (
    <div>
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signin} />
    </div>
  );
}

export default App;