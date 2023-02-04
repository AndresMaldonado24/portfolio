import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import About from './components/about'
import Navbar from './components/navbar'
import Projects from './components/projects'
import Skills from './components/skills'



function App() {

  return (
  <main>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
  </main>
  )
}

export default App
