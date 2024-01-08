import { useState } from 'react'
import './App.css'
import NavBar from './components/Navbar'
import SlidingGallery from './components/SlidingGallery'

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

      <div id='description'>
        <p>Welcome to the nexus where engineering ingenuity meets analytical prowess. 
          I'm Joshua Duplaa, a Texas Tech student in my last year of a dual degree in Computer Science and Mathematics. 
          I specialize in transforming data into actionable insights and streamlining DevOps with a touch of cybersecurity flair. 
          Dive into to my projects and solutions as I work at the intersection of data science and software engineering.
        </p>
      </div>
      <div >WEBSITE UNDER CONSTRUCTION!</div>
      <div>cView Pinned Projects on github: https://github.com/joshduplaa</div>
      <div id='gallery'>
        <SlidingGallery></SlidingGallery>
      </div>
    </>
  )
}

export default App
