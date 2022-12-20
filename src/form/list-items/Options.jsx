import React from 'react';
import { Stack, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const Options = () =>{

    return(
     <Stack
      spacing={1}
      justifyContent = {{ xs:'center', md : 'flex-end'}}
      direction = {{md:'row', xs:'column'}}
     >
        
        <Button 
         variant="outlined" 
         startIcon={<EditIcon />}
         >        
            Editar
        </Button>

        <Button 
         variant="outlined"
         color = 'success' 
         startIcon={<RequestQuoteIcon />}
         >        
            Añadir impuestos
        </Button>

        <Button 
         variant="outlined" 
         startIcon={<ClearIcon />}
         color = 'error'
         >        
            Eliminar
        </Button>

     </Stack>
    );


}

export default Options;