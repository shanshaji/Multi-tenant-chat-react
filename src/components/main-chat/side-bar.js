import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Sidebar,
    Image,
    Menu,
    Icon,
    Header,
    Segment,
  } from 'semantic-ui-react';


class SideBar extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='wide'>
                <Menu.Item as={Link} to="/admin">
                    <Icon name='building' />
                    Rubykraft
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='user' />
                    Shan
                </Menu.Item>
                <Menu.Item as='a'>
                    <Icon name='user' />
                    Vishnu
                </Menu.Item>
            </Sidebar>
        )
    }
}
export default SideBar