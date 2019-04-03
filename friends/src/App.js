import React, { Component } from 'react';
// import logo from './logo.svg';

import axios from "axios"
import { Route } from "react-router-dom";

import FriendList from './components/FriendList'
import Friend from './components/Friend'


// import './App.css';

class App extends Component {
    constructor() {
      super();
        this.state = {
          friends: []
      }
    }

    componentDidMount() {
      axios 
      .get('http://localhost:5000/friends')
      .then(result => {
        this.setState({ friends: result.data });
      })
      .catch(error => console.log(`unable to load Data`));
  }

  render() {
    return (
      <div className="App">
        <Route path="/friends" exact render={FriendList} />
        <Route path="friends/:id" render={Friend} />
      </div>
    );
  }
}
export default App;
