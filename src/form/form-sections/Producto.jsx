import {React, useState} from "react";
import {Table, TableContainer, TableBody, Paper, TableHead} from '@mui/material';
import TableItemProduct from "../table-items/TableItemProduct";
import TableHeaders from "../table-items/TableHeaders";

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
                  <TableHeaders handleAddProduct = {handleAddProduct}/>
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