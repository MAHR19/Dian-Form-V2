import {useEffect, useState} from 'react';
import { ListItem, Stack, Divider, Grid, Button } from '@mui/material';
import { Container } from '@mui/system';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ListItemTextField from './ListTextField'
import CustomInputText from '../form-input/CustomInputText';
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

    const handleNewvalues = () =>{


    }

    const {touched, values, errors, handleBlur, handleChange, setFieldValue} = useFormik({
        initialValues: {
           producto : '',
           cantidad :'',
           iva : '',
           descuento : '',
           total : '' 
        },
        validationSchema : Yup.object({
            producto : Yup.object().required('Campo requerido'),
            cantidad : Yup.number().typeError('Debe ser un numero').required('Campo requerido'),
            iva : Yup.number().typeError('Debe ser un numero').optional(),
            descuento : Yup.number().typeError('Debe ser un numero').optional()
        })
    });

    const Click = () =>{
        console.log(values);
    }

    const handleValues = (item) =>{
        if(typeof(item) !== 'undefined')
        {   console.log(productos);
            setDescription(item.descripcion);
            setUM(item.um);
            setValor_u(item.precio_u);
            const impuesto = {'impuesto':'12'}
            list = productos;
            list = [...list, { 'Producto' : values}]
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
              sx = {{padding : 4 }}
              >
                  <Grid container spacing={1}>
                    <ListAutocomplete
                     md = {3}
                     name = {'producto'}
                     error = {Boolean(touched.producto && errors.producto)}
                     errorText = {touched.producto && errors.producto}
                     handleBlur = {handleBlur}
                     handleValues = {handleValues}
                     setFieldValue = {setFieldValue}
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
                     <CustomInputText
                     md = {1}
                     name = {'cantidad'}
                     label = 'Cantidad'
                     haserror = {Boolean(touched.cantidad && errors.cantidad)}
                     onChange = {handleChange}
                     onBlur = {handleBlur}
                     value = {values.cantidad}
                     errorText = {touched.cantidad && errors.cantidad}
                     />
                    <CustomInputText
                     md = {1}
                     name = {'iva'}
                     label = 'IVA'
                     haserror = {Boolean(touched.iva && errors.iva)}
                     onChange = {handleChange}
                     onBlur = {handleBlur}
                     value = {values.iva}
                     errorText = {touched.iva && errors.iva}
                     />
                    <CustomInputText
                     md = {2}
                     name = {'descuento'}
                     label = 'Descuento'
                     haserror = {Boolean(touched.descuento && errors.descuento)}
                     onChange = {handleChange}
                     onBlur = {handleBlur}
                     value = {values.descuento}
                     errorText = {touched.descuento && errors.descuento}
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
                    <Button onClick = {Click}>
                        log
                    </Button>
             </Stack>

             

             <Divider sx={{padding:1}} />
             
            </Container>
            
        </ListItem>
    );

}

export default ListItemProducto;