import Box from '@mui/material/Box';

import Footer from '../../../components/Footer/Footer';
import Division1 from '../../Division1/Division1';
import Division2 from '../../Division2/Division2';
import Division3 from '../../Division3/Division3';

const HomePage = () => {
    return (
        <div>
            <Division1 />
            <Division2 />
            <Division3 />
            <Footer />
        </div>
    )
}

export default HomePage