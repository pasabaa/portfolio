import './App.css'
import { Hero } from './assets/components/Hero'
import { AboutSection } from './assets/components/AboutSection'
import { ExperienceSection } from './assets/components/ExperienceSection'
import { ProjectSection } from './assets/components/ProjectSection'
import { FooterSection } from './assets/components/FooterSection'

function App() {

  return (
    <>
      <Hero />
      <AboutSection 
        title={'Sobre Mí'} 
        subtitle={'Hola, un gusto conocerte. Toma un segundo para ver.'} 
        text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus feugiat metus, tempus gravida felis iaculis et. Praesent consequat ex a mi ultrices imperdiet. Nullam a purus id sem rutrum semper quis porta magna.'}
        titleColor={'gray'}
        subColor={'black'}
        textColor={'white'}
      />
      <ExperienceSection />
      <ProjectSection />
      <FooterSection />
    </>

  )
}

export default App
