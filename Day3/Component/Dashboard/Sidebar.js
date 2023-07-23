import React from 'react';
import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Side = () => {
  const { collapseSidebar } = useProSidebar();
  const [error, setError] = useState('');
  const navigate = useNavigate();
 
  const [activeItem, setActiveItem] = useState('/');

 

  const handleNavigate = (path) => {
    // collapseSidebar();
    navigate(path);
  };

  return (
   
      <body id="app" style={{ height: "100vh" }}>
      <Sidebar style={{ height: '100vh', }}>
        <Menu>
          <MenuItem
            icon={<MenuOutlinedIcon />}
            onClick={() => {
              collapseSidebar();
            }}
            style={{ textAlign: 'center' }}
            >
            <h2>BOARD</h2>
          </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />} onClick={() => handleNavigate('admin/')}>Admin Controls</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}onClick={() => handleNavigate('front/')}>Frontdesk</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />} onClick={() => handleNavigate('guest/')}> Guest Profile</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />} onClick={() => handleNavigate('servicesAdmin/')}>Services</MenuItem>
        </Menu>
      <div></div>
      </Sidebar>
      </body>  
            
    
  );
};

export default Side;
