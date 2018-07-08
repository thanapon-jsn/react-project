import React from 'react'
import logo from '../assets/images/pikkanode.png'

class Navbar extends React.Component {
  render () {
    return (
      <nav className='navbar navbar-expand-lg bg-white py-0 border-bottom shadow-sm'>
        <a className='navbar-brand ml-5' href='/'>
          <img src={logo} width='100' height='40' alt='' />
        </a>

        <div className='collapse  navbar-collapse  justify-content-end mr-3' id='navbarSupportedContent'>
          <ul className='navbar-nav py-2 mr-5'>
            <li className='nav-item'>
              <a className='p-2 nav-link text-dark' href='/'>Create Pikka</a>
            </li>
          </ul>
        </div>
        <a className='btn btn-outline-dark mr-4' href='/signin'>Sign in</a>

        <a className='btn btn-dark mr-10' href='/signup'>Sign up</a>
      </nav>
    )
  }
}

export default Navbar
