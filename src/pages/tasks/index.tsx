import React from 'react'
import Grid from '@mui/material/Grid'
import { useImmer } from 'use-immer'
import Title from 'src/views/elements/Title'
import { styled } from '@mui/material/styles'
import { TabContext, TabPanel as MUITabPanel } from '@mui/lab'
import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'
import { Card, Tab, Tabs, ToggleButton, ToggleButtonGroup } from '@mui/material'
import PendingScreen from 'src/views/tasks/PendingScreen'
import { Box } from '@mui/system'
import CompletedScreen from 'src/views/tasks/CompletedScreen'
import FailedScreen from 'src/views/tasks/FailedScreen'

const TabPanel = styled(MUITabPanel)(({}) => ({
  margin: 0,
  padding: 0,
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column'
}))

const UserList = () => {
  const [state, setState] = useImmer({
    page: 'PENDING'
  })

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: string) => {
      setState(draft => {
        draft[key] = value
      })
    },
    [setState]
  )

  const [selected, setSelected] = React.useState('Approval')

  return (
    <React.Fragment>
      <BreadcrumbsComponent
        list={[
          { href: '/app', name: 'Home' },
          { href: '/app', name: 'Tasks' }
        ]}
      />
      <Grid spacing={8}>
        <Grid>
          <TabContext value={state.page}>
            <Title heading='Tasks' />
            <Card>
              <Box>
                <Tabs value={state.page} aria-label='Groups' onChange={(e, value) => onChangeState('page', value)}>
                  <Tab label='PENDING' value='PENDING' />
                  <Tab label='COMPLETED' value='COMPLETED' />
                  <Tab label='FAILED' value='FAILED' />
                </Tabs>

                <ToggleButtonGroup
                  exclusive
                  value={selected}
                  onChange={(e, v) => setSelected(v)}
                  aria-label='text alignment'
                  color='primary'
                  sx={{
                    p: theme => theme.spacing(4, 0, 0, 6)
                  }}
                >
                  <ToggleButton value='Approval' aria-label='Approval'>
                    Approval
                  </ToggleButton>
                  <ToggleButton value='Import/Export' aria-label='Import/Export'>
                    Import/Export
                  </ToggleButton>

                  <ToggleButton value='App credentials' aria-label='App credentials'>
                    App credentials
                  </ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <TabPanel value={'PENDING'}>
                <PendingScreen />
              </TabPanel>
              <TabPanel value={'COMPLETED'}>
                <CompletedScreen />
              </TabPanel>
              <TabPanel value={'FAILED'}>
                <FailedScreen />
              </TabPanel>
            </Card>
          </TabContext>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserList
