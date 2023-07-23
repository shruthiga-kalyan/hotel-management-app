import { Button ,Typography,Container,MenuItem,FormControl,InputLabel,Select} from "@mui/material";

import React from "react";
import ListRoom from "./Dashboard/ListRoom";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Dining from "./Dinning";


const Services = () => {
  
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const [value, setValue] = useState(0); 
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('/');

  const handleClick = (path) => {
    navigate(path);
    setActiveItem(path);
  };

  return (
    <div style={{margin:'100px auto'}}>
      <h1 >Room Management</h1>
      {/* <Typography>
        Select any one services
      </Typography> */}

      <Container>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label" style={{width:'1000px'}}>Rooms</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} onClick={() => handleClick('/addrooms')}>BOOK ROOM</MenuItem>
          <MenuItem value={20} onClick={() => handleClick('/updaterooms')}> UPDATE ROOM </MenuItem>
          <MenuItem value={30} onClick={() => handleClick('/deleterooms')}> DELETE ROOM </MenuItem>
          <MenuItem value={40}  onClick={() => handleClick('/listrooms')}>LIST ROOM</MenuItem>
        </Select>
      </FormControl>
      </Container>

      {/* <Dining/> */}

      
    </div>
  );
};

export default Services;