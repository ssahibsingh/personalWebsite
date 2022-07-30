import React from 'react'
import { About, Footer, Header, Project, Skills, Contact } from './container';
import { Navbar } from './components';

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div >
  )
}

export default App