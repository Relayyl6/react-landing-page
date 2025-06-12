import React from 'react'
import { notificationImages } from '../constants'
import Gestures from './CodeGeneration'
import { notification1 } from '../../assets'
// import { notification1 } from '../../assets'


const Notification = ({ className, title }) => {
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
            <Gestures className='w-[65px] h-[65px] rounded-xl aspect-square sm:m-0 sm:shrink-0'>
                <img src={notification1} className='rounded-xl'/>
            </Gestures>
        <div className='space-y-4 flex-1'>
            <h5 className='text-base mb-1 font-semibold'>{title}</h5>
            <div className='mt-3 flex'>
                <ul className='flex flex-row -m-0.5 -space-x-2 hover:space-x-0.5 transition-space duration-500 flex-wrap '>
                    {
                        notificationImages?.map(
                            (item, index) => (
                                <li 
                                    key={index}
                                    className='flex w-6.5 h-6.5'>
                                    <Gestures tap>
                                        <img
                                        src={item}
                                        className='w-full rounded-full ring-1 ring-transparent -space-x-2'
                                        width={15}
                                        height={15}
                                        alt='item'
                                        />
                                    </Gestures>
                                </li>
                            )
                        )
                    }
                </ul>
                <div className='absolute -right-1 left-55 body-2 text-n-13'>
                    1m ago
                </div>
            </div>
        </div>
    </div>
  )
}

export default Notification
