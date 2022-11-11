import React from "react"

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { Copyright } from '../components/Copyright';


const ErrReport = (props) => {

    return (
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}
    >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
            <Typography variant="h2" component="h1" gutterBottom>
                Error is occur.
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
                error_log: { props.globalValue.get('error_log') }
            </Typography>
        </Container>
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                  ? theme.palette.grey[200]
                  : theme.palette.grey[800],
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1">
                    My sticky footer can be found here.
                </Typography>
                <Copyright />
            </Container>
        </Box>
    </Box>
  );
};

export { ErrReport }