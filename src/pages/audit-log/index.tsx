import React from 'react'
import { Button, Card, FormControl, MenuItem, Select, Typography } from '@mui/material'
import Grid from '@mui/material/Grid'
import Title from 'src/views/elements/Title'
import AuditListScreen from 'src/views/audit-logs/list'
import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'
import SearchBar from 'src/views/audit-logs/SearchBar'
import { Box } from '@mui/system'
import Icon from 'src/@core/components/icon'

const AuditLogsPage = () => {
  return (
    <React.Fragment>
      <BreadcrumbsComponent
        list={[
          { href: '/app', name: 'Home' },
          { href: '/app', name: 'audit-logs' }
        ]}
      />
      <Grid item spacing={8}>
        <Title heading='Audit Logs' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          <SearchBar />
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
                <Typography variant='h6'>Show audit log for :</Typography>
                <Button color='secondary' variant='text'>
                  Current month
                </Button>
                <Button color='secondary' variant='text'>
                  Previous month
                </Button>
                <FormControl variant='outlined' size='small'>
                  <Select value={'Select a month'}>
                    <MenuItem value={'Select'}>Select a month</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ rowGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                <Button variant='contained' sx={{ '& svg': { mr: 2 } }}>
                  <Icon fontSize='1.125rem' icon='tabler:download' />
                  Download as CSV
                </Button>
              </Box>
            </Box>
          </Card>
          <Card>
            <AuditListScreen />
          </Card>
        </Box>
      </Grid>
    </React.Fragment>
  )
}

export default AuditLogsPage
