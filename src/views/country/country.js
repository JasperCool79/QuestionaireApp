import React,{useContext, useState} from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import Container from '../../Container';
import {Link,useNavigate } from "react-router-dom";
import Context from '../../context';
import AlertDialog from '../../modal';
import clearData from '../../utils/clear_data';
export default function Country() {
    const navigate = useNavigate();
    const data = useContext(Context);
    const [state, setState] = useState({
        Asia: false,
        Thailand: false,
        Brazil: false,
        Vietnam: false,
        France: false,
        China: false,
        Japan: false,
        Italy: false,
      });
    const { Asia, Thailand, Brazil, Vietnam, France, China, Japan, Italy} = state;
    const [errors,setErrors] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);
    const handleChange = (event) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
    };
const onReset = (event) => {
    event.preventDefault();
    clearData(data);
    navigate("/");
}
const onNext = (event) => {
    event.preventDefault();
    let country = [];
    for(let index in state) {
        if(state[index]) {
            country.push(state[index]);
        }
    }
    if(country.length < 1) {
        let err = errors;
        let countryErr = "Please Checked atleast one country";
        if(!errors.includes(countryErr)){
            err.push(countryErr);
        }
        setErrors(err)
        setModalOpen(true);
    }else{
        let country = [];
        for(let index in state) {
            if(state[index]) {
                country.push(index);
            }
        }
        data.country_info = country;
        navigate("/spicy-range");
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
                        <MyLocationIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Country
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
                        Page 4 / 5
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box> 
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={() => console.log('hello')}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <FormLabel component="legend">Please Check Country</FormLabel>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox name="Asia" checked={Asia} onChange={handleChange}/>} label="Asia" />
                            <FormControlLabel control={<Checkbox name="Thailand" checked={Thailand} onChange={handleChange}/>} label="Thailand" />
                            <FormControlLabel control={<Checkbox name="Brazil" checked={Brazil} onChange={handleChange}/>} label="Brazil" />
                            <FormControlLabel control={<Checkbox name="Vietnam" checked={Vietnam} onChange={handleChange}/>} label="Vietnam" />
                            <FormControlLabel control={<Checkbox name="France" checked={France} onChange={handleChange}/>} label="France" />
                            <FormControlLabel control={<Checkbox name="China" checked={China} onChange={handleChange}/>} label="China" />
                            <FormControlLabel control={<Checkbox name="Japan" checked={Japan} onChange={handleChange}/>} label="Japan" />
                            <FormControlLabel control={<Checkbox name="Italy" checked={Italy} onChange={handleChange}/>} label="Italy" />
                        </FormGroup>
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
                                <Link to="/age-info" style={{textDecoration: 'none'}}>
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