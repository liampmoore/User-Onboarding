import React from 'react';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ values, errors, touched, isSubmitting, isValid }) => {
    return (
            <Form>
                <div>
                    <Field type='text' name='name' placeholder='name'/>
                    {touched.name && errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <Field type='text' name='email' placeholder='email'/>
                    {touched.email && errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <Field type='password' name='password' placeholder='password'/>
                    {touched.password && errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <Field type='checkbox' name='tos' checked={values.tos}/>
                    {!values.tos ? <span>Terms of service.</span> : <span>Agreed.</span>}
                </div>
                <button type='submit' disabled={!values.tos || !isValid}>Submit</button>
            </Form>
    );
}

const FormikUserForm = withFormik({
    mapPropsToValues({name, email, password, tos}) {
        return {
            name: name || '',
            email: email || '',
            password: password || '',
            tos: tos || false
        }
    }, 
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .required('Name is required.'),
        email: Yup.string()
            .email("Email is invalid.")
            .required('Email is required.'),
        password: Yup.string()
            .min(6, "Password needs at least six characters.")
            .required('Password is required.')

      }),
      handleSubmit(values) {
          axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
      }
})(UserForm);


export default FormikUserForm;