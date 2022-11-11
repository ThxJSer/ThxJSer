import React from "react"
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// form
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// common
import { styled } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// self components
import { Copyright } from '../components/Copyright';
import { AlertDialog } from '../components/AlertDialog';
import { apiUserSignIn } from '../services/UserApi.js'; 


const BootstrapButton = styled(Button)({
    boxShadow    : 'none',
    textTransform: 'none',
    fontSize     : 16
});

const theme = createTheme();

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(8).max(32).required(),
});

const SignIn = (props) => {

    const dispatch = useDispatch();

    const [alert_component, setAlertComponent] = React.useState(null);


    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmitHandler = (data) => {

        console.log({ data });
        reset();

        (async function callApiSignIn() {
            try {

                // here allow sync call api 
                // let res = await getApiResultA();
                // alert(JSON.stringify(res));
                // let res = await getApiResultB();
                // alert(JSON.stringify(res));
                // let res = await getApiResultC();
                // alert(JSON.stringify(res));
            
                const res = await apiUserSignIn({
                    email   : data.email,
                    password:data.password
                });
            
                //console.log(res);
         
                if( res.state != 'success' ){

                    throw 'login failed';
                }

                let token = res.token;

                props.globalValue.set('token', token);

            
                setAlertComponent(
                    <AlertDialog 
                        data={{
                            title:data.email+': login success', 
                            body:'got token: '+ token
                        }} 
                        agreeCallback={function(){

                            dispatch({
                                type: 'change_page',
                                next_page: 'todo_list'
                            });
                        }}
                        disagreeCallback={function(){
                  
                            props.globalValue.set('error_log', 'you login success, but click disagree'); 

                            dispatch({
                                type: 'change_page',
                                next_page: 'err_report'
                            });
                        }} 
                    />);

                document.getElementById('alert_dialog').click();

            } catch (err) {// access api failed

                alert(JSON.stringify(err));
            }
        }());
    };


    return (
    <ThemeProvider theme={theme}>
        {alert_component}
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
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit(onSubmitHandler)} noValidate sx={{ mt: 1 }}>
                    <TextField
                        {...register("email")} placeholder="email" type="email"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    {errors.email && (function(msg){

                        return (<Alert severity="error">{msg}</Alert>)
                    }(errors.email.message))}
                    <br/>
                    <TextField
                        {...register("password")}
                        placeholder="password"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {errors.password && (function(msg){

                        return (<Alert severity="error">{msg}</Alert>)
                    }(errors.password.message))}
                    <br/>
                    <BootstrapButton
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </BootstrapButton>
            
                    <Link href="#" onClick={(e) => {

                        e.preventDefault();

                        dispatch({
                            type: 'change_page',
                            next_page: 'sign_up'
                        });

                    }} variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Box>
            </Box>

            <Copyright  sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
  );
};

export { SignIn }