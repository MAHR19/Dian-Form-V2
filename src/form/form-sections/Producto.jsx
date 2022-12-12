import {React, useState} from "react";
import {Table, TableContainer, TableBody, TableCell, TableHead, TableRow} from '@mui/material';
import {Paper, IconButton} from '@mui/material';
import AutocompleteInput from "../form-input/AutocompleteInput";
import CustomInputText from "../form-input/CustomInputText";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import TableItemProduct from "../table-items/TableItemProduct";
import { blue } from "@mui/material/colors";

const Producto = () =>{

    const [productos, Addproductos] = useState([{'producto' : ''}])

    const handleAddProduct = () => {
        Addproductos([...productos, {'producto' : ''}]);
    } 
        return (
            <Paper elevation={5}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell> 
                        <IconButton onClick={handleAddProduct}>
                        <AddCircleRoundedIcon />
                        </IconButton>
                        </TableCell>
                    <TableCell>Codigo</TableCell>
                    <TableCell >Calories</TableCell>
                    <TableCell >Fat&nbsp;(g)</TableCell>
                    <TableCell >Carbs&nbsp;(g)</TableCell>
                    <TableCell >nameu</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((producto,index)=>
                        <TableItemProduct key={index} />
                    )}
                </TableBody>
              </Table>
            </TableContainer>
            </Paper>
          );
   
    
}

export default Producto;