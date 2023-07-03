import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useImmer } from 'use-immer'
import Title from 'src/views/elements/Title'
import { styled } from '@mui/material/styles'
import SearchBar from 'src/views/groups/SearchBar'
import { TabContext, TabPanel as MUITabPanel } from '@mui/lab'
import { Tab, Tabs } from '@mui/material'
import UsersScreen from 'src/views/users/UsersScreen'
import CustomAccountRoles from 'src/views/users/CustomAccountRoles'

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
    page: 'USERS'
  })

  const onChangeState = React.useCallback(
    (key: keyof typeof state, value: string) => {
      setState(draft => {
        draft[key] = value
      })
    },
    [setState]
  )

  // USERS
  // CUSTOM ACCOUNT ROLES

  return (
    <React.Fragment>
      {/* <BreadcrumbsComponent /> */}
      <Grid spacing={8}>
        <Grid>
          <TabContext value={state.page}>
            <Box>
              <Tabs value={state.page} aria-label='Groups' onChange={(e, value) => onChangeState('page', value)}>
                <Tab label='USERS' value='USERS' />
                <Tab label='CUSTOM ACCOUNT ROLES' value='CUSTOM ACCOUNT ROLES' />
              </Tabs>
            </Box>
            <TabPanel value={'USERS'}>
              <Title heading='Users' />
              <SearchBar />
              <UsersScreen />
            </TabPanel>
            <TabPanel value={'CUSTOM ACCOUNT ROLES'}>
              <Title
                heading='Custom Account Roles'
                paragraph='Create custom account roles with a custom set of permissions that can be assigned to users to allow fine-grained control over their actions in the Fortanix DSM account.'
              />

              <CustomAccountRoles />
            </TabPanel>
          </TabContext>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default UserList
