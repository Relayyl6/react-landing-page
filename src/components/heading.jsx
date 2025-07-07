import React from 'react'
import Tagline from './Tagline'

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className || ''} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
        {
          title && <h2 className='h2 text-center'>
            {title}
          </h2>
        }
        {
          text && <p className='body-2 mt-4 lg:mt-2 text-n-4 text-center'>
            {text}
          </p>
        }
        {
          tag && <Tagline className='mb-4 flex justify-center '>
            {tag}
          </Tagline>
        }
    </div>
  )
}

export default Heading