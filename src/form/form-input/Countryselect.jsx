import { React, useState } from 'react';
import { Autocomplete ,TextField, Grid } from '@mui/material';

const AutocompleteInput = (props) =>{
   
   
   const url = 'http://127.0.0.1:8000/catalogos/Paises'; //API url
   const urlCP = 'http://127.0.0.1:8000/catalogos/CodigoPostal'; //API url

   const [data, setData] = useState([]);
   const [enable, setEnable] = useState(true) 
   const [key, setKey] = useState('')


   const handleAPIrequest = async (path, query_param) => {
        fetch(`${path}?name=${query_param}`)
        .then(response => response.json())
        .then( (api_fetch)=>{
            if(query_param === ''){setData([]);}
            else{
                setData(api_fetch);
            }
            
        } );
   }

   
   const handleChange = (e, value) =>{
        if(value !== 'Colombia'){
            setEnable(true);
        }
        else{
            setEnable(false);
        }
        
   }

    return(
        <Grid container spacing={2}>   
            <Grid item xs={12} sm={10} md={6}>
            <Autocomplete
                freeSolo
                id='pais'
                size='small'
                onChange={(event, value)=>{ 
                    handleChange(event, value);
                    if(value !== 'Colombia'){setKey('123')}
                    else{setKey('132')}
                }}
                onInputChange={(event)=>{handleAPIrequest(url, event.target.value);}}
                options={data.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField error={props.haserror} helperText={props.errorText} color="success" 
                name={props.name} {...params} onBlur={props.onBlur} label={'Pais'} 
                    />}
                />
            </Grid>

            <Grid item xs={12} sm={10} md={3}>
                <Autocomplete
                freeSolo
                id="cp"
                size='small'
                key = {key}
                onChange = {
                    (event, value) =>{
                      
                    }
                }
                disabled = {enable}
                onInputChange={(event)=>{handleAPIrequest(urlCP, event.target.value);}}
                options={data.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField error={props.haserror} helperText={props.errorText} color="success" 
                name={props.name} {...params} onBlur={props.onBlur} label={props.label} 
                    />}
                />
                </Grid>

        </Grid>
    );

}

export default AutocompleteInput;