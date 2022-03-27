import React,{useContext, useState} from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import WcIcon from '@mui/icons-material/Wc';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Container from '../../Container';
import {Link,useNavigate } from "react-router-dom";
import Context from '../../context';
import AlertDialog from '../../modal';
import clearData from '../../utils/clear_data';
export default function GenderInfo() {
    const navigate = useNavigate();
    const data = useContext(Context);
    const [genderType,setGenderType] = useState(data.gender);
    const [errors,setErrors] = useState([]);
    const [modalOpen,setModalOpen] = useState(false);

    const onReset = (event) => {
        event.preventDefault();
        clearData(data);
        navigate("/");
    }
    const onNext = (event) => {
        event.preventDefault();
        if(!genderType) {
            let err = errors;
            let genderTypeErr = "Please Select One";
            if(!errors.includes(genderTypeErr)){
              err.push(genderTypeErr);
            }
            setErrors(err)
            setModalOpen(true);
        }else{
            data.gender = genderType;
            navigate("/age-info");
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
                        <WcIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Gender Infomation
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
                        Page 2 / 5
                    </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={() => console.log('hello')}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">What is your gender ?</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="What is your gender ?"
                            value={genderType}
                            onChange={(event) => setGenderType(event.target.value)}
                        >
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'other'}>Other</MenuItem>
                        </Select>
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
                                <Link to="/personal-info" style={{textDecoration: 'none'}}>
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