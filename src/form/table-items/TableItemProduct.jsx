import {React, useState} from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import AutocompleteInput from "../form-input/AutocompleteInput";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import TextInputTable from "./table-input/TextInputTable";
import AutoInputTable from "./table-input/AutoInputTable";
import { Formik, form } from 'formik';
import Button from "@mui/material/Button";


const TableItemProduct = ({index, removeItem}) =>{
     
    const [producto, setProducto] = useState([])

    const handleClick = () =>{
        console.log('as')
        console.log(producto)
    }

    return(
        <Formik 
         initialValues={{

         }}>
         <TableRow>
             <TableCell align="center">
               {index}
             </TableCell>
             <AutoInputTable producto = {producto} setProducto = {setProducto} index = {index} />
             <TextInputTable />
             <TextInputTable />
             <TextInputTable />
             <TextInputTable />
             <TextInputTable />
             <TextInputTable />
             <TextInputTable />
             <TableCell onClick={handleClick}>
                <Button>
                    log
                </Button>
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
        </Formik>
    );
}

export default TableItemProduct;