import {useEffect} from 'react';
import {Grid, Paper} from '@mui/material';
import DateSelector from '../form-input/DateSelector';
import AutocompleteInput from '../form-input/AutocompleteInput';
import AutocompleteFullc from '../form-input/AutocompleteFullc';
import { useFormik } from 'formik';
import dayjs from 'dayjs';
import * as Yup from 'yup';

const Documento  = ({setDocumento}) =>{

    const {values, touched, handleBlur, setFieldValue, errors } = useFormik({
        initialValues : {
          tipodocumento : '',
          moneda : '',
          formapago : '',
          mediopago : '',
          fechafirmado : dayjs().format('DD/MM/YYYY:hh:mm:ss'),
          fechaemision : dayjs().format('DD/MM/YYYY'),
          fechavencimiento : dayjs().format('DD/MM/YYYY')
        },
        validationSchema : Yup.object({
            tipodocumento : Yup.object().required('Campo requerido'),
            moneda : Yup.object().required('Campo requerido'),
            formapago : Yup.object().required('Campo requerido'),
            mediopago : Yup.object().required('Campo requerido'),
            fechavencimiento : Yup.string().required('Campo requerido')
        })
    })

    useEffect(()=>(
        setDocumento(values)
    ),[values])


    return(
        <Paper elevation={5}
         style = {{
            padding : 8
         }
         }>
    <Grid  container spacing={2}>
       
        
        <AutocompleteInput 
         md = {12} 
         name = {'tipodocumento'}
         label = {'Tipo documento'} 
         catalogo = {'TipoDocumento'}
         setFieldValue = {setFieldValue}
         onBlur = {handleBlur}
         haserror = {Boolean(touched.tipodocumento && errors.tipodocumento)} 
         errorText = {touched.tipodocumento && errors.tipodocumento}
        />

        <AutocompleteInput 
         md = {6} 
         name = {'moneda'}
         label = {'Moneda'} 
         catalogo = {'TipoMoneda'}
         setFieldValue = {setFieldValue}
         onBlur = {handleBlur}
         haserror = {Boolean(touched.moneda && errors.moneda)} 
         errorText = {touched.moneda && errors.moneda} 
        />

        <AutocompleteFullc
         md = {6} 
         name = {'formapago'}
         label = {'Forma de pago'} 
         catalogo = {'FormasPago'}
         setFieldValue = {setFieldValue}
         onBlur = {handleBlur}
         haserror = {Boolean(touched.formapago && errors.formapago)} 
         errorText = {touched.formapago && errors.formapago}  
        />

        <AutocompleteInput
         md = {6} 
         name = {'mediopago'}
         label = {'Medio de pago'} 
         catalogo = {'MediosPago'}
         setFieldValue = {setFieldValue}
         onBlur = {handleBlur}
         haserror = {Boolean(touched.mediopago && errors.mediopago)} 
         errorText = {touched.mediopago && errors.mediopago}  
        />

        <DateSelector 
         label = {'Fecha de Vencimiento'}
         name = {'fechavencimiento'}
         haserror = {Boolean(touched.fechavencimiento && errors.fechavencimiento)} 
         errorText = {touched.fechavencimiento && errors.fechavencimiento}  
         onBlur = {handleBlur}
         setFieldValue = {setFieldValue}
         />   
    </Grid>
    </Paper>
    );

}

export default Documento;