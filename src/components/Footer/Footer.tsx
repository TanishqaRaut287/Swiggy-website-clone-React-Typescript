import React from "react";
import { Box, Typography } from "@mui/material";

import DeliverTo from "./DeliverTo";
import FootLine from "./FootLine";

const footerMenu = [
    "COMPANY",
    "CONTACT",
    "LEGAL",
];

const COMPANY = [
    "About us",
    "Team",
    "Careers",
    "Swiggy Blog",
    "Bug Bounty",
    "Swiggy One",
    "Swiggy Corporate",
    "Swiggy Instamart",
    "Swiggy Genie",
];

const CONTACT = [
    "Help & Support",
    "Partner with us",
    "Ride with us",
];

const LEGAL = [
    "Terms & Conditions",
    "Refund & Cancellation",
    "Privacy Policy",
    "Cookie Policy",
    "Offer Terms",
    "Phishing & Fraud",
    "Corporate-Swiggy Money Codes Terms and Conditions",
    "Corporate-Swiggy Discount Voucher Terms and Conditions"
];

const menuItemsSX = {
    fontFamily: "ProximaNova,arial, Helvetica Neue, sans serif",
    fontSize: 14,
    marginTop: "15px",
    color: "white",

    '&:hover': {
        color: "white",
        fontWeight: "bold",
    }
}

const Footer = () => {
    return (
        <div style={{ backgroundColor: "black" }}>

            <Box
                sx={{
                    display: { xs: "block", md: "flex" },
                    marginLeft: { xs: "5rem", md: "5rem", lg: "10rem" },
                    marginRight: { xs: "0rem", md: "5rem" },
                    marginTop: "1rem",
                    marginBottom: "2rem",
                }}
            >

                {footerMenu.map((menu, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Box sx={{ marginLeft: "100px" }} >
                                <Typography
                                    sx={{
                                        fontFamily: "ProximaNova,arial, Helvetica Neue, sans serif",
                                        color: "gray", 
                                        fontWeight: "500", 
                                        marginTop: "2rem", 
                                        marginRight: "6rem",
                                        fontSize:14,
                                    }}
                                >
                                    {menu}
                                </Typography>
                                {menu === "COMPANY" &&
                                    COMPANY.map((companies, index) => {
                                        return (
                                            <Typography
                                                sx={menuItemsSX}
                                                key={index}
                                            >
                                                {companies}
                                            </Typography>
                                        );
                                    })}
                                {menu === "CONTACT" &&
                                    CONTACT.map((contact, index) => {
                                        return (
                                            <Typography
                                                sx={menuItemsSX}
                                                key={index}
                                            >
                                                {contact}
                                            </Typography>
                                        );
                                    })}
                                {menu === "LEGAL" &&
                                    LEGAL.map((legal, index) => {
                                        return (
                                            <Typography
                                                sx={menuItemsSX}
                                                key={index}
                                            >
                                                {legal}
                                            </Typography>
                                        );
                                    })}
                            </Box>
                        </React.Fragment>
                    );
                })}

                <Box sx={{ position: "absolute", marginTop: "35px", marginLeft: "960px" }}>
                    <img alt="GoogleButton" 
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl" />
                    <img alt="AppleButton" 
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"></img>
                </Box>

            </Box>

            <hr style={{ color: "white", width: '75%' }} />
            <DeliverTo />
            <hr style={{ color: "white", width: '90%' }} />

            <FootLine />

        </div>
    );
};

export default Footer;
