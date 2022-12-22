/******* Custom Input      *******/

import React from "react";
import { Grid, TextField } from '@mui/material'

const CustomInputText =({
    haserror,
    errorText,
    onChange,
    onBlur,
    disabled,
    name,
    label,
    value,
    md
})=>{
    return(
        <Grid 
         item xs={12} 
         sm={12} 
         md={md}
         >
                <TextField 
                 color="success"
                 size='small'
                 fullWidth
                 name={name}
                 label={label}
                 error={haserror}
                 onChange={onChange}
                 onBlur={onBlur}
                 value={value} 
                 helperText={errorText}
                 disabled={disabled} 
                 />
        </Grid>
    );
}

export default CustomInputText;