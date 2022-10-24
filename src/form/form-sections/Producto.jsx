import React from 'react';
import { Grid } from '@mui/material';

import CustomInputText from '../form-input/CustomInputText';
import AutocompleteInput from '../form-input/AutocompleteInput';


const Producto = () =>{
    return(
        <Grid container spacing={2} >
            <AutocompleteInput xs={12} sm={10} md={4} label={'Tipo de negociación'} />
            <AutocompleteInput  xs={12} sm={10} md={4} label={'Medio de pago'} />
            <AutocompleteInput xs={12} sm={10} md={4} label={'Moneda'} />
            <AutocompleteInput xs={12} sm={12} md={12} label={'Tipo de documento'} />
        </Grid>
    );

}

export default Producto;