import { TableRow, TableCell } from "@mui/material";

const Tableheaders = ({Headers}) =>{
    
    const items = []
    for(let i = 0; i < Headers.lenght; i++){
        items.push(<TableCell key={i+1}> Headers[i] </TableCell>);
    }
    
    return(
        <TableRow>
         {items}
        </TableRow>
    );
}

export default Tableheaders;