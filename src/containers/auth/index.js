import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios';
import { apiBaseUrl } from '../../utils/rest-api';
import signInAction from '../../actions/auth/auth-actions';


class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                email: '',
                password: ''
            }
        };
    };

    render(){
        return(

            <Formik
            initialValues={{
                email: '',
                password: '',
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
            onSubmit={(values) => this.props.signInAction({user: values}, this.props.history)
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
                    <div className='login-form'>
                        <style>{`
                        body > div,
                        body > div > div,
                        body > div > div > div.login-form {
                            height: 100%;
                        }
                        `}</style>
                        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='violet' textAlign='center'>
                            Log-in to your account
                            </Header>
                            <Form size='large'  onSubmit={handleSubmit}>
                            <Segment stacked>
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
                                <Button color='violet' fluid size='large' type='submit'>
                                Login
                                </Button>
                            </Segment>
                            </Form>
                            <Message>
                            Not registered with this Work Space ? <a href='#'>Sign Up</a>
                            </Message>
                        </Grid.Column>
                        </Grid>
                    </div>
                )}
                />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signInAction }, dispatch);
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);