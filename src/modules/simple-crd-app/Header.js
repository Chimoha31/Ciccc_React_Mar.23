import React from 'react'

const Header = ({ user, setUser }) => {
  return (
    <div>
        <p>Welcome, {user}</p>
        <button onClick={() => setUser('')}>Logout</button>

    </div>
  )
}

export default Header