import React from 'react'
import Header from '../Header'
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';

const styles = {
  root: {
    padding: '16px',
  },
  header: {
    marginBottom: '16px',
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '8px',
  },
  item: {
    marginBottom: '16px',
  },
};

const AdminBillings = () => {
  // Sample data for the receipt
  const receiptData = {
    date: '2023-07-26',
    items: [
      { name: 'Item 1', price: 10 },
      { name: 'Item 2', price: 20 },
      { name: 'Item 3', price: 15 },
    ],
    total: 45,
  };

  return (
    <div>

    <Header />
    <Container maxWidth="sm"> {/* Wrap the content in a container */}
      <Paper style={styles.root}>
        <Typography variant="h5" style={styles.header}>
          Receipt
        </Typography>
        <div style={styles.item}>
          <Typography variant="subtitle1">Date: {receiptData.date}</Typography>
        </div>
        <div style={styles.item}>
          <Typography variant="h6">Items:</Typography>
          {receiptData.items.map((item, index) => (
            <div key={index}>
              <Typography variant="body1">
                {item.name} - ${item.price}
              </Typography>
            </div>
          ))}
        </div>
        <div style={styles.item}>
          <Typography variant="h6">Total: ${receiptData.total}</Typography>
        </div>
      </Paper>
    </Container>
    </div>
  );
};

export default AdminBillings
