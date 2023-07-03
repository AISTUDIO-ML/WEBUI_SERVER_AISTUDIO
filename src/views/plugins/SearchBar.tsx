// ** React Imports

// ** Next Imports

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Icon from 'src/@core/components/icon'
import { FormControl, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'

const SearchBar = () => {
  return (
    <Grid item xs={12} spacing={4}>
      <Card>
        <FormControl
          variant='standard'
          sx={{
            width: '100%',
            p: 4
          }}
        >
          <OutlinedInput
            size='small'
            placeholder='Search...'
            startAdornment={
              <InputAdornment position='start'>
                <Icon icon='tabler:search' />
              </InputAdornment>
            }
          />
        </FormControl>
      </Card>
    </Grid>
  )
}

export default SearchBar
