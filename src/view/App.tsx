import React, { FC } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import { ReduxProvider } from 'src/state';
import Router from './routes/Router';

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    height: 100%;

    #root {
      height: 100%;
    }
  }
`;

const Application: FC = () => {
    return (
        <ThemeProvider theme={{}}>
            <GlobalStyle />
            <ReduxProvider>
                <Router />
            </ReduxProvider>
        </ThemeProvider>
    );
};

export default Application;
