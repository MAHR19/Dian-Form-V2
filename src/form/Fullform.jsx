import React from "react";
import { useState } from "react";
//import { useFormik } from "formik";
//import * as Yup from "yup";
import { Box,Grid,Typography } from "@mui/material";
import Receptor from "./form-sections/Receptor";



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
                <Grid item xs={12} sm={10} md={5}>
                <Typography variant="h5">Receptor</Typography>
                    <Receptor onChange={setReceptor} />
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