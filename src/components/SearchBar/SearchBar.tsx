import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';

import LocateMeButton from '../Buttons/LocateMeButton';
import FindFoodButton from '../Buttons/FindFoodButton';

export default function SearchBar() {
    const [location, setLocation] = useState<string>('');
    const [buttonText, setButtonText] = useState<string>('Locate me');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(e.target.value);
        setButtonText("Clear");
    }

    const handleClear = () => {
        setButtonText('Locate me');
        setLocation('');
    }

    return (
        <Grid container>
            <Grid item xs={8} position="relative">
                <TextField
                    value={location}
                    placeholder="Enter your delivery location"
                    onChange={handleInputChange}
                    sx={{ width: '500px' }}
                    InputProps={{
                        sx: {
                            borderRadius: 0,
                            borderColor: "orange",
                            boxShadow: 3
                        }
                    }}
                />
            </Grid>

            <Grid item xs={2} position="absolute" sx={{ marginLeft: "360px" }}>
                <LocateMeButton onClick={handleClear} startIcon={<LocationSearchingIcon />}>{buttonText}</LocateMeButton>
            </Grid>

            <Grid item xs={2} position="relative">
                <FindFoodButton variant='contained'>FIND FOOD</FindFoodButton>
            </Grid>
        </Grid>
    );
}