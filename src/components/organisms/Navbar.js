import React from 'react'
import './Navbar.css'
import SearchBar from '../molecules/Searchbar'
import Logo from '../atoms/Logo'
import DropDown from '../molecules/Dropdown'
import CarIcon from '../atoms/Caricon'
import ProfileImg from '../atoms/Profileimg'

const NavBar = () => {
  return (
    <nav className='navbar navbar-light bg-success'>
      <div className='container h-100'>
        <div className='w-100 h-100 row align-items-start justify-content-between'>
          <div className='col-4'>
            <Logo />
          </div>

          <div className='col'>
            <div className='row align-items-center justify-content-between'>
              <SearchBar />
              <CarIcon />
              <div className='dropdown row'>
                <DropDown />
                <ProfileImg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>

    // <nav className='navbar navbar-light bg-success'>
    //   <a class='navbar-brand'>
    //     <Logo />
    //   </a>
    //   <ul>
    //     <li class='nav-item'>
    //       <SearchBar />
    //     </li>
    //   </ul>
    //   <i className='fas fa-shopping-cart text-white'></i>
    //   <i className='fas fa-shopping-cart text-white'></i>
    //   <DropDown />
    // </nav>
  )
}

export default NavBar
