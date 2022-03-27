import React,{useContext, useState} from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import {Link,useNavigate } from "react-router-dom";
import Context from '../../context';
import AlertDialog from '../../modal';
import Box from '@mui/material/Box';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '../../Container';
import clearData from '../../utils/clear_data';
export default function PersonalInfo() {
  const navigate = useNavigate();
  const data = useContext(Context);
  const [firstName,setFirstName] = useState(data.personal_info.first_name);
  const [lastName,setLastName] = useState(data.personal_info.last_name);
  const [email,setEmail] = useState(data.personal_info.email);
  const [errors,setErrors] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  
  const onNext = (event) => {
    event.preventDefault();
    if(!firstName || !lastName || !email) {
      if(!firstName) {
        let err = errors;
        let firstNameErr = "First Name is Required";
        if(!errors.includes(firstNameErr)){
          err.push(firstNameErr);
        }
        setErrors(err)
      }
      if(!lastName) {
        let err = errors;
        let lastNameErr = "Last Name is Required";
        if(!errors.includes(lastNameErr)){
          err.push(lastNameErr);
        }
        setErrors(err);
      }
      if(!email) {
        let err = errors;
        let emailErr = "Email is Required";
        if(!errors.includes(emailErr)){
          err.push(emailErr);
        }
        setErrors(err);
      }
      setModalOpen(true);
    }else{
      data.personal_info.first_name = firstName;
      data.personal_info.last_name = lastName;
      data.personal_info.email = email;
      navigate("/gender");
    }
  }
  const onReset = (event) => {
    event.preventDefault();
    clearData(data);
    navigate("/");
}
  return (
    <Container>
        { modalOpen ? <AlertDialog handleClose={() => setModalOpen(false)} errors={errors}/> : null}
        <Box>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid item xs={12} sm={8}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'skyblue' }}>
                  <AccountBoxIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Personal Infomations
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary' }}>
                    <AutoStoriesIcon/>
                  </Avatar>
                  <Typography component="h5" variant="h5">
                      Page 1 / 10
                  </Typography>
                </Box>
            </Grid>
          </Grid>
        </Box> 
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ mt: 3 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="flex-end"
                  spacing={2}
                >
                  <Grid item xs={12} sm={2}>
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <Button color='secondary' variant="contained" endIcon={<SkipPreviousIcon />}>
                          Back
                      </Button>
                    </Link>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button type="submit" color='success' variant="contained" endIcon={<SkipNextIcon />} onClick={onNext}>
                      Next
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={2}>
                    <Button onClick={onReset} color='error' variant="contained" endIcon={<RestartAltIcon />}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
      </Box>
    </Container>
  );
}