import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Markdown from './modules/components/Markdown';
// import Typography from './modules/components/Typography';
// import AppAppBar from './modules/views/AppAppBar';
// import AppFooter from './modules/views/AppFooter';
// import withRoot from './modules/withRoot';
// import privacy from './modules/views/privacy.md';

import Markdown from '../Component/Markdown';
import Typography from './Typography';
import AppAppBar from './Views/AppAppBar';
import AppFooter   from './Views/AppFooter';
import withRoot from './withRoot';



function Privacy() {
  return (
    <React.Fragment>
      <AppAppBar />
      <Container>
        <Box sx={{ mt: 7, mb: 12 }}>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Privacy
          </Typography>
          <Markdown>{privacy}</Markdown>
        </Box>
      </Container>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Privacy);