import React from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import Search from '../../component/Search/Search'
import Attraction from  '../../component/Attraction/Attraction'


const Attractions = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Attraction/>
      </Box>
            </Box>
        
        </div>
    );
}

export default Attractions;

