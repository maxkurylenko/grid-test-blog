import { Box, Container, Toolbar } from '@mui/material';
import '../styles/globals.css'
import '../mock';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <Container style={{backgroundColor: 'gray'}}>
      <Navbar></Navbar>
      <Box sx={{ pt: 5 }}>
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Container>
  );
}

export default MyApp
