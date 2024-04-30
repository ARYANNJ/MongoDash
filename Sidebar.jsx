import { Box } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../utils/dash1.jpg"
const Sidebar = () => {
  return (
   <Box  width="11%" display="flex" flexDirection="column" gap="40px"  height="100%" position="absolute" textAlign="center">
     <NavLink to="/" style={{borderRadius:"100px"}} ><img style={{height:"100px", width:"100px" ,marginTop:"100px"}}  src={img}/></NavLink>	
      <NavLink to="/intensity" >Intensity</NavLink>	
      <NavLink to="/likelihood">Likelihood</NavLink>	
	 <NavLink to="/relevance">Relevance</NavLink>	
	 <NavLink to="/year">Year</NavLink>	
	 <NavLink to="/country">Country</NavLink>	
	 <NavLink to="/topics">Topics</NavLink>	
	 <NavLink to="/region">Region</NavLink>	
	 <NavLink to="/city">City </NavLink>	

    </Box>
  )
}

export default Sidebar