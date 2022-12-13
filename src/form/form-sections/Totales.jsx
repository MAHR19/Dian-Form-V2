import React from 'react';
import { Paper, Grid } from '@mui/material';
import CustomInputText from '../form-input/CustomInputText';


const Totales = () => {
    
    return(
        <Paper elevation={5} style = {{
            'padding' : 8
         }}> 
                
         <Grid container spacing={2}>
            <CustomInputText md = {12} 
              label={'Subtotal'}
             />

            <CustomInputText md = {6} 
              label={'Cargos'}
             />

            <CustomInputText md = {6} 
              label={'Descuento'}
             />

            <CustomInputText md = {4} 
              label={'IVA'}
             />

            <CustomInputText md = {4} 
              label={'ICA'}
             />

            <CustomInputText md = {4} 
              label={'Anticipos'}
             />

             <CustomInputText md = {6} 
              label={'Total'}
             />

            <CustomInputText md = {6} 
              label={'Neto'}
             />
    
         </Grid>
         </Paper>
    );

   

}

export default Totales;