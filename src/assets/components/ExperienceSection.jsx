import React from 'react'

export const ExperienceSection = () => {

    const experience = [
        {
          id:  '1',
          title: 'React',
          description: 'React JS es una librería con muchísimas funciones, las cuales he aprovechado para crear diferentes aplicaciones, un ejemplo, es este sitio web.',
          image: 'react.png',
        },
        {
          id:  '2',
          title: 'JavaScript',
          description: 'Mediante JavaScript he tenido la oportunidad de trabajar en diferentes aplicaciones, para la modificación del DOM, acciones y eventos, además de consumir APIS para obtentener datos, etc.',
          image: 'javascript.png',
    
        },
        {
          id:  '3',
          title: 'CSS',
          description: 'Trabajando desde CSS Grid a Flexbox para diferentes sitios, modificando elementos HTML, aplicando pseduo clases y elementos, para dar toques personalizados interesantes.',
          image: 'css.png'
        }
        ,
        {
          id:  '4',
          title: 'Unity',
          description: 'En el desarrollo de videojuegos, lo he trabajado a través de Unity 3D, con elementos básicos para crear uno, puntuaciones, cambios de escena, acciones, métodos y funciones.',
          image: 'html.png',
        },
        {
          id:  '5',
          title: 'Suite de Adobe',
          description: 'El software de Adobe, lo he utilizado para crear diferentes recursos gráficos, sea para videojuegos, diseños e ilustraciones, lo anterior con Adobe Illustrator, por otra parte, Adobe Premiere Pro, es dónde he realizado diferente contenido multimedia de edición de vídeos para creadores de contenido.',
          image: 'html.png'
        },
        {
          id:  '6',
          title: 'Frameworks',
          description: 'El proceso musical, es un hobbie que tengo, teniendo un canal en YouTube, donde subo melodías hechas en FL Studio y sus múltiples librerías de audio y efectos. Además de utilizarlo para la creaciín de efectos para videojuegos o edición de vídeos.',
          image: 'html.png',
    
        },
        {
          id:  '7',
          title: 'Base de datos',
          description: 'El proceso musical, es un hobbie que tengo, teniendo un canal en YouTube, donde subo melodías hechas en FL Studio y sus múltiples librerías de audio y efectos. Además de utilizarlo para la creaciín de efectos para videojuegos o edición de vídeos.',
          image: 'html.png',
    
        },
        {
          id:  '8',
          title: 'FL Studio',
          description: 'El proceso musical, es un hobbie que tengo y realizo en algunas ocasiones, teniendo un canal en YouTube, donde subo melodías hechas en FL Studio y sus múltiples librerías de audio y efectos. Además de utilizarlo para la creaciín de efectos para videojuegos o edición de vídeos.',
          image: 'html.png',
    
        }
      ]


  return (
    <div className='py-64 h-100 bg-black flex items-center justify-center'>
        <div className='w-5/12 mx-auto sm:w-10/12'>
            <div className='flex flex-wrap gap-4 justify-between'>

                <div className='text-end max-w-sm sm:text-start'>
                    <h1 className={`text-3xl font-bold mb-2 text-red-500`}>Experiencia</h1>
                    <h2 className={`text-xl font-bold text-gray-100`}>En este tiempo, he logrado tomar experiencia de algunas herramientas y lenguajes.</h2>
                </div>

                {
                    experience.map(item => {
                        return(
                            <div key={item.id} className='max-w-sm p-6 rounded-xl bg-zinc-900/20 shadow-sm last:max-w-fit sm:last:max-w-sm hover:bg-zinc-900/50 transition-all ease-in-out'>
                                <h1 className='text-white font-bold'>{item.title}</h1>
                                <p className='text-gray-200 text-sm mt-4'>{item.description}</p>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}
