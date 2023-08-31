import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './MainPage.js';
import About from './About.js';
import Projects from './Projects';
import Contact from './Contact';
import NavBar from './NavBar.js';
import './index.css';
import swDev from './swDev.js';


function START() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )

}

swDev();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< START />);