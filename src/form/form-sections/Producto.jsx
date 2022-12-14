import {React, useState} from "react";
import {Table, TableContainer, TableBody, Paper, TableHead} from '@mui/material';
import TableItemProduct from "../table-items/TableItemProduct";
import TableHeaders from "../table-items/TableHeaders";


const Producto = () =>{

    const [productos, setProductos] = useState([{'producto' : ''}])
 
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
              <Table stickyHeader sx={{
                minWidth : 650
              }}>
                <TableHead>
                  <TableHeaders handleAddProduct = {handleAddProduct}/>
                </TableHead>
                <TableBody>
                    {productos.map((producto,index)=>( 
                          <TableItemProduct key = {index} index = {index+1}
                          removeItem = { ()=> {handleDeleteProduct(index)} } />
                       ))}
                </TableBody>
              </Table>
            </TableContainer>
          
            </Paper>
          );
}

export default Producto;