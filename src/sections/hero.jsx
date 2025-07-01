import React, { useRef } from 'react'
import Section from '../components/section.jsx'
import curve from '../../assets/hero/curve.png'
import Button from '../components/Button.jsx'
// import useWindowResize from './curvewidth'
import { heroBackground, notification4, robot } from '../../assets'
// import { enablePageScroll } from 'scroll-lock'
import { BackgroundCircles, BottomLine, Gradient } from '../design/Hero'
import { heroIcons } from '../constants/index'
import { ScrollParallax } from 'react-just-parallax' 
import { TypeAnimation } from 'react-type-animation'
import Generating from '../components/AItext'
import Notification from '../components/Notification'
import CompanyLogos from '../components/CompanyLogos'
// import Drag from './floatingball' // floating ball motion

const Hero = () => {
  // const {windowSize} = useWindowResize();
  const parrallaxRef = useRef(null)
  return (
    <Section
      className="pt-[12rem] -mt-[4.55rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPadding 
      id="hero"
        >
          {/* <Drag className="hidden z-1000 relative xl:flex"/> */}
        <div 
            className='container relative' 
            ref={parrallaxRef}>
          <div className='relative z-1 max-w-[62rem] mx-auto
                          text-center mb-auto md:mb-20'>
            <h1 className='font-semibold text-[2.5rem] leading-[3.25rem] 
                          md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] 
                          lg:leading-[4.0625rem] xl:text-[3.75rem] 
                          xl:leading-[4.5rem] mb-6'>
              Explore the possibilities of&nbsp;AI&nbsp;Interations with {' '}
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
              Unleash the potential of AI using Brainwave.
              Double down on your productivity
              with Brainwave open AI chat app.
            </p>
            
            <Button
              href="#pricing"
              white
              className="inline-flex">
                <TypeAnimation
                  sequence={[
                    'Get Started', 2000,
                    'What you waiting for?', 2000,
                    'Click ME!', 2000,
                  ]}
                  wrapper='span'
                  speed={30}
                  repeat={Infinity}
                />
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
                               md:-translate-y-[10%] lg:-translate-y-[23%] mx-auto"
                    width={1024}
                    height={490}
                    alt="AI logo"
                    />

                    <Generating 
                      className="absolute left-4 right-4 bottom-4 
                                 md:left-1/2 md:right-auto md:bottom-8 
                                 md:w-[31rem] md:-translate-x-1/2"/>

                    <ScrollParallax isAbsolutelyPositioned>
                      <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1
                      bg-[#474060]/40 backdrop-blur-xs border border-[#FFFFFF]/50 rounded-2xl xl:flex'>
                        {
                          heroIcons?.map((icon, index) => (
                            <li 
                              className='p-5 hover:opacity-10 transition-all ease-in-out'
                              key={index}>
                                <img 
                                  src={icon}
                                  width={25}
                                  height={25}
                                  alt={icon}
                                  />
                            </li>
                          ))
                        }
                      </ul>
                    </ScrollParallax>

                    <ScrollParallax isAbsolutelyPositioned>
                        <Notification
                          className="hidden absolute backdrop-blur-xs -right-[5.5rem] bottom-[11rem] w-[20rem] xl:flex"
                          title="Code generation"
                          SampleImage={heroBackground}
                          />
                    </ScrollParallax>
                </div>
              </div>

              <Gradient />

            </div>
            <div 
              className="absolute left-[1/2] w-[234%] -translate-x-1/2 scale-200 -top-[1px]"
              >
              <img
                src={heroBackground}
                className="w-full"
                width={1400}
                height={1800}
                alt="Hero"
              />
              

              
            </div>

            <BackgroundCircles parrallaxRef={parrallaxRef}/>

          </div>

          <CompanyLogos className="hidden relative z-10 mt-20 lg:block"/>
        </div>
      <BottomLine/>
    </Section>
  )
}

export default Hero