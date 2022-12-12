import * as Yup from 'yup'
import { nitvalidation } from './Nit-validation'

export const receptor_schema = Yup.object({
    r_social: Yup.string()
                      .required('Campo requerido'),
            email: Yup.string()
                    .email('Email invalido')
                    .required('Campo requerido'),
            nit: nitvalidation,
            n_documento: Yup.string()
                        .required('Campo requerido'),
            pais : Yup.object()
                    .required('Campo requerido'),
            cp : Yup.object()
            .required('Campo requerido')
})