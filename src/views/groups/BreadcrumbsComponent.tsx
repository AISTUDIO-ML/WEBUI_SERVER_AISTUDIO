import React from 'react'
import { Breadcrumbs, Link as MuiLink } from '@mui/material'

const BreadcrumbsComponent = () => {
  return (
    <Breadcrumbs
      aria-label='breadcrumb'
      sx={{
        fontSize: 10
      }}
    >
      <MuiLink underline='hover' color='inherit' href='/'>
        MUI
      </MuiLink>
      <MuiLink underline='hover' color='inherit' href='/material-ui/getting-started/installation/'>
        Core
      </MuiLink>
      <MuiLink color='inherit' href='/material-ui/getting-started/installation/'>
        Core
      </MuiLink>
    </Breadcrumbs>
  )
}
export default BreadcrumbsComponent
