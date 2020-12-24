import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private';

import Home from '../pages/home';
import Profile from '../pages/profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={ Home } />
                <PrivateRoute exact path="/user/:username" component={ Profile } />
            </Switch>
        </BrowserRouter>
    );
}