import React, { FC } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { LoginScreen } from 'src/view/screens';
import { CommingSoon } from '../components/CommingSoon';
import { PageShell } from '../components/PageShell';
import { PrivateRoute, PublicOnlyRoute } from './ControlledRoute';

export enum Screen {
    Home = '/',
    Login = '/login',
    Register = '/register',
}

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PublicOnlyRoute path={Screen.Login}>
                    <PageShell>
                        <LoginScreen />
                    </PageShell>
                </PublicOnlyRoute>

                <PrivateRoute path={Screen.Home}>
                    <PageShell>
                        <div className="w-full h-full flex items-center justify-center ">
                            <h1 className="text-gray-800 text-center">
                                Home page
                            </h1>
                        </div>
                    </PageShell>
                </PrivateRoute>
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
