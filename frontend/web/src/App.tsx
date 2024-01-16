import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyles, ThemeProvider } from '@mui/material';
import theme from './theme';
import {
  Attendance,
  Dashboard,
  Employee,
  HelpSupport,
  Landing,
  Leave,
  Login,
  Notifications,
  PasswordReset,
  ProfileSettings,
  Register,
  ReportsAnalytics
} from './pages';
import { Provider } from 'react-redux';
import store from './store/store';

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
        <Router>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/password-reset" element={<PasswordReset />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/leave" element={<Leave />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/reports-analytics" element={<ReportsAnalytics />} />
            <Route path="/profile-settings" element={<ProfileSettings />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/help-support" element={<HelpSupport />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
