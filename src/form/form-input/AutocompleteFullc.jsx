import { React, useState, useEffect } from 'react';
import { Autocomplete ,TextField, Grid } from '@mui/material';

const AutocompleteFullc = (props) =>{

   const url = 'http://127.0.0.1:8000/catalogos/'+props.catalogo; //API url

   const [data, setData] = useState([]); 
   //const [inputValue, setInputValue] = useState('');

   const handleAPIrequest = async () => {
        fetch(`${url}`)
        .then(response => response.json())
        .then( (api_fetch)=>{
                setData(api_fetch);
        } );
   }

   useEffect(()=>{
    handleAPIrequest()
 },[])

    return(
        <Grid item xs={12} sm={12} md={props.md}>   
             
             <Autocomplete
                freeSolo
                id="list"
                size='small'
                disabled = {props.disabled}
                onChange={(event, value)=>{
                   props.setFieldValue(props.name, data.find(element => element.name === value));  
                }}
                options={data.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField error={props.haserror} helperText={props.errorText} color="success" 
                name={props.name} {...params} onBlur={props.onBlur} label={props.label} 
                    />}
                />  
               
        </Grid>
    );

}

export default AutocompleteFullc;