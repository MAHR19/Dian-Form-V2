import React from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import AutocompleteInput from "../form-input/AutocompleteInput";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import TextInputTable from "./table-input/TextInputTable";


const TableItemProduct = ({index, removeItem, Grow}) =>{
     

    return(
        
        <TableRow>
            <TableCell align="center">
              {index}
            </TableCell>
            <TextInputTable />
            <TextInputTable />
            <TextInputTable />
            <TextInputTable />
            <TextInputTable />
            <TextInputTable />
            <TextInputTable />
            <TextInputTable />

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