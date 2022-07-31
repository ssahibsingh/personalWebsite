import React from 'react'
import { About, Footer, Header, Project, Skills } from './container';
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
      {/* <Contact /> */}
      <Footer />
    </div >
  )
}

export default App