import { Paper, TextField, Button, InputLabel } from '@mui/material';
import React, { useState } from 'react';

const AddRoom = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numOfGuests, setNumOfGuests] = useState('');

  const paperStyle = {
    padding: 70,
    height: '90vh',
    width: 450,
    margin: '100px auto',
    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform booking logic with the form details
    alert('Room Booked!');
  };

  return (
    <div>
      <Paper elevation={10} style={paperStyle}>
        <form onSubmit={handleSubmit} style={{ marginTop: 'auto', marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '10px' }}>Room Booking</h2>
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
            <InputLabel htmlFor="email" style={{ textAlign : 'left' }}>Email:</InputLabel>
            <TextField
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{  marginBottom: '20px' , width:'200px'}}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="checkInDate" style={{ textAlign : 'left' }}>Check-in Date:</InputLabel>
            <TextField
              id="checkInDate"
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              style={{  marginBottom: '20px', width:'200px' }}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="checkOutDate" style={{ textAlign : 'left' }}>Check-out Date:</InputLabel>
            <TextField
              id="checkOutDate"
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              style={{  marginBottom: '20px', width:'200px' }}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="numOfGuests" style={{ textAlign : 'left' }}>Number of Guests:</InputLabel>
            <TextField
              id="numOfGuests"
              type="number"
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(e.target.value)}
              style={{  marginBottom: '20px' , width:'200px'}}
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary"  style={{  width:'200px'}}>
            Book Room
          </Button>
        </form>
      </Paper>
    </div>
  );
};



export default AddRoom;
