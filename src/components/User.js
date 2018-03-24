import React from 'react';

const User = (props) => {
  const { username } = props
  console.log("User props:", props)
  console.log("username:", username)
  return (
    <div>WELCOME {username}</div>
  )
}

export default User;
