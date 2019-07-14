import React    from 'react'
import { NavLink } from 'react-router-dom'

export function Header () {
  return (
    <nav className='navbar navbar-expand-lg navbar-light' style={{ backgroundColor: '#0CC5F3', marginBottom: '5px' }}>
      <div className='navbar-brand'>
        <img src='/slate-logo-small.png' height='30' className='d-inline-block align-top' alt='' />
      </div>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav'>
          <li className='nav-item active' style={{ margin: '5px' }}>
            <NavLink
              to='/home'
              style={{ color: 'white' }}
              activeStyle={{ color: 'white', textDecoration: 'underline' }}>
              Home
            </NavLink>
          </li>
          <li className='nav-item' style={{ margin: '5px' }}>
            <NavLink
              to='/create'
              style={{ color: 'white' }}
              activeStyle={{ color: 'white', textDecoration: 'underline' }}>
              Create
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
