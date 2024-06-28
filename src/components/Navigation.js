import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

function Navigation() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const list = () => (
    <Box
      sx={{ width: drawerWidth }}
      role="presentation"
      onClick={toggleDrawer}
    >
      <List>
        {['Arms', 'Abs', 'Legs'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton component={Link} to={`/${text.toLowerCase()}`}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: '#333',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ color: 'inherit', textDecoration: 'none', mr: 2 }}
            >
              Home
            </Typography>
            <Typography
              variant="h6"
              component={Link}
              to="/mypage"
              sx={{ color: 'inherit', textDecoration: 'none' }}
            >
              MyPage
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Link to="/SignIn" style={{ textDecoration: 'none' }}>
              <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', mr: 2 }}>
                로그인
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            top: '64px', // AppBar의 높이
          },
        }}
        variant="persistent"
        anchor="left"
        open={drawerOpen}
      >
        {list()}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
}

export default Navigation;
