import React from 'react';
import { AppBar, Typography, Toolbar, Box, Button } from '@mui/material';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import { HamburgerMenu } from '../HamburgerMenu';
import { pages } from '../../router/pages';
import logo from '../../assets/HCFavicon.png'

export function NavBar() {
  let location = useLocation();

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <HamburgerMenu menuItems={pages} />
        <Link to="/">
          <Box
            component="img"
            sx={{
              height: 50,
              width: 50,
              maxHeight: { xs: 50, md: 50 },
              maxWidth: { xs: 50, md: 50 },
            }}
            src={logo}
            alt='logo'
          />
        </Link>
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