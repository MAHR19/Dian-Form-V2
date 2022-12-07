import React from 'react';
import {Grid} from '@mui/material';
import CustomInputText from '../form-input/CustomInputText';
import AutocompleteInput from '../form-input/AutocompleteInput';


const Documento  = () =>{

    return(
    <Grid  container spacing={2}>
        
        <AutocompleteInput md = {6} name = {'tipo_negociacion'}
        label = {'Tipo negociación'}
        />

        <AutocompleteInput md = {6} name = {'medio_pago'}
        label = {'Medio de pago'} 
        />

        <AutocompleteInput md = {7} name = {'tipo_documento'}
        label = {'Tipo de documento'} catalogo = {'TipoDocumento'} 
        />

        <AutocompleteInput md = {5} name = {'moneda'}
        label = {'Moneda'} catalogo = {'TipoMoneda'} 
        />

    </Grid>

    );

}

export default Documento;