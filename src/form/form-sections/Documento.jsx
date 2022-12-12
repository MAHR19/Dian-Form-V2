import React from 'react';
import {Grid, Paper} from '@mui/material';
import CustomInputText from '../form-input/CustomInputText';
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

        <AutocompleteInput md = {4} name = {'medio_pago'}
        label = {'Medio de pago'} 
        />

        <AutocompleteInput md = {4} name = {'tipo_documento'}
        label = {'Tipo de documento'} catalogo = {'TipoDocumento'} 
        />

        <AutocompleteInput md = {4} name = {'moneda'}
        label = {'Moneda'} catalogo = {'TipoMoneda'} 
        />

        <DateSelector 
         label = {'Fecha de Vencimiento'}
         />
        
    </Grid>
    </Paper>
    );

}

export default Documento;