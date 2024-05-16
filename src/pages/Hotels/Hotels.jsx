
import React from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import Search from  '../../component/Search/Search'
import Hotel from '../../component/Hotel/Hotel'
const Hotels = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
            <Outlet/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
           <Search/>
           <Hotel/>
           
      </Box>
            </Box>
        
        </div>
    );
}

export default Hotels;

