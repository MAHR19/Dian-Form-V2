import {useState} from 'react';
import { Grid, TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';


const DateSelector = ({label, name, haserror, errorText, onBlur, setFieldValue}) =>{
    const [value, setValue] = useState(dayjs());

    const handleChange = (newValue) => {
        setValue(newValue);
        setFieldValue(name, dayjs(newValue).format('DD/MM/YYYY'));
      };


    return(
        <Grid item xs={12} sm={12} md={6}>
         <LocalizationProvider dateAdapter={AdapterDayjs}>
           
            <DesktopDatePicker
                label={label}
                inputFormat="MM/DD/YYYY"
                value={value}
                onChange={handleChange}
                renderInput = {(params) => 
                <TextField 
                 {...params} 
                 onBlur = {onBlur}
                 fullWidth 
                 size = 'small'
                 color = 'success'
                 name = {name}
                 error = {haserror}
                 helperText = {errorText}  
                  />}
            />
           
         </LocalizationProvider>
        </Grid>
    );

}

export default DateSelector;