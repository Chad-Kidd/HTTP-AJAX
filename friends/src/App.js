import React, { Component } from 'react';
// import logo from './logo.svg';

import axios from "axios"
import { Route } from "react-router-dom";

import FriendList from './components/FriendList';
import FriendForm from './components/FriendForm'
// import Friend from './components/Friend';


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

    addFriend = newInfo => {
      axios 
      .post('http://localhost:5000/friends', newInfo)
      .then(response => {
        console.log(this.setState);
        this.setState({friends: response.data});
        this.props.history.push('/friends');

      })
      .catch(err => console.log(err));  
  };

  updateFriend = updatedFriend => {
    axios
      .put(`http://localhost:3333/items/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
        // redirect
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
      
        <Route path="/" render={() => 
        <FriendList friends={this.state.friends} />} />
        
        <Route path="/" 
        render={props => 
        <FriendForm {...props} 
        addFriend={this.addFriend}/>} />
        {/* <Route path="/friends/:id" render={() => <Friend/>} /> */}
      </div>
    );
  }
}

export default App;
