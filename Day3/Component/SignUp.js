import React, { useState, useRef, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form, FormSpy } from 'react-final-form';
import Typography from './Typography';
import AppFooter from './Views/AppFooter';
import AppAppBar from './Views/AppAppBar';
import AppForm from './Views/AppForm';
import RFTextField from './Forms/RFTextField';
import FormButton from './Forms/FormButton';
import FormFeedback from './Forms/FormFeedback';
import withRoot from './withRoot';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const FIRSTNAME_REGEX = /^[A-Za-z][A-Za-z0-9-_]{3,23}$/;
const EMAIL_REGEX = /^[A-Za-z][A-Za-z0-9-_]+@[A-Za-z0-9]+(\.[A-Za-z]{2,})+$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const REGISTER_URL = '/user/userAdd';
// ...
const REGISTER_URL = 'http://localhost:8081/user/userAdd';
// ...


const SignUp = () => {
  const userRef = useRef();
  const [user, setUser] = useState('');
  const [validFirstName, setValidFirstName] = useState(false);
  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',  
    firstname: '',
    lastname: '',
    password: '',
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidFirstName(FIRSTNAME_REGEX.test(user));
  }, [user]);

  useEffect(() => {
    setPassword(PASSWORD_REGEX.test(password));
  }, [password]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  const handleSubmit = async (values) => {
    const { firstName, lastName, email, password } = values;
    console.log(values);
    // Perform any client-side validation if needed
    if (!validFirstName || !validPassword || !validEmail) {
      setErrMsg('Please fill in valid data.');
      return;
    }

    const value={
      email:data.email,  
      firstname:data.firstname,
      lastname:data.lastname,  
      password:data.password
    }
    try {
      // Send the data to the backend API
      const response = await axios.post(REGISTER_URL, value);
      console.log(response.data);
      // Handle successful registration (e.g., show success message, navigate to another page)
      setSuccess(true);
      navigate("/signin"); // Redirect to sign-in page
    } catch (error) {
      // Handle error (e.g., show error message)
      setErrMsg('An error occurred during registration.');
    }
  };

  setData({
    email: '',
    firstname: '',
    lastname: '',
    password: ''
  });

  const validateForm = (values) => {
    const errors = {};
    if (!FIRSTNAME_REGEX.test(values.firstName)) {
      errors.firstName = 'Invalid First Name';
    }
    if (!EMAIL_REGEX.test(values.email)) {
      errors.email = 'Invalid Email';
    }
    if (!PASSWORD_REGEX.test(values.password)) {
      errors.password = 'Invalid Password';
    }
    return errors;
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/premium-themes/onepirate/sign-in/" underline="always">
              Already have an account?
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          validate={validateForm}
          subscription={{ submitting: true, submitError: true }}
        >
          {({ handleSubmit: handleSubmit2, submitting, submitError }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    disabled={submitting}
                    autoComplete="given-name"
                    fullWidth
                    label="First name"
                    name="firstName"
                    required
                    inputRef={userRef}
                    value={data.firstname}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    component={RFTextField}
                    disabled={submitting}
                    autoComplete="family-name"
                    fullWidth
                    label="Last name"
                    name="lastName"
                    required
                    value={data.lastName}
                    inputRef={userRef}
                  />
                </Grid>
              </Grid>
              <Field
                autoComplete="email"
                component={RFTextField}
                disabled={submitting}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                value={data.email}
                inputRef={userRef}
              />
              <Field
                fullWidth
                component={RFTextField}
                disabled={submitting}
                required
                name="password"
                autoComplete="new-password"
                label="Password"
                type="password"
                margin="normal"
                value={data.password}
                inputRef={userRef}
              />
              {errMsg && (
                <FormFeedback error sx={{ mt: 2 }}>
                  {errMsg}
                </FormFeedback>
              )}
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                type="submit"
                disabled={submitting}
                color="secondary"
                fullWidth
                inputRef={userRef}
              >
                {submitting ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
};

export default withRoot(SignUp);
