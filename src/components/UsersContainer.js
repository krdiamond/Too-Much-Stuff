import React, {Component} from 'react'
import { Route, Link } from 'react-router-dom'
import { NotFound } from './NotFound.js'
import User from './User'

export default class UsersContainer extends Component {
  state = {
    users: [],
    foundUser: '',
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => this.setState({ users }) )
  }

  buildSidebar = () => {
    return this.state.users.map((user) => {
      return (<li>
        <Link to={ "/users/" + user.username }>{ user.username }</Link>
      </li>)
    });
  }

  render() {
    const user = this.props.match.params.username
    console.log("UsersContainer state:", this.state)
    const foundUser = this.state.users.find(existingUser => {
      console.log("existingUser.username", existingUser.username)
      console.log("user:", user)
      return existingUser.username === user
    })
    console.log("foundUser", foundUser)
    const users = this.state.users.map(user => {
      return <li key={user.id}><User {...user} key={user.id} /></li>
    })
    return(
      <div className='users-container'>
        <aside className="sidebar">
          <h1 className="App-title">CHALLENGE A USER</h1>
          <ul>
            { this.buildSidebar() }
          </ul>
        </aside>
        { (user) ? <User {...foundUser} key={user.id} /> : null }
        <h1></h1>
      </div>
    )
  }
}
