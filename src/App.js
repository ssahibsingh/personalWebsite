import React from 'react'
import { About, Footer, Header, Project, Skills, Contact, Education } from './container';
import { Navbar } from './components';

import './App.scss'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Project />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div >
  )
}

export default App