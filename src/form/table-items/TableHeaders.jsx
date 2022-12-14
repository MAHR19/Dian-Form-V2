import React from 'react';
import { TableCell, TableRow } from '@mui/material';
import AddItemTable from './AddItemTable';

const TableHeaders = ({handleAddProduct}) =>{

    return(
        <TableRow>
            <AddItemTable handleAddProduct = {handleAddProduct}/>
            <TableCell align="center" size='medium'>Codigo</TableCell>
            <TableCell align="center">Descripción</TableCell>
            <TableCell align="center">U/M</TableCell>
            <TableCell align="center">Cantidad</TableCell>
            <TableCell align="center">Precio unitario</TableCell>
            <TableCell align="center">IVA</TableCell>
            <TableCell align="center">Descuento</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="center">Acciones</TableCell>
        </TableRow>

    );

}

export default TableHeaders