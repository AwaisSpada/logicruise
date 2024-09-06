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
import { Route, Routes, useParams } from 'react-router-dom'
import Values from './Pages/About/Values'
import AboutServices from './Pages/About/Services'
import Team from './Pages/About/Team'
import Customers from './Pages/About/Customers'
import Contact from './Components/Contact'
import MainCard from './Components/MainCard'
import Choose from './Components/Choose'
import ScrollToTop from '../ScrollToTop';
import Approach from './Components/Approach'
import Reviews from './Components/Reviews'
import { Link } from 'react-scroll'


function App() {
  AOS.init();
  return (
    <>
     <div className=''>
     <Navbar/>
     <ScrollToTop />
     <Routes>
      <Route path='/' element={
        <>
    <Link to='home' smooth={true} duration={1500} className='bg-[#36668b] cursor-pointer text-white border-2 border-white z-20 p-2 px-[15px] rounded-full fixed right-5 top-[90vh]'><i className='fa fa-arrow-up'></i></Link>
      <Hero/>
      <MainCard/>
      <Choose/>
      <Approach/>
     <Main/>
     <Blogs/>
     {/* <Services/> */}
     <Testimonials/>
     <Reviews/>
     <AboutMe/>
        </>
      }/>
      <Route path='/about' element={<>
    <Link to='ABOUT' smooth={true} duration={1500} className='bg-[#36668b] cursor-pointer text-white border-2 border-white z-20 p-2 px-[15px] rounded-full fixed right-5 top-[90vh]'><i className='fa fa-arrow-up'></i></Link>
        <AboutHero/>
        <AboutMain/>
        <Values/>
        <AboutServices/>
        <Team/>
        <Reviews/>
        </>} />
     </Routes>
     <Contact/>
     <Footer/>
     </div>
    </>
  )
}

export default App
