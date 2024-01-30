import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { TextField, Typography, CssBaseline, Box } from '@mui/material';
import { FullHeightContainer } from '../style';
import { useForm } from 'react-hook-form';
import { useRegisterUser } from '../../api/users/useRegisterUser';
import Button from '../../common/Button';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { mutateAsync, isPending } = useRegisterUser()
    const navigate = useNavigate()

    const onSubmit = async(data: any) => {
       await mutateAsync(data)
       navigate('/dashboard')
    };

    console.log("errors", errors);
    return (
        <FullHeightContainer maxWidth="xs">
            <CssBaseline />
            <div>
                <Typography variant="h5" align="center">
                    Register
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        label="Username"
                        margin="normal"
                        fullWidth
                        required
                        {...register('username', { required: 'Username is required' })}
                        error={!!errors.username}
                        helperText={errors?.username?.message?.toString()}
                    />
                    <TextField
                        label="Email"
                        margin="normal"
                        fullWidth
                        required
                        {...register('email', { required: 'Email is required', pattern: /^\S+@\S+$/i })}
                        error={!!errors.email}
                        helperText={errors?.email?.message?.toString()}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        margin="normal"
                        fullWidth
                        required
                        {...register('password', { required: 'Password is required', minLength: 8 })}
                        error={!!errors.password}
                        helperText={errors?.password?.message?.toString()}
                    />

                    <Box mt={2}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            loading={isPending}
                        >
                            Register
                        </Button>
                    </Box>
                </form>
                <Typography variant="body2" align="center" style={{ marginTop: '16px' }}>
                    Already have an account? <Link to="/login">Login here</Link>
                </Typography>
            </div>
        </FullHeightContainer>
    );
};

export default Register;