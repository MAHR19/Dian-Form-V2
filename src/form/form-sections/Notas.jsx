import React from 'react';
import { TextField, Paper } from '@mui/material';

const Notas = () =>{
    return(
     <Paper elevation={5} style = {{
        'padding' : 8
     }}> 
            <TextField
             id='Nota'
             label='Nota'
             placeholder='Escribe tu Nota'
             multiline
             fullWidth
             color='success'
             maxRows = {5}
            />
     </Paper>
    );
    
}

export default Notas;