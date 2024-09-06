import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Import RouterLink and useNavigate
import { Link } from 'react-scroll'; // Import Link for smooth scrolling
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useScroll } from './useScroll';
// import logo from '../assets/logo.png'
import logo from '../assets/1.svg'

const pages = ['WORK', 'ABOUT', 'RATINGS', 'CONTACT'];

const Navbar = () => {
  const { scrollDirection, hasScrolled } = useScroll();
  const [scrolling, setScrolling] = useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle Home link click with both routing and scrolling
  const handleHomeClick = () => {
    // Navigate to home route
    navigate('/');
    // Scroll to the top after navigation
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100); // Small delay to ensure routing has occurred
  };

  return (
    <Box
      className={`navbar ${scrolling ? 'scrolling' : ''}`}
      sx={{ position: 'sticky', top: 0, zIndex: 1200 }}
    >
      <AppBar
        position="static"
        sx={{
          boxShadow: scrolling ? '0px 0px 10px rgba(0, 0, 0, 0.3)' : 'none',
          background: scrolling ? '#1f2b4a' : 'transparent',
          position: 'absolute',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Logo for desktop view */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}>
              <RouterLink to='/'>
              <img className='navLogo' src={logo} alt="Logo" style={{ backgroundColor: 'transparent', width: '100px', height: '100px' }} />
              </RouterLink>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                ml: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {/* Logo text or image if needed */}
            </Typography>

            {/* Mobile Menu Icon */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="open navigation menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button onClick={handleHomeClick} sx={{ color: 'inherit', marginLeft: '-10px', fontSize: '15px'}}>
                    Home
                  </Button>
                </MenuItem>
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Link to={page} smooth={true} duration={1000}>
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            {/* Logo for mobile view */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <img src={logo} alt="Logo" style={{ height: '100px', marginLeft: '20px' }} />
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              {/* Logo text or image if needed */}
            </Typography>

            {/* Desktop Menu Items Centered */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gap: '50px' }}>
              <Button className='navlinks' onClick={handleHomeClick} sx={{ my: 2, color: 'white', display: 'block' }}>
                Home
              </Button>
              {pages.map((page) => (
                <Link key={page} to={page} smooth={true} duration={1000}>
                  <Button
                  className='navlinks'
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                </Link>
              ))}
            </Box>

            {/* Call to Action */}
            <Box sx={{ flexGrow: 0 }}>
              <Link to='CONTACT' smooth={true} duration={1000}>
                <Box
                  component="button"
                  sx={{
                    padding: { sm: '10px 20px', md: '10px 20px', xs: '5px 10px' },
                    transition: 'all ease-in-out 0.4s',
                    backgroundColor: 'white',
                    color: 'black',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    border: '1px solid black',
                    ":hover": {
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: '1px solid white',
                    },
                  }}
                >
                  Say Hi
                </Box>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
