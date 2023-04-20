import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const imgStyle = {
    marginBottom: '45px',
    marginTop: "10px",
    width: 105,
    height: 199,
    marginLeft: "180px"
}

const titleSX = {
    fontFamily: "ProximaNova,arial, Helvetica Neue, sans serif",
    fontWeight: 600,
    fontSize: '20px',
    color: '#fff',
    lineHeight: 1.2,
    marginTop: 0,
    marginLeft: "180px"
}

const descriptionSX = {
    fontFamily: "ProximaNova,arial, Helvetica Neue, sans serif",
    fontSize: '15px',
    width: '260px',
    marginTop: "10px",
    color: "#e0cbc1",
    lineHeight: 1.3,
    display: 'block',
    textAlign: "center",
    fontWeight: 300,
    boxSizing: "inherit",
    marginBottom: "50px"
}

const Division2 = () => {
    return (
        <div>
            <Box textAlign={"center"}>
                <Grid container sx={{ backgroundColor: "#2B1E16", marginTop: "-6px", marginLeft: "0px", textAlign: "center" }}>

                    <Grid item xs={1} md={2} lg={3} height="250px" >

                        <img style={imgStyle} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf" />

                        <Typography sx={titleSX}>
                            No Minimum Order
                        </Typography>

                        <Typography sx={descriptionSX} marginLeft={"145px"}>
                            Order in for yourself or for the group, with no restrictions on order value
                        </Typography>

                    </Grid>

                    <Grid item xs={4}>

                        <img style={imgStyle} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy" />

                        <Typography sx={titleSX}>
                            Live Order Tracking
                        </Typography>

                        <Typography sx={descriptionSX} marginLeft={"210px"}>
                            Know where your order is at all times, from the restaurant to your doorstep
                        </Typography>

                    </Grid>

                    <Grid item xs={4}>

                        <img style={imgStyle} src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn" />

                        <Typography sx={titleSX}>
                            Lightning-Fast Delivery
                        </Typography>

                        <Typography sx={descriptionSX} marginLeft={"215px"}>
                            Experience Swiggy's superfast delivery for food delivered fresh & on time
                        </Typography>
                    </Grid>

                </Grid>
            </Box>
        </div>
    )
}

export default Division2