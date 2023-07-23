import React from 'react';
import { Paper, Typography, TextField, Button } from '@mui/material';

const Contact = () => {
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: '500px',
    margin: '150px auto',
  };

  const [formStatus, setFormStatus] = React.useState('Send');

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  return (
    <div className="container mt-5">
      {/* <Paper elevation={10} style={paperStyle}>
        <Typography variant="h5" component="h2" gutterBottom>
          CONTACT US
        </Typography>
        <form onSubmit={onSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            id="name"
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            id="email"
          />
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            margin="normal"
            required
            id="message"
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            color="primary"
            style={{ marginTop: '20px' }}
          >
            {formStatus}
          </Button>
        </form>
      </Paper> */}

      
    </div>
  );
};

export default Contact;
