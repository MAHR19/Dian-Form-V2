/******* Custom Input      *******/

import React from "react";
import { Grid, TextField, Paper } from '@mui/material'
import { shadows } from '@mui/system';

const CustomInputText =(props)=>{
    return(
        <Grid item xs={12} sm={12} md={props.md}>
            <Paper elevation={1}>
                <TextField color="success" error={props.haserror} fullWidth name={props.name} label={props.label}
                 onChange={props.onChange} onBlur={props.onBlur} value={props.value} 
                 helperText={props.errorText} size='small' disabled={props.disabled} 
                 />
            </Paper>
        </Grid>
    );
}

export default CustomInputText;