import React from 'react'
import { motion } from 'framer-motion'

export const ProjectSection = () => {

    const experience = [
        {
          id:  '1',
          title: 'Timeline',
          description: 'React JS es una librería con muchísimas funciones, las cuales he aprovechado para crear diferentes aplicaciones, un ejemplo, es este sitio web.',
          image: 'react.png',
        },
        {
          id:  '2',
          title: 'Game JS',
          description: 'Mediante JavaScript he tenido la oportunidad de trabajar en diferentes aplicaciones, para la modificación del DOM, acciones y eventos, además de consumir APIS para obtentener datos, etc.',
          image: 'javascript.png',
    
        },
        {
          id:  '3',
          title: 'Message Generator',
          description: 'Trabajando desde CSS Grid a Flexbox para diferentes sitios, modificando elementos HTML, aplicando pseduo clases y elementos, para dar toques personalizados interesantes.',
          image: 'css.png'
        }
        ,
        {
          id:  '4',
          title: 'Gallery Fetch',
          description: 'En el desarrollo de videojuegos, lo he trabajado a través de Unity 3D, con elementos básicos para crear uno, puntuaciones, cambios de escena, acciones, métodos y funciones.',
          image: 'html.png',
        },
        {
          id:  '5',
          title: 'Background Generator',
          description: 'El software de Adobe, lo he utilizado para crear diferentes recursos gráficos, sea para videojuegos, diseños e ilustraciones, lo anterior con Adobe Illustrator, por otra parte, Adobe Premiere Pro, es dónde he realizado diferente contenido multimedia de edición de vídeos para creadores de contenido.',
          image: 'html.png'
        },
        {
          id:  '6',
          title: 'Portafolio',
          description: 'Este sitio web, está hecho con React JS y Tailwind CSS. Además cuenta con diferentes secciones y es un sitio totalmente responsivo.',
          image: 'html.png',
    
        }
      ]


  return (
    <div className='py-64 h-100 bg-white flex items-center justify-center' id='projects'>
        <div className='w-5/12 mx-auto sm:w-10/12'>
            <div className='flex flex-wrap gap-4 justify-between'>

                <div className='text-end max-w-sm sm:text-start'>
                    <h1 className={`text-3xl font-bold mb-2 text-red-500`}>Proyectos</h1>
                    <h2 className={`text-xl font-bold text-black`}>En este tiempo, he logrado tomar experiencia de algunos proyectos.</h2>
                </div>

                {
                    experience.slice(0).reverse().map(item => {
                        return(
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: 'spring', duration: 0.02 }}
                              key={item.id} 
                              className='max-w-sm p-6 rounded-xl bg-gray-300/10 shadow-sm last:max-w-fit sm:last:max-w-sm hover:bg-gray-300/20 transition-all ease-in-out cursor-default'>
                                <h1 className='text-black font-bold'>{item.title}</h1>
                                <p className='text-gray-400 text-sm mt-4'>{item.description}</p>
                            </motion.div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}
