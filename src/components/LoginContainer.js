import React, {Component} from 'react'
import LoginForm from './LoginForm'
import Stuff from '../images/too_much.jpg'

export default class LoginContainer extends Component {
  state = {
    users: [],
    userExists: true,
    loginUser: '',
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => this.setState({ users }) )
  }

  handleSetUser = (user) => {
    //does user already exist?
    const foundUser = this.state.users.find(u => u.username.toLowerCase() === user.username.toLowerCase())
    if (foundUser) {
      this.props.handleSetUser(foundUser)
    } else {
      this.setState({userExists: false, loginUser: user})
    }
  }

  buildAddUserButton = () => {
    // if userExists is not true, display button to add new user
    if (!this.state.userExists) {
      return  (<div>
                <p style={{color: 'red', fontSize: '12px'}}>User does not exist. Would you like to add this user?</p>
                <button className={'add-user'} type="button" onClick={() => this.props.handleAddUser(this.state.loginUser)}>Add New User</button>
              </div>
            )
    }
  }

  render() {
    return (
        <div id="login-form">
          <img src={Stuff} id="stuff" alt="stuff"/>
          <div id="login-text">WHAT IS YOUR NAME? </div>
          <LoginForm handleSetUser={this.handleSetUser}/>
          {this.buildAddUserButton()}
        </div>
    )
  }
}
