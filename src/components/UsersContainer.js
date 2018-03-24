import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class UsersContainer extends Component {
  state = {
    users: [],
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => this.setState({ users }) )
  }

  buildMenu = () => {
    return this.state.users.map((user) => {
      return (
        <li key={user.id} user={user} onClick={() => this.props.handleSetUser(user)} >
          <Link to={ "/" }>{ user.username }</Link>
        </li>
      )
    })
  }

  render() {
    return(
      <div className='users-container'>
        <aside className="choose-user-list">
          <h1 className="App-title">CHOOSE A USER</h1>
          <ul>
            { this.buildMenu() }
          </ul>
        </aside>
      </div>
    )
  }
}
