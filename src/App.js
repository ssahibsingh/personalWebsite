import React from 'react'
import { About, Footer, Header, Project, Skills, Education, FormikContact } from './container';
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
      {/* <Contact /> */}
      <FormikContact />
      <Footer />
    </div >
  )
}

export default App