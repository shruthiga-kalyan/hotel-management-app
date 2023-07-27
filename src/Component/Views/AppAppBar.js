import React from 'react'
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/material';
import { Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import SignIn from '../SignIn';
import { useNavigate } from 'react-router-dom';


const AppAppBar = () => {
    const rightLink = {
        fontSize: 16,
        color: 'common.white',
        ml: 3,
      };
      const navigate = useNavigate();

      const handleSignInClick = () => {        
        navigate('/signin');
      };

      const handleSignUpClick = () => {
        navigate('/signup');
      };

  return (
    <div>
      
      <div>
      <AppBar position="fixed"  style={{backgroundColor:"#28282A" ,fontFamily:'Roboto Condensed,sans-serif'}}>
      
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1 }} />
          <Link
            variant="h6"
            underline="none"
            color="inherit"

            href="/"
            sx={{ fontSize: 24, fontFamily:'Roboto Condensed,sans-serif',fontWeight:'700'}}
           
          >
            {'LITTLE HOTELIER'}
          </Link>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/signin"
              sx={rightLink}
              onClick={handleSignInClick}
              
            >
              {'SIGN IN'}
             
            </Link>
            <Link
              variant="h6"
              underline="none"
              onClick={handleSignUpClick}
              sx={{ ...rightLink, color: '#ff3366' ,fontWeight:'400'}}
            >
              {'SIGN UP'}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
    </div>
  )
}

export default AppAppBar
