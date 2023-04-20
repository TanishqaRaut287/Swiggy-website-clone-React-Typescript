import { useState, useCallback, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";

import { images } from '../../utils/constants/images';
import LoginButton from '../Buttons/LoginButton';
import SignUpButton from '../Buttons/SignUpButton';
import SearchBar from '../SearchBar/SearchBar';

const names = ['Hungry?', 'Cooking gone wrong?', 'Movie marathon?', 'Game night?', 'Unexpected guests?', 'Late night at office?']

const cities = ['Ahmedabad', 'Bangalore', 'Chennai', 'Delhi', 'Gurgaon', 'Hyderabad', 'Kolkata', 'Mumbai', 'Pune', '& more']

const Form = () => {
    const [newName, setnewName] = useState("");

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * names.length);
        setnewName(names[index]);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 2000);
        return () => clearInterval(intervalID);
    }, [shuffle])

    return (
        <div>


            <Box >

                <Grid container>

                    <Grid item xs={6}>
                        <img height="40px" width="140px" style={{ marginTop: "60px", marginLeft: "100px" }} src={images.logo} alt={"Swiggy"} />
                    </Grid>

                    <Grid item xs={6}>
                        <LoginButton>Login</LoginButton>
                        <SignUpButton>Sign up</SignUpButton>
                    </Grid>

                </Grid>

                <Box sx={{ float: "right", marginRight: "60px", marginTop: "60px" }}>
                    <Typography sx={{
                        fontFamily: "ProximaNova, Helvetica, sans serif",
                        fontWeight: 600,
                        fontSize: '40px',
                        color: '#282c3f'
                    }}>{newName}</Typography>

                    <Typography sx={{
                        fontFamily: "ProximaNova, Helvetica, sans serif",
                        fontWeight: 600,
                        fontSize: '25px',
                        color: '#686b78'
                    }}>Order food from favourite restaurants near you.</Typography>

                    <Box sx={{ marginTop: "30px" }}>
                        <SearchBar />
                    </Box>

                    <Box sx={{ marginTop: "30px" }}>

                        <Typography sx={{
                            fontFamily: "ProximaNova, Helvetica, sans serif",
                            fontWeight: 10,
                            fontSize: '15px',
                            color: '#686b78'
                        }}>
                            POPULAR CITIES IN INDIA
                        </Typography>
                    </Box>
                    
                    <Box sx={{ width: "550px" }}>
                        {cities.map((city, index) => {
                            return (<span key={index} style={{ color: index % 2 === 0 ? 'darkgray' : 'gray' }}>
                                <span>{city + " "}</span>
                            </span>)
                        })}
                    </Box>

                </Box>
            </Box >
        </div>

    )
}

export default Form
