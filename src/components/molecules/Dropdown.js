import React from 'react'

const DropDown = () => {
  return (
    <div>
      <a
        className='nav-link dropdown-toggle text-white'
        href='/'
        id='navbarDropdown'
        role='button'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'>
        Perfil
      </a>
      <div className='dropdown-menu' aria-labelledby='navbarDropdown'>
        <a className='dropdown-item' href='/'>
          Opciones
        </a>
      </div>
    </div>
  )
}

export default DropDown
