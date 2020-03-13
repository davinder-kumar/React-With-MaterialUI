import React from 'react';
import Signin from './containers/SignIn/SignIn'
import Signup from './'
import { Switch, Route } from 'react-router-dom'
const App = () => {


  return (
    <div>
      <Route path="/signin" component={Signin} />
      <Route path="/signin" component={Signin} />
    </div>
  );
}

export default App;
