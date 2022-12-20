import {React, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button ,Paper, Collapse } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ListItemProducto from './ListItemProducto';

const ListProductos = () => {

  const[items, setItems] = useState([]);
  const[productos, setProductos] = useState([]);

  const handleAddItems = () =>
  { 
    setItems([...items, {'item':''}]); 
  }

  const handleDeleteItems = (index) =>
  { 
    const list = [...items]
    list.splice(index, 1);
    setItems(list);
  }

  return (
    <Paper elevation={8}>
    <List>
      <ListItemProducto 
       index = {0}
       productos = {productos}
       setProductos = {setProductos}
      />
      {items.map((item, index)=>
      ( 
          <ListItemProducto 
            key = {index}
            index = {index+1}
            handleDeleteItems = {handleDeleteItems}
            productos = {productos}           
            setProductos = {setProductos}
           />
      ))}
      <ListItem>
        <Button 
         startIcon = {<AddIcon />}
         variant = 'contained'
         color = 'success'
         size = 'small'
         onClick={handleAddItems}
         >
          añadir producto
        </Button>
      </ListItem>
    </List>
    </Paper>
  );
}

export default ListProductos;