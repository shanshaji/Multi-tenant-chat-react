import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios';
import { apiBaseUrl } from '../../utils/rest-api';
import signUpAction from '../../actions/auth/sign-up';


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            account: {
                email: '',
                password: '',
                name:'',
                subdomain:'',
                user_name:''
            }
        };
    };

    render(){
        return(
            <Formik
            initialValues={{
                email: '',
                password: '',
                name:'',
                subdomain:'',
                user_name:''
            }}
            validate={values => {
                // same as above, but feel free to move this into a class method now.
                let errors = {};
                if (!values.email) {
                    errors.email = 'Enter email address';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.password) {
                    errors.password = 'Enter password';
                }
                return errors;
                }}
            onSubmit={(values) => this.props.signUpAction({account: values}, this.props.history)
            }
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                }) => (
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle' inverted>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='black' textAlign='center'>
                                Create A New Work Space
                            </Header>
                            <Form size='large'  onSubmit={handleSubmit}>
                            <Segment stacked>
                                <Form.Input 
                                    fluid icon='building' 
                                    iconPosition='left' 
                                    placeholder='Work Space Name'
                                    name='name' 
                                    type='text'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Form.Input 
                                    fluid icon='building' 
                                    iconPosition='left' 
                                    placeholder='Work Space URL'
                                    name='subdomain' 
                                    type='text'
                                    value={values.subdomain}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Form.Input 
                                    fluid icon='user' 
                                    iconPosition='left' 
                                    placeholder='User Name'
                                    name='user_name' 
                                    type='text'
                                    value={values.user_name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Form.Input 
                                    fluid icon='user' 
                                    iconPosition='left' 
                                    placeholder='E-mail address'
                                    name='email' 
                                    type='email'
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='Password'
                                type='password'
                                name='password' 
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                <Form.Input
                                fluid
                                icon='lock'
                                iconPosition='left'
                                placeholder='confirm Password'
                                type='password'
                                name='confirm_password' 
                                value={values.confirm_password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                />
                                <Button color='violet' fluid size='large' type='submit'>
                                    Sign Up
                                </Button>
                            </Segment>
                            </Form>
                        </Grid.Column>
                    </Grid>
                )}
                />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signUpAction }, dispatch);
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);