import React from 'react'
import { pricing } from '../constants'
import Button from './Button'
import { check } from '../../assets'

const Pricinglist = () => {
  return (
    <div className='flex gap-[1rem] max-lg:flex-wrap items-center'>
      {
        pricing.map((item, index) => (
          <div key={item.id || index} className='w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border 
          border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-6 hover:scale-105 transition-all duration-300 
          [&>h4]:first:text-color-2 [&>h4]:second:text-color-1 [&>h4]:third:text-color-3'>
            <h4 className='h4 mb-3 flex justify-center'>
              {item.title}
            </h4>
            <p className='body-2 min-h-[4rem] mb-3 text-n-1/50 text-center'>
              {item.description}
            </p>
            <div className='flex items-center h-[5.5rem] mb-6 justify-center'>
              {
                item.price && (
                  <>
                    <div className='h3'>$</div>
                    <div className='text-[5.5rem] leading-none font-bold'>{item.price}</div>
                  </>
                )
              }
            </div>
            <Button className='w-full mb-6' href={item.price ? '/pricing' : "mailto:oseghaleleonard39@gmail.com"} white={!!item.price}>
              {
                item.price ? "Get started" : "Contact us"
              }
            </Button>
            <ul>
              {
                item.features.map((feature,  index) => (
                  <li key={index} className='flex items-start py-5 border-t border-n-6'>
                    <img
                      src={check}
                      width={24}
                      height={24}
                      alt='Check'
                    />
                    <p className='body-2 ml-4'>{feature}</p>
                  </li>
                ))
              }
            </ul>
          </div>
        ))
      }
    </div>
  )
}

export default Pricinglist