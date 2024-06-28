import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';

const pages = ['Home', 'Mypage'];

function Navigation() {
  return (
    <AppBar position="static" style={{ backgroundColor: '#333' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontFamily: 'monospace', fontWeight: 700 }}
          >
            LOGO
          </Typography>
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
          <Link to="/signin" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', mr: 2 }}>
              Login
            </Button>
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none' }}>
            <Button variant="contained" sx={{ backgroundColor: 'yellow', color: 'black' }}>
              Sign-up
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navigation;
