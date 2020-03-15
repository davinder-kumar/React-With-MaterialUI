import React from 'react';
import Signin from './containers/Auth/SignIn'
import Signup from './containers/Auth/Signup'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionList from './redux-store/actionsList'
import Homepage from './containers/Homepage/Homepage'
import Layout from './hoc/Layout/Layout'
const App = (props) => {
  //try to auto login
  if (localStorage.getItem("token") !== null && localStorage.getItem("userId") !== null) {
    props.autoAuthLogin(localStorage.getItem("token"), localStorage.getItem("userId"))
  }

  return (
    <div>
      <Switch>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />

        <Layout>

          <Route path="/" component={Homepage}>
        </Layout>

        <Redirect to="/signin" />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoAuthLogin: (token, userId) => dispatch(actionList.authSigninSuccess(token, userId))
  }
}

export default connect(null, mapDispatchToProps)(App);
