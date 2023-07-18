/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomAvatar from 'src/@core/components/mui/avatar'

// ** Utils Import
import { getInitials } from 'src/@core/utils/get-initials'

// ** Actions Imports

// ** Third Party Components

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Table Components Imports
import { Button } from '@mui/material'
import React from 'react'
import { rows } from 'src/@fake-db/table/static-data'

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

const columns: GridColDef[] = [
  {
    flex: 1,
    minWidth: 150,
    field: 'full_name',
    headerName: 'PLUGIN NAME',
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
    flex: 1,
    minWidth: 110,
    field: 'groups',
    headerName: 'GROUPS',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Plugins
      </Typography>
    )
  },

  {
    flex: 1,
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
    flex: 1,
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

const PendingScreen = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  // const store = useSelector((state: RootState) => state.user)

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <React.Fragment>
      <Grid item xs={12}>
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
            rows={[]}
            columns={columns}
            pageSizeOptions={[7, 10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
          />
        </Card>
      </Grid>
    </React.Fragment>
  )
}

export default PendingScreen
