import React from 'react'
import Grid from '@mui/material/Grid'
import AppsScreen from 'src/views/apps'
import Title from 'src/views/elements/Title'
import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'

// import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'

const UserList = () => {
  return (
    <React.Fragment>
      <BreadcrumbsComponent
        list={[
          { href: '/app', name: 'Home' },
          { href: '/app', name: 'apps' }
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
          <Title heading='Apps' />
          <AppsScreen />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserList
