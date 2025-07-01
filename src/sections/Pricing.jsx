import React from 'react'
import Section from '../components/section'
import { smallSphere, stars } from '../../assets'
import Heading from '../components/heading'
import Pricinglist from '../components/Pricinglist'
import { LeftLine, RightLine } from '../design/Pricing'

const Pricing = () => {
  return (
    <Section className="overflow-hidden" id="Pricing">
        <div className='container relative z-2'>
          <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
            <img
              src={smallSphere}
              className='relative z-1'
              width={255}
              height={255}
              />
            <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
              <img
                src={stars}
                className='w-full'
                width={950}
                height={500}
                alt='stars'
                />
            </div>
          </div>
          <Heading
            title="Pay Once, Use forever"
            tag="Get started with Leroy"
            />
            <div className='relative'>
              <Pricinglist/>
              <LeftLine/>
              <RightLine/>
            </div>
        </div>
    </Section>
  )
}

export default Pricing