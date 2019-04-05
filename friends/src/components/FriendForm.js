import React from "react";
// import Friend from "./Friend"
// import FriendList from "./FriendList"

class FriendForm extends React.Component{
    constructor(){
        super();
        this.state = {
        friends: {
          name: "",
          age: "",
          email: ""
        }
    //need to add as props.age etc?
      }};
    //   this.handleChange = this.handleChange.bind(this)
   

    changeHandler = (event) => {
        console.log("is this thing on")
        event.persist();
        // let value = event.target.value;
        this.setState(prevState => ({
          friends: {
              ...prevState.friends,
            [event.target.name]: event.target.value,
          }
        }));
      };

    handleSubmit = (event) => {
        console.log("what about this")
        event.preventDefault();
        this.props.addFriend(this.state.friends);

        this.setState({
            friends: {
                name: "",
                age: "",
                email: ""
              }
        });
    };

    render() {
        return (
            <div>
                <h2> ADD NEW FRIEND </h2>
            <form onSubmit={this.handleSubmit}>
                <input 
                type="text"
                name="name"  
                onChange={this.changeHandler} 
                placeholder="name" 
                value={this.state.friends.name} 
                />
                <div/>
                <input 
                type="number"  
                name="age"
                onChange={this.changeHandler} 
                placeholder="age" 
                value={this.state.friends.age} 
                />
               <div/>
                <input 
                type="text"
                name="email"  
                onChange={this.changeHandler} 
                placeholder="email" 
                value={this.state.friends.email} 
                />
                <div/>
                <button>Add New Friend</button>
            </form>
            </div>
        )
    }
}

export default FriendForm;