import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { images } from '../../utils/constants/images'

const imgStyle = {
    height: "65vh",
    width: "25vw"
}

const Division3 = () => {
    return (
        <div>
            <Grid container spacing={-11}>
                <Grid item xs={6} sx={{
                    marginTop: "12rem",
                    marginLeft: "10rem",
                    position: "absolute"
                }}>

                    <Typography sx={{
                        fontFamily: "ProximaNova,arial, Helvetica Neue, sans serif",
                        fontSize: '40px',
                        fontWeight: 600,
                        width: "300px",
                        lineHeight: 1,
                        letterSpacing: "-.45px",
                        color: "#282c3f",
                        boxSizing: 'inherit',

                    }}>Restaurants in your pocket</Typography>

                    <Typography sx={{
                        fontFamily: "ProximaNova,arial, Helvetica Neue, sans serif",
                        fontSize: '20px',
                        fontWeight: 300,
                        paddingTop: "20px",
                        paddingBottom:"60px",
                        width: "400px",
                        lineHeight: 1.2,
                        color: "#7e808c",
                        boxSizing: 'inherit',
                        letterSpacing: 0.1
                    }}>
                        Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</Typography>

                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <img style={{ cursor: "pointer" }} height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp" />
                        </Grid>
                        <Grid item xs={6}>
                            <img style={{ cursor: "pointer" }} height="54" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty" />
                        </Grid>
                    </Grid>

                </Grid>

                <Grid item xs={6} sx={{
                    marginLeft: "720px"
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img style={imgStyle} src={images.phone1} />
                        </Grid>
                        <Grid item xs={6} marginTop="100px" marginBottom="-23px">
                            <img style={imgStyle} src={images.phone2} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Division3