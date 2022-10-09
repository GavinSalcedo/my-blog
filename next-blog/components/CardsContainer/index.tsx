import React, {ReactNode} from 'react'
import Header from '../Header'

function CardContainer({children}: {children:ReactNode}) {
    return (
        <div className='px-14'>
            <Header text='My Hobbies Are'/>
            <div className='flex w-full'>
                {children}
            </div>
        </div>
  )
}

export default CardContainer