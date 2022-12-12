import Tableheaders from './Tableheaders';
import { Table, TableContainer, TableBody, TableHead} from '@mui/material';


const Fulltable = () =>{

    const headers = {};


    return(
        <TableContainer>
            <Table>
                <TableHead>
                    <Tableheaders Headers={headers} />
                </TableHead> 
            </Table>
        </TableContainer>
        
    );
}

export default Fulltable;