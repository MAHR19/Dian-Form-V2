import {React, useState} from "react";
import {Button, Table, TableContainer, TableBody, Paper, TableHead, TableCell, TableRow} from '@mui/material';
import TableItemProduct from "../table-items/TableItemProduct";
import TableHeaders from "../table-items/TableHeaders";


const Producto = () =>{

    const [productos, setProductos] = useState([{'producto' : ''}])
    const [pvalues, setPValues] = useState([])

    const handleAddProduct = () => {
        setProductos([...productos, {'producto' : ''}]);
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
                  <TableHeaders handleAddProduct = {handleAddProduct}/>
                </TableHead>
                <TableBody>
                    {productos.map((producto, index)=>( 
                          <TableItemProduct key = {index} index = {index+1}
                          handleDeleteProduct = {handleDeleteProduct} 
                          setPValues = {setPValues} pvalues = {pvalues} 
                           />
                       ))}
                </TableBody>
              </Table>
            </TableContainer>
          
            </Paper>
          );
}

export default Producto;