import './App.css'
import { Hero } from './assets/components/Hero'
import { AboutSection } from './assets/components/AboutSection'
import { ExperienceSection } from './assets/components/ExperienceSection'
import { ProjectSection } from './assets/components/ProjectSection'
import { FooterSection } from './assets/components/FooterSection'
import { Building } from './assets/components/Building'

function App() {

  return (
    <>
    <Building />
      <Hero />
      <AboutSection 
        title={'Sobre Mí'} 
        subtitle={'Hola, un gusto conocerte. Toma un segundo para ver.'} 
        text={'Egresado en la carrera Tecnologías de la Información y la Comunicación en el área Entornos Virtuales y Negocios Digitales. Interesado principalmente en programación y desarrollo web del lado Front End, además, del Diseño Digital, sin embargo, estoy abierto a otros conocimientos de caracter tecnológico.'}
        subColor={'black'}
      />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </>

  )
}

export default App
