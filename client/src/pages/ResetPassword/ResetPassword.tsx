import { useState } from 'react';

//libs

// import { Formik } from 'formik';
import { TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Lock, Loop } from '@mui/icons-material';

//style
import styles from './ResetPassword.module.css'



const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showCPassword, setshowPassword] = useState<boolean>(false)

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };
    const handleToggleCPasswordVisibility = () => {
        setshowPassword((prev) =>!prev);
    };

    return (
        <section className={styles.Login_container}>
            <div>
                <Typography style={{ marginBottom: '2rem', fontFamily: "Outfit", textAlign: "center" }} variant="h4" component="h2">
                    Reset Password
                </Typography>


                <form className={styles.Login_Form}>


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

                    {/* Update Password */}
                    <div>


                        <p style={{ marginBottom: "0.1rem" }}>Repeat Password</p>
                        <TextField
                            name="password"

                            type={showCPassword ? 'text' : 'password'}
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
                                            onClick={handleToggleCPasswordVisibility}
                                            edge="end"
                                        >
                                            {showCPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </div>
                    {/* Submit Button */}
                    <Button endIcon={<Loop />} variant="contained" type="submit" fullWidth style={{ marginTop: '0.5rem', padding: "10px", borderRadius: "10px", backgroundColor: "#2958FF", fontFamily: "Outfit", fontWeight: "400" }}>
                        Update Password
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ResetPassword;
