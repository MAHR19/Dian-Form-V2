import { React, useState } from 'react';
import { Autocomplete ,TextField, Grid } from '@mui/material';
import { useEffect } from 'react';


const AutocompleteInput = (props) =>{

   //let selected = ''
   let url = 'http://127.0.0.1:8000/catalogos/'+props.catalogo+'?name='; //API url
   
   //const [items, setItems] = useState([]); 
   const [data, setData] = useState([]); 

   const handleAPIrequest = async (query_param) => {
        const url_aux = url; //saving original url
        url = url + query_param;//adding query parameter
        fetch(url)
        .then(response => response.json())
        .then( (api_fetch)=>{
            if(query_param === '')
            {
                setData([]);
            }else{
                setData(api_fetch);
            }
        } );
        url = url_aux;  
   }


   useEffect(()=>{
        
   });


    return(
        <Grid item xs={props.xs} sm={props.sm} md={props.md}>
             <Autocomplete
                freeSolo
                id="list"
                size='small'
                autoComplete = {true}
                onChange={(event, value)=>{
                   console.log(value)
                   props.setFieldValue(props.name, data.find(element => element.name === value));  
                }}
                onInputChange={(event)=>{handleAPIrequest(event.target.value); console.log(event.target.value); }}
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