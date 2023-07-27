import React from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Header from '../Header';
import { Navigate, useNavigate } from 'react-router-dom';

const Bookings = () => {
  // Sample data for the table (Replace this with your actual data)
  const tableData = [
    { id: 1, user: 'John Doe', room: 'Room 101' },
    { id: 2, user: 'Jane Smith', room: 'Room 202' },
    // Add more data as needed
  ];

  const handleDeleteClick = () => {
    // Handle delete button click logic here
    navigate('/deleteRoom');
    console.log('Delete button clicked!');
  };

  const handleAddRoom = () => {
    // Handle delete button click logic here
    navigate('/addRoom');
    console.log('Add button clicked!');
  };
  const handleUpdateRoom = () => {
    // Handle delete button click logic here
    navigate('/updateRoom');
    console.log('Update button clicked!');
  };

  const navigate = useNavigate('');

  return (
    <div>

      <Header />
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '16px' }}>
      <TableContainer component={Paper}>
        <Table style={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 'bold' }}>User</TableCell>
              <TableCell style={{ fontWeight: 'bold' }}>Room</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>
                Add
              </TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>
                Update
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.user}</TableCell>
                <TableCell>{row.room}</TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="primary" size="small" onClick={handleAddRoom}>
                    Add
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button variant="contained" color="secondary" size="small" onClick={handleUpdateRoom}>
                    Update
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="error" style={{ float: 'right', marginTop: '16px' }} onClick={handleDeleteClick}>
        Delete
      </Button>
    </div>
            </div>
  );
};

export default Bookings;
