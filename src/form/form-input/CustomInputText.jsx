/******* Custom Input      *******/

import React from "react";
import { Grid, TextField } from '@mui/material'

const CustomInputText =(props)=>{
    return(
        <Grid item xs={props.xs} sm={props.sm} md={props.md}>
            
            <TextField color="success" error={props.haserror} fullWidth name={props.name} label={props.label}
             onChange={props.onChange} onBlur={props.onBlur} value={props.value} 
             helperText={props.errorText} size='small' />
            
        </Grid>
    );
}

export default CustomInputText;