import React from 'react'
import {useFormik} from 'formik'
import *as Yup from 'yup'

function Form() {
    let formik = useFormik({
        initialValues:{
            firstName: '',
            lastName: '',
            email: '',
            checkbox: false
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(12,'exceed the number').required('pls tap in'),
            lastName: Yup.string().max(12,'exceed the number').required('pls tap in'),
            email: Yup.string().email('invalid email').required('pls tap in'),
            checkbox: Yup.boolean().required('you have not accepted it')
        }),
        onSubmit:(actions,values)=>{
            console.log(values);
            actions.resetForm()
            
        }
    })
    console.log(formik.values);
    
  return (
    <form onSubmit={formik.handleSubmit}>          
    <div>
     <input type='text' name='firstName' onChange={formik.handleChange} value={formik.values.firstName} onBlur={formik.handleBlur}/>
            {
                formik.errors.firstName && formik.touched.firstName?
                <p>{formik.errors.firstName}</p>:''
            }
        </div>
        <div>
        <input type='text' name='lastName' onChange={formik.handleChange} value={formik.values.lastName} onBlur={formik.handleBlur}/>
        {
                formik.errors.lastName && formik.touched.lastName?
                <p>{formik.errors.lastName}</p>:''
            }
        </div>
        <div>
        <input type='email' name='email' onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
        {
                formik.errors.email && formik.touched.email?
                <p>{formik.errors.email}</p>:''
            }
        </div>
        <div>
            <label>accept terms and conditions</label>
            <input type='checkbox' name='checkbox'/>
        </div>
        <input type='submit' value={'submit'} />
    </form>
  )
}

export default Form
