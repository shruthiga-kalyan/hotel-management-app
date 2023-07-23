import React from 'react';
import { Button } from '@mui/material';
import Typography from '../Typography';
import ProductHeroLayout from './ProductHeroLayout';


const ProductHero = () => {

    const backgroundImage ="https://www.lemontreehotels.com/getattachment/af089b2a-541d-4024-8723-8433af792c86/hotels-delhi.aspx";

  return (
    <div>
      
      <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      {/* <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      /> */}
      <div style={{font:"font-family: 'Roboto Condensed',sans-serif;"}}>

      <Typography color="inherit" align="center" variant="h2" marked="center" >
        UPGRADE YOUR HOTEL MANAGEMENT 
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
        >
        Enjoy secret offers up to 70% off the best luxury hotels.
      </Typography>
      </div>

      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/signup"
        style={{backgroundColor:"#ff3366"}}
        sx={{ minWidth: 200 }}
        >
        Register
      </Button>
    
    </ProductHeroLayout>
    </div>
  )
}

export default ProductHero