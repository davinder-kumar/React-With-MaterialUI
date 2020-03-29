import React from 'react';
import Signin from './containers/Auth/SignIn'
import Signup from './containers/Auth/Signup'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionList from './redux-store/actionsList'
import Homepage from './containers/Homepage/Homepage'
import Layout from './hoc/Layout/Layout'
import routes from './routes';
import Cart from './containers/Cart/Cart'
const App = (props) => {
  //try to auto login
  console.log(props)
  if (localStorage.getItem("token") !== null && localStorage.getItem("userId") !== null) {
    props.autoAuthLogin(localStorage.getItem("token"), localStorage.getItem("userId"))
  }
  return (
    <div>
      <React.StrictMode>
        <Switch>
          <Route exact path={routes.signin} component={Signin} />
          <Route exact path={routes.signup} component={Signup} />
          {/* Layout only for frontend routes */}
          <Layout>
            <Route exact path={routes.home} component={Homepage} />
            <Route exact path={routes.cart} component={Cart} />
            <Redirect to={routes.home } />
          </Layout>

        </Switch>
      </React.StrictMode>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoAuthLogin: (token, userId) => dispatch(actionList.authSigninSuccess(token, userId))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(App));
