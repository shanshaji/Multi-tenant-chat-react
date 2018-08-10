import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Button,Icon, Segment, Header, Grid, Card, Image} from 'semantic-ui-react'

import SideBar from '../../components/main-chat/side-bar';
import ChatBox from '../../components/main-chat/chat-box';
class MainChat extends Component{
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
                    <ChatBox />
                </Grid.Column>
            </Grid>
        </div>
            
        )
    }
}

export default MainChat