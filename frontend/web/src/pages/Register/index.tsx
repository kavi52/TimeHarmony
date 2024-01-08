import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, TextField, Typography, CssBaseline } from '@mui/material';
import { FullHeightContainer } from '../style';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Handle registration logic here
        console.log('Registration data:', formData);
        // You can add your registration logic and API calls here
    };

    return (
        <FullHeightContainer maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography variant="h5" align="center">
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Register
                    </Button>
                </form>
                <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
                    Already have an account? <Link to="/login">Login here</Link>
                </Typography>
            </div>
        </FullHeightContainer>
    );
};

export default Register;