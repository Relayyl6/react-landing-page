import React from 'react'
import Section from '../components/section'
import Heading from '../components/heading'

const Roadmap = () => {
  return (
    <Section id="roadmap" className='overflow-hidden' crosses>
        <div className='container md:pb-10 relaive z-2'>
            <Heading
                tag="Ready to get started"
                title="What we're working on"
            />
        </div>
    </Section>
  )
}

export default Roadmap