import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Card, CardContent, CardMedia, Divider } from '@mui/material';

import { Route,Routes } from 'react-router-dom';


import AddRoom from './AdminDash/AddRoom';
import UpdateRoom from './AdminDash/UpdateRoom';
import DeleteRoom from './AdminDash/DeleteRoom';
import ListRoom from './AdminDash/ListRoom';

const Content = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Card
        sx={{
          maxWidth: 400,
          margin: 'auto',
          boxShadow: 3,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image="https://st2.depositphotos.com/1743476/11581/i/450/depositphotos_115812366-stock-photo-happy-laughing-man.jpg"
          alt="Profile Image"
        />
        <CardContent
          sx={{
            padding: 2,
          }}
        >
          <Typography variant="h6" gutterBottom sx={{ marginBottom: 1 }}>
            Name: Sam Smith
          </Typography>
          <Divider sx={{ margin: '2px 0' }} />
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>First Name:</strong> Sam
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Last Name:</strong> Smith
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 1 }}>
            <strong>Email:</strong> samsmith@gmail.com
          </Typography>
        </CardContent>
      </Card>

    
    </div>
  );
};

export default Content;
