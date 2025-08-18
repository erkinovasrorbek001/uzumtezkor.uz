import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Section from '../../components/Section/Section'
import Service from '../../components/Service/Service'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'
function Home() {
  return (
    <div className='pt-14'>
      <Header/>
      <Hero/>
      <Section/>
      <Service/>
      <Main/>
      <Footer/>
      </div>
  )
}

export default Home