import { Grid, Paper, TextField, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Avatar } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

const SignUp = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 290,
    margin: " 20px auto"
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");

  useEffect(() => {
    validatePassword();
    validateEmail();
    validateMobile();
  }, [password, confirmPassword, email, mobile]);

  const validatePassword = () => {
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const validateEmail = () => {
    // Email validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const validateMobile = () => {
    // Mobile validation logic
    if (mobile.length !== 10 || isNaN(mobile)) {
      setMobileError("Invalid mobile number");
    } else {
      setMobileError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form submission or further actions
    // based on the validation status
    if (passwordError || emailError || mobileError) {
      console.log("Form has errors");
      return;
    }

    // Continue with form submission
    console.log("Form submitted successfully");
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={{ marginBottom: "10px" }}>S</Avatar>
          <Typography style={{ marginBottom: "30px" }}>
            Sign Up<br />
            Kindly fill the form
          </Typography>
        </Grid>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            placeholder="Enter Username"
            style={{ marginBottom: "10px" }}
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="New Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            style={{ marginBottom: "10px" }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextField
            label="Re-enter Password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
            style={{ marginBottom: "10px" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {passwordError && (
            <Typography color="error">{passwordError}</Typography>
          )}
          <TextField
            label="Email"
            placeholder="Enter email"
            type="email"
            fullWidth
            required
            style={{ marginBottom: "10px" }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <Typography color="error">{emailError}</Typography>}
          <TextField
            label="Mobile"
            placeholder="Enter mobile"
            type="number"
            fullWidth
            required
            style={{ marginBottom: "10px" }}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          {mobileError && (
            <Typography color="error">{mobileError}</Typography>
          )}
          <FormControlLabel
            required
            control={<Checkbox />}
            label="Agree To Terms and Conditions"
          />
          <br />
          <Button
            type="submit"
            color="primary"
            fullWidth
            variant="contained"
            style={{ marginBottom: "20px" }}
          >
            SIGN UP
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default SignUp;
