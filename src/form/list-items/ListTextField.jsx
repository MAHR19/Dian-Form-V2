import React from 'react';
import { Grid, TextField } from '@mui/material';


const ListTextField  = ({
    label, 
    md, 
    disabled, 
    value}) =>{

    return (
     <Grid item xs={12} sm={12} md={md}>
       <TextField
        fullWidth
        size='small'
        label = {label}
        disabled  = {disabled}
        value = {value} 
        />  
    </Grid> 
    );

}

export default ListTextField;