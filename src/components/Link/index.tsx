/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';


export default function Link({ children, ...rest }: RouterLinkProps) {
  return (
    // <Typography variant="h6" component="h3" sx={{ flexGrow: 1 }}>
    <MaterialLink component={RouterLink} {...rest}>
      {children}
    </MaterialLink>
    // </Typography>
  );
}