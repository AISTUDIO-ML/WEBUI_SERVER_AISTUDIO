/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid'

// ** Icon Imports

// ** Custom Components Imports

// ** Utils Import

// ** Actions Imports

// ** Third Party Components

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Table Components Imports
import React from 'react'

interface StatusObj {
  [key: number]: {
    title: string
    color: ThemeColor
  }
}

// SEVERITY
// GROUPS
// IP ADDRESS
// MESSAGE
// ACTOR
// TIME
// TYPE
// RESPONSE

const columns: GridColDef[] = [
  {
    flex: 1,
    minWidth: 150,
    field: 'severity',
    headerName: 'SEVERITY',
    renderCell: (params: GridRenderCellParams) => {
      // const { row } = params
      return (
        <Typography variant='body2' sx={{ color: 'text.primary' }}>
          {/* {params.row.full_name} */}-
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
    field: 'ip-address',
    headerName: 'IP ADDRESS',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Security Objects
      </Typography>
    )
  },
  {
    flex: 2,
    field: 'message',
    minWidth: 150,
    headerName: 'MESSAGE',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Description
      </Typography>
    )
  },
  {
    flex: 1,
    minWidth: 180,
    field: 'actor',
    headerName: 'ACTOR',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Security Objects
      </Typography>
    )
  },
  {
    flex: 1,
    minWidth: 180,
    field: 'time',
    headerName: 'TIME',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Security Objects
      </Typography>
    )
  },
  {
    flex: 1,
    minWidth: 180,
    field: 'type',
    headerName: 'TYPE',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Security Objects
      </Typography>
    )
  },
  {
    flex: 1,
    minWidth: 180,
    field: 'response',
    headerName: 'RESPONSE',
    renderCell: (params: GridRenderCellParams) => (
      <Typography variant='body2' sx={{ color: 'text.primary' }}>
        Security Objects
      </Typography>
    )
  }
]

const AuditListScreen = () => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })

  return (
    <React.Fragment>
      <Grid item xs={12}>
        <DataGrid
          autoHeight
          rows={[]}
          columns={columns}
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
        />
      </Grid>
    </React.Fragment>
  )
}

export default AuditListScreen
