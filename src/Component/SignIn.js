import { Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Avatar } from "@mui/material";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
 import Button from '@mui/material/Button';
 import Link from '@mui/material/Link';


    
const SignIn=()=>{
    const paperStyle={
                        padding:20,
                        height:"70vh",
                        width:290,
                        margin:" 20px auto"
    }

    const btwStyle={   margin:"8px 0"    }
    return(

        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center' >

                <Avatar style={{marginBottom:"10px"}}>S</Avatar>
                <Typography style={{marginBottom:"30px"}}>

                Sign In
                </Typography>
                </Grid>

                <TextField label="Username" placeholder="Enter Username"  style={{marginBottom:"30px"}} fullWidth/>
                <TextField label="Password" placeholder="Enter Password" type="password" fullWidth required style={{marginBottom:"10px"}}/>
                <FormControlLabel required control={<Checkbox />} label="Agree To Terms and Conditions" />
                <br/>
                <Button type="submit" color="primary" fullWidth variant="contained" style={{marginBottom:"20px"}}>
                    SIGN IN
                </Button>
                
                <Typography>
                    <Link href="#" style={btwStyle}>Forgot Password</Link>
                </Typography>
                <Typography>
                    <Link href="#"  style={btwStyle}>Don't have account? Sign Up</Link>
                </Typography>
                

            </Paper>

        </Grid>
        
    );
}
export default SignIn;