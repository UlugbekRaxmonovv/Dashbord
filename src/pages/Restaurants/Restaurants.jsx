
import React from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import Restauran from '../../component/Restauran/Restauran';
import Search from '../../component/Search/Search';

const Restaurants = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Restauran/>
      </Box>
            </Box>
        
        </div>
    );
}

export default Restaurants;

