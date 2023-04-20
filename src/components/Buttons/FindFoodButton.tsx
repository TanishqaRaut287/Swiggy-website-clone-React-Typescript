import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const FindFoodButton = styled(Button)(() => ({
    color: "white",
    borderColor: "gray",
    backgroundColor: "#F56A11",

    fontSize: "2.2vh",
    fontWeight: "bold",

    height: "7.8vh",
    width: "9vw",
    // maxWidth: "100%",
    borderRadius: "0px",
    bottom: "0.8px",

    '&:hover': {
        backgroundColor: "#F56A11",
        // color: "#F56A11",
        // borderColor: "white",
    },
}));

export default FindFoodButton