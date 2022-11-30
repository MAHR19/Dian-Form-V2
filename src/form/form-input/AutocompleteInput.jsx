import { React, useState } from 'react';
import { Autocomplete ,TextField, Grid } from '@mui/material';

const AutocompleteInput = (props) =>{

   const url = 'http://127.0.0.1:8000/catalogos/'+props.catalogo; //API url

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
                //setInputValue(query_param);
            }
            console.log(data);
        } );
   }


    return(
        <Grid item xs={props.xs} sm={props.sm} md={props.md}>   
             <Autocomplete
                freeSolo
                id="list"
                size='small'
                disabled = {props.disabled}
                onChange={(event, value)=>{
                   props.setFieldValue(props.name, data.find(element => element.name === value));  
                }}
                onInputChange={(event,inputValue)=>{handleAPIrequest(event.target.value);}}
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