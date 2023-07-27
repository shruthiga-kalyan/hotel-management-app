import React from 'react'
import Navigator from '../Navigator'
import Header from '../Header'
import { useState } from 'react';
import { Paper, TextField, Button, InputLabel } from '@mui/material';


const paperStyle = {
  padding: 70,
  height: '90vh',
  width: 450,
  margin: '100px auto',
  
};

const handleSubmit = (e) => {
  e.preventDefault();
  // Perform booking logic with the form details
  alert('Service Booked!');
};


const AdminServices = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [service, setService] = useState('');
  const [numOfGuests, setNumOfGuests] = useState('');

  return (
    <div>
      <Header/>
      {/* <Navigator/> */}
      <Paper elevation={10} style={paperStyle}>
        <form onSubmit={handleSubmit} style={{ marginTop: 'auto', marginBottom: '20px' }}>
          <h2 style={{ marginBottom: '10px' }}>Services</h2>
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
            <InputLabel htmlFor="checkInDate" style={{ textAlign : 'left' }}>Date:</InputLabel>
            <TextField
              id="Date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{  marginBottom: '20px', width:'200px' }}
              required
            />
          </div>
          <div>
            <InputLabel htmlFor="checkOutDate" style={{ textAlign : 'left' }}>Service:</InputLabel>
            <TextField
              id="service"
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
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
            Book Service
          </Button>
        </form>
      </Paper>
    </div>
    
  )
}

export default AdminServices
