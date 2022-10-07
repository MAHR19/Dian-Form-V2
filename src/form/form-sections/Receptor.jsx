import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomInputText from "../form-input/CustomInputText";
import AutocompleteInput from "../form-input/AutocompleteInput";
import { Grid } from "@mui/material";

const Receptor = ({onChange}) => {
    
    //const[objects, setObjects] = useState({});
    const nitvalidation = Yup.string().required('Campo requerido').matches((/^[0-9]+-{1}[0-9]{1}/g), 'NIT invalido');
                            
    const {handleChange,values,errors,handleBlur,touched,setFieldValue} = useFormik({
        initialValues:{
            r_social:'',
            email:'',
            nit:'',
            pais:{},
            cp : '',
            municipio : '',
            departamento : '',
            direccion :'' 
        }, validationSchema : Yup.object({
            r_social: Yup.string()
                      .required('Campo requerido'),
            email: Yup.string()
                    .email('Email invalido')
                    .required('Campo requerido'),
            nit: nitvalidation,
            n_documento: Yup.string()
                        .required('Campo requerido'),
            pais : Yup.object()
                    .required('Campo requerido')         
        }),
    });

  
    const handleValidation= () => {
        if(Boolean(errors.email)===false && Boolean(errors.r_social)===false && Boolean(errors.nit)===false && Boolean(errors.n_documento)===false)
        {
            if(values.email==='' || values.r_social==='' || values.nit==='' || values.n_documento===''){return true}// true if is initial state and avoid posting
             else{return false}// false if there aren't errors and is not initial state
        }
        else{return true}//if has errors return true 
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
            
            <AutocompleteInput  xs={12} sm={10} md={6} haserror={touched.pais && Boolean(errors.pais)} name={'pais'} catalogo={'Paises'}
            setFieldValue={setFieldValue} onBlur={handleBlur} errorText={touched.pais && errors.pais} label={'País'} />

            <AutocompleteInput  xs={12} sm={10} md={4} name={'cp'} catalogo={'Codigo postal'}
            label = {'Código postal'} />

            <AutocompleteInput  xs={12} sm={10} md={4} name={'municipio'} 
            label = {'Municipio'} />

            <AutocompleteInput  xs={12} sm={10} md={4} name={'departamento'} 
            label = {'Departamento'} />

            <CustomInputText xs={12} sm={10} md={12} name={'direccion'} 
            label={'Direccion'}  />

        </Grid>  
    );
}

export default Receptor;