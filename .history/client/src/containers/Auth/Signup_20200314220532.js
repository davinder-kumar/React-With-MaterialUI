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
import Copyright from '../../components/Copyright/Copyright'
import { Link } from 'react-router-dom'
import axios from '../../axios-auth'
import { routes } from '../../routes'
import { updateObject } from '../../Utilities/Utilities'
import withErrorHoc from '../../hoc/withErrorHoc/withErrorHoc'
import Loader from '../../components/UI/Loader/Loader'
import { connect } from 'react-redux'
import * as actionsList from '../../redux-store/actionsList'
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignUp = (props) => {
    const [loadingStaus, changeLoadingSts] = useState(false)
    const [formData, setFormData] = useState({
        firstname: {
            value: null
        },
        lastname: {
            value: null
        },
        email: {
            value: null
        },
        password: {
            value: null
        },
    })

    const onChangeHandler = (event, identifier) => {
        const updatedElement = updateObject(formData[identifier], {
            value: event.target.value
        })
        const updatedForm = updateObject(formData, {
            [identifier]: updatedElement
        })
        setFormData(updatedForm)

    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        changeLoadingSts(true)
        const formPayload = {}
        for (let i in formData) {
            formPayload[i] = formData[i].value
            if('email' === i){
                formPayload.username = true
            }
        }
        formPayload.subscription = true
        props.onAuthStart(formPayload)
        // axios.post('/users', formPayload)
        //     .then(function (response) {
        //         console.log(response)
        //         changeLoadingSts(false)
        //         props.history.push(routes.signin)
        //     })
        //     .catch(function (error) {
        //         changeLoadingSts(false)
        //     });
    }

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form onSubmit={onSubmitHandler} className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="firstname"
                                name="firstName"
                                onChange={(e) => onChangeHandler(e, 'firstname')}
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                onChange={(e) => onChangeHandler(e, 'lastname')}
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={(e) => onChangeHandler(e, 'email')}
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                onChange={(e) => onChangeHandler(e, 'password')}
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                            {loadingStaus ? <Loader /> : null}
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to={routes.signin} exact="true" >Already have an account? Sign in</Link>
                            {/* <Link href="#" variant="body2">
                
              </Link> */}
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
const mapStateToProps = state => {
    return {
        loading : state.auth.loading
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        onAuthStart : (formPayload) => dispatch(actionsList.authSignupInit(formPayload))
    }
}
export default connect(null,mapDispatchToProps)(withErrorHoc(SignUp, axios))