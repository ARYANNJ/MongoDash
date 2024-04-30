import { Box } from '@mui/material'
import React from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'

const Layout = () => {
  return (
<Box  display="flex">
    <Sidebar/>
    <Navbar/>
</Box>
  )
}

export default Layout