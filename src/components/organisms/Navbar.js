import React, { useEffect, useState } from 'react'
import './Navbar.css'
import SearchBar from '../molecules/Searchbar'
import Logo from '../atoms/Logo'
import DropDown from '../molecules/Dropdown'
import CarIcon from '../atoms/Caricon'
import ProfileImg from '../atoms/Profileimg'

const NavBar = (props) => {
  const [click, setclick] = useState(false)
  console.log('TLC: NavBar -> click', click)

  const outPutEvent = () => setclick(true)

  useEffect(() => {
    if (click) {
      props.onChange(click)
    }
  })

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
              <CarIcon clickHandler={outPutEvent} />
              <div className='dropdown row'>
                <DropDown />
                <ProfileImg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
