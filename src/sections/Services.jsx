import { service1, check, service2, service3 } from '../../assets'
import { brainwaveServices, brainwaveServicesIcons } from '../constants'
import Generating from '../components/AItext'
import Heading from '../components/heading.jsx'
import Section from '../components/section.jsx'
import { PhotoChatMessage, Gradient, VideoBar, VideoChatMessage } from '../design/Services'

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
                    <div className='relative z-1 md:max-w-[18.5rem] max-w-[15rem] p-2 border-6 rounded-2xl border-n-7 ml-auto'>
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
                                            className='flex items-start py-4 border first:rounded-t-xl last:rounded-b-xl border-t border-n-6'
                                            >
                                            <img
                                                src={check}
                                                width={24}
                                                height={24}
                                                className='ml-3'
                                                />
                                            <p className='ml-3'>{services}</p>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                    <Generating
                        className="absolute left-4 right-4 bottom-4 border border-n-1/10 md:w-auto lg:w-150 lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2"
                        />
                </div>

                <div className='relative z-1 grid gap-5 lg:grid-cols-2'>
                    <div className="relative min-h-[39rem] border border-n-1/10 overflow-hidden rounded-3xl">
                        <div className='absolute inset-0'>
                            <img
                                src={service2}
                                className='h-full w-full object-cover'
                                width={630}
                                height={750}
                                alt='robot'
                                />
                        </div>
                        <div className='absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90'>
                            <h4 className='h4 mb-4'>
                                Photo Editing
                            </h4>
                            <p className='body-2 mb-[3rem]'>
                                Automatically enhances your photos using our AI app's photo editing features. Try it now!
                            </p>
                            <PhotoChatMessage/>
                        </div>
                    </div>

                    <div className='relative p-4 bg-n-7 overflow-hidden rounded-3xl lg:min-h-[46rem]'>
                        <div className='py-12 px-4 xl:px-8'>
                            <h4 className='h4 mb-4'>Video generation</h4>
                            <p className='body-2 mb-[2rem] text-n-3'>The world's most powerful AI photo and Video art generation engine. What will you crete with it?</p>
                            <ul className='flex items-center justify-between'>
                                {
                                    brainwaveServicesIcons.map((icon, index) => (
                                        <li key={index} className={`flex items-center justify-center rounded-2xl transition-all duration-300 hover:scale-110 hover:p-0.25 hover:bg-conic-gradient w-10 h-10 bg-n-6 md:w-15 md:h-15`}>
                                            <div className={`hover:flex hover:items-center hover:justify-center hover:w-full hover:h-full hover:bg-n-7 hover:rounded-[1rem]`}>
                                                <img
                                                    src={icon}
                                                    width={24}
                                                    height={24}
                                                    alt="icon"
                                                    />
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]'>
                            <img
                                src={service3}
                                className='w-full h-full object-cover'
                                width={520}
                                height={400}
                                alt="Futuristic robot"
                                />
                            <VideoChatMessage/>
                            <VideoBar/>
                        </div>
                    </div>
                </div>
            <Gradient/>
            </div>
        </div>
    </Section>
  )
}

export default Services