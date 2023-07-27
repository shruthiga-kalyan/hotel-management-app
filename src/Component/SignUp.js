// // //  import { useRef, useState, useEffect } from "react";
// // // import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
// // // import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // // import axios from './Axios/axios'


// // // const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// // // const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// // // const REGISTER_URL = '/register';

// // // const SignUp = () => {
// // //     const userRef = useRef();
// // //     const errRef = useRef();

// // //     const [user, setUser] = useState('');
// // //     const [validName, setValidName] = useState(false);
// // //     const [userFocus, setUserFocus] = useState(false);

// // //     const [pwd, setPwd] = useState('');
// // //     const [validPwd, setValidPwd] = useState(false);
// // //     const [pwdFocus, setPwdFocus] = useState(false);

// // //     const [matchPwd, setMatchPwd] = useState('');
// // //     const [validMatch, setValidMatch] = useState(false);
// // //     const [matchFocus, setMatchFocus] = useState(false);

// // //     const [errMsg, setErrMsg] = useState('');
// // //     const [success, setSuccess] = useState(false);

// // //     useEffect(() => {
// // //         userRef.current.focus();
// // //     }, [])

// // //     useEffect(() => {
// // //         setValidName(USER_REGEX.test(user));
// // //     }, [user])

// // //     useEffect(() => {
// // //         setValidPwd(PWD_REGEX.test(pwd));
// // //         setValidMatch(pwd === matchPwd);
// // //     }, [pwd, matchPwd])

// // //     useEffect(() => {
// // //         setErrMsg('');
// // //     }, [user, pwd, matchPwd])

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         // if button enabled with JS hack
// // //         const v1 = USER_REGEX.test(user);
// // //         const v2 = PWD_REGEX.test(pwd);
// // //         if (!v1 || !v2) {
// // //             setErrMsg("Invalid Entry");
// // //             return;
// // //         }
// // //         try {
// // //             const response = await axios.post(REGISTER_URL,
// // //                 JSON.stringify({ user, pwd }),
// // //                 {
// // //                     headers: { 'Content-Type': 'application/json' },
// // //                     withCredentials: true
// // //                 }
// // //             );
// // //             console.log(response?.data);
// // //             console.log(response?.accessToken);
// // //             console.log(JSON.stringify(response))
// // //             setSuccess(true);
// // //             //clear state and controlled inputs
// // //             //need value attrib on inputs for this
// // //             setUser('');
// // //             setPwd('');
// // //             setMatchPwd('');
// // //         } catch (err) {
// // //             if (!err?.response) {
// // //                 setErrMsg('No Server Response');
// // //             } else if (err.response?.status === 409) {
// // //                 setErrMsg('Username Taken');
// // //             } else {
// // //                 setErrMsg('Registration Failed')
// // //             }
// // //             errRef.current.focus();
// // //         }
// // //     }

// // //     return (
// // //         <>
// // //             {success ? (
// // //                 <section>
// // //                     <h1>Success!</h1>
// // //                     <p>
// // //                         <a href="#">Sign In</a>
// // //                     </p>
// // //                 </section>
// // //             ) : (
// // //                 <section>
// // //                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
// // //                     <h1>Register</h1>
// // //                     <form onSubmit={handleSubmit}>
// // //                         <label htmlFor="username">
// // //                             Username:
// // //                             <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
// // //                             <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
// // //                         </label>
// // //                         <input
// // //                             type="text"
// // //                             id="username"
// // //                             ref={userRef}
// // //                             autoComplete="off"
// // //                             onChange={(e) => setUser(e.target.value)}
// // //                             value={user}
// // //                             required
// // //                             aria-invalid={validName ? "false" : "true"}
// // //                             aria-describedby="uidnote"
// // //                             onFocus={() => setUserFocus(true)}
// // //                             onBlur={() => setUserFocus(false)}
// // //                         />
// // //                         <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
// // //                             <FontAwesomeIcon icon={faInfoCircle} />
// // //                             4 to 24 characters.<br />
// // //                             Must begin with a letter.<br />
// // //                             Letters, numbers, underscores, hyphens allowed.
// // //                         </p>


