import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import SlidingGallery from './components/SlidingGallery'
import Avatar from '@mui/material/Avatar';

function App() {
  const [count, setCount] = useState(0)

  return (
    /*This is all in the body*/
    <>
      <div id='nav-bar'>
        <NavBar></NavBar>
      </div>
      <div id='title'>
          Aspiring Data Scientist/Web Developer/DevOps Engineer
      </div>

      {/*intro and photo*/}
      <div id='Introduction'>
        <div id='photo'>
          <Avatar alt="Joshua Duplaa" src="../src/assets/avatar.jpeg" sx={{ width: 200, height: 200 }} />
        </div>

        <div id='description'>
          <p>
            Welcome to the nexus where engineering ingenuity meets analytical prowess. 
            I'm Joshua Duplaa, a Texas Tech University student in my last year of a dual degree in Computer Science and Mathematics. 
            I specialize in building React applications, transforming data into actionable insights and streamlining DevOps with a touch of cybersecurity flair. 
            Dive into to my projects and solutions as I work at the intersection of data science and software engineering.
          </p>
        </div>
      </div>


      WEBSITE UNDER CONSTRUCTION!
      <div>View all my projects on github: 
        <a href = "https://github.com/joshduplaa" target="_blank">https://github.com/joshduplaa</a>
      </div>
      <div id="downloadButton">
      <a href="../src/assets/Joshua_Duplaa_Resume_2024.pdf" download="Joshua_Duplaa_Resume.pdf">
        <button>Download My Resume</button>
      </a>
      </div>

      <h2 className='Projects'>Projects</h2>
      <p className='Projects'>Click and Drag to browse</p>
      <div className='galleryDiv'>
        <SlidingGallery></SlidingGallery>
      </div>
        
    </>
  )
}

export default App
