import React from "react";
import { TableCell, IconButton, Tooltip, Toolbar } from "@mui/material";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';


const AddItemTable = ({handleAddProduct}) =>{

    return(
        <TableCell> 
            <Tooltip title='Añadir un producto' >
             <IconButton onClick={handleAddProduct}>
              <AddCircleRoundedIcon />
             </IconButton>
            </Tooltip>
        </TableCell>
    );
}


export default AddItemTable;