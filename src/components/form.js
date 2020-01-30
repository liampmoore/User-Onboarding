import React from 'react';
import {withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UserForm = ({ values, errors, touched, isSubmitting, isValid }) => {
    return (
            <Form className='card'>
                <h2>Add new users:</h2>
                <div>
                    <Field type='text' name='name' placeholder='name'/>
                    {touched.name && errors.name ? <>{' '}<span className='error'>{errors.name}</span></>: touched.name && <>{' '}<span className='confirmed'>Looks good.</span></>}
                </div>
                <div>
                    <Field type='text' name='email' placeholder='email'/>
                    {touched.email && errors.email ? <>{' '}<span className='error'>{errors.email}</span></>: touched.email && <>{' '}<span className='confirmed'>Nice.</span></>}
                </div>
                <div>
                    <Field type='password' name='password' placeholder='password'/>
                    {touched.password && errors.password ? <>{' '}<span className='error'>{errors.password}</span></>: touched.password && <>{' '}<span className='confirmed'>Check.</span></>}
                </div>
                <div>
                    <br/>
                    <Field type='checkbox' name='tos' checked={values.tos}/>
                    {!values.tos ? <>{' '}<a href='#' className='warning'>Terms of service.</a></> :<>{' '}<span className='confirmed'>Agreed.</span></>}
                </div>
                <br/>
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
      handleSubmit(values, toolkit) {
          axios.post('https://reqres.in/api/users', values)
            .then(res => {
                console.log(res.data);
                toolkit.props.setUsers([...toolkit.props.users, res.data]);
            })
            .catch(err => {
                console.log(err)
            })
      }
})(UserForm);


export default FormikUserForm;