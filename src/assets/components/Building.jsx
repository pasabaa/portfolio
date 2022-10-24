import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion';

export const Building = () => {

  const [show, setshow] = useState(true);

  const boxAnimation = {
    initial: {opacity:0},
    exit: {opacity:0, x:'50%', transition:{duration:0.1}},
    animate: {opacity:1},
    transition: {duration: 0.4, type: 'spring'}
  }

  return (
    <div className='flex justify-end items-end z-30 fixed bg-transparent p-4 bottom-0 right-0'>

      <AnimatePresence>
        
      { show &&

        <motion.div {...boxAnimation} className='p-8 bg-black border border-white/20 shadow-sm rounded w-96'>
            <div className='flex flex-col'>
                <h1 className='text-red-500 text-3xl'><i class="bi bi-exclamation-triangle-fill"></i></h1>
                <h1 className='text-gray-100 text-2xl font-bold my-4'>Aviso</h1>
                <p className='text-gray-100 leading-relaxed text-sm'>Este sitio web, está aún en proceso de construcción, por lo que puede tener, entre otras cosas, fallas ortográficas, en la adaptabilidad en diferentes dispositivos, etc.</p>
                <button onClick={()=> {setshow(false)}} className='p-2 bg-gray-100 mt-4 rounded text-sm active:bg-gray-300'>Aceptar</button>
            </div>
        </motion.div> }

      </AnimatePresence>


    </div>
  )
}
