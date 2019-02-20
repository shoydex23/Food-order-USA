import React, { Component } from "react";
import Admin from "./admin";
import Login from "./login";

export default class LoginAdminParent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange(username, pass)
  {
      this.setState({username: username, password: pass});
  }

  render() {
      return(<div><Login username={this.state.username} handleChange={this.handleChange} />
      <Admin username={this.state.username} /></div>
    );
}
}
