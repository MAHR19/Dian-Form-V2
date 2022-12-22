
import { useState, useEffect } from "react";
import { useFormik, Formik } from "formik";
import { receptor_initial_values } from "../form-validations/initial-values/Receptor_values";
import { receptor_schema } from "../form-validations/schemas/Receptor_schema";
import { Grid, Paper, Button } from "@mui/material";
import CountrySelect from '../form-input/Countryselect';
import CustomInputText from "../form-input/CustomInputText";


const Receptor = ({setReceptor}) => {
    
    const[address, setAdress]  = useState({});

    const {touched, errors, handleBlur, handleChange, values} = useFormik({
        initialValues : receptor_initial_values,
        validationSchema : receptor_schema
    });

    
    useEffect(()=>(
        setReceptor({...values, ...address})
       ),[values, address])

    return(
                <Paper elevation={5}
                style = {{ padding : 8}}
                >
               <Grid container spacing={2} >
                
                <CustomInputText
                 md={5} 
                 haserror={touched.r_social && Boolean(errors.r_social)} 
                 name={'r_social'} 
                 label={'Razón social*'} 
                 value={values.r_social} 
                 onChange={handleChange} 
                 onBlur={handleBlur} 
                 errorText={touched.r_social && errors.r_social} />
    
                <CustomInputText 
                 md={4} 
                 haserror={touched.email && Boolean(errors.email)} 
                 name={'email'} 
                 label={'Email*'} 
                 value={values.email} onChange={handleChange} 
                 onBlur={handleBlur} 
                 errorText={touched.email && errors.email} />
    
                <CustomInputText 
                 md={3} 
                 haserror={touched.nit && Boolean(errors.nit)} 
                 name={'nit'} 
                 label={'NIT*'} 
                 value={values.nit} 
                 onChange={handleChange} 
                 onBlur={handleBlur} 
                 errorText={touched.nit && errors.nit} />
        
                <CountrySelect 
                 setAdress = {setAdress}
                 />

                 </Grid>  
                </Paper>          
    );
}

export default Receptor;