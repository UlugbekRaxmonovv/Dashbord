import React from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import Admin from '../../component/Admin/Admin';
import Search from '../../component/Search/Search'


const Admins = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Search/>
          <Admin/>
      </Box>
            </Box>
        
        </div>
    );
}

export default Admins;


