import React from 'react'
// import { loading } from '../../assets'
import { TypeAnimation } from 'react-type-animation'
// import { motion, useTransform, useMotionValue } from 'framer-motion'
import { RingLoader } from "react-spinners";
import { useState } from 'react';


const Generating = ({ className }) => {
  const [loading, _setLoading] = useState(true);
  const [color, _setColor] = useState("#ffffff");

  // const RotatingCircle = () => {

  // const rotate = useMotionValue(0);
  // const blurAmount = useTransform(rotate, (value) => {
  //   // Blur fades out between 0° and 30°
  //   return value % 360 < 30 ? 4 - (value % 360) / 7.5 : 0;
  // });

  //   return (
  //     <motion.div
  //       style={{
  //         width: '30px',
  //         height: '30px',
  //         borderRadius: '50%',
  //         background: 'conic-gradient(from 0deg, rgba(79, 70, 229, 0.5) 0deg 40deg, #FFC876 40deg 70deg, #79FFF7 70deg 130deg, #9F53FF 130deg 200deg, #FF98E2 200deg 280deg, #FFC876 280deg 340deg, transparent 340deg 360deg)', 
  //         mask: 'radial-gradient(transparent 40%, black 40%)',
  //         rotate, // Connect rotation to motion value
  //         filter: blurAmount.to((4) => `blur(${4}px)`),
  //       }}
  //       animate={{ rotate: 360, opacity: [1, 0.5, 1] }}
  //       transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
  //     />
  //   )
  // }

  return (
    <div className={`flex items-center h-[3.5rem] gap-x-2 px-6 bg-n-8/80 rounded-[1.7rem] ${className || ''} text-base`}>
        {/* <img
            className='w-5 h-5 mr-5'
            src={loading}
            alt='loading'
        /> */}
          <RingLoader
            color={color}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        {/* <RotatingCircle/> */}
        <TypeAnimation
          sequence={[
            'AI is generating', 2000,
            'Loading generative prompts', 2000,
            'Parsing Image file', 2000,
            ]}
          wrapper='span'
          speed={30}
          repeat={Infinity}
          />
    </div>
  )
}

export default Generating