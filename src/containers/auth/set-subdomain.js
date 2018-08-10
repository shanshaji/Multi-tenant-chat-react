import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import axios from 'axios';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react';
import setSubdomain from '../../actions/auth/set-subdomain';
import { apiBaseUrl } from '../../utils/rest-api';


class Subdomain extends Component{
    constructor(props){
        super(props);
        this.state = {
            subdomain: {
                name: ''
            }
        };
    };
    componentDidMount(){
        
    }
    render(){
        return(
            <Formik
            initialValues={{
                name: ''
                }}
            // validate={values => {
            //     // same as above, but feel free to move this into a class method now.
            //     let errors = {};
            //     if (!values.email) {
            //         errors.email = 'Enter email address';
            //     } else if (
            //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            //     ) {
            //         errors.email = 'Invalid email address';
            //     }
            //     if (!values.password) {
            //         errors.password = 'Enter password';
            //     }
            //     return errors;
            //     }}
            onSubmit={(
                values
                ) => this.props.setSubdomain({user: values}, this.props.history)
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
                    <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='violet' textAlign='center'>
                            Enter Subdomain Name
                            </Header>
                            <Form size='large'  onSubmit={handleSubmit}>
                                
                                <Form.Input 
                                    fluid icon='building' 
                                    iconPosition='left' 
                                    placeholder='Subdomain'
                                    name='name' 
                                    type='text'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    />
                                <Button color='violet' fluid size='large' type='submit'>
                                Sign in to Subdomain
                                </Button>
                            </Form>
                        </Grid.Column>
                    </Grid>
                )}
                />
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setSubdomain }, dispatch);
}

function mapStateToProps(state){
    return {errorMessage: state.auth.error}
}

export default connect(mapStateToProps, mapDispatchToProps)(Subdomain);