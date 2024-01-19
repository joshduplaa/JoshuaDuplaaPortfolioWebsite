

import { useState, useEffect } from 'react';

import NavBar from './components/NavBar.jsx';
import Button from '@mui/material/Button';
import SlidingGallery from './components/SlidingGallery.jsx';
import Introduction from './components/Introduction.jsx';
import ParticleBG from './components/particleBG.jsx';

import './App.css';

function App() {
  const [count, setCount] = useState(0);
    // Scroll to top on mount
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <ParticleBG></ParticleBG>
        <div className='nav-bar'>
          <NavBar></NavBar>
        </div>


        <div className='intro'>
          <div className='profileContainer'>
            <div className='profilePic'>
              <img src="https://i.imgur.com/Z8vq1nH.jpg"/>
            </div>
            <div className='professionalTitle'>
              <p>Aspiring <br/>Computer Scientist and Developer</p>
            </div>
          
          </div>
          <div id = 'personalStatement'>
            <Introduction></Introduction>
          </div>
          
        </div>
        <div id = "resume">
            <Button
              variant="contained"
              color="primary"
              href="https://drive.google.com/uc?export=download&id=1_X__liQI7fJLtBbgVuGKJ67_sS49ZaMo"
              download="Josh.pdf"
            >
              Download Resume
            </Button>
        </div>
        <h2 className='Projects'>Projects</h2>
        <SlidingGallery id="slidingGallery"></SlidingGallery>
    
      
    </>
  )
}

export default App
