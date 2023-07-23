import React from 'react';

import AppAppBar from './Views/AppAppBar';
import ProductHero from './Views/ProductHero';
import ProductValues from './Views/ProductValues';
import ProductCategories from './Views/ProductCategories';
import ProductHowItWorks from './Views/ProductHowItWorks';
import ProductCTA from './Views/ProductCTA';
import ProductSmokingHero from './Views/ProductSmokingHero';
import AppFooter from './Views/AppFooter';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Home = () => {
  // const user=useSelector(selectUser);
  return (
    <div>    
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductSmokingHero />
      {/* <ProductHowItWorks /> */}
      <ProductCTA />
      <AppFooter />   
    </div>
  )
}

export default Home
