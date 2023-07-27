// import * as React from 'react';
// import { Field, Form, FormSpy } from 'react-final-form';
// import Box from '@mui/material/Box';
// import Link from '@mui/material/Link';


// import Typography from './Typography';
// import AppFooter from './Views/AppFooter';
// import AppAppBar from './Views/AppAppBar';
// import AppForm from './Views/AppForm';
// import {email,required} from './Forms/Validation';
// import RFTextField from './Forms/RFTextField';
// import FormButton from './Forms/FormButton';
// import FormFeedback from './Forms/FormFeedback';
// import withRoot from './withRoot';
// import { useNavigate } from 'react-router-dom';
// import {useDispatch} from 'react-redux';
// import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// // import Cookies from 'js-cookie';
// import {useState} from 'react';




// function SignIn() {
//   const [sent, setSent] = React.useState(false);
//   const [emailState, setEmailState] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate=useNavigate();
//   const dispatch=useDispatch();
//   const clientID="330783812474-jgbb0qe73u54dodafvueegipofkpsv1g.apps.googleusercontent.com";

//   const validate = (values) => {
//     const errors = required(['email', 'password'], values);

//     if (!errors.email) {
//       const emailError = email(values.email);
//       if (emailError) {
//         errors.email = emailError;
//       }
//     }

//     return errors;
//   };

  


//   const handleSubmit = async(e) => {
    
//     const user={
//       name:'John Doe',
//     }


//     // dispatch({type:"SIGN_IN",payload:user})


//     try {
//       const auth=getAuth();
//       await signInWithEmailAndPassword(auth, emailState, password);
//       // Cookies.set('Id', email);
//       navigate('/home');
//     } catch (e) {
//       // setError(e.message);
//     }
//   };

//   const signInWithGoogle = async () => {
//     const auth = getAuth();
//     const provider = new GoogleAuthProvider();

//     try {
//       const result = await signInWithPopup(auth, provider);
//       navigate('/paperbase');

      
//       // const user = result.user;
//       // You can access the user's information like user.displayName, user.email, etc.
//       // Cookies.set('Id', user.email);
      
//     } catch (e) {
//       // setError(e.message);
//     }
//     setSent(true);


//   };

//   return (
//     <React.Fragment>
//       <AppAppBar />
//       <AppForm>
//         <div id="signInButton">
         
//         </div>
//         <React.Fragment>
//           <Typography variant="h3" gutterBottom marked="center" align="center">
//             Sign In
//           </Typography>
//           <Typography variant="body2" align="center">
//             {'Not a member yet? '}
//             <Link
//               href="/signup"
//               align="center"
//               underline="always"
//             >
//               Sign Up here
//             </Link>
//           </Typography>
//         </React.Fragment>
//         <Form
//           onSubmit={handleSubmit}
//           subscription={{ submitting: true }}
//           validate={validate}
//         >
//           {({ handleSubmit: handleSubmit2, submitting }) => (
//             <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
//               <Field
//                 autoComplete="email"
//                 autoFocus
//                 component={RFTextField}
                
//                 value={emailState}
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 name="email"
//                 required
//                 size="large"
//               />
//               <Field
//                 fullWidth
//                 size="large"
//                 component={RFTextField}
                
//                 required
//                 name="password"
//                 autoComplete="current-password"
//                 label="Password"
//                 type="password"
//                 margin="normal"
//               />
//               <FormSpy subscription={{ submitError: true }}>
//                 {({ submitError }) =>
//                   submitError ? (
//                     <FormFeedback error sx={{ mt: 2 }}>
//                       {submitError}
//                     </FormFeedback>
//                   ) : null
//                 }
//               </FormSpy>
//               <FormButton
//                 sx={{ mt: 3, mb: 2 }}
               
//                 size="large"
//                 color="secondary"
//                 fullWidth
//               >
//                 { 'Sign In'}
//               </FormButton>
//             </Box>
//           )}
//         </Form>
//         <Typography align="center">
//           <Link underline="always" >
//             Forgot password?
//           </Link>
//         </Typography>

//       </AppForm>
//       <AppFooter />
//     </React.Fragment>
//   );
// }

// export default withRoot(SignIn);

import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from './Typography';
import AppFooter from './Views/AppFooter';
import AppAppBar from './Views/AppAppBar';
import AppForm from './Views/AppForm';
import { email, required } from './Forms/Validation';
import RFTextField from './Forms/RFTextField';
import FormButton from './Forms/FormButton';
import FormFeedback from './Forms/FormFeedback';
import withRoot from './withRoot';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import axios from 'axios';

function SignIn() {
  const [sent, setSent] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clientID = "330783812474-jgbb0qe73u54dodafvueegipofkpsv1g.apps.googleusercontent.com";
  const firstname='J'

  const validate = (values) => {
    const errors = required(['email', 'password'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    const { email, password } = values;

   

    try {
      await signInWithEmailAndPassword(getAuth(), email, password);
      const response = await axios.post('http://127.0.0.1:8181/api/v1/auth/authenticate', {
        email,
        password,
        });
        
console.log(email,password);
let token = response.data.token;
let firstname = response.data.userResponse;
localStorage.setItem('token', token);
localStorage.setItem('firstName', JSON.stringify(firstname))
      navigate('/paperbase');
    } catch (e) {
      // Handle error here if needed
    }
  };

  const signInWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      navigate('/paperbase');
    } catch (e) {
      // Handle error here if needed
    }
    setSent(true);
  };

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <div id="signInButton"></div>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link href="/signup" align="center" underline="always">
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                size="large"
                color="secondary"
                fullWidth
              >
                {'Sign In'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always">Forgot password?</Link>
        </Typography>
      </AppForm>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
