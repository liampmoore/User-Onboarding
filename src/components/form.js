import React from 'react';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ values, errors, touched, isSubmitting, isValid }) => {
    return (
            <Form>
                <div>
                    {touched.name && errors.name && <p>{errors.name}</p>]}
                    <Field type='text' name='name' placeholder='name'/> 
                </div>
                <div>
                    {touched.email && errors.email && <p>{errors.email}</p>}
                    <Field type='text' name='email' placeholder='email'/>
                </div>
                <div>
                    {touched.password && errors.password && <p>{errors.password}</p>}
                    <Field type='text' name='password' placeholder='password'/>
                </div>
                <div>
                    <Field type='checkbox' name='tos' checked={values.tos}/>
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
})