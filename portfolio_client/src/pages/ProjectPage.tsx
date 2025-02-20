import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { motion } from "motion/react"
import Parallax from '../components/Parallax';
import "../pageStyles/projectPages.css";
import NavBar from '../components/NavBar';

export default function ProjectPage(){
  return(
    <>
      
      <div className="project-page">
      <NavBar></NavBar>
        <div className="intro-section">
            <h1>Project Page</h1>
            <p><b>I'm a software engineer with a strong background in computer science, mathematics, 
              and data science, specializing in bioinformatics, AI, and web development. I develop different kinds of applications, 
              from implementing sequence alignment algorithms like Needleman-Wunsch and 
              Smith-Waterman to building Neural Network video classification models for skateboard tricks. I have 
              experience in full-stack web development, working with technologies like React, TypeScript, MUI, 
              and .NET to create interactive and efficient applications, including a Laboratory Information System 
              (LIS) training simulator. My expertise extends to DevOps, cloud infrastructure, and software performance
               optimization. I'm especially interested in AI-driven drug discovery, where I aim to apply machine learning, 
               data analysis, and high-performance computing to solve real-world biomedical challenges.<br/><br/>
               Links to the either the github page, demo app, jupyter notebook, or all three are included with each project.<br/><br/><br/><br/><br/><br/><br/><br/>
               Scroll down to view projects</b></p>
               {/* Animated Downward Chevron */}

            
            <motion.div
              className="chevron"
              animate={{ y: [0, 50, 0] }} // Smooth bounce animation
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              ▼
            </motion.div>
               
        </div>
      </div>
      <Parallax></Parallax>

    </>
  );
}