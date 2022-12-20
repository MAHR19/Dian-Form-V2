import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { TextField, Container, Divider,Paper } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Notas from '../form-sections/Notas';
import ListItemProducto from './ListItemProducto';

const ListProductos = () => {
  return (
    <Paper elevation={8}>
    <List style={{
      overfloe: 'auto'
    }}>
      <ListItemProducto />
        
    </List>
    </Paper>
  );
}

export default ListProductos;