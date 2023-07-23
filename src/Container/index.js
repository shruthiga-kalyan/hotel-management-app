import React from 'react';
// import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@mui/material';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SignIn from '../Component/SignIn'
import SignUp from '../Component/SignUp'



function SignInOutContainer() {

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }


    return (
        <Paper Square>

            <Tabs value={value} onChange={handleChange} centered>
                <Tab label="SignIn" />
                <Tab label="SignUp" />

            </Tabs>

            <TabPanel value={value} index={0}>
                <SignIn/>
            </TabPanel>

            <TabPanel value={value} index={1}>
            <SignUp/>
            </TabPanel>



        </Paper>
    );
}   

export  default SignInOutContainer;