import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../Typography';

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  '&:hover': {
    bgcolor: '#28282A',
  },
};

export default function AppFooter() {
  return (
    <Typography component="footer" sx={{ display: 'flex', bgcolor: '#FFF5F8', marginTop: '80px', justifyContent: 'flex-start' }}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" marked="left" gutterBottom>
             {/* follow us  */}
            </Typography>
            <Box sx={{ display: 'flex', bgcolor: '#FFF5F8', marginTop: '5px', justifyContent: 'flex-start' }}>
              <Box component="a" href="https://mui.com/" sx={iconStyle}>
                <img
                  src="https://img.icons8.com/?size=512&id=118555&format=png"
                  alt="Facebook"
                  height={50}
                  width={50}
                />
              </Box>
              <Box component="a" href="https://twitter.com/MUI_hq" sx={{ ...iconStyle, marginLeft: '10px' }}>
                <img
                  src="https://img.icons8.com/?size=1x&id=dfe6xOTOt2vY&format=png"
                  alt="Twitter"
                  height={50}
                  width={50}
                />
              </Box>
              <Box component="a" href="https://twitter.com/MUI_hq" sx={{ ...iconStyle, marginLeft: '10px' }}>
                <img
                  src="https://img.icons8.com/?size=1x&id=TEYr8ETaIfBJ&format=png"
                  alt="Instagram"
                  height={50}
                  width={50}
                />
              </Box>
              <Box component="a" href="https://twitter.com/MUI_hq" sx={{ ...iconStyle, marginLeft: '10px' }}>
                <img
                  src="https://img.icons8.com/?size=1x&id=63676&format=png"
                  alt="Pinterest"
                  height={50}
                  width={50}
                />
              </Box>
              <Box component="a" href="https://twitter.com/MUI_hq" sx={{ ...iconStyle, marginLeft: '10px' }}>
                <img
                  src="https://img.icons8.com/?size=1x&id=qLVB1tIe9Ts9&format=png"
                  alt="Youtube"
                  height={50}
                  width={50}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
