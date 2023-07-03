import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useImmer } from 'use-immer'
import Title from 'src/views/elements/Title'
import { styled } from '@mui/material/styles'
import SearchBar from 'src/views/groups/SearchBar'
import { TabContext, TabPanel as MUITabPanel } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import PluginsScreen from 'src/views/plugins/PluginsScreen'
import PluginsLibraryScreen from 'src/views/plugins/PluginsLibraryScreen'

const TabPanel = styled(MUITabPanel)(({}) => ({
  margin: 0,
  padding: 0,
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column'
}))

const UserList = () => {
  const [state, setState] = useImmer({
    page: 'PLUGINS'
  })

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: string) => {
      setState(draft => {
        draft[key] = value
      })
    },
    [setState]
  )

  return (
    <React.Fragment>
      {/* <BreadcrumbsComponent /> */}
      <Grid spacing={8}>
        <Grid>
          <TabContext value={state.page}>
            <Box>
              <Tabs value={state.page} aria-label='Groups' onChange={(e, value) => onChangeState('page', value)}>
                <Tab label='PLUGINS' value='PLUGINS' />
                <Tab label='PLUGIN LIBRARY' value='PLUGIN LIBRARY' />
              </Tabs>
            </Box>
            <TabPanel value={'PLUGINS'}>
              <Title heading='Plugins' />
              <SearchBar />
              <PluginsScreen />
            </TabPanel>
            <TabPanel value={'PLUGIN LIBRARY'}>
              <Title heading='Plugins Library' paragraph='Runtime Encryption® Plugins' />

              <PluginsLibraryScreen />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserList

// const ExternalRoles = () => {
//   return <React.Fragment>External Roles</React.Fragment>
// }
// const CustomGroupRoles = () => {
//   return <React.Fragment>CustomGroupRoles</React.Fragment>
// }
