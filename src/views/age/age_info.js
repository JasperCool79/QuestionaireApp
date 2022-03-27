import React,{useContext, useState} from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {Link,useNavigate } from "react-router-dom";
import Context from '../../context';
import AlertDialog from '../../modal';
import Container from '../../Container';
import clearData from '../../utils/clear_data';
export default function AgeInfo() {
  const navigate = useNavigate();
  const data = useContext(Context);
  const [age,setAge] = useState(data.age);
  const [errors,setErrors] = useState([]);
  const [modalOpen,setModalOpen] = useState(false);
  const onReset = (event) => {
    event.preventDefault();
    clearData(data);
    navigate("/");
  }
const onNext = (event) => {
    event.preventDefault();
    if(!age) {
        let err = errors;
        let ageErr = "Please Select One";
        if(!errors.includes(ageErr)){
          err.push(ageErr);
        }
        setErrors(err)
        setModalOpen(true);
    }else{
        data.age = age;
        navigate("/country");
    }
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
                <CalendarMonthIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                  Age Infomation
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
                    Page 3 / 5
                </Typography>
              </Box>
          </Grid>
        </Grid>
      </Box> 
      <Box component="form" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">Select your age range</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                value={age || ''}
                onChange={(e) => setAge(e.target.value)}
              >
                <FormControlLabel value="< 30" control={<Radio />} label="< 30" />
                <FormControlLabel value="31-50" control={<Radio />} label="31-50" />
                <FormControlLabel value="> 51" control={<Radio />} label="> 51" />
              </RadioGroup>
            </FormControl>
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
                  <Link to="/gender" style={{textDecoration: 'none'}}>
                    <Button color='secondary' variant="contained" endIcon={<SkipPreviousIcon />}>
                      Back
                    </Button>
                  </Link>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button color='success' variant="contained" endIcon={<SkipNextIcon />} onClick={onNext}>
                    Next
                  </Button>
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button color='error' variant="contained" endIcon={<RestartAltIcon />} onClick={onReset}>
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