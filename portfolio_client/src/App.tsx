import React, { useCallback, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Avr from './pages/projectPages/Avr.tsx';
import Lps from './pages/projectPages/Lps.tsx';
import Prison from './pages/projectPages/Prison.tsx';
import StaringContest from './pages/projectPages/StaringContest.tsx';
import DrugDiscovery from './pages/projectPages/DrugDiscovery.tsx';
import IotWater from './pages/projectPages/IotWater.tsx';
import Leetcode from './pages/projectPages/Leetcode.tsx';
import ChatBot from './pages/projectPages/Chatbot.tsx';
import HomePage from './pages/Homepage.tsx';
import Contact from './pages/Contact.tsx'; // Import the Contact page
import AboutMe from './pages/AboutMe.tsx';     // Import the About Me page
import ProjectPage from './pages/ProjectPage.tsx'
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Engine } from "@tsparticles/engine";
import { loadFull } from "tsparticles";


import './App.css'

function App() {

  const [ init, setInit ] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

  return (
    <>
    <div className="particleBG">
      {init && (
          <Particles
              options={particlesOptions as unknown as ISourceOptions}
          />
      )}
    </div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/projects" element={<ProjectPage />} />


          <Route path="/avr" element={<Avr />} />
          <Route path="/prison" element={<Prison />} />
          <Route path="/staringcontest" element={<StaringContest />} />
          <Route path="/drugdiscovery" element={<DrugDiscovery />} />
          <Route path="/iotwater" element={<IotWater />} />
          <Route path="/lps" element={<Lps />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/leetcode" element={<Leetcode />} />

          
        </Routes>
      </Router>
    
    </>
  )
}

export default App
