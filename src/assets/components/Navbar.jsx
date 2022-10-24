import Logo from '../img/logo/logo-iso.png'

import { Link, animateScroll as scroll } from "react-scroll";

export const Navbar = () => {

    const links = [
        {
            id : '1',
            name: 'Sobre Mí',
            section: 'about'
        },
        {
            id : '2',
            name: 'Experiencia',
            section: 'experience'
        },
        {
            id : '3',
            name: 'Proyectos',
            section: 'projects'
        }
    ]

    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }


  return (
    <div className='p-6 bg-black/90 backdrop-blur-sm top-0 sticky z-20'>
        <div className='w-6/12 mx-auto sm:w-10/12'>
            <nav className='flex justify-between items-center'>
                <div>
                    <ul className='font-bold flex gap-4'>
                        <li className='text-white'>
                            <a href="#about">
                                <img src={Logo} alt="Logo pasabaa" className='object-scale-down h-12 invert' />
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='font-bold flex gap-4'>

                        <li className='text-white hover:text-gray-300 ease-in-out transition-all'><button onClick={goToTop}>Inicio</button></li>

                        {
                            links.map(link => {
                                return(
                                    <li className='text-white hover:text-gray-300 ease-in-out transition-all'>
                                        <Link 
                                            activeClass='active' 
                                            spy='true' smooth='true' 
                                            offset={-80} 
                                            duration={400} 
                                            to={link.section}>{link.name}</Link></li>
                                )
                            })
                        }

                    </ul>
                </div>
            </nav>
        </div>
    </div>
  )
}
