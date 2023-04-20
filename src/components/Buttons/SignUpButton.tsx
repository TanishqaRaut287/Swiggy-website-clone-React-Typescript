import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const SignUpButton = styled(Button)(() => ({
    marginTop: "4rem",
    color: "white",
    borderColor: "black",
    borderRadius: 0,
    maxWidth: "100%",
    backgroundColor: "black",
    textTransform: "none",
    fontSize: "2vh",
    width: "7vw",
    variant: "contained",
  
    '&:hover': {
      backgroundColor: "transparent",
      color: "#F56A11",
      borderColor: "white", 
    },
  }));

export default SignUpButton