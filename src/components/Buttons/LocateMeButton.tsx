import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const LocateMeButton = styled(Button)(() => ({
    color: "black",
    borderColor: "gray",
    backgroundColor: "white",
    textTransform: "none",

    fontSize: "2vh",
    fontWeight: "semi-bold",

    width: "14vw",
    maxWidth: "100%",

    marginTop: '0.6rem',
    marginLeft: '-5.5vw',

    '&:hover': {
      backgroundColor: "lightgray",
      borderColor: "white", 
    },
  }));

export default LocateMeButton