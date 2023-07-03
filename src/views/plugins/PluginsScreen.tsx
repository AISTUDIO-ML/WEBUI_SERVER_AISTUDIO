/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// ** React Imports
import { MouseEvent } from 'react'

// ** MUI Imports
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Store Imports

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports

// ** Third Party Components

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Table Components Imports
import AddUserDrawer from 'src/views/apps/user/list/AddUserDrawer'
import { Tab, Tabs, Button } from '@mui/material'
import React from 'react'
import { rows } from 'src/@fake-db/table/static-data'

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

// ** renders client column
const renderClient = (params: GridRenderCellParams) => {
  const { row } = params
  const stateNum = Math.floor(Math.random() * 6)
  const states = ['success', 'error', 'warning', 'info', 'primary', 'secondary']
  const color = states[stateNum]

  if (row.avatar.length) {
    return <CustomAvatar src={`/images/avatars/${row.avatar}`} sx={{ mr: 3, width: '1.875rem', height: '1.875rem' }} />
  } else {
    return (
      <CustomAvatar
        skin='light'
        color={color as ThemeColor}
        sx={{ mr: 3, fontSize: '.8rem', width: '1.875rem', height: '1.875rem' }}
      >
        {getInitials(row.full_name ? row.full_name : 'John Doe')}
      </CustomAvatar>
    )
  }
}

const statusObj: StatusObj = {
  1: { title: 'current', color: 'primary' },
  2: { title: 'professional', color: 'success' },
  3: { title: 'rejected', color: 'error' },
  4: { title: 'resigned', color: 'warning' },
  5: { title: 'applied', color: 'info' }
}

const columns: GridColDef[] = [
  {
    minWidth: 150,
    field: 'full_name',
    headerName: 'NAME',
    renderCell: (params: GridRenderCellParams) => {
      // const { row } = params
      return (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {params.row.full_name}
        </Typography>
      )
    }
  },
  {
    minWidth: 180,
    field: 'users',
    headerName: 'USERS',
    renderCell: (params: GridRenderCellParams) => {
      const { row } = params

      return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {renderClient(params)}
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography noWrap variant='body2' sx={{ color: 'text.primary', fontWeight: 600 }}>
              {row.full_name}
            </Typography>
            <Typography noWrap variant='caption'>
              {row.email}
            </Typography>
          </Box>
        </Box>
      )
    }
  },
  {
    minWidth: 110,
    field: 'plugins',
    headerName: 'PLUGINS',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Plugins
      </Typography>
    )
  },
  {
    minWidth: 110,
    field: 'apps',
    headerName: 'APPS',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Plugins
      </Typography>
    )
  },
  {
    minWidth: 180,
    field: 'security-objects',
    headerName: 'SECURITY OBJECTS',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Security Objects
      </Typography>
    )
  },
  {
    type: 'created',
    minWidth: 120,
    headerName: 'CREATED',
    field: 'start_date',
    valueGetter: params => new Date(params.value),
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        {params.row.start_date}
      </Typography>
    )
  },

  {
    field: 'Description',
    minWidth: 150,
    headerName: 'DESCRIPTION',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Description
      </Typography>
    )
  }
]

const PluginsScreen = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // const store = useSelector((state: RootState) => state.user)

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const [selected, setSelected] = React.useState('All Plugins')

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card>
          <Box
            sx={{
              p: '1rem 1.5rem 0'
            }}
          >
            <ToggleButtonGroup
              exclusive
              value={selected}
              onChange={(e, v) => setSelected(v)}
              aria-label='text alignment'
              color='primary'
            >
              <ToggleButton value='All Plugins' aria-label='All Plugins'>
                All Plugins
              </ToggleButton>
              <ToggleButton value='Library Plugins' aria-label='Library Plugins'>
                Library Plugins
              </ToggleButton>

              <ToggleButton value='System Plugins' aria-label='System Plugins'>
                System Plugins
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>
          <Box
            sx={{
              py: 4,
              px: 6,
              rowGap: 2,
              columnGap: 4,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <Button color='secondary' variant='tonal' startIcon={<Icon icon='tabler:trash' />}>
                Delete Selected
              </Button>
              <Button color='secondary' variant='text'>
                Disable
              </Button>
              <Button color='secondary' variant='text'>
                Enable
              </Button>
            </Box>
            <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
              <Button variant='contained' sx={{ '& svg': { mr: 2 } }}>
                <Icon fontSize='1.125rem' icon='tabler:download' />
                Download as CSV
              </Button>
            </Box>
          </Box>
          <Card>
            <DataGrid
              autoHeight
              rows={rows}
              columns={columns}
              checkboxSelection
              pageSizeOptions={[7, 10, 25, 50]}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
            />
          </Card>
        </Card>
      </Grid>
      <AddUserDrawer open={addUserOpen} toggle={toggleAddUserDrawer} />
    </React.Fragment>
  )
}

export default PluginsScreen
