import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import theme from './theme';
import { Provider } from 'react-redux';
import store from './store/store';
import { router } from './router';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.default,
              height: '100vh'
            }
          }}
        />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
