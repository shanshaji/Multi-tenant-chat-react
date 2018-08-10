import React, { Component } from 'react'
import {
    Container,
    Divider,
    Dropdown,
    Header,
    Image,
    Menu,
  } from 'semantic-ui-react';
  import {Link} from 'react-router-dom';

class MainHeader extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <Menu fixed='top'  color='teal'>
                <Container>
                    <Menu.Item as={Link} name='homepage' to='/' header>
                        <Image size='small' src='https://www.rubykraft.com/assets/logo-be937eb914dfe98b514c900d1fc6e56214158065e595207e2483dd116595f389.png' style={{ marginRight: '1.5em' }} />
                        RubyKraft Chat
                    </Menu.Item>
                    <Dropdown item simple text='Your Workspaces'>
                        <Dropdown.Menu>
                            <Dropdown.Item as={ Link } name='Rubykraft' to='/screens/new'>RubyKraft</Dropdown.Item>
                            <Dropdown.Item as={ Link } name='Rubykraft-beta' to='/seat-types/new'>RubyKraft Beta</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} name='homepage' to='/subdomain' header>
                            Sign in
                        </Menu.Item>
                        <Menu.Item as={Link} name='homepage' to='/sign-up' header >
                            Create Work Space
                        </Menu.Item>
                    </Menu.Menu>    
                </Container>
            </Menu>

        )
    }
}
export default MainHeader