// // //                         <label htmlFor="password">
// // //                             Password:
// // //                             <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
// // //                             <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
// // //                         </label>
// // //                         <input
// // //                             type="password"
// // //                             id="password"
// // //                             onChange={(e) => setPwd(e.target.value)}
// // //                             value={pwd}
// // //                             required
// // //                             aria-invalid={validPwd ? "false" : "true"}
// // //                             aria-describedby="pwdnote"
// // //                             onFocus={() => setPwdFocus(true)}
// // //                             onBlur={() => setPwdFocus(false)}
// // //                         />
// // //                         <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
// // //                             <FontAwesomeIcon icon={faInfoCircle} />
// // //                             8 to 24 characters.<br />
// // //                             Must include uppercase and lowercase letters, a number and a special character.<br />
// // //                             Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
// // //                         </p>


// // //                         <label htmlFor="confirm_pwd">
// // //                             Confirm Password:
// // //                             <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
// // //                             <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
// // //                         </label>
// // //                         <input
// // //                             type="password"
// // //                             id="confirm_pwd"
// // //                             onChange={(e) => setMatchPwd(e.target.value)}
// // //                             value={matchPwd}
// // //                             required
// // //                             aria-invalid={validMatch ? "false" : "true"}
// // //                             aria-describedby="confirmnote"
// // //                             onFocus={() => setMatchFocus(true)}
// // //                             onBlur={() => setMatchFocus(false)}
// // //                         />
// // //                         <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
// // //                             <FontAwesomeIcon icon={faInfoCircle} />
// // //                             Must match the first password input field.
// // //                         </p>

// // //                         <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
// // //                     </form>
// // //                     <p>
// // //                         Already registered?<br />
// // //                         <span className="line">
// // //                             {/*put router link here*/}
// // //                             <a href="#">Sign In</a>
// // //                         </span>
// // //                     </p>
// // //                 </section>
// // //             )}
// // //         </>
// // //     )
// // // }

// // // export default SignUp
// // // 


// // // import React, { useState } from 'react';
// // // import validator from 'validator';
// // // import RFTextField from './Forms/RFTextField';
// // // import axios from 'axios';
// // // import './logi.css';
// // // import { Link } from 'react-router-dom';
// // // import Typography from './Typography';
// // // import { Paper } from '@mui/material';
// // // import AppAppBar from './Views/AppAppBar';

// // // const SignUp = ({ onFormSwitch }) => {
// // //   const [email, setEmail] = useState('');
// // //   const [password, setPassword] = useState('');
// // //   const [fname, setFName] = useState('');
// // //   const [lname, setLName] = useState('');

// // //   const [errors, setErrors] = useState({});
// // //   const [registrationStatus, setRegistrationStatus] = useState('');

// // //   const validateForm = () => {
// // //     // Validation logic


// // //     let formErrors = {};

// // //     if (!email) {
// // //       formErrors.email = '*Email is required';
// // //     } else if (!validator.isEmail(email)) {
// // //       formErrors.email = '*Invalid email format';
// // //     }

// // //     if (!password) {
// // //       formErrors.password = '*Password is required';
// // //     } else if (password.length < 8) {
// // //       formErrors.password = '*Password should be at least 8 characters long';
// // //     } else if (
// // //       !validator.matches(
// // //         password,
// // //         /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]+$/,
// // //       )
// // //     ) {
// // //       formErrors.password =
// // //         '*Password should contain at least one uppercase letter, one lowercase letter, one number, and one special character';
// // //     }

// // //     if (!fname) {
// // //       formErrors.fname = '*Name is required';
// // //     } else if (!validator.matches(fname, /^[a-zA-Z\s]+$/)) {
// // //       formErrors.fname = '*Name can only contain letters and spaces';
// // //     } else if (fname.length < 3 || fname.length > 50) {
// // //       formErrors.fname = '*Name should be between 3 and 50 characters';
// // //     }

// // //     if (!lname) {
// // //       formErrors.lname = '*Name is required';
// // //     } else if (!validator.matches(fname, /^[a-zA-Z\s]+$/)) {
// // //       formErrors.lname = '*Name can only contain letters and spaces';
// // //     } else if (lname.length < 3 || lname.length > 50) {
// // //       formErrors.lname = '*Name should be between 3 and 50 characters';
// // //     }

    

// // //     setErrors(formErrors);

