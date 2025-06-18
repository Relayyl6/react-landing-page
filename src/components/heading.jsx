import React from 'react'

const Heading = ({ className, title, text }) => {
  return (
    <div
      className={`${className || ''} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
        {
          title && <h2 className='h2 lg:text-center'>
            {title}
          </h2>
        }
        {
          text && <p className='body-2 mt-4 lg:mt-2 text-n-4 lg:text-center'>
            {text}
          </p>
        }
    </div>
  )
}

export default Heading