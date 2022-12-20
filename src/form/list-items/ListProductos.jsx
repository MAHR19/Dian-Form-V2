import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Button ,Paper } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import ListItemProducto from './ListItemProducto';

const ListProductos = () => {
  return (
    <Paper elevation={8}>
    <List style={{
      overfloe: 'auto'
    }}>
      <ListItemProducto />
      <ListItem>
        <Button>
          añadir producto
        </Button>
      </ListItem>
    </List>
    </Paper>
  );
}

export default ListProductos;