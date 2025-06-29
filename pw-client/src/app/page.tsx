'use client';

import * as React from 'react';

import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import CollapsibleTable from '../components/CollapsibleTable';
import NavBar from "../components/NavBar";
import { useTheme } from '../components/MuiThemeProvider';
import './homepageStyles.css'


export default function Home() {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#202124';
  const borderColor = isDarkMode ? '#289726' : '#202124'; // Green in dark mode, dark gray in light mode

  return (
    
    <>
      <NavBar></NavBar>
      <div className='homepage'>
        <div className='introPic'> 
          <div>
            <div id='profilePic' style={{ borderColor: borderColor }}>
              <img src="/portfolioPic3.png" alt="Joshua Duplaa Profile Picture"/>
            </div>
          </div>
          <div id='proTitle'>
            <p>Texas Tech University '25<br/>B.S. Computer Science<br/>B.S. Mathematics</p>
          </div>    
          <div id='socialIcons'>
            <a className='iconLink' href='https://github.com/joshduplaa' target='_blank' rel='noopener noreferrer'><GitHubIcon sx={{ color: textColor }}/></a> <a className='iconLink' href='https://www.linkedin.com/in/joshua-duplaa-487502178/' target='_blank' rel='noopener noreferrer'><LinkedInIcon sx={{ color: textColor }}/></a> <a className='iconLink' href='https://leetcode.com/joshduplaa/' target='_blank' rel='noopener noreferrer'><CodeIcon sx={{ color: textColor }}/></a> 
          </div>
        </div>
        <div className='introDetails'>
          <div id = "helloDiv">
            <h1 className="greeting-text" style={{ color: textColor, fontSize: '2.5rem', fontWeight: 'bold' }}>Hi &#128075; I&apos;m Joshua Duplaa</h1>
          </div>
          <p style={{ color: textColor }}> I&apos;m a Data Scientist and DevOps engineer</p>
          <div id = "resume">
              <Button
                variant="outlined"
                color="success"
                href="/Joshua_Duplaa_Resume_2025_Portfolio.pdf"
                download="JoshuaDuplaa_Resume.pdf"
                sx={{
                  fontWeight: '900',
                  color: textColor,
                  borderColor: textColor,
                  '&:hover': {
                    borderColor: '#289726',
                    backgroundColor: isDarkMode ? 'rgba(40, 151, 38, 0.1)' : 'rgba(40, 151, 38, 0.05)'
                  }
                }}
              >
                Download Resume
              </Button>
              <br /><br />
          </div>

        </div>
      </div>
      <div className='experience'>
          <h1 style={{ color: textColor }}>Experience</h1>
          <CollapsibleTable></CollapsibleTable>
      </div>
    </>
  );
}
