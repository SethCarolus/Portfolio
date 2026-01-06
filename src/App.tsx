import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <center><h2>Projects</h2></center>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
