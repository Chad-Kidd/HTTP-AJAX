import React from "react"

class FriendForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        info: {
          name: '',
          age: '',
          email: ''
        }
      };
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.postFriend(this.state.info);
        this.setState ({
            info: {
                name: '',
                age: '',
                email: ''
              }
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Name" value={this.state.info.name} />
                <input type="text" placeholder="Age" value={this.state.info.age} />
                <input type="text" placeholder="Email" value={this.state.info.email} />
            </form>
        )
    }
}  

export default FriendForm;