import React,{useContext, useState} from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Slider from '@mui/material/Slider';
import Container from '../../Container';
import {Link,useNavigate } from "react-router-dom";
import Context from '../../context';
import AlertDialog from '../../modal';
import clearData from '../../utils/clear_data';

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 20,
      label: '20',
    },
    {
      value: 30,
      label: '37',
    },
    {
        value: 50,
        label: '50',
    },
    {
        value: 70,
        label: '70',
    },
    {
      value: 100,
      label: '100',
    },
];
  
function valuetext(value) {
return `${value}°C`;
}

export default function SpicyRange() {
    const navigate = useNavigate();
    const data = useContext(Context);
    const [spicy,setSpicy] = useState(data.spicy_info);
    const [errors,setErrors] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);

    const onReset = (event) => {
        event.preventDefault();
        clearData(data);
        navigate("/");
    }
    const onNext = (event) => {
        event.preventDefault();
        
        if(spicy < 1) {
            let err = errors;
            let spicyErr = "Range Value is must be  1 and 100 ";
            if(!errors.includes(spicyErr)){
                err.push(spicyErr);
            }
            setErrors(err)
            setModalOpen(true);
        }else{
            data.spicy_info = spicy;
            navigate("/show-result");
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
                        <SoupKitchenIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Spicy Range
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
                        Page 5 / 5
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box> 
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={() => console.log('hello')}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <Box>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={spicy}
                                value={spicy}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                marks={marks}
                                onChange={(e) => setSpicy(e.target.value)}
                            />
                        </Box>
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
                                <Link to="/country" style={{textDecoration: 'none'}}>
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