import './App.css';
import React from 'react'
import Navbar from './Componet/Navbar/Navbar';
import Navcard from "./Componet/Home/Navcard"
import { Box } from '@mui/system';


const App = () => {
  return (
    <>
      <Navbar/>
   
    <Box>
    <Navcard/>
    </Box>
    
      
    </>
  )
}

export default App
