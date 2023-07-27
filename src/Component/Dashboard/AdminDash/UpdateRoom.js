import { Paper, TextField, Button, InputLabel } from '@mui/material';
import React, { useState } from 'react';

const UpdateRoom = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('');  
  const [numOfGuests, setNumOfGuests] = useState('');

  const paperStyle = {
    padding: 70,
    height: '70vh',
    width: 450,
    margin: '100px auto',
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic with the form details
    alert('Room Updated!');
  };

  return (
    <div>
      <Paper elevation={10} style={paperStyle}>
        <form onSubmit={handleSubmit} style={{ marginTop: 'auto', marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '10px' }}>Update Room Details</h2><br/><br/>
          <div>
            <InputLabel htmlFor="name" style={{ textAlign : 'left' }}>Name:</InputLabel>
            <TextField
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{  marginBottom: '20px' , width:'200px'}}
              required
            />
          </div>
          
          
          <div>
            <InputLabel htmlFor="numOfGuests" style={{ textAlign : 'left' }}> Change Number of Guests:</InputLabel>
            <TextField
              id="numOfGuests"
              type="number"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              style={{  marginBottom: '20px' , width:'200px'}}
              required
            />
          </div>

          
          <div>
            <InputLabel htmlFor="numOfGuests" style={{ textAlign : 'left' }}> Change Room Type:</InputLabel>
            <TextField
              id="numOfGuests"
              type="String "
              value={type}
              onChange={(e) => setType(e.target.value)}
              style={{  marginBottom: '20px' , width:'200px'}}
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary"  style={{  width:'200px'}}>
              UPDATE
          </Button>
        </form>
      </Paper>
    </div>
  );
};



export default UpdateRoom;
