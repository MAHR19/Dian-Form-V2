import { React, useState } from 'react';
import { Autocomplete ,TextField, Grid } from '@mui/material';

const AutocompleteInput = (props) =>{

   const url = 'http://127.0.0.1:8000/catalogos/Paises?name='; //API url

   const [data, setData] = useState([]);
   const [enable, setEnable] = useState(false) 
   const [cp, setCP] = useState('')


   const handleAPIrequest = async (query_param) => {
        fetch(`${url}?name=${query_param}`)
        .then(response => response.json())
        .then( (api_fetch)=>{
            if(query_param === '')
            {
                setData([]);
            }else{
                setData(api_fetch);
            }
        } );
   }

    return(
        <Grid item xs={1} sm={1} md={props.md}>   
             <Autocomplete
                freeSolo
                id='pais'
                size='small'
                disabled = {props.disabled}
                onChange={(event, value)=>{
                   //console.log(value)
                   
                   props.setFieldValue(props.name, data.find(element => element.name === value));  
                }}
                onInputChange={(event)=>{handleAPIrequest(event.target.value);}}
                options={data.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField error={props.haserror} helperText={props.errorText} color="success" 
                name={props.name} {...params} onBlur={props.onBlur} label={props.label} 
                    />}
                />

                <Autocomplete
                freeSolo
                id="cp"
                size='small'
                disabled = {enable}
                onChange={(event, value)=>{
                   //console.log(value)
                   props.setFieldValue(props.name, data.find(element => element.name === value));  
                }}
                onInputChange={(event)=>{handleAPIrequest(event.target.value);}}
                options={data.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField error={props.haserror} helperText={props.errorText} color="success" 
                name={props.name} {...params} onBlur={props.onBlur} label={props.label} 
                    />}
                />              
        </Grid>
    );

}

export default AutocompleteInput;