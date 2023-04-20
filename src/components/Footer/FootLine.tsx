import { Box, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";

const socialIcons = [
    FacebookIcon,
    PinterestIcon,
    InstagramIcon,
    TwitterIcon,
];

const iconSx = {
    color: "white",
    marginTop: { xs: "1rem", md: '0rem', lg:"-12px" },
    marginLeft: { md: "2rem", xs: "0.5rem", lg: "1rem"},
    cursor: "pointer",
};

const FootLine = () => {
    return (
        <Box
            sx={{
                display: { xs: "block", md: "flex" },
                marginTop: "1.2rem",
                marginBottom: "1rem",
                marginLeft: "4rem",
                marginRight: "4rem",
            }}
        >
            <Box sx={{ flex: 3, display: { xs: "block", md: "flex" } }}>

                <img
                    width="142"
                    style={{ marginLeft: "20px", marginBottom: "20px" }}
                    alt="swiggy logo"
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza" />
            </Box>

            <Box sx={{ flex: 1.5, display: "flex", marginLeft: { xs: "2.5rem", lg: "10px" }, marginTop: { xs: '0.2rem', lg: '6px' }, marginRight: "300px" }}>
                <Typography sx={{ color: "white", marginLeft: { md: '1rem' }, fontSize: 20 }}>
                    © 2023 Swiggy
                </Typography>
            </Box>

            <Box
                sx={{
                    flex: 1,
                    marginLeft: { xs: "2.5rem" },
                    marginTop: { xs: "1rem" },
                }}
            >
                {socialIcons.map((Icon, index) => {
                    return <Icon key={index} sx={iconSx} />;
                })}
            </Box>
        </Box>
    )
}

export default FootLine