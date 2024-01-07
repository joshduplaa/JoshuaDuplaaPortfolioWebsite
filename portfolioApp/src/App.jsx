import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/Navbar'
import SlidingGallery from './components/SlidingGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    /*This is all in the body*/
    <>
      <div className='nav-bar'>
        <NavBar></NavBar>
      </div>
      <div className='title'>
        Aspiring Data Scientist/Web Developer/DevOps Engineer
      </div>

      <div className='description'>
        <p>Welcome to the nexus where engineering ingenuity meets analytical prowess. 
          I'm Joshua Duplaa, a Texas Tech student in my last year of a dual degree in Computer Science and Mathematics. 
          I specialize in transforming data into actionable insights and streamlining DevOps with a touch of cybersecurity flair. 
          Dive into to my projects and solutions as I work at the intersection of data science and software engineering.
        </p>
      </div>
      <SlidingGallery></SlidingGallery>
    </>
  )
}

export default App
