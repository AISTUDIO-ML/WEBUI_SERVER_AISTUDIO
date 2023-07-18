import React from 'react'

// ** Custom Components Imports
import { Card, CardActions, CardContent, Grid, Typography } from '@mui/material'

const PluginsLibraryScreen = () => {
  return (
    <React.Fragment>
      <Grid container spacing={6}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Grid item xs={4} md={4} lg={3} key={index}>
            <Card variant='outlined'>{card}</Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  )
}
export default PluginsLibraryScreen

// HD Wallet
// V 1.3
// Implementation of hierarchical deterministic wallets (or "HD Wallets")
const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
        HD Wallet
      </Typography>
      <Typography sx={{ fontSize: 12 }} color='text.secondary' gutterBottom>
        V 1.3
      </Typography>
      <Typography variant='body2'>Implementation of hierarchical deterministic wallets (or "HD Wallets")</Typography>
    </CardContent>
    <CardActions>
      <Typography variant='caption'>by Honeypotz</Typography>
    </CardActions>
  </React.Fragment>
)
