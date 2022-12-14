import { React, useState } from 'react';
import { Autocomplete ,TextField, Grid, Paper } from '@mui/material';

const AutocompleteInput = (props) =>{
   
   
   const url = 'http://127.0.0.1:8000/catalogos/Paises'; //API url
   const urlCP = 'http://127.0.0.1:8000/catalogos/CodigoPostal'; //API url
   const [data, setData] = useState([]);
   const [codigos, setCodigos] = useState([]);
   const [municipio, setMunicipio] = useState('');
   const [departamento, setDepartamento] = useState('');
   const [enable, setEnable] = useState(true); 
   const [key, setKey] = useState(false);
   
   var cpAux = {}; //no me funciono con useState :c

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


   const handleChange = (e, value) =>{
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
            <Grid item xs={12} sm={10} md={3}>
            <Paper elevation={1}>
            <Autocomplete
                freeSolo
                id='pais'
                size='small'
                onChange={(event, value)=>{ 
                    handleChange(event, value);
                }}
                onInputChange={(event)=>{handleAPIrequest(url, event.target.value);}}
                options={data.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField error={props.haserror} helperText={props.errorText} color="success" 
                name={props.name} {...params} onBlur={props.onBlur} label={'Pa??s'} 
                    />}
                />
                </Paper>
            </Grid>

            <Grid item xs={12} sm={10} md={3}>
                <Paper elevation={1}>
                <Autocomplete
                freeSolo
                id="cp"
                size='small'
                key = {key}
                onChange = {
                    (event, value) =>{
                      handleCp(value);
                    }
                }
                disabled = {enable}
                onInputChange={(event)=>{handleAPIrequest(urlCP, event.target.value);}}
                options={codigos.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField error={props.haserror} helperText={props.errorText} color="success" 
                name={props.name} {...params} onBlur={props.onBlur} label='Codigo Postal' 
                    />}
                />
                </Paper>
                </Grid>

                <Grid item xs={12} sm={10} md={3}>
                    <Paper elevation={1}>
                    <TextField size='small' key = {key} fullWidth value = {municipio} label='Municipio' disabled={true} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={10} md={3} >
                    <Paper elevation={1}>
                    <TextField size='small' key = {key} fullWidth value = {departamento} label='Departamento' disabled={true} />
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={10} md={12}>
                    <Paper elevation={1}>
                    <TextField size='small' fullWidth label='Direccion' color="success" />
                    </Paper>
                </Grid>

        </>
    );

}

export default AutocompleteInput;