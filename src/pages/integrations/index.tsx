import React from 'react'
import Grid from '@mui/material/Grid'
import Title from 'src/views/elements/Title'
import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'

const UserList = () => {
  return (
    <React.Fragment>
      <BreadcrumbsComponent
        list={[
          { href: '/app', name: 'Home' },
          { href: '/app', name: 'integrations' }
        ]}
      />
      <Grid spacing={8}>
        <Title heading='Integrations' />
      </Grid>
    </React.Fragment>
  )
}

export default UserList
