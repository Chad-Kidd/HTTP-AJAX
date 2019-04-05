import React from "react"

class FriendForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        info: {
          name: this.props.name,
          age: this.props.age,
          email: this.props.email
        }}
    //need to add as props.age etc
      };
    //   this.handleChange = this.handleChange.bind(this)
   

    changeHandler = event => {
        console.log("is this thing on")
        event.persist();
        let value = event.target.value;
        this.setState(prevState => ({
          info: {
              ...prevState.info,
            [event.target.name]:value,
          }
        }));
      };

    handleSubmit = event => {
        console.log("what about this")
        event.preventDefault();
        this.props.addFriend(this.state.info);
        this.setState ({
            info: {

                name: "",
                age: "",
                email: ""
                // name: this.state.name,
                // age: this.state.age,
                // email: this.state.email
              }
        })
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input type="string" name="name" onChange={this.changeHandler} placeholder="Name" value={this.state.info.name} />
                <input type="number" age="age" onChange={this.changeHandler} placeholder="Age" value={this.state.info.age} />
                <input type="string" email="email" onChange={this.changeHandler} placeholder="Email" value={this.state.info.email} />
            </form>
            </div>
        )
    }
}

export default FriendForm;