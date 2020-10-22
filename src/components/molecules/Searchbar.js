import React from 'react'
import './Searchbar.css'

const SearchBar = () => {
  return (
    <div className='input-group mb'>
      <input
        type='text'
        className='form-control border-0'
        placeholder='Busca marcas y productos...'
        aria-label="Recipient's username"
        aria-describedby='basic-addon2'
      />
      <div className='input-group-append '>
        <span className='input-group-text border-0 bg-white' id='basic-addon2'>
          <i className='far fa-search'></i>
        </span>
      </div>
    </div>
  )
}

export default SearchBar
