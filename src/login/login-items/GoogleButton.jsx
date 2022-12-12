import React from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleButton = () =>{

    return(

        <Button variant='outlined' 
            color='secondary'
            startIcon={<GoogleIcon />}> Inicia sesion con Google 
        </Button>

    );


}

export default GoogleButton;