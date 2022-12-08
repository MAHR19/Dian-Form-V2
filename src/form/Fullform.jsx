import React from "react";
import { useState } from "react";
//import { useFormik } from "formik";
//import * as Yup from "yup";
import GoogleButton from "../login/login-items/GoogleButton";
import { Box,Grid,Typography,Paper,Container } from "@mui/material";
import Receptor from "./form-sections/Receptor";
import Documento from "./form-sections/Documento";


const Fullform = () =>{

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
                <Grid item xs={12} sm={10} md={6}>
                <Box component={'div'}> <Typography variant="h5" gutterBottom>Receptor</Typography> </Box>
                    <Receptor onChange={setReceptor} />
                </Grid>
                <Grid item xs={12} sm={10} md={6}>
                <Box> <Typography variant="h5" gutterBottom>Documento</Typography> </Box>
                    
                    

                    <Documento onChange={setReceptor} />

                    
                    
                          
                    
                    <GoogleButton/>
                </Grid>

                
                
             </Grid>
             
             
             <button type="button" onClick={onClick}>
                Save
            </button>   

            </form>
        </Box>
    );
} 

export default Fullform;