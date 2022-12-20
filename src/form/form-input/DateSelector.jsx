import React from 'react';
import { Grid, TextField, Paper } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


const DateSelector = (props) =>{
    const [value, setValue] = React.useState(dayjs());

    const handleChange = (newValue) => {
        setValue(newValue);
      };


    return(
        <Grid item xs={12} sm={12} md={6}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
           
            <DesktopDatePicker
                label={props.label}
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} 
                fullWidth size='small'
                color='success'/>}
            />
           
         </LocalizationProvider>
        </Grid>
    );

}

export default DateSelector;