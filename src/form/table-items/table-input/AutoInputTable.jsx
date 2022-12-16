import {React, useState} from 'react';
import { TableCell, Autocomplete, TextField } from '@mui/material';

const AutoInputTable = ({ index, handleValues, productos}) =>{

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

   const handleItemAdden = (event, value) => {
     const item = data.find((element)=> element.name === value);
     console.log(item)
     handleValues(item);
   } 
    
    return(
        <TableCell >
            <Autocomplete
                sx={{
                    width: 130 
                }}
                freeSolo
                id='producto'
                options = {data.map((option)=> option.name )}
                size='small'
                fullWidth
                onInputChange={(event, inputValue) => handleAPIrequest(inputValue)}
                onChange = { (event, value) => handleItemAdden(event, value)}
                renderInput = {
                    (params) => <TextField {...params} label='Codigo' />
                }
             />
        </TableCell>
    );
}

export default AutoInputTable;
