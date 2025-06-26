'use client';

import { useState } from 'react';
import * as React from 'react';

import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import CollapsibleTable from '../components/CollapsibleTable';
import NavBar from "../components/NavBar";
import './homepageStyles.css'


export default function Home() {

  return (
    
    <>
      <NavBar></NavBar>
      <div className='homepage'>
        <div className='introPic'> 
          <div>
            <div id='profilePic'>
              <img src="https://i.imgur.com/fP5IYuB.png"/>
            </div>
          </div>
          <div id='proTitle'>
            <p>Computer Scientist<br/>Texas Tech University<br/>B.S. Computer Science<br/>B.S. Mathematics</p>
          </div>    
          <div id='socialIcons'>
            <a className='iconLink' href='https://github.com/joshduplaa' target='_blank' rel='noopener noreferrer'><GitHubIcon sx={{ color: '#ffffff' }}/></a> <a className='iconLink' href='https://www.linkedin.com/in/joshua-duplaa-487502178/' target='_blank' rel='noopener noreferrer'><LinkedInIcon sx={{ color: '#ffffff' }}/></a> <a className='iconLink' href='https://leetcode.com/joshduplaa/' target='_blank' rel='noopener noreferrer'><CodeIcon sx={{ color: '#ffffff' }}/></a> 
          </div>
        </div>
        <div className='introDetails'>
          <div id = "helloDiv">
            <h1 style={{ color: '#ffffff' }}>Hi &#128075; I'm Joshua Duplaa</h1>
          </div>
          <p style={{ color: '#ffffff' }}> I'm a Data Scientist and DevOps engineer</p>
          <div id = "resume">
              <Button
                variant="outlined"
                color="success"
                href="https://drive.google.com/uc?export=download&id=1_X__liQI7fJLtBbgVuGKJ67_sS49ZaMo"
                download="JoshuaDuplaa_Resume.pdf"
                sx = {{fontWeight: '900', color: '#ffffff', borderColor: '#ffffff', '&:hover': { borderColor: '#289726', backgroundColor: 'rgba(40, 151, 38, 0.1)' }}}
              >
                Download Resume
              </Button>
              <br /><br />
          </div>

        </div>
      </div>
      <div className='experience'>
          <h1 style={{ color: '#ffffff' }}>Experience</h1>
          <CollapsibleTable></CollapsibleTable>
      </div>
    </>
  );
}
