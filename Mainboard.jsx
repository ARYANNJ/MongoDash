import { Box } from '@mui/material'
import React from 'react'
import TodoList from './micro-components/TodoList.jsx'
import Message from './micro-components/Message.jsx'
import MainChart from './micro-components/MainChart.jsx'

const Mainboard = () => {
  return (
<Box   position="relative" marginLeft="160px" sx={{background:"black" ,height:"720px" ,borderRadius:"0px 0px 0px 30px"}} >
<Box display={'flex'}  padding={'20px'} marginLeft={'80px'}>
 <Box sx={{height:"280px" ,width:"500px" ,background:"rgb(244,241,232)",marginRight:"60px",borderRadius:"20px",overflow:"auto"}}>
 <TodoList/>
 </Box>
 <Box sx={{  height:"280px" ,width:"500px" ,background:"rgb(255,120,78)",borderRadius:"20px",overflow:"auto"}}>
<h3 style={{marginLeft:"15px",marginTop:"8px" ,color:"white"}}>Inbox</h3>
 <Message/>
 </Box>
</Box>
<Box display={'flex'}  marginLeft="80px" padding={'20px'}>
<Box sx={{height:"350px" ,width:"500px" ,background:"rgb(29,30,32)",marginRight:"60px",borderRadius:"20px",overflow:"auto"}}>
<MainChart/>
</Box>
<Box sx={{height:"350px" ,width:"500px" ,background:"rgb(29,30,32)",marginRight:"60px",borderRadius:"20px",overflow:"auto"}}>

</Box>
</Box>
</Box>
  )
}

export default Mainboard