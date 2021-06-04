'use strict';

import React from 'react';
import {Container, Header, List, Body, Title} from 'native-base';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await fetch('http://code.burnalong.com/items.json')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch list');
        }
      })
      .then(jsonData => {
        this.setState(jsonData);
      });
  }

  render() {
    console.log(this.state['1']);
    return (
      <Container>
        <Header>
          <Body>
            <Title>Burn Along List App</Title>
            <List>
              {/* {list.map(item => (
                <ListItem>
                  Written by: {item.author} on {item.date}
                </ListItem>
              ))} */}
            </List>
          </Body>
        </Header>
      </Container>
    );
  }
}

export default App;
