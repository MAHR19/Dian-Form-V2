import React from "react";
import { useState } from "react";
import GoogleButton from "../login/login-items/GoogleButton";
import { Box,Grid,Typography,Paper,Container, Divider } from "@mui/material";
import Receptor from "./form-sections/Receptor";
import Documento from "./form-sections/Documento";
import ListProductos from "./list-items/ListProductos";
import Notas from "./form-sections/Notas";
import Totales from "./form-sections/Totales";


const FullformFE = () =>{

    const[receptor, setReceptor] = useState([{}]);
    //const[documento, setDocumento] = useState({});

    const onClick = () =>{
        //setData([...data,{info:""}])
        console.log(receptor)
       
    }


    return(
        <Box>
            <form action="">

             <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                 <Typography variant="h4" gutterBottom>Factura Electrónica</Typography>
                 <Divider />
                </Grid>
                
                <Grid item xs={12} sm={12} md={6}>
                <Box component={'div'}> <Typography variant="h5" gutterBottom>Receptor</Typography> </Box>
                    <Receptor onChange={setReceptor} />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                <Box> <Typography variant="h5" gutterBottom>Documento</Typography> </Box>
                    
                    <Documento onChange={setReceptor} />

                </Grid>   
                <Grid item xs={12} sm={12} md={12}>
                <Box> <Typography variant="h5" gutterBottom>Productos o servicios</Typography> </Box>
                    <ListProductos />
                </Grid>


                <Grid item xs={12} sm={12} md={8}>
                <Box> <Typography variant="h5" gutterBottom>Notas</Typography> </Box>
                   <Notas />
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                <Box> <Typography variant="h5" gutterBottom>Totales</Typography> </Box>
                    <Totales />
                </Grid>

             
             </Grid>
            

            </form>
        </Box>
    );
} 

export default FullformFE;