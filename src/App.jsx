import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Main from './Components/Main'
import Blogs from './Components/Blogs'
import Services from './Components/Services'
import Testimonials from './Components/Testimonials'
import AboutMe from './Components/AboutMe'
import Doubts from './Components/Doubts'
import Footer from './Components/Footer'
import AboutHero from './Pages/About/Hero'
import AboutMain from './Pages/About/Main'
import { Route, Routes } from 'react-router-dom'
import Values from './Pages/About/Values'
import AboutServices from './Pages/About/Services'
import Team from './Pages/About/Team'
import Customers from './Pages/About/Customers'
import Contact from './Components/Contact'

function App() {
  return (
    <>
     <div>
     <Navbar/>
     
     <Routes>
      <Route path='/' element={
        <>
      <Hero/>
     <Main/>
     <Blogs/>
     <Services/>
     <Testimonials/>
     <AboutMe/>
     <Doubts/>
        </>
      }/>
      <Route path='/about' element={<>
        <AboutHero/>
        <AboutMain/>
        <Values/>
        <AboutServices/>
        <Team/>
        <Customers/>
      </>} />
     </Routes>
     <Contact/>
     <Footer/>
     </div>
    </>
  )
}

export default App