// // //     return Object.keys(formErrors).length === 0;

    
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     if (validateForm()) {
// // //       try {
// // //         const registrationData = {
// // //           fname,
// // //           lname,
// // //           email,
// // //           password,
// // //         };

// // //         // const response = await axios.post('', registrationData);
// // //         const response=axios.post('/user/userAdd', registrationData)
// // //         .then(res => {
// // //           console.log(res);
// // //           console.log(res.data);
// // //         })
// // //         setRegistrationStatus(response.data);

// // //         setEmail('');
// // //         setPassword('');
// // //         setFName('');
// // //         setLName('');
// // //         console.log(registrationData)

// // //         setErrors({});
// // //       } catch (error) {
// // //         console.error('Registration error:', error);
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <AppAppBar />

// // //       <div style={{ textAlign: 'center', backgroundColor: 'lightGreen', marginBottom: '2rem', font: 'Roboto Condensed' }}>
// // //         {registrationStatus}
// // //       </div>
// // //       <div className="uth-form">
// // //         <Paper>
// // //           <h2>
// // //             <Typography  gutterBottom marked="center" align="center" style={{ fontWeight: '700' }}>
// // //               CREATE ACCOUNT
// // //             </Typography>
// // //           </h2>
// // //           <form className="register-form"  >
// // //             <label >Full Name</label>
// // //             <input
// // //               value={fname}
// // //               onChange={(e) => setFName(e.target.value)}
// // //               type="text"
// // //               placeholder="Enter first name"
// // //               id="fname"
// // //               name="fname"
// // //             //   component={RFTextField}

// // //             />
// // //             {errors.fname && <div className="error">{errors.fname}</div>}
// // //             <label >Enter Last Name</label>
// // //             <input
// // //               value={lname}
// // //               onChange={(e) => setLName(e.target.value)}
// // //               type="text"
// // //               placeholder="Enter last name"
// // //               id="lname"
// // //               name="lname"
// // //             //   component={RFTextField}
// // //             />
// // //             {errors.name && <div className="error">{errors.name}</div>}
// // //             <label >Email</label>
// // //             <input
// // //               value={email}
// // //               onChange={(e) => setEmail(e.target.value)}
// // //               type="email"
// // //               placeholder="Enter email id"
// // //               id="email"
// // //               name="email"
// // //             //   component={RFTextField}
// // //             />
// // //             {errors.email && <div className="error">{errors.email}</div>}

// // //             <label>Password</label>
// // //             <input
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               type="password"
// // //               placeholder="Enter password"
// // //               id="password"
// // //               name="password"
// // //             //   component={RFTextField}
// // //             />
// // //             {errors.password && <div className="error">{errors.password}</div>}


// // //             {/* Type of service field (conditionally rendered for technician) */}
// // //             <button type="submit" style={{ backgroundColor: '#FF3366' }}onClick={handleSubmit}>
// // //               Create
// // //             </button>

// // //           </form>
// // //           <Typography align="center">
// // //             Have an account?{' '}
// // //             <Link to="/login" className="link-btn">
// // //               Login
// // //             </Link>
// // //           </Typography>
// // //         </Paper>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default SignUp;


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Link from '@mui/material/Link';
// import { Field, Form, FormSpy } from 'react-final-form'; // Import Field from react-final-form
// import AppFooter from './Views/AppFooter';
// import FormButton from './Forms/FormButton';
// import { email, required } from './Forms/Validation';
// import Typography from './Typography';
// import AppForm from './Views/AppForm';
// import FormFeedback from './Forms/FormFeedback';
// import RFTextField from './Forms/RFTextField';
// import AppAppBar from './Views/AppAppBar';
// import withRoot from './withRoot';
// import axios from 'axios';
// import { useState } from 'react';
// // import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const[firstName,setFirstName]= useState('');
//   const[lastName,setLastName]= useState('');
//   const navigate=useNavigate();
  
//   const [errors, setErrors] = useState({});
 
//   const [registrationStatus, setRegistrationStatus] = useState('');
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//   });


//   const REGISTER_URL = '/user/addUser';
//   const [sent, setSent] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     // e.preventDefault();
//     // try {
//     //   axios.post(REGISTER_URL, formData);
      
//     //   setEmail('');
//     //   setPassword('');
//     //   setFirstName('');
//     //   setLastName('');        
//     //   setErrors({});
      
//       // console.log(formData);
      
//     // } catch (error) {
//     //   console.error('Registration Failed:', error);
//     // }

//     try{
    
//       await createUserWithEmailAndPassword(getAuth(), formData.email, formData.password);
//       navigate('/signin');
//   }
//   catch(e){
//       console.log(e.message);
//   }
//     // navigate('/signin');
//   };

//   return (
//     <React.Fragment>
//       <AppAppBar />
//       <AppForm>
//         <React.Fragment>
//           <Typography variant="h3" gutterBottom marked="center" align="center">
//             Sign Up
//           </Typography>
//           <Typography variant="body2" align="center">
//             <Link href="/signin" underline="always">
//               Already have an account?
//             </Link>
//           </Typography>
//         </React.Fragment>
//         <Form onSubmit={handleSubmit} subscription={{ submitting: true }}>
//           {({ handleSubmit: handleSubmit2, submitting }) => (
//             <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Field // Use Field component from react-final-form
//                     autoFocus
//                     component={RFTextField} // Pass RFTextField component as the component prop
//                     disabled={submitting || sent}
//                     autoComplete="given-name"
//                     fullWidth
//                     label="First name"
//                     name="firstName"
//                     value={formData.firstName}
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Field // Use Field component from react-final-form
//                     component={RFTextField} // Pass RFTextField component as the component prop
//                     disabled={submitting || sent}
//                     autoComplete="family-name"
//                     fullWidth
//                     label="Last name"
//                     name="lastName"
//                     required
//                     value={formData.lastName}
//                   />
//                 </Grid>
//               </Grid>
//               <Field // Use Field component from react-final-form
//                 autoComplete="email"
//                 component={RFTextField} // Pass RFTextField component as the component prop
//                 disabled={submitting || sent}
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 name="email"
//                 value={formData.email}
//                 required
//               />
//               <Field // Use Field component from react-final-form
//                 fullWidth
//                 component={RFTextField} // Pass RFTextField component as the component prop
//                 disabled={submitting || sent}
//                 required
//                 name="password"
//                 autoComplete="new-password"
//                 label="Password"
//                 type="password"
//                 margin="normal"
//                 value={formData.password}
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
//               <FormButton sx={{ mt: 3, mb: 2 }} disabled={submitting || sent} color="secondary" fullWidth>
                
//                 {submitting || sent ? 'In progress…' : 'Sign Up'}
//               </FormButton>
//             </Box>
//           )}
//         </Form>
//       </AppForm>
//       <AppFooter />
//     </React.Fragment>
//   );
// };



// export default withRoot(SignUp);


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { TextField } from '@mui/material';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import AppAppBar from './Views/AppAppBar';
import './Signup.css'
import axios from 'axios';
// import logo from "./logo.jpeg"
import { useDispatch } from 'react-redux';
const Signup = () => {

    const[user,setUser]=useState('');
    const[firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword]=useState('');
    const [value, setValue] = React.useState(null);
    const [error, setError] = useState('');

    // const[gender,setGender]=useState('');

    const navigate=useNavigate();
    const dispatch = useDispatch();

    const createAccount = async () =>
    {
        try{
            if(password !== confirmPassword){
                setError('Password and Confirm Password do not match');
                return;
            }
            const value={
                email:email,
                firstName:firstName,
                lastName:lastName,
                password:password,

            }


            axios.post("http://localhost:8181/api/v1/auth/register",value)
            .catch((error)=>{
                console.log(error);
            })
            
            await createUserWithEmailAndPassword(getAuth(), email, password);

            const user={
                name:firstName+' '+lastName,
              }
          
          
              dispatch({type:"SIGN_UP",payload:user})
            navigate('/signin');
        }
        catch(e){
            setError(e.message);
        }
    }

    return (
        <div>
        <div className='Top'>
        
        <AppAppBar />
        <div class="right">
            <div className='outer-box'>
            {error && <p className="error">{error}</p>}
                <div className='inner-box'>
                    <div className='header'>Sign Up</div>

                    <div className='userName'>
                    <input placeholder='Enter your First Name' type='text' value={firstName}
                    onChange={e=>setFirstName(e.target.value)} required>
                    </input>
                    </div>

                    <div className='userName'>
                    <input placeholder='Enter your Last Name' type='text' value={lastName}
                    onChange={e=>setLastName(e.target.value)} required>
                    </input>
                    </div>
                    
                    <div className='email'>
                    <input type='email' placeholder='Enter your Email Address' value={email}
                    onChange={e=>setEmail(e.target.value)} required>
                    </input>
                    </div>

                    <div className='password'>
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} 
                        required
                        />
                    </div>

                    <div className='con-password'>
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)} 
                        required
                        />
                    </div>

                    
                   

                    <div className='sign-in'>
                        <Button id='login-button' variant="contained" onClick={createAccount}>Sign Up</Button>
                    </div>

                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default Signup;