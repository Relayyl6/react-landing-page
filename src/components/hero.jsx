import React from 'react'
import Section from './section'
import curve from '../../assets/hero/curve.png'
import Button from './Button'

const Hero = () => {
  return (
    <Section 
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPadding
      id="hero"
        >
        <div className='container relative'>
          <div className='relative z-1 max-w-[62rem] mx-auto
                          text-center mb-auto md:mb-20 lg:mb-[6rem]'>
            <h1 className='font-semibold text-[2.5rem] leading-[3.25rem] 
                          md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] 
                          lg:leading-[4.0625rem] xl:text-[3.75rem] 
                          xl:leading-[4.5rem] mb-6'>
              Explore the possibiities of AI Chatting with  
              <span className='"inline-block relative'>
                BrainWave{" "}
                <img 
                  src={curve} 
                  className='absolute top-full left-0 w-full xl:mt-2' 
                  width={624}
                  height={28}
                  alt="curve"
                />
              </span>
            </h1>
            <p className="body-1 max-w-3xl mb-6 text-[#CAC6DD] lg:mb-8 mx-auto ">
              Unleash the potential of AI using Brainwave
              Double down on your productivity
              with Brainwave open AI chat app.
            </p>
            <Button
              href="/pricing"
              white
              className="inline-flex">
                Get started
            </Button>
          </div>
        </div>
    </Section>
  )
}

export default Hero