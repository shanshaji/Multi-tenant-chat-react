import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Button,Icon, Segment, Header, Grid, Card, Image} from 'semantic-ui-react'

import SideBar from '../../components/admin/side-bar';
import InviteForm from '../../components/admin/invite-form';

class Admin extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
    
    }

    render(){
        return(
        <div>
            <Grid columns="2">
                <Grid.Column>
                    <SideBar />
                </Grid.Column>
                <Grid.Column>
                    <Grid.Row>
                        <InviteForm />
                    </Grid.Row>
                    <Grid.Row>
                        hey1
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </div>
            
        )
    }
}

export default Admin