import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInputText from "../form-input/CustomInputText";
import AutocompleteInput from "../form-input/AutocompleteInput";
import { Grid } from "@mui/material"

const Receptor = ({onChange}) => {

    const {handleChange,values,errors,handleBlur,touched,setFieldValue} = useFormik({
        initialValues:{
            r_social:'',
            email:'',
            nit:'',
            n_documento:'',
            search : {name:'', code:'', description:''},
        }, validationSchema : Yup.object({
            r_social: Yup.string()
                      .required('Campo requerido'),
            email: Yup.string()
                    .email('Email invalido')
                    .required('Campo requerido'),
            nit: Yup.string()
                 .required('Campo requerido')
                 .matches((/^[0-9]+-{1}[0-9]{1}/g), 'NIT invalido'),
            n_documento: Yup.string()
                        .required('Campo requerido'),
            search: Yup.object()
                    .shape({
                      name: Yup.string().required(),
                      code: Yup.string().required(),
                      description : Yup.string(),
                    })       
        }),
    });

  
    const handleValidation= () => {
        if(Boolean(errors.email)===false && Boolean(errors.r_social)===false && Boolean(errors.nit)===false && Boolean(errors.n_documento)===false)
        {
            if(values.email==='' || values.r_social==='' || values.nit==='' || values.n_documento===''){return true}// true if is initial state and avoid posting
             else{return false}// false if there aren't errors and is not initial state
        }
        else{return true}//if are errors return true 
    }


    //*** Passing values to fullform  ***//
    useEffect(()=>{
       onChange({ Receptor:{
        values     
       },R_extra:{
         
       },R_valido:{
        receptor: handleValidation()
       }
       });
    },[values]);


    return(
        <Grid container spacing={2} >     

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
            
            <AutocompleteInput xs={12} sm={10} md={12} haserror={Boolean(errors.search)} catalogo={'Paises'} 
            label={'Países'} name={'search'} setFieldValue={setFieldValue} />
            
        </Grid>  
    );
}

export default Receptor;