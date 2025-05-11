import React from 'react'
import { notificationImages } from '../constants'
import Gestures from './CodeGeneration'
// import { notification1 } from '../../assets'

const Notification = ({ SampleImage, className, title }) => {
  return (
    <div 
        className={`rounded-2xl items-center 
        md:items-left bg-n-8/70 p-4 pr-6 backdrop-blur-sm 
        ${className || ''} border border-n-1/10 gap-5`}>
            {/* <img    
                src={SampleImage}
                height={90}
                width={90}
                className='rounded-2xl aspect-square sm:m-0 sm:shrink-0'
            />     */}
            <Gestures className='bg-[#9911ff] w-[90px] h-[90px] rounded-2xl aspect-square sm:m-0 sm:shrink-0' />
        <div className='space-y-6'>
            <h3 className='text-base mb-1 font-semibold'>{title}</h3>
            <div className='mt-3'>  
                <ul className='flex flex-row -space-x-2'>
                    {
                        notificationImages?.map(
                            (item, index) => (
                                <li 
                                    key={index}
                                    className='flex w-10 h-10'>
                                    <img 
                                        src={item}
                                        className='w-full rounded-full ring-1 ring-transparent -space-x-2'
                                        width={20}
                                        height={20}
                                        alt='item'
                                    />
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </div> 
    </div>
  )
}

export default Notification
