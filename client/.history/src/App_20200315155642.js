import React from 'react';
import Signin from './containers/Auth/SignIn'
import Signup from './containers/Auth/Signup'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionList from './redux-store/actionsList'
const App = (props) => {

  if (localStorage.getItem("infiniteScrollEnabled") === null) {
    //...
  }

  return (
    <div>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/" render={() => {
          return <p>Hest</p>
        }} />
        <Redirect to="/signin" />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>{
  return {
    autoAuthLogin : (token,userId) => dispatch(actionList.authSigninSuccess (token,userId))
  }
}

export default connect(null,mapDispatchToProps)(App);
