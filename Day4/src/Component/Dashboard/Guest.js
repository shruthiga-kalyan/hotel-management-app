import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';



const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Guest() {
  return (
    <ThemeProvider theme={defaultTheme} style={{marginTop:'-1'}}>
      <CssBaseline />
      
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          
          
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="data:image/jpeg;base64,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"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      ROOM 
                    </Typography>
                    <Typography>
                     NAME : Adam Joe<br/>
                     CHECKIN : 12/10/2021<br/>
                     CHECKOUT : 15/10/2021<br/>                       

                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
   
    </ThemeProvider>
  );
}
