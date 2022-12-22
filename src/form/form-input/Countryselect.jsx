import { React, useState, useEffect } from 'react';
import { Autocomplete ,TextField, Grid,Button} from '@mui/material';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';

const AutocompleteInput = ({setAdress}) =>{
   
   const url = 'http://127.0.0.1:8000/catalogos/Paises'; //API url
   const urlCP = 'http://127.0.0.1:8000/catalogos/CodigoPostal'; //API url
   const [data, setData] = useState([]);
   const [codigos, setCodigos] = useState([]);
   const [municipio, setMunicipio] = useState('');
   const [departamento, setDepartamento] = useState('');
   const [enable, setEnable] = useState(true); 
   const [key, setKey] = useState(false);
   var cpAux = {};
   
    const { errors, touched, setFieldValue, values, handleBlur, handleChange } = useFormik({
        initialValues : {
            country: '',
            cp: '',
            direccion : ''
        },
        validationSchema :  Yup.object({
            country : Yup.object()
                      .required('Campo requerido')
        })
    });

    useEffect(()=>(
     setAdress(values)
    ),[values]);

   const handleAPIrequest = async (path, query_param) => {
        fetch(`${path}?name=${query_param}`)
        .then(response => response.json())
        .then( (api_fetch)=>{
            if(query_param === '')
            {
              setData([]);
              setCodigos([]);
            }else{
                if(path === url)
               {
                 setData(api_fetch);
               }
               else{
                setCodigos(api_fetch);
               }
            }
        } );
   }

   const handleCp = (value) => {
    cpAux = codigos.find(element => element.name === value);
    if(typeof(cpAux) !== 'undefined')
    {
      setDepartamento(cpAux.nombre_departamento);
      setMunicipio(cpAux.nombre_municipio);
    }
    else{
      setDepartamento('');
      setMunicipio('');
    }
   }


   const handleChanges = (e, value) =>{
        if(value !== 'Colombia' || value === ''){
            setEnable(true);
            setKey(true);
            setDepartamento('');
            setMunicipio('');
        }
        else{
            setEnable(false);
            setKey(false);
        }
        
   }

    return(
           <>      
            <Grid item xs={12} sm={12} md={3}>
                       
                       <Autocomplete
                        id='pais'
                        size='small'
                        freeSolo
                        onBlur={handleBlur}
                        onChange={(event, value)=>{      
                            handleChanges(event, value);
                            setFieldValue('country', data.find((element)=> element.name === value))
                        }}
                        onInputChange={(event)=>{handleAPIrequest(url, event.target.value);}}
                        options={data.map((option)=> option.name)}
                        renderInput={(params) => 
                       <TextField 
                        {...params} 
                        color = "success"
                        label = 'País'
                        name = 'country'
                        error = {Boolean(touched.country && errors.country)} 
                        helperText = {touched.country && errors.country}
                           />
                       }
                       />
                   </Grid>

                   <Grid item xs={12} sm={12} md={3}>
               
                    <Autocomplete
                    id="codigoPostal"
                    size='small'
                    key = {key}
                    disabled = {enable}
                    freeSolo
                    onChange = {
                        (event, value) =>{
                          handleCp(value);
                          setFieldValue('cp', codigos.find((element)=> element.name === value))
                        }
                    }
                    onInputChange={(event)=>{handleAPIrequest(urlCP, event.target.value);}}
                    options={codigos.map((option)=> option.name)}
                    renderInput={(params) => 
                    <TextField   
                      {...params} 
                      color="success"
                      label='Codigo Postal'
                      name='cp' 
                        />}
                    />
                  </Grid>

                  <Grid item xs={12} sm={12} md={3}>
                    <TextField 
                     size='small' 
                     key = {key} 
                     fullWidth 
                     value = {municipio} 
                     label='Municipio' 
                     disabled={true} />
                   </Grid>

                   <Grid item xs={12} sm={12} md={3} >
                    <TextField 
                     size='small' 
                     key = {key} 
                     fullWidth 
                     value = {departamento} 
                     label='Departamento' 
                     disabled={true} />
                   </Grid>

                   <Grid item xs={12} sm={12} md={12}>
                
                   <TextField 
                    size='small' 
                    fullWidth
                    onBlur={ handleBlur }
                    value = {values.direccion}
                    onChange = {handleChange}
                    error = {Boolean(errors.direccion && touched.direccion)} 
                    label='Direccion'
                    helperText = {errors.direccion} 
                    color="success" 
                    name='direccion'
                   />               
                   </Grid>
                   </>                 
            
        
    );

}

export default AutocompleteInput;