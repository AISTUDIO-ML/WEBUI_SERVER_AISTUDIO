import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useImmer } from 'use-immer'
import Title from 'src/views/elements/Title'
import { styled } from '@mui/material/styles'
import SearchBar from 'src/views/groups/SearchBar'
import GroupsScreen from 'src/views/groups/GroupsScreen'
import { TabContext, TabPanel as MUITabPanel } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import ExternalRolesScreen from 'src/views/groups/ExternalRoles'
import CustomGroupRolesScreen from 'src/views/groups/CustomGroupRoles'
import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'

// import BreadcrumbsComponent from 'src/views/groups/BreadcrumbsComponent'

const TabPanel = styled(MUITabPanel)(({}) => ({
  margin: 0,
  padding: 0,
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column'
}))

const UserList = () => {
  const [state, setState] = useImmer({
    page: 'Groups'
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
      <BreadcrumbsComponent
        list={[
          { href: '/app', name: 'Home' },
          { href: '/app', name: 'groups' }
        ]}
      />
      <Grid spacing={8}>
        <Grid>
          <TabContext value={state.page}>
            <Box>
              <Tabs value={state.page} aria-label='Groups' onChange={(e, value) => onChangeState('page', value)}>
                <Tab label='Groups' value='Groups' />
                <Tab label='External Roles' value='External Roles' />
                <Tab label='Custom Group Roles' value='Custom Group Roles' />
              </Tabs>
            </Box>
            <TabPanel value={'Groups'}>
              <Title heading='Groups' />
              <SearchBar />
              <GroupsScreen />
            </TabPanel>
            <TabPanel value={'External Roles'}>
              <Title heading='External Roles' />
              <ExternalRolesScreen />
            </TabPanel>
            <TabPanel value={'Custom Group Roles'}>
              <Title heading='Custom Group Roles' />
              <CustomGroupRolesScreen />
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
