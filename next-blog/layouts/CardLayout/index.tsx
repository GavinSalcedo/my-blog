import React, { ReactNode } from 'react'

function CardLayout({children}: {children: ReactNode}) {
  return (
      <div className='px-10 w-full bg-red-100'>{children}</div>
  )
}

export default CardLayout