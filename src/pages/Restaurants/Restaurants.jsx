
import React from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Restaurants = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>Restaurants</h1>
      </Box>
            </Box>
        
        </div>
    );
}

export default Restaurants;

