import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const LoginButton = styled(Button)(() => ({
    marginTop: "4rem",
    color: "black",
    borderColor: "gray",
    borderRadius: 0,
    maxWidth: "100%",
    backgroundColor: "white",
    textTransform: "none",
    fontSize: "2vh",
    width: "12vw",
  
    '&:hover': {
      backgroundColor: "transparent",
      color: "#F56A11",
      borderColor: "white", 
    },
  }));

export default LoginButton