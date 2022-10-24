import * as Yup from 'yup';


export const nitvalidation = Yup.string()
                            .required('Campo obligatorio')
                            .matches((/^[0-9]+-{1}[0-9]{1}/g), 'NIT invalido');