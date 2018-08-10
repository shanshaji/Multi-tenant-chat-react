import React, { Component } from 'react';
import {
  Container,
  Header,
  Image
} from 'semantic-ui-react';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Image src='https://img12.androidappsapk.co/300/9/1/f/io.ionic.bizexapp.png' size='medium' rounded />
      <Container textAlign="right">
        <Header size="huge"> Where Work Happens </Header>
      </Container>
      </div>
    );
  }
}

export default App;
