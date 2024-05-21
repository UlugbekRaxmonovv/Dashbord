
import React from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
    const navigate = useNavigate();
    const goHome = () => {
       navigate('/');

    }
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <button onClick={goHome}>go</button>
      </Box>
            </Box>
        
        </div>
    );
}

export default Settings;

