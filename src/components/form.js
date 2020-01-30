import React from 'react';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const UserForm = ({ values, errors, touched, isSubmitting, isValid }) => {
    return (
            <Form>
                <Field type='text' name='name' placeholder='name'/> 
                <Field type='text' name='email' placeholder='email'/>
                <Field type='text' name='password' placeholder='password'/>
                <Field type='checkbox' name='tos' checked={values.tos}/>
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
            tos: tos || false;
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