import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import { useNavigate } from 'react-router-dom';
import Bookings from './AdminDash/Bookings';
import AdminBillings from './AdminDash/AdminBillings';
import AdminServices from './AdminDash/AdminServices';
import { Route } from 'react-router-dom';




const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: '"#28282A"',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 #28282A inset',
  py: 1.5,
  px: 3,
};


export default function Navigator(props) {  const { ...other } = props;

const navigate=useNavigate('');

const handleNavigate = (path) => {
  
  navigate(path);
};

  return (
    <Drawer variant="permanent" {...other} style={{backgroundColor:"#28282A"}}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff' }}>
          LITTLE HOTELIER
        </ListItem>

        <ListItem>
    <ListItemIcon style={{ backgroundColor: 'white' }}>
      <PeopleIcon />
    </ListItemIcon>
    <ListItemButton sx={item}>
      <ListItemText sx={{ color: '#fff' }} disablePadding onClick={() => { handleNavigate('/adminServices') }}>PROFILE</ListItemText>
    </ListItemButton>
  </ListItem>
  <br/>
       
          <Box  sx={{ bgcolor: '#101F33' }}>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
  <ListItem>
    <ListItemIcon style={{ backgroundColor: 'white' }}>
      <DnsRoundedIcon />
    </ListItemIcon>
    <ListItemButton sx={item}>
      <ListItemText sx={{ color: '#fff' }} disablePadding onClick={() => { handleNavigate('/adminBookings') }}>ROOM</ListItemText>
    </ListItemButton>
  </ListItem>

  <ListItem>
    <ListItemIcon style={{ backgroundColor: 'white' }}>
      <PermMediaOutlinedIcon />
    </ListItemIcon>
    <ListItemButton sx={item}>
      <ListItemText sx={{ color: '#fff' }} disablePadding onClick={() => { handleNavigate('/adminServices') }}>POINT OF SERVICES</ListItemText>
    </ListItemButton>
  </ListItem>

  <ListItem>
    <ListItemIcon style={{ backgroundColor: 'white' }}>
      <PublicIcon />
    </ListItemIcon>
    <ListItemButton sx={item}>
      <ListItemText sx={{ color: '#fff' }} disablePadding onClick={() => { handleNavigate('/adminBillings') }}>BILLING</ListItemText>
    </ListItemButton>
  </ListItem>
{/* 
  <ListItem>
    <ListItemIcon style={{ backgroundColor: 'white' }}>
      <PublicIcon />
    </ListItemIcon>
    <ListItemButton sx={item}>
      <ListItemText sx={{ color: '#fff' }} disablePadding onClick={() => { handleNavigate('/customer') }}>CUSTOMER</ListItemText>
    </ListItemButton>
  </ListItem> */}


</div>

            <Divider />
          </Box>
       
      </List>
       
    </Drawer>
  );
}
