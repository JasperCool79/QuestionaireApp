import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function Welcome(props) {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            // display: 'flex',
            // flexDirection: 'column',
            // alignItems: 'center',
          }}
        >
          {props.children}
        </Box>
      </Container>
    </ThemeProvider>
  );
}
