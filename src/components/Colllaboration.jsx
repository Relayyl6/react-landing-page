import React from 'react'
import Section from './section'
import { collabContent } from '../constants'
import { check } from '../../assets'

const Colllaboration = () => {
  return (
    <Section crosses className='z-10'>
      <div className='container lg:flex'>
        <div className='max-w-[25rem]'>
          <h2 className='h2 mb-4 md:md-8 lg:mb-12'>
            AI Chat App for seamless Collaboration
          </h2>

          <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {
              collabContent.map((item, index) => (
                <li
                  key={index || item.id}
                  className='mb-3 py-3'>
                    <div className='flex items-center'>
                      <img
                        src={check}
                        width={24}
                        height={24}
                        alt="check"
                        />
                      <h6 className='body-2 ml-3'>{item.title}</h6>
                    </div>
                    {
                      item.text && (
                        <p className="body-2 mt-3 text-n-3">
                          {item.text}
                        </p>
                      )
                    }
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Colllaboration