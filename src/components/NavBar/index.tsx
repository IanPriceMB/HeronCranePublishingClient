import React from 'react';
import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { HamburgerMenu } from '../HamburgerMenu';
import { pages } from '../../router/pages';

export function NavBar() {
  let location = useLocation();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <HamburgerMenu menuItems={pages} />
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/"
          sx={{
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          Ian Price
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }
          }}
        >
          {pages.map((page, index) => {
            let url;
            if (page === 'Home') { url = '/' }
            else { url = page.replace(/ /g, '-').toLowerCase() }
            const isActive = `/${url}` === location.pathname

            return (
              <Button
                key={`${index}-${url}-toolbar`}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  textDecoration: isActive ? 'underline' : 'none'
                }}
                component={Link}
                to={url}
              >
                {page}
              </Button>
            )
          })}
        </Box>
      </Toolbar>
    </AppBar>
  )
};