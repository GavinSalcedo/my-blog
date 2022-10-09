import React from 'react'

interface CardProps{
    title: string;
    icon?: string;
    description: string;
}

function Card(props: CardProps) {
    const {title, icon, description} = props
  return (
      <div className='text-black bg-white mx-2 p-3 border-solid border-2 rounded w-96 '>
          <div className='font-bold flex pb-2'>
              <img
                className='mr-2'
                  src={`${process.env.STRAPI_API_URL}${icon}`}
                  style={{width:'20px', height:'20px'}}
              />{title}
          </div>
          <div className='font-light'>{description}</div>
    </div>
  )
}

export default Card