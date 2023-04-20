import { Route, Routes as Switch } from 'react-router-dom';

import HomePage from '../screens/Authenticated/HomePage/HomePage';
import { routes } from '../utils/constants/routes';

const Routes = () => {
    return (
        <Switch>
            <Route path='/' element={<HomePage />} />
            <Route path={routes.homepage} element={<HomePage />} />
        </Switch>
    );
};

export default Routes;