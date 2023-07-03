import React from 'react'
import Card from '@mui/material/Card'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
import AddExternalRoles from './models/AddExternalRoles'

const ExternalRolesScreen = () => {
  const [create, setCreate] = React.useState(false)

  return (
    <React.Fragment>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '300px'
        }}
      >
        <Typography textAlign={'center'}>
          It looks like you don't have any external roles yet.
          <br />
          Click "Create New External Role" to import external roles from LDAP directory.
        </Typography>
        <Button variant='contained' onClick={() => setCreate(true)}>
          CREATE NEW EXTERNAL ROLE
        </Button>
      </Card>
      <AddExternalRoles open={create} toggle={() => setCreate(false)} />
    </React.Fragment>
  )
}

export default ExternalRolesScreen
