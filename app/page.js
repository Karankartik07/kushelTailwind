import React from 'react'
import OurTechno from './home/OurTechno'
import RealSuccess from './home/RealSuccess'
import Technology from './home/Technology'
import CustomSolution from './home/CustomSolution'
import CompaniesSlider from './home/CompaniesSlider'
import HomeFAQ from './home/HomeFAQ'
import Website from './home/Website'
import Navbar from './home/Navbar'
import NewBanner from './home/Banner'
import Portfolio from './home/Portfolio'
import Portfolio2 from './home/Portfolio2'
import Testimonials from './home/Testimonials'
import Footer from './home/Footer'

export default function page() {
  return (
    
    <>
    <Navbar/>
    <NewBanner/>
    <OurTechno/>
   
    <RealSuccess/>
    <Technology/>
    <CustomSolution/>
    <Portfolio2/>
    <CompaniesSlider/>
     <Portfolio/>
    <Testimonials/>
    <HomeFAQ/>
    <Website/>
    <Footer/>
    </>
  )
}

