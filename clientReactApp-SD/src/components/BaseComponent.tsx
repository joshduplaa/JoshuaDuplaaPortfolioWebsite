import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import MuiCard from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import AppTheme from '../shared-theme/AppTheme.tsx';
import ColorModeSelect from '../shared-theme/ColorModeSelect.tsx';
import Button from '@mui/material/Button';
import Introduction from './introduction.tsx';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CodeIcon from '@mui/icons-material/Code';




const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: '10px',
  [theme.breakpoints.up('sm')]: {
    maxWidth: '450px',
  },
  backgroundColor: theme.palette.mode === 'dark' ? '#457A64' : '#607D8B', // Darker steel blue for dark mode, lighter steel blue for light mode
  boxShadow:
    'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  ...theme.applyStyles('dark', {
    boxShadow:
      'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px',
  }),
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  height: 'calc((1 - var(--template-frame-height, 0)) * 100dvh)',
  minHeight: '100%',
  padding: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    zIndex: -1,
    inset: 0,
    backgroundColor: theme.palette.mode === 'dark' ? '#457A64' : '#607D8B', // Darker steel blue for dark mode, lighter steel blue for light mode
    backgroundImage:
      'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
    backgroundRepeat: 'no-repeat',
    ...theme.applyStyles('dark', {
      backgroundImage:
        'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
    }),
  },
}));

export default function SignIn(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <SignInContainer direction="column" justifyContent="space-between">
        <ColorModeSelect sx={{ position: 'fixed', top: '1rem', right: '1rem' }} />


        <div className='mobileIntro'>
          Hi, I'm Joshua Duplaa
        </div>
        <div className='intro'>
          <div className='profileContainer'>
            
            <div className='profilePic'>
              <img src="https://i.imgur.com/Z8vq1nH.jpg"/>
            </div>
            <div className='professionalTitle'>
              <p>Computer Scientist<br/>and Software Engineer<br/>Focused on DevOps and Bioinformatics
              <br/> <a className='iconLink' href='https://github.com/joshduplaa'><GitHubIcon/></a> <a className='iconLink' href='https://www.linkedin.com/in/joshua-duplaa-487502178/'><LinkedInIcon/></a> <a className='iconLink' href='https://leetcode.com/joshduplaa/'><CodeIcon/></a> </p>
            </div>
          </div>
          <div id = 'personalStatement'>
            <Introduction></Introduction>
          </div>
          
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
        <h2 className='Projects'>Projects</h2>
        <div className='ProjectsSub'>*click and drag images to scroll*</div>

        <Card variant="outlined"></Card>
      </SignInContainer>
    </AppTheme>
  );
}