import {React, useState} from 'react';
import { ListItem, Stack, Divider, Grid } from '@mui/material';
import { Container } from '@mui/system';
import ListItemTextField from './ListTextField'
import ListAutocomplete from './ListAutocomplete'
import Options from './Options';

const ListItemProducto =  
({index, 
  handleDeleteItems, 
  productos, 
  setProductos}) =>{   
    
    let list = [];
    const [description, setDescription] = useState('');
    const [um, setUM] = useState('');
    const [valor_u, setValor_u] = useState('');


    const handleValues = (item) =>{
        if(typeof(item) !== 'undefined')
        {   console.log(productos);
            setDescription(item.descripcion);
            setUM(item.um);
            setValor_u(item.precio_u);
            const impuesto = {'impuesto':'12'}
            list = productos;
            list = [...list, { 'Producto' : {'datos' : item, impuesto}}]
            setProductos(list);
            console.log(productos);
        }else{
            list = productos;
            list.splice((index-1), 1)
            setProductos(list)
            setDescription('');
            setUM('');
            setValor_u('');
        }
    }

    
    return(

        <ListItem>
            <Container 
             maxWidth = {false}
             >
             <Stack 
              direction = {{xs:'column', md : 'row'}} 
              spacing={1}
              sx = {{padding : 2 }}
              >
                  <Grid container spacing={1}>
                    <ListAutocomplete
                     md = {3}
                     handleValues = {handleValues}
                     />
                    <ListItemTextField 
                     md = {7}
                     label = 'Descripción'
                     disabled={true}
                     value = {description}
                     />
                     <ListItemTextField 
                     md = {1}
                     label = 'U/M'
                     disabled={true}
                     value = {um}
                     />
                    <ListItemTextField 
                     md = {1}
                     label = 'Precio unitario'
                     disabled={true}
                     value = {valor_u}
                     />
                     <ListItemTextField 
                     md = {1}
                     label = 'Cantidad'
                     />
                    <ListItemTextField 
                     md = {1}
                     label = 'IVA'
                     />
                    <ListItemTextField 
                     md = {2}
                     label = 'Descuento'
                     />
                    <ListItemTextField 
                     md = {2}
                     label = 'Total'
                     disabled={true}
                     />

                     <Grid item xs={12} sm={12} md={6}>
                        <Options 
                         index = {index}
                         handleDeleteItems = {handleDeleteItems}
                        />
                     </Grid>
                  </Grid>

             </Stack>

             

             <Divider sx={{padding:1}} />
             
            </Container>
            
        </ListItem>
    );

}

export default ListItemProducto;