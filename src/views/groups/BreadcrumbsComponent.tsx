import React from 'react'
import { Breadcrumbs, Link as MuiLink } from '@mui/material'

type List = {
  href: string
  name: string
}

type Props = {
  list?: List[]
}

const BreadcrumbsComponent = ({ list }: Props) => {
  return (
    <React.Fragment>
      {list && list.length === 0 ? null : (
        <Breadcrumbs
          aria-label='breadcrumb'
          sx={{
            fontSize: 10
          }}
        >
          {list &&
            list.map((item, index) => {
              return (
                <MuiLink key={index} underline='hover' color='inherit' href={item.href}>
                  {item.name}
                </MuiLink>
              )
            })}
        </Breadcrumbs>
      )}
    </React.Fragment>
  )
}
export default BreadcrumbsComponent
