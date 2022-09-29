import { useState, useEffect } from "react";
import { Box,Grid, TextField } from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup";

const Receptor = ({onChange}) => {

    const[r_social, setR_social] = useState("");
    const[email, setEmail] = useState("");
    const[nit, setNit] = useState("")
    const[n_documento, setN_documento] = useState("")
    
    const {errors,touched,getFieldProps} = useFormik({
        initialValues:{
            RazonSocial:"",
            email:"",
            Ndocumento:""
        },validationSchema: Yup.object({

        })
    });

    useEffect(()=>{
       onChange({ Receptor:{
        r_social,
        nit,
        email,
        n_documento,
       },R_extra:{

       }
       });
    },[r_social]);


    return(
        <Grid container spacing={2}>
            
            <Grid item xs={12} sm={10} md={6}>
                <TextField fullWidth label='Razon social' />
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
                <TextField fullWidth label='Razon social'/>
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
                <TextField fullWidth label='Razon social'/>
            </Grid>
            <Grid item xs={12} sm={10} md={6}>
               <TextField fullWidth label='Razon social'/>
            </Grid>
            
        </Grid>  
    );
}

export default Receptor;