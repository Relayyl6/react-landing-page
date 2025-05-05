import React, { useEffect } from 'react'
import Section from './section'
import curve from '../../assets/hero/curve.png'
import Button from './Button'
import useWindowResize from './curvewidth'
import { heroBackground, robot } from '../../assets'
// import { enablePageScroll } from 'scroll-lock'

const Hero = () => {
  // const {windowSize} = useWindowResize();
  return (
    <Section 
      className="pt-[8rem] -mt-[5.25rem] px-5 lg:px-8"
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
              Explore the possibiities of AI Chatting with BrainwaveCurve
              <span className='inline-block relative'>
                 BrainWave
                <img 
                  src={curve} 
                  className='absolute top-full w-full' 
                  width={628}
                  height={28}
                  alt="curve"
                />
              </span>
            </h1>
            <p className="body-1 lg:text-xl max-w-3xl mb-6 text-[#CAC6DD] lg:mb-8 mx-auto">
              Unleash the potential of AI using Brainwave
              Double down on your productivity
              with Brainwave open AI chat app.
            </p>
            <Button
              href="#pricing"
              white
              className="inline-flex">
                Get started
            </Button>
          </div>
          <div className="max-w-md mx-auto md:max-w-5xl max-lg:mt-5
          xl:mb-24">
            <div className="relative p-0.5 z-1 rounded-2xl"
                 style={{ backgroundImage: "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
                 }}>
              <div className="relative bg-[#0E0C15] rounded-[1rem]">
                <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]"/>
                <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden
                                md:aspect-[688/490] lg:aspect-[1024/490]">
                  <img 
                    src={robot} 
                    className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] 
                               md:-translate-y-[10%] lg:scale-[0.6] lg:-translate-y-[23%]"
                    width={1024}
                    height={490}
                    alt="AI logo"
                    />
                </div>
              </div>
            </div>
            <div className="absolute -top-[55%] left-[1/2] w-[234%] -translate-x-1/2 md:-top-[46%] lg:-top-[104%]">
              <img 
                src={heroBackground}
                className="w-full"
                width={1400} 
                height={1800}
                alt="Hero"
              />
            </div>
          </div>
        </div>
    </Section>
  )
}

export default Hero