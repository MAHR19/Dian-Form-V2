import React from "react";
import { useState, useEffect } from "react";
import {Box, Grid, TextField} from "@mui/material"
import { useFormik } from "formik";
import * as Yup from "yup";

const Documento = ({onChange}) => {

    const[docu, setDocu] = useState("")
    const[docu2, setDocu2] = useState("")
    
    const {errors,touched,getFieldProps} = useFormik({
        initialValues:{
            RazonSocial:"",
            email:"",
            Ndocumento:""
        },validationSchema: Yup.object({

        })
    });

    useEffect(()=>{
       onChange({Documento:{
        docu,
        docu2
       }     
       });
    },[docu, docu2]);


    return(
      
         <Grid container>
            <Grid item>
                <TextField />
            </Grid>

            <Grid item>
                <TextField />
            </Grid>

            <Grid item>
                <TextField />
            </Grid>
         </Grid>
    );
}

export default Documento;