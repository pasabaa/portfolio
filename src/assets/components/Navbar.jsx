import { useState } from 'react';
import Logo from '../img/logo/logo-iso.png'
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {

    const [show, setshow] = useState(false);

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

    const boxAnimation = {
        initial: {y:'-100%', opacity:0},
        exit: {y:'-100%', opacity:0, transition:{duration:0.1}},
        animate: {y:'0', opacity: 1},
        transition: {duration: 0.4, type: 'spring'}
    }

    const menuAnimation = {
        initial: {opacity:0},
        exit: {opacity:0, transition:{duration:0.1}},
        animate: {opacity:1},
        transition: {duration: 0.4, type: 'spring'}
    }

    const goToTop = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }



  return (
    <div className='p-6 bg-black/90 backdrop-blur-sm top-0 sticky z-20'>
        <div className='w-6/12 mx-auto sm:w-10/12 sm:hidden'>
            <nav className='flex justify-between items-center'>
                <div>
                    <ul className='font-bold flex gap-4'>
                        <li className='text-white'>
                            <button onClick={goToTop}>
                                <img src={Logo} alt="Logo pasabaa" className='object-scale-down h-12 invert' />
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='font-bold flex gap-4'>

                        <li className='text-white hover:text-gray-300 ease-in-out transition-all'><button onClick={goToTop}>Inicio</button></li>

                        {
                            links.map(link => {
                                return(
                                    <li key={link.id} className='text-white hover:text-gray-300 ease-in-out transition-all cursor-pointer'>
                                        <Link 
                                            activeClass='active' 
                                            spy
                                            smooth='true' 
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

       {/* Nav Mobile                  */}

        <div className='w-6/12 mx-auto sm:w-10/12 hidden sm:block'>
            <nav className='flex justify-between items-center'>
                <div>
                    <ul className='font-bold flex gap-4'>
                        <li className='text-white'>
                            <button onClick={goToTop}>
                                <img src={Logo} alt="Logo pasabaa" className='object-scale-down h-12 invert' />
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className='font-bold flex gap-4 mt-4'>
                        <li className='text-white text-3xl hover:text-gray-300 ease-in-out transition-all'><button onClick={()=> {setshow(!show)}}><i class="bi bi-list"></i></button></li>
                    </ul>
                </div>
            </nav>
        </div>

        <AnimatePresence>
            {
            show &&
                <motion.div {...boxAnimation} className='w-6/12 mx-auto sm:w-10/12 hidden sm:block'>
                        <ul className='font-bold flex flex-col gap-4 py-6'>
                            <li className='text-white hover:text-gray-300 ease-in-out transition-all'><button onClick={goToTop}>Inicio</button></li>

                            {
                                
                                links.map(link => {
                                    return(
                                        <li key={link.id} className='text-white hover:text-gray-300 ease-in-out transition-all cursor-pointer'>
                                        <Link 
                                            activeClass='active' 
                                            spy
                                            smooth='true' 
                                            offset={-80} 
                                            duration={400} 
                                            to={link.section}>{link.name}</Link></li>
                                    )
                                })
                                    
                            }
                        </ul>
                </motion.div>
            }
        </AnimatePresence>
    </div>
  )
}
