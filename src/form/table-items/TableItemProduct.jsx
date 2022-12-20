import {React, useState} from "react";
import { TableRow, TableCell, IconButton } from "@mui/material";
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';
import TextInputTable from "./table-input/TextInputTable";
import AutoInputTable from "./table-input/AutoInputTable";
import { Formik, form } from 'formik';



const TableItemProduct = ({index, handleDeleteProduct, setPValues, pvalues}) =>{
    
    let list = [];
    const [description, setDescription] = useState('');
    const [um, setUM] = useState('');
    const [valor_u, setValor_u] = useState('');
    const [total, setTotal] = useState('');

    const handleTotal = () =>{

    }

    const handleValues = (item) =>{
        if(typeof(item) !== 'undefined')
        {   setDescription(item.descripcion);
            setUM(item.um);
            setValor_u(item.precio_u);
            const impuesto = {'impuesto':'12'}
            list = pvalues;
            list = [...list, { 'Producto' : {'datos' : item, impuesto}}]
            setPValues(list);
        }else{
            list = pvalues;
            list.splice((index-1), 1)
            setPValues(list)
            setDescription('');
            setUM('');
            setValor_u('');
        }
    }

    const handleDelete = () => {
        list = pvalues;
        list.splice((index-1), 1)
        setPValues(list)
        handleDeleteProduct(index-1)
    }

    
    return(
        <Formik 
         initialValues={{

         }}>
         <TableRow>
             <TableCell align="center">
               {index}
             </TableCell>
             <AutoInputTable index = {index} handleValues = {handleValues}  
                 />
             <TextInputTable value = {description} disabled = {true}
                />
             <TextInputTable value={um} disabled = {true}
                />
             <TextInputTable 
                />
             <TextInputTable value={valor_u} disabled = {true}
                />
             <TextInputTable />
             <TextInputTable />
             <TextInputTable disabled={true}/>
             
             {(index - 1) > 0 && (
                 <TableCell>
                     <IconButton onClick={handleDelete}>
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