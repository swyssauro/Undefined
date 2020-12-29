import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './private';

import Home from '../pages/home';
import Register from '../pages/register';
import Profile from '../pages/profile';
import Erro404 from '../pages/404';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/sign-in' component={ Home } />
                <Route exact path='/sign-up' component={ Register } />
                <PrivateRoute exact path="/:username" component={ Profile } />
                <Route component={ Erro404 } />
            </Switch>
        </BrowserRouter>
    );
}