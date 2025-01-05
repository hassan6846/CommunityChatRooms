import { useState } from 'react';

//libs
// import { Formik } from 'formik';
import { TextField, Typography, Button, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Email, Lock } from '@mui/icons-material';

//style
import styles from './Login.module.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);


    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <section className={styles.Login_container}>
            <div>
                <Typography style={{ marginBottom: '2rem' ,fontFamily:"Outfit"}} variant="h4" component="h2">
                    Login
                </Typography>
                <form className={styles.Login_Form}>

                    <div>


                    {/* Email Field */}
                    <p style={{ marginBottom: "0.1rem" }}>Email</p>

                    <TextField

                        name="email"
                        type="email"
                        fullWidth
                        margin="normal"
                        InputProps={{
                            style:{
                                borderColor:"#CFD4D8",
                                borderRadius:"10px"
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
                                style:{
                                    borderColor:"#CFD4D8",
                                     borderRadius:"10px"
                                },
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock   sx={{ color: '#CFD4D8' }}/>
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
                    <Button variant="contained"  type="submit" fullWidth style={{ marginTop: '0.5rem',padding:"10px",borderRadius:"10px",backgroundColor:"#2958FF",fontFamily:"Outfit",fontWeight:"400"}}>
                        Login
                    </Button>
                    <p style={{color:"#838385"}}>Dont Have an Account? <a href='#' style={{textDecoration:"none",marginLeft:"5px",color:"#2958FF"}}>Signup</a> </p>
                </form>
            </div>
        </section>
    );
};

export default Login;
