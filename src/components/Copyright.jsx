import React from "react"

import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const Copyright = (props) => {
  
    return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="/">
            ThxJSer
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
        <br/><br/><br/>
        Powered by Axios, Day.js, Material UI, Parcel, React, React Hook Form, Redux and Yup.
        <br/><br/><br/>
        Particular thanks Github, Google, Node.js, NPM, Parcel, React, Stack Overflow.
    </Typography>
    );
}

export { Copyright }