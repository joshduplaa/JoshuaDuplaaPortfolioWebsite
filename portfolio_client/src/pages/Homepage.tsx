
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';
import CollapsibleTable from '../components/CollapsibleTable';

import '../pageStyles/homePage.css';


export default function HomePage(){
  return(
    <>
      <div className='homepage'>
        <div className='introPic'> 
          <div>
            <div id='profilePic'>
              <img src="https://i.imgur.com/fP5IYuB.png"/>
            </div>
          </div>
          <div id='proTitle'>
            <p>Computer Scientist<br/>B.S. Computer Science<br/>B.S. Mathematics</p>
          </div>    
          <div id='socialIcons'>
            <a className='iconLink' href='https://github.com/joshduplaa'><GitHubIcon sx={{ color: 'black' }}/></a> <a className='iconLink' href='https://www.linkedin.com/in/joshua-duplaa-487502178/'><LinkedInIcon sx={{ color: 'black' }}/></a> <a className='iconLink' href='https://leetcode.com/joshduplaa/'><CodeIcon sx={{ color: 'black' }}/></a> 
          </div>
        </div>
        <div className='introDetails'>
          <div id = "helloDiv">
            <h1>Hi &#128075; I'm Joshua Duplaa</h1>
          </div>
          <div id = "introParagraph">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi nobis ratione perspiciatis laborum vero quidem obcaecati veniam facere corporis, voluptate harum earum, numquam, voluptatibus ex! Similique sint atque culpa a.
            </p>
          </div>
          <div id = "resume">
              <Button
                variant="outlined"
                color="success"
                href="https://drive.google.com/uc?export=download&id=1_X__liQI7fJLtBbgVuGKJ67_sS49ZaMo"
                download="JoshuaDuplaa_Resume.pdf"
                sx = {{fontWeight: '900'}}
              >
                Download Resume
              </Button>
          </div>
          
        </div>
      </div>
      <div className='experience'>
          <h1>Experience</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat tenetur quas porro, ratione tempore iure sapiente error, libero eligendi omnis officia illo eaque, debitis atque consequatur id perspiciatis unde at!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque minus, placeat debitis incidunt a unde similique neque voluptatibus aliquam, nesciunt, beatae ducimus provident doloremque natus illum sequi quasi asperiores explicabo.
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, perferendis mollitia quas explicabo magnam harum, voluptas perspiciatis impedit voluptatum est veniam tenetur, similique aperiam vitae laboriosam ipsam illum error a?
              
            </p>
          <CollapsibleTable></CollapsibleTable>
      </div>
    </>
  );
}