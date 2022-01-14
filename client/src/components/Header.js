import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '../images/moustache-man.jpg'

function Header({ setUser }) {
  const navigate = useNavigate()

  function handleLogout() {
    fetch('/api/logout', {
      method: 'DELETE'
    })
    .then(r => {
      if (r.ok) {
        setUser(null)
        navigate('/')
      }
    })
  }

  const activeStyle = { backgroundColor: 'black', color: 'white' }

  return (
    <div>
      <header className='main-header'>
        <div>
          <Link className='heading' to='/'>
            <h1>Ye Ole ChatterBox</h1>
            <img src={logo} alt='moustache man' /> 
          </Link>
        </div>
        <nav>
          <NavLink 
            className='nav-button' 
            to='/chatrooms/search'
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Parlor Rooms
          </NavLink>
          <button className='nav-button' onClick={handleLogout}>Logout</button>
        </nav>
      </header>
      <Outlet />
    </div>
  ) 
}

export default Header