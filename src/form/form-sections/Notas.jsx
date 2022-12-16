import React from 'react';
import { TextField, Paper, Grid } from '@mui/material';

const Notas = () =>{
    return(
     <Paper elevation={5} style = {{
        'padding' : 8
     }}>    <Grid container>
            <TextField
             id='Nota'
             label='Nota'
             placeholder='Escribe tu Nota'
             multiline
             fullWidth
             color='success'
             maxRows = {5}
            />
            
            </Grid>
     </Paper>
    );
    
}

export default Notas;