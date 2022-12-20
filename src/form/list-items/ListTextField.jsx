import React from 'react';
import { Grid, TextField, Divider } from '@mui/material';


const ListTextField  = ({label, md}) =>{

    return (
     <Grid item xs={12} sm={12} md={md}>
       <TextField
        fullWidth
        size='small'
        label = {label} 
        />  
    </Grid> 
    );

}

export default ListTextField;