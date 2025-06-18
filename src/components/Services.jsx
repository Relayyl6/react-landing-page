import { service1, check, service2 } from '../../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import Generating from './AItext'
import Heading from './heading'
import Section from './Section'
// service2, service3, check
const Services = () => {
  return (
    <Section id="how-to-use" crosses>
        <div className='container'>
            <Heading
                title="Generative AI made for creators"
                text="Brainwave unlock the potential of AI-powered applications"
                />

            <div classname="relative">
                <div className='relative z-1 flex items-center h-[39rem] mb-5 p-8 border
                border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]'>
                    <div className='absolute top-0 left-0 w-full h-full pointer-events-none xl:w-auto'>
                        <img
                            src={service1}
                            className='w-full h-full object-cover md:object-right'
                            width={800}
                            height={730}
                            alt="Smartest AI"
                            />
                    </div>
                    <div className='relative z-1 max-w-[17rem] ml-auto'>
                        <h4 className='h4 mb-4'>
                            Smartest AI
                        </h4>
                        <p className='body-2 mb-[3rem]'>
                            Leroy unlocks the potential of AI-powered application
                        </p>
                        <ul className='body-2'>
                            {
                                brainwaveServices.map(
                                    (services, index) => (
                                        <li
                                            key={index}
                                            className='flex items-start py-4 border border-t border-n-6'
                                            >
                                            <img 
                                                src={check}
                                                width={24}
                                                height={24}
                                                />
                                            <p className='ml-4'>{services}</p>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    <Generating
                        className="absolute left-4 right-4 bottom-4 border border-n-1/10 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"
                        />
                </div>

                <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
                    <div className="relative min-h-[39rem] border border-n-1/10 overflow-hidden">
                        <div className='absolute inset-0 '>
                            <img
                                src={service2}
                                className='h-full w-full'
                                />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
  )
}

export default Services