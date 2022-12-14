import {React, useState} from 'react';
import { TableCell, Autocomplete, TextField } from '@mui/material';

const AutoInputTable = ({setProducto, index, producto}) =>{

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

   const handleItemAdden = (value) => {
     //console.log(producto)
     let item = data.find((element)=> element.name === value);
     let list = producto;
     console.log(list)
     list.push({'Producto':item})
     console.log(list)
     setProducto(list);
   } 
    

    return(
        <TableCell >
            <Autocomplete
                style={{
                    width: 130 
                }}
                freeSolo
                id='producto'
                options = {data.map((option)=> option.name )}
                size='small'
                fullWidth
                onInputChange={(event, inputValue) => handleAPIrequest(inputValue)}
                onChange = { (event, value) => handleItemAdden(value)}
                renderInput = {
                    (params) => <TextField {...params} label='Codigo' />
                }
             />

        </TableCell>
    );
}

export default AutoInputTable;
