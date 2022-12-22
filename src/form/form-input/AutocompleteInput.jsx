import { React, useState } from 'react';
import { Autocomplete ,TextField, Grid } from '@mui/material';

const AutocompleteInput = ({onBlur, name, haserror, errorText, disabled, label, md, catalogo, setFieldValue}) =>{

   const url = 'http://127.0.0.1:8000/catalogos/'+catalogo; //API url

   const [data, setData] = useState([]); 
   //const [inputValue, setInputValue] = useState('');

   const handleAPIrequest = async (query_param) => {
        fetch(`${url}?name=${query_param}`)
        .then(response => response.json())
        .then( (api_fetch)=>{
            if(query_param !== ''){
                setData(api_fetch);
            }else{
                setData([]);
            }
        } );
   }


    return(
        <Grid item xs={12} sm={12} md={md}>   
             
             <Autocomplete
                freeSolo
                id="list"
                size='small'
                onBlur={onBlur} 
                disabled = {disabled}
                onChange={(event, value)=>{
                   setFieldValue(name, data.find(element => element.name === value));  
                }}
                onInputChange={(event)=>{handleAPIrequest(event.target.value);}}
                options={data.map((option)=> option.name)}
                renderInput={(params) => 
                <TextField 
                {...params}
                color="success"     
                error={haserror} 
                helperText={errorText} 
                name={name} 
                label={label} 
                    />}
                />  
               
        </Grid>
    );

}

export default AutocompleteInput;