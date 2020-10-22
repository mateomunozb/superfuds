import React from 'react'

const ProfileImg = () => {
  return (
    <img
      src='https://s3.amazonaws.com/makeitreal/cars/jaguar-xe.jpg'
      className='rounded-circle'
      style={({ width: '40px' }, { height: '40px' })}
      alt='profile img'
    />
  )
}

export default ProfileImg
