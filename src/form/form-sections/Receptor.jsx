import { useEffect } from "react";
import { useFormik } from "formik";
import { receptor_initial_values } from "../form-validations/initial-values/Receptor_values";
import { receptor_schema } from "../form-validations/schemas/Receptor_schema";
import { Grid } from "@mui/material";
import CountrySelect from '../form-input/Countryselect';
import CustomInputText from "../form-input/CustomInputText";
import AutocompleteInput from "../form-input/AutocompleteInput";


const Receptor = ({onChange}) => {
    
    const {handleChange,values,errors,handleBlur,touched,setFieldValue} = useFormik({
        initialValues:receptor_initial_values, 
        validationSchema : receptor_schema,
    });

    const handleCountryChange = () =>{
        console.log(receptor_initial_values.pais)
        values.cp={
            codigo_departamento: '',
            codigo_municipio: '',
            name:'',
            nombre_departamento:'',
            nombre_municipio:'',
            tipo:''
        }
        return true
    }

    const handleValidation= () => {
        if(Boolean(errors.email)===false && Boolean(errors.r_social)===false 
         && Boolean(errors.nit)===false && Boolean(errors.n_documento)===false)
        {
            if(values.email==='' || values.r_social==='' || values.nit===''){return true}
            // true if is initial state and avoid posting
             else{return false}
             // false if there aren't errors and is not initial state
        }
        else{return true}//if has errors return true 
    }

    //*** Passing values to fullform  ***//
   // useEffect(()=>{
   //    onChange({ Receptor:{
   //     values     
   //    },R_valido:{
   //     receptor: handleValidation()
   //    }
   //    });
   // },[values]);

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
            
            
            <CountrySelect />
        </Grid>  
    );
}

export default Receptor;