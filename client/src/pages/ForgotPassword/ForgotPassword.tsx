
//libs

// import { Formik } from 'formik';
import { TextField, Typography, Button, InputAdornment, } from '@mui/material';
import { Email,Link} from '@mui/icons-material';

//style
import styles from './ForgotPassword.module.css';



const ForgotPassword = () => {


    return (
        <section className={styles.Login_container}>
            <div>
                <Typography style={{ marginBottom: '1rem', fontFamily: "Outfit", textAlign: "left" }} variant="h4" component="h2">
                    Forgot Password?
                 </Typography>
                 <p style={{ color: "#838385",marginBottom:"1rem" }}> Don't worry we'll Send Instruction in you gmail </p>

                <form className={styles.Login_Form}>


                    {/* Email */}
                    <div>


                        {/* Email Field */}
                        <p >Email</p>

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

                    {/* Submit Button */}
                    <Button endIcon={<Link/>} variant="contained" type="submit" fullWidth style={{ marginTop: '0.5rem', padding: "10px", borderRadius: "10px", backgroundColor: "#2958FF", fontFamily: "Outfit", fontWeight: "400" }}>
                 Send Link 
                 
                    </Button>
                </form>
            </div>
        </section>
    );
};

export default ForgotPassword;
