import { Box } from '@mui/material'
import React from 'react'
import Avatar from '@mui/material/Avatar';
import img1 from "/Users/aryanjadhav/Desktop/DASHBOARD_ASSIGNMENT/frontend/src/utils/felix.jpg"
import img2 from"/Users/aryanjadhav/Desktop/DASHBOARD_ASSIGNMENT/frontend/src/utils/moist.jpg"
import img3 from"/Users/aryanjadhav/Desktop/DASHBOARD_ASSIGNMENT/frontend/src/utils/beahm.jpg"
import img4 from"/Users/aryanjadhav/Desktop/DASHBOARD_ASSIGNMENT/frontend/src/utils/mrbeast.jpg"
import img5 from"/Users/aryanjadhav/Desktop/DASHBOARD_ASSIGNMENT/frontend/src/utils/poki.jpg"
const Message = () => {
  return (
   <Box>
  <Box sx={{  boxshadow:"0 4px 2px -2px rgba(0, 0, 0, 0.2)" , background:"rgb(255,255,255)",  height:"70px" ,width:"400px",margin:"auto",marginTop:"20px", borderRadius:"20px" ,display:"flex",flexDirection:"column" }}>
  <Box sx={{marginTop:"10px",display:"flex",alignItems:"center"}}>
  <Avatar src={img1} sx={{marginLeft:"10px",marginRight:"4px",height:"30px",width:"30px"}}/><h4>Mr Rajesh</h4>
  </Box>
  <Box sx={{marginLeft:"50px"}}>
    <h5>Lets complete the report Today !</h5>
  </Box>
  </Box>
  <Box sx={{ background:"rgb(239,192,94)",  height:"70px" ,width:"400px",margin:"auto",marginTop:"20px", borderRadius:"20px" ,display:"flex",flexDirection:"column" }}>
  <Box sx={{marginTop:"10px",display:"flex",alignItems:"center"}}>
  <Avatar src={img2} sx={{marginLeft:"10px",marginRight:"4px",height:"30px",width:"30px"}}/><h4>Mr Raghu</h4>
  </Box>
  <Box sx={{marginLeft:"50px"}}>
    <h5>There is a zoom Meeting in 50mins </h5>
  </Box>
  </Box>
  <Box sx={{ background:"rgb(255,255,255)",  height:"70px" ,width:"400px",margin:"auto",marginTop:"20px", borderRadius:"20px" ,display:"flex",flexDirection:"column" }}>
  <Box sx={{marginTop:"10px",display:"flex",alignItems:"center"}}>
  <Avatar src={img3} sx={{marginLeft:"10px",marginRight:"4px",height:"30px",width:"30px"}}/><h4>Mr Jayesh</h4>
  </Box>
  <Box sx={{marginLeft:"50px"}}>
    <h5>Please send me the final draft</h5>
  </Box>
  </Box>
  <Box sx={{ background:"rgb(240,149,56)",  height:"70px" ,width:"400px",margin:"auto",marginTop:"20px", borderRadius:"20px" ,display:"flex",flexDirection:"column" }}>
  <Box sx={{marginTop:"10px",display:"flex",alignItems:"center"}}>
  <Avatar src={img4} sx={{marginLeft:"10px",marginRight:"4px",height:"30px",width:"30px"}}/><h4>Mr Rajesh</h4>
  </Box>
  <Box sx={{marginLeft:"50px"}}>
    <h5>Can i get a call back we need to make changes</h5>
  </Box>
  </Box>
  </Box>
  
  
  
 
 
   


  )
}

export default Message