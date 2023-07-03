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

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Table Components Imports
import { Button } from '@mui/material'
import React from 'react'
import { rows } from 'src/@fake-db/table/static-data'

// EXPIRES
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
    minWidth: 150,
    field: 'keyops',
    headerName: 'KEYOPS',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        keyops
      </Typography>
    )
  },
  {
    minWidth: 110,
    field: 'group',
    headerName: 'GROUP',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Group
      </Typography>
    )
  },
  {
    minWidth: 120,
    headerName: 'CREATED BY',
    field: 'created-by',
    valueGetter: params => new Date(params.value),
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Created By
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
    field: 'type',
    minWidth: 120,
    headerName: 'TYPE',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        TYPE
      </Typography>
    )
  },
  {
    field: 'size-curve',
    minWidth: 120,
    headerName: 'SIZE/CURVE',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Size Curve
      </Typography>
    )
  },

  {
    field: 'expires',
    minWidth: 120,
    headerName: 'EXPIRES',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Expires
      </Typography>
    )
  }
]

const SecurityObjectsScreen = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <Card>
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
    </React.Fragment>
  )
}

export default SecurityObjectsScreen
