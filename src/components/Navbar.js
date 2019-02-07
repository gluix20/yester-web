import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Navbar = ({ bright }) => {
  const navbarClassName = classNames({
    navbar: true,
    'navbar--bright': bright,
  })

  return (
    <nav className={navbarClassName}>
      <div className='container'>
        <a href='/'>
          <img className='logo' src='/static/yester.svg' alt='yester app' />
        </a>
        <div className='icons'>
          <a className='icon-link' href='https://www.facebook.com/yesterapp'>
            <img className='icon' src='/static/facebook@3x.png' alt='facebook logo' />
          </a>
          <a className='icon-link' href='https://www.instagram.com/yesterapp'>
            <img className='icon' src='/static/instagram.svg' alt='instagram logo' />
          </a>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  bright: PropTypes.bool,
}

Navbar.defaultProps = {
  bright: false,
}

export default Navbar
