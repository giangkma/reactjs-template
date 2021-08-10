import React, { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { LoginScreen } from 'src/view/screens';
import { PrivateRoute, PublicOnlyRoute } from './ControlledRoute';

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicOnlyRoute path="/login">
                    <LoginScreen />
                </PublicOnlyRoute>

                <PrivateRoute path="/">
                    <div>123</div>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
