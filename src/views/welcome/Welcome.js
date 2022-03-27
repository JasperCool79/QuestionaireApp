import React,{useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import {Link } from "react-router-dom";
import QuizIcon from '@mui/icons-material/Quiz';
import Typography from '@mui/material/Typography';
import Container from '../../Container';
import Context from '../../context';
export default function Welcome() {
  const data = useContext(Context);
  console.log(data);
  return (
    <Container>
          <Box
              sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center'
              }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <QuizIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Welcome To Questionaire App
            </Typography>
          </Box>
        
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Link to="/personal-info" style={{textDecoration: 'none'}}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Let's Start Answer
            </Button>
          </Link>
        </Box>
    </Container>
  );
}
