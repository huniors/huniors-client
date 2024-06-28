import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const pages = ['Home', 'MyPage'];

function Navigation() {
  return (
    <AppBar position="static" style={{ backgroundColor: "#333", height : 80 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="/images/typo_logo.png" alt="typo logo" style={{width:300}}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Link to="/login" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', mr: 2 }}>
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ backgroundColor: '#FEB941', color: 'white' }}>
              Sign-up
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
