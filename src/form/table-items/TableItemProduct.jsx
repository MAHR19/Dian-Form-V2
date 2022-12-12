import React from "react";
import { TableRow, TableCell, TextField, IconButton, Grow } from "@mui/material";
import AutocompleteInput from "../form-input/AutocompleteInput";
import CustomInputText from "../form-input/CustomInputText";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';



const TableItemProduct = ({index, removeItem, Grow}) =>{
     

    return(
        
        <TableRow>
            <TableCell>
              {index}
            </TableCell>
            <TableCell>
                <AutocompleteInput />
            </TableCell>
            <TableCell>
                <CustomInputText />
            </TableCell>
            <TableCell>
                <TextField />
            </TableCell>
            <TableCell>
                <TextField />
            </TableCell>
            <TableCell>
                <TextField />
            </TableCell>
            <TableCell>
                <TextField />
            </TableCell>
            <TableCell>
                <TextField />
            </TableCell>
            <TableCell>
                <TextField />
            </TableCell>
            {(index - 1) > 0 && (
                <TableCell>
                    <IconButton onClick={removeItem}>
                    <RemoveCircleRoundedIcon />
                </IconButton>
                </TableCell>
            )
            }
            
        </TableRow>
       
    );
}

export default TableItemProduct;