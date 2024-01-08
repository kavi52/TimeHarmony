import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Landing from './pages/Landing';
import Register from './pages/Register';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import theme from './theme';
import PasswordReset from './pages/PasswordReset';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: { 
            backgroundColor:  theme.palette.background.default,
            height: '100vh'
          }
        }}
      />
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/password-reset" element={<PasswordReset />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
