import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInputText from "../form-input/CustomInputText";
import { Grid } from "@mui/material"


const Receptor = ({onChange}) => {

    const {handleChange,values,errors,handleBlur,touched} = useFormik({
        initialValues:{
            r_social:'',
            email:'',
            nit:'',
            n_documento:''
        },validationSchema: Yup.object({
            r_social: Yup.string()
                      .required('Campo requerido'),
            email: Yup.string()
                    .email('Email invalido')
                    .required('Campo requerido'),
            nit: Yup.string()
                 .required('Campo requerido'),
            n_documento: Yup.string()
                        .required('Campo requerido')
                 
        })
    });

    //*** Passing values to fullform  ***//
    useEffect(()=>{
       onChange({ Receptor:{
        values      
       },R_extra:{
       }
       });
    },[values]);


    return(
        <Grid container spacing={2}>     

            <CustomInputText xs={12} sm={10} md={7} haserror={touched.r_social && Boolean(errors.r_social)} 
            name={'r_social'} label={'Razón social*'} value={values.r_social} onChange={handleChange} 
            onBlur={handleBlur} errorText={touched.r_social && errors.r_social} />

            <CustomInputText xs={12} sm={10} md={5} haserror={touched.email && Boolean(errors.email)} 
            name={'email'} label={'Email*'} value={values.email} onChange={handleChange} 
            onBlur={handleBlur} errorText={touched.email && errors.email} />

            <CustomInputText xs={12} sm={10} md={6} haserror={touched.nit && Boolean(errors.nit)} 
            name={'nit'} label={'NIT*'} value={values.nit} onChange={handleChange} 
            onBlur={handleBlur} errorText={touched.nit && errors.nit} />

            <CustomInputText xs={12} sm={10} md={6} haserror={touched.n_documento && Boolean(errors.n_documento)} 
            name={'n_documento'} label={'Número de documento*'} value={values.n_documento} onChange={handleChange} 
            onBlur={handleBlur} errorText={touched.n_documento && errors.n_documento} />
               

        </Grid>  
    );
}

export default Receptor;