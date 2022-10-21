import ProfilePhoto from '../img/profile/1_crop.jpg'

export const Hero = () => {

  const links = [
    {
      id: '1',
      url: 'https://twitter.com/pasabaaa',
      icon: 'bi bi-twitter',
      rel: 'noopener noreferrer'
    },
    {
      id: '2',
      url: 'https://github.com/pasabaa',
      icon: 'bi bi-github',
      rel: 'noopener noreferrer'
    },
    {
      id: '3',
      url: 'https://www.instagram.com/pasabaaa/',
      icon: 'bi bi-linkedin',
      rel: 'noopener noreferrer'
    },
    {
      id: '4',
      url: 'https://www.instagram.com/pasabaaa/',
      icon: 'bi bi-instagram',
      rel: 'noopener noreferrer'
    }
  ]

  return (
        <div className='h-screen'>
          <div className='bg-white/10 h-full w-full relative backdrop-blur-2xl flex' />
          <div className='h-full w-full inset-0 absolute flex items-center justify-center'>
            <span className='w-64 h-64 bg-red-600 rounded-full absolute -z-10'></span>
          </div>
          <div className='h-full w-full inset-0 absolute flex items-center justify-center z-10 gap-16 sm:flex-col sm:p-16'>
            <div>
              <h1 className='text-6xl font-bold'>¡Hola!(:</h1>
              <h1 className='text-6xl font-bold my-4'>Soy Pablo <span className='text-white sm:text-black'>Sánchez</span></h1>
              <h2 className='text-2xl font-light mt-4 sm:text-xl'>Diseñador - Desarrollador - Freelancer</h2>
              <div className='mt-6 flex gap-6'>

                {
                  links.map(link => {
                    return(
                      <a target={'_blank'} rel={link.rel} key={link.id} className='text-2xl' href={link.url}><i className={link.icon}></i></a>
                    )
                  })
                }

                
                
              </div>
            </div>
            <div>
              <img className='rounded-3xl object-scale-down h-96 sm:hidden' src={ProfilePhoto} alt="" />
            </div>
          </div>
        </div>
        
    
  )
}
