import { useState } from 'react';

//libs

// import { Formik } from 'formik';
import { TextField, Typography, Button, InputAdornment, IconButton, Avatar } from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock, Person2 } from '@mui/icons-material';
import { deepPurple } from '@mui/material/colors';
//style
import styles from './Signup.module.css';



const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);


    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <section className={styles.Login_container}>
            <div>
                <Typography style={{ marginBottom: '2rem', fontFamily: "Outfit", textAlign: "center" }} variant="h4" component="h2">
                    Create An Account
                </Typography>
                <form className={styles.Login_Form}>
                    {/* Avatar */}
                    <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                        <Avatar sx={{ bgcolor: deepPurple[500], height: 100, width: 100 }}>OP</Avatar>

                    </div>
                    {/* Name */}
                    <div>


                        {/* Email Field */}
                        <p style={{ marginBottom: "0.1rem" }}>Name</p>

                        <TextField

                            name="name"
                            type="text"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                style: {
                                    borderColor: "#CFD4D8",
                                    borderRadius: "10px"
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Person2 sx={{ color: '#CFD4D8' }} />
                                    </InputAdornment>
                                ),

                            }}
                        />
                    </div>
                    {/* Email */}
                    <div>


                        {/* Email Field */}
                        <p style={{ marginBottom: "0.1rem" }}>Email</p>

                        <TextField

                            name="email"
                            type="email"
                            fullWidth
                            margin="normal"
                            InputProps={{
                                style: {
                                    borderColor: "#CFD4D8",
                                    borderRadius: "10px"
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Email sx={{ color: '#CFD4D8' }} />
                                    </InputAdornment>
                                ),

                            }}
                        />
                    </div>
                    {/* Password Field */}
                    <div>


                        <p style={{ marginBottom: "0.1rem" }}>Password</p>
                        <TextField
                            name="password"

                            type={showPassword ? 'text' : 'password'}
                            fullWidth
                            margin="normal"
                            InputProps={{
                                style: {
                                    borderColor: "#CFD4D8",
                                    borderRadius: "10px"
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock sx={{ color: '#CFD4D8' }} />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            sx={{ color: '#CFD4D8' }}
                                            onClick={handleTogglePasswordVisibility}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </div>
                    {/* Submit Button */}
                    <Button variant="contained" type="submit" fullWidth style={{ marginTop: '0.5rem', padding: "10px", borderRadius: "10px", backgroundColor: "#2958FF", fontFamily: "Outfit", fontWeight: "400" }}>
                        Sign up.
                    </Button>
                    <p style={{ color: "#838385" }}>Dont Have an Account? <a href='#' style={{ textDecoration: "none", marginLeft: "5px", color: "#2958FF" }}>Login</a> </p>
                </form>
            </div>
        </section>
    );
};

export default Signup;
