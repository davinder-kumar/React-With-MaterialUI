import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { updateObject } from '../../Utilities/Utilities'
import Copyright from '../../components/Copyright/Copyright'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { routes } from '../../routes'
import * as actionsList from '../../redux-store/actionsList'
import withErrorHoc from '../../hoc/withErrorHoc/withErrorHoc'
import axios from '../../axios-api'
const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: {
      value: null
    },
    password: {
      value: null
    }
  }
  )
  const classes = useStyles();
  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    const payload = {}
    for (let i in formData) {
      payload[i] = formData[i].value
    }
    props.onSignInInit(payload)
  }
  const onChangeHandler = (event, identifier) => {
    const updatedElement = updateObject(formData[identifier], {
      value: event.target.value
    })
    const updatedState = updateObject(formData, {
      [identifier]: updatedElement
    })
    setFormData(updatedState)
  }
  return (
    <>
      {props.token !== null ? <Redirect to={routes.home} /> : null}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
          <form onSubmit={(e) => onFormSubmitHandler(e)} className={classes.form} noValidate>
            <TextField variant="outlined" margin="normal" required fullWidth id="email"
              label="Email Address" name="email" autoComplete="email" onChange={(e) => onChangeHandler(e, 'email')} autoFocus />
            <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Password"
              onChange={(e) => onChangeHandler(e, 'password')} type="password" id="password" autoComplete="current-password" />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
          </Button>
            <Grid container>
              <Grid item xs>
                <Link to="test" variant="body2">
                  Forgot password?
              </Link>
              </Grid>
              <Grid item>
                <Link to={routes.signup} exact="true" >Don't have an account? Sign Up</Link>

              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </>
  );
}
const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    loading: state.auth.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInInit: (formData) => dispatch(actionsList.authSignInInit(formData))
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHoc(SignIn, axios))