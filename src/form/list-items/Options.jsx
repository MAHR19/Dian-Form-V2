import React from 'react';
import { Stack, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';

const Options = ({index, handleDeleteItems}) =>{

    return(
     <Stack
      spacing={1}
      justifyContent = {{ xs:'center', md : 'flex-end'}}
      direction = {{md:'row', xs:'column'}}
     >
        
        <Button 
         variant="outlined" 
         startIcon={<EditIcon />}
         size = 'small'
         >        
            Editar
        </Button>

        <Button 
         variant="outlined"
         color = 'success' 
         startIcon={<RequestQuoteIcon />}
         size = 'small'
         >        
            Añadir impuestos
        </Button>

        {(index > 0) && (
         <Button 
         variant="outlined" 
         startIcon={<ClearIcon />}
         color = 'error'
         size = 'small'
         onClick={(index)=>handleDeleteItems(index-1)}
         >        
            Eliminar
        </Button>)

        }
        

     </Stack>
    );


}

export default Options;