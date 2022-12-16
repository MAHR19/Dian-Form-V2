import React from 'react';
import { TextField, TableCell } from '@mui/material';

const TextInputTable = ({value, disabled}) =>{
    return(
      <TableCell >
        <TextField 

         size = 'small'
         color='success'
         disabled = {disabled}
         value={value}
         fullWidth
         />
      </TableCell>
    );

}

export default TextInputTable;