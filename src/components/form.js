import React from 'react';
import {withFormik, Form, Field } from 'formik';

const UserForm = ({ values, errors, touched, isSubmitting }) => {
    return (
            <Form>
                <Field type='text' name='name' placeholder='name'/> 
                <Field type='text' name='email' placeholder='email'/>
                <Field type='text' name='password' placeholder='password'/>
                <Field type='checkbox' name='tos' checked={values.tos}/>
                <button type='submit'>Submit</button>
            </Form>
    );
}