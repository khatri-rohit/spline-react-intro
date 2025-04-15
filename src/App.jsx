import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Cude from './components/Spline/Cube'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Header />
      <Cude />
      <Footer />
    </div>
  )
}

export default App