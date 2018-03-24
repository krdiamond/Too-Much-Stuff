import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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
      return (<li key={user.id}>
        <Link to={ "/users/" + user.username } key={user.id}>{ user.username }</Link>
      </li>)
    });
  }

  render() {
    const user = this.props.match.params.username
    const foundUser = this.state.users.find(existingUser => {
      return existingUser.username === user
    })

    return(
      <div className='users-container'>
        <aside className="sidebar">
          <h1 className="App-title">CHOOSE A USER</h1>
          <ul>
            { this.buildSidebar() }
          </ul>
        </aside>
        { (user) ? <User {...foundUser} user={user} key={user.id} /> : null }
      </div>
    )
  }
}
