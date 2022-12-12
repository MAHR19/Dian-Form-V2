import {React, useState} from "react";
import {Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Collapse} from '@mui/material';
import {Paper, IconButton} from '@mui/material';
import AutocompleteInput from "../form-input/AutocompleteInput";
import CustomInputText from "../form-input/CustomInputText";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import TableItemProduct from "../table-items/TableItemProduct";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

const Producto = () =>{

    const [productos, setProductos] = useState([{'producto' : ''}])
    const [trans, setTrans] = useState(false);

    const handleAddProduct = () => {
        setProductos([...productos, {'producto' : ''}]);
        setTrans(true);
    }

    const handleDeleteProduct = (index) =>{
      const list = [...productos];
      list.splice(index, 1);
      setProductos(list);
    }
    
        return (
            <Paper elevation={5}>
            <TableContainer>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell> 
                        <IconButton onClick={handleAddProduct}>
                        <AddCircleRoundedIcon />
                        </IconButton>
                        </TableCell>
                    <TableCell>Codigo</TableCell>
                    <TableCell >Descripción</TableCell>
                    <TableCell >U/M</TableCell>
                    <TableCell >Cantidad</TableCell>
                    <TableCell >Precio unitario</TableCell>
                    <TableCell >IVA</TableCell>
                    <TableCell >Descuento</TableCell>
                    <TableCell >Total</TableCell>
                    <TableCell >Acciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {productos.map((producto,index)=>( 
                          <TableItemProduct key = {index} index = {index+1}
                          removeItem = { ()=> {handleDeleteProduct(index)} } Grow = {trans}/>
                       ))}
                </TableBody>
              </Table>
            </TableContainer>
            </Paper>
          );
   
    
}

export default Producto;