import React from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import Admin from '../../component/Admin/Admin';


const Admins = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Admin/>
      </Box>
            </Box>
        
        </div>
    );
}

export default Admins;


