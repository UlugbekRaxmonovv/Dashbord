import React,{useState,useEffect} from 'react';
import Saidbar from '../../component/Saidbar/Saidbar'
import Box from '@mui/material/Box';
import './Users.css'
import Search from '../../component/Search/Search'
import UserAdd from '../../component/UserAdd/UserAdd'

const Users = () => {
    return (
        <div>
            <Box sx={{ display: 'flex' }}>
            <Saidbar/>
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Search/>
        <UserAdd/>
      </Box>
            </Box>
        
        </div>
    );
}

export default Users;

