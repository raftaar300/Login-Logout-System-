import React, { useState  , useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


import { signin, signup } from '../../actions/Index';

import useStyles from './styles';
import Input from './Input';
import Profile from '../Profile/Profile';

const Login = () => {
  const [user , setUser] =  useState(JSON.parse(localStorage.getItem('Loggedin')))
  const [tk, settk] = useState(false)

  const [formData, setForm] = useState({ firstName: '', lastName: '' , password: '', confirmPassword: '' , company : "" , phone : "" });
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
 const [passworderror , setpassworderror] = useState(false);
 const [emailexisterror , setemailexisterror] = useState(false);
const [email, setemail] = useState('')
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = ()=>setShowPassword((prev)=>!prev)


    const handleSubmit = (e) => {
      e.preventDefault()
   

        const data = {firstName: formData.firstName, lastName: formData.lastName , password: formData.password, confirmPassword: formData.confirmPassword , company : formData.company , phone : formData.phone , email :email } 
       console.log("form "  , data);
        if (isSignup) {    
        if(formData.password !== formData.confirmPassword)
        {
          setpassworderror(true);
        }else{
      
          dispatch(signup(data, history));
        }}
        else {
          dispatch(signin(data, history));
        }
    
      };

  const switchMode = () => {
    setForm({ firstName: '', lastName: '', password: '', confirmPassword: '' , company : "" , phone : "" });
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

 const handleChange = (e) => setForm({ ...formData, [e.target.name]: e.target.value });

useEffect(() => {
  setUser(JSON.parse(localStorage.getItem('profile')));
})
  return (<>
    { user?.result ? <Profile/> :
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
            <>
              <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
              <Input name="lastName" label="Last Name" handleChange={handleChange} half />
            <Input name="company" label="Company" handleChange={handleChange} type="text" />
            <Input name="phone" label="Phone Number" handleChange={handleChange} type="number" />


              
            </>
            )}
            { emailexisterror && (<h6 style = {{color : "red" , fontSize : "small" , marginLeft :"10px"}}>Email Already Exist</h6>) } 
            <Input name="email" label="Email Address" handleChange={(e)=>setemail(e.target.value)} type="email" />
            
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { passworderror && (<h6 style = {{color : "red" , fontSize : "small" , marginLeft :"10px"}}>Password Does Not Match</h6>) } 
            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Button color = "secondary" onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
    }
    </>);
};

export default Login;