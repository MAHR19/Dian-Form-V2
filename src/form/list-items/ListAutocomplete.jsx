import {React, useState} from 'react';
import { Autocomplete, Grid, TextField } from '@mui/material';


const ListAutocomplete = ({md, name, error, errorText, handleBlur, handleValues, setFieldValue}) =>{

    const[data, setData] = useState([])

    const handleAPIrequest = async (query_param) => {
        fetch(`${'http://127.0.0.1:8000/catalogos/Productos'}?name=${query_param}`)
        .then(response => response.json())
        .then( (api_fetch)=>{
            if(query_param !== ''){
                setData(api_fetch);
            }else{
                setData([]);
            }
        } );
    }

    const handleFetch = (value) => {
      const item = data.find((element) => value === element.name);
      setFieldValue(name, item);
      handleValues(item);
    }

    return(
     
     <Grid item xs={12} sm={12} md={md}>  
      <Autocomplete
          freeSolo
          id='producto'
          options = {data.map((option)=> option.name )}
          size='small'
          fullWidth
          onBlur = {handleBlur}
          onInputChange={(event, inputValue) => handleAPIrequest(inputValue)}
          onChange = {(event, value)=>handleFetch(value)}
          renderInput = {
              (params) => 
              <TextField 
              {...params}  
              color = 'success'           
              label='Codigo de producto' 
              name = {name}
              error = {error} 
              helperText = {errorText}   
              />}
          />    
     </Grid>
    );

}

export default ListAutocomplete;