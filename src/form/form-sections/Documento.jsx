import React from 'react';
import {Grid, Paper} from '@mui/material';
import DateSelector from '../form-input/DateSelector';
import AutocompleteInput from '../form-input/AutocompleteInput';

const Documento  = () =>{

    return(
        <Paper elevation={5}
         style = {{
            padding : 8
         }
         }>
    <Grid  container spacing={2}>
        <AutocompleteInput md = {12} name = {'tipo_negociacion'}
        label = {'Tipo negociación'}
        />

        <AutocompleteInput md = {6} name = {'medio_pago'}
        label = {'Medio de pago'} 
        />

        <AutocompleteInput md = {6} name = {'moneda'}
        label = {'Moneda'} catalogo = {'TipoMoneda'} 
        />

        <AutocompleteInput md = {6} name = {'tipo_documento'}
        label = {'Tipo de documento'} catalogo = {'TipoDocumento'} 
        />


        <DateSelector 
         label = {'Fecha de Vencimiento'}
         />
        
    </Grid>
    </Paper>
    );

}

export default Documento;