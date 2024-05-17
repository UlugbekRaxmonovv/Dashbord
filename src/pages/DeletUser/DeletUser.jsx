import React from 'react';
import Search from '../../component/Search/Search'
import Box from '@mui/material/Box';
import Saidbar from '../../component/Saidbar/Saidbar'


const DeletUser = () => {
    return (
        <div>
              <Box sx={{ display: 'flex' }}>
                <Saidbar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Search/>
            </Box>
            </Box>

        </div>
    );
}

export default DeletUser;
