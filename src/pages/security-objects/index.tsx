import React from 'react'
import Grid from '@mui/material/Grid'
import Title from 'src/views/elements/Title'
import SecurityObjectsScreen from 'src/views/security-objects'
import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'

// import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'

const SecurityObjectsPage = () => {
  return (
    <React.Fragment>
      <BreadcrumbsComponent
        list={[
          { href: '/app', name: 'Home' },
          { href: '/app', name: 'security-objects' }
        ]}
      />
      <Grid spacing={8}>
        <Grid
          sx={{
            gap: '1rem',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Title heading='Security Objects' paragraph='Keys, Secrets, Opaque objects, Certificates' />
          <SecurityObjectsScreen />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default SecurityObjectsPage
