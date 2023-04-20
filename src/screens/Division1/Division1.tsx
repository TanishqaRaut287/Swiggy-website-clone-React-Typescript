import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Foodplate from '../../components/FoodPlate/Foodplate';
import Form from '../../components/Form/Form';

const Division1 = () => {
  return (
    <div>

      <Grid container>
        <Grid item xs={6}>
          <Form />
        </Grid>
        <Grid item xs={6}>
          <Foodplate />
        </Grid>
      </Grid>

    </div>

  )
}

export default Division1