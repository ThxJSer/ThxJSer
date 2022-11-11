import React from "react"
import { useSelector, useDispatch } from 'react-redux';

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// common
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Copyright } from '../components/Copyright';


const theme = createTheme();

const schema = yup.object().shape({
    firstName: yup.string().min(2).max(8).required(),
    lastName : yup.string().min(2).max(8).required(),
    email    : yup.string().email().required(),
    password : yup.string().min(8).max(32).required()
});

const SignUp = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = (data) => {

        console.log({ data });
        // reset();
        alert('sign up is not open!');
    };

    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(onSubmitHandler)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...register("firstName")}
                                autoComplete="given-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                            {errors.firstName && (function(msg){

                                return (<Alert severity="error">{msg}</Alert>)
                            }(errors.firstName.message))}
                            <br/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                {...register("lastName")}
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="family-name"
                            />
                            {errors.lastName && (function(msg){

                                return (<Alert severity="error">{msg}</Alert>)
                            }(errors.lastName.message))}
                            <br/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("email")} placeholder="email" type="email"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                            {errors.email && (function(msg){

                                return (<Alert severity="error">{msg}</Alert>)
                            }(errors.email.message))}
                            <br/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                {...register("password")}
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                            {errors.password && (function(msg){

                                return (<Alert severity="error">{msg}</Alert>)
                            }(errors.password.message))}
                            <br/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                            control={<Checkbox value="allowExtraEmails" color="primary" />}
                            label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="#" onClick={(e) => {

                                e.preventDefault();

                                dispatch({
                                    type: 'change_page',
                                    next_page: 'sign_in'
                                });

                            }} variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            <Copyright sx={{ mt: 5 }} />
        </Container>
    </ThemeProvider>
    );
};

export { SignUp }