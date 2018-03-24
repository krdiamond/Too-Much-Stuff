import React from 'react';

const User = (props) => {
  const { username, user } = props
  const name = username || user
  return (
    <div>WELCOME {name.toUpperCase()}</div>
  )
}

export default User;
