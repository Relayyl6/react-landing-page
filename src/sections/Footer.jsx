import React from 'react'
import Section from '../components/section'
import { socials } from '../constants'

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10" id="footer">
        <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
            <p className='caption text-n-4 lg:block'>c {new Date().getFullYear()}. All Rights Reserved</p>
            <ul className='flex gap-5 flex-wrap'>
                {
                    socials.map(
                        (item, index) => (
                            <a
                                href={item.url}
                                key={index || item.id}
                                target="_blank"
                                className='flex items-center justify-center w-10 h-10 bg-n-7
                                            rounded-full transition-colors hover:bg-n-6'>
                                <img
                                    src={item.iconUrl}
                                    width={16}
                                    height={16}
                                    alt={item.title}
                                    />
                            </a>
                        )
                    )
                }
            </ul>
        </div>
    </Section>
  )
}

export default Footer