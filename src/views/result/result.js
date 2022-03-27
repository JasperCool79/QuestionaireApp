import React,{useContext} from 'react';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '../../Container';
import Box from '@mui/material/Box';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';
import Context from '../../context';
import clearData from '../../utils/clear_data';
import {useNavigate } from "react-router-dom";

function createData(name, value) {
    let data = value;
    if(typeof(value) == 'object') {
        let info = "";
        for(let index in value) {
            info += `${index} : ${value[index]}`;
        }
        data = info;
    }
  return { name, data};
}

export default function BasicTable() {
    const navigate = useNavigate();
    const data = useContext(Context);
    const {personal_info,gender,age,country_info,spicy_info} = data;
    const tableData = [];
    if(personal_info.first_name || personal_info.last_name || personal_info.email) {
        tableData.push(createData('Personal Info', personal_info));
    }
    if(gender !== '') {
        tableData.push(createData('Gender Type', gender));
    }
    if(age) {
        tableData.push(createData('Age Range', age));
    }
    if(country_info.length > 0) {
        tableData.push(createData('Country', country_info));
    }
    if(spicy_info > 0) {
        tableData.push(createData('Spicy Range', spicy_info));
    }
    const onReset = (event) => {
        event.preventDefault();
        clearData(data);
        navigate("/");
    }

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
              <QuestionAnswerIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              {"Your Q&A Result"}
            </Typography>
          </Box>
        <Box>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>{"Q&A Title"}</TableCell>
                        <TableCell align="right">Result that you choose or select</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {
                    tableData.length > 0 ? tableData.map((row) => {
                        return (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                                <TableCell align="right">{row.data}</TableCell>
                            </TableRow>
                        )
                    }) : (
                        <TableRow
                        key={1}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                           <TableCell align="center" colSpan={2}>No Data to Show</TableCell>
                        </TableRow>
                    )
                    }
                    </TableBody>
                </Table>
            </TableContainer>
            <Box sx={{ mt: 3 }}>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                    spacing={2}
                >
                    <Grid item xs={12} sm={2}>
                        <Button color='error' variant="contained" endIcon={<RestartAltIcon />} onClick={onReset}>
                            Reset
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </Container>
  );
}
