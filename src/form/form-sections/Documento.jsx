import { React, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Grid } from "@mui/material"
import CustomInputText from "../form-input/CustomInputText";


const Documento = ({onChange}) => {

    const {values,errors,touched,handleBlur, handleChange} = useFormik({
        initialValues:{
            RazonSocial:"",
            email:"",
            Ndocumento:""
        },validationSchema: Yup.object({

        })
    });

    useEffect(()=>{
       onChange({Documento:{
        values
       }     
       });
    },[values]);


    return(
         <Grid container spacing={2}>
            
         </Grid>
    );
}

export default Documento;