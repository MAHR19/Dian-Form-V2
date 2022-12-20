import React from 'react';
import { ListItem, Stack, Typography, Divider, Grid } from '@mui/material';
import { Container } from '@mui/system';
import ListItemTextField from './ListTextField'
import Options from './Options';

const ListItemProducto =  ({index}) =>
{
    return(

        <ListItem>
            <Container 
             maxWidth = {false}
             >
             <Typography variant='h5' gutterBottom>Producto</Typography>
             <Stack 
              direction = {{xs:'column', md : 'row'}} 
              spacing={1}
              sx = {{padding : 2 }}
              >
                  <Grid container spacing={1}>
                    <ListItemTextField 
                     md = {3}
                     label = 'Codigo'/>
                    <ListItemTextField 
                     md = {7}
                     label = 'Descripción'
                     />
                     <ListItemTextField 
                     md = {1}
                     label = 'U/M'
                     />
                     <ListItemTextField 
                     md = {1}
                     label = 'Cantidad'
                     />
                     <ListItemTextField 
                     md = {2}
                     label = 'Precio unitario'
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
                     />

                     <Grid item xs={12} sm={12} md={5}>
                        <Options/>
                     </Grid>
                  </Grid>

             </Stack>

             

             <Divider sx={{padding:1}} />
             
            </Container>
            
        </ListItem>
    );

}

export default ListItemProducto;