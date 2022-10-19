import React from "react";
import {
  About,
  Footer,
  Header,
  Project,
  Skills,
  Education,
  FormikContact,
} from "./container";
import { Navbar } from "./components";

import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <About />
                <Project />
                <Skills />
                <Education />
                <FormikContact />
              </>
            }
          />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;
