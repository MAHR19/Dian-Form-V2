/******* Custom Input      ******
As long as I realize that I was repeting to hard the same code,
decide to create this component */


import React from "react";
import { Grid, TextField } from '@mui/material'

const CustomInputText =(props)=>{
    return(
        <Grid item xs={props.xs} sm={props.sm} md={props.md}>
            
            <TextField error={props.haserror} fullWidth name={props.name} label={props.label}
             onChange={props.onChange} onBlur={props.onBlur} value={props.value} 
             helperText={props.errorText} size='small' />
            
        </Grid>
    );
}

export default CustomInputText;