import React from "react";
// import Friend from "./Friend"
// import FriendList from "./FriendList"

class UpdateFriendForm extends React.Component{
  state = {
      friends: this.props.activeFriend
    //   prop passed down in app.js
      };
    //   this.handleChange = this.handleChange.bind(this)
   

    changeHandler = (event) => {
        console.log("is this thing on")
        event.persist();
        let value = event.target.value;
        this.setState(prevState => ({
          friends: {
              ...prevState.friends,
            [event.target.name]: value,
          }
        }));
      };

    handleSubmit = (event) => {
        console.log("what about this")
        event.preventDefault();
    };

    render() {
        return (
            <div>
                <h2> UPDATE NEW FRIEND </h2>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="name"  
                onChange={this.changeHandler} 
                placeholder="name" 
                value={this.state.friends.name} 
                />
                <input 
                type="number"  
                age="age"
                onChange={this.changeHandler} 
                placeholder="age" 
                value={this.state.friends.age} 
                />
                <input 
                type="text"
                email="email"  
                onChange={this.changeHandler} 
                placeholder="email" 
                value={this.state.friends.email} 
                />
                <button>Update New Friend</button>
            </form>
            </div>
        )
    }
}

export default UpdateFriendForm;