import React from 'react';
import { Grid, Paper } from '@mui/material';


const Login = () =>{

    return(
     <Grid container>
        
        <Grid item xs={12} sm={12} md={4}>

        </Grid>

        <Grid item xs={12} sm={12} md={8}>
            <Paper elevation={24}
             variant='outlined'
            />
        </Grid>



     </Grid>

    );
}

export default Login;