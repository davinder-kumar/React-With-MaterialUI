import React from 'react'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Davinder Kumar
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}