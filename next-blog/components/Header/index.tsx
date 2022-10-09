import React from 'react'

function Header({text}:{text:string}) {
  return (
      <label className='font-bold text-black ml-2'>{text}</label>
  )
}

export default Header