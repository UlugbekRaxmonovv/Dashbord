import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { RiLogoutBoxLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IoHomeOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { MdHotel } from "react-icons/md";   
import { MdTableRestaurant } from "react-icons/md";
import { IoIosRestaurant } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { TbMenuDeep } from "react-icons/tb";
import logo from '../../assets/img/logo.png'
import './Saidbar.css'
import axios from '../../api/index'
import { useState,useEffect } from 'react';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [admin,setAdmin] = useState([])
  const [loading,setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
axios
.get('/users/token')
.then((response) =>
setAdmin(response.data))
.finally(() => setLoading(false))

  },[])




  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();

  return (
   <div className="box_row">
     <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <Divider />
        {
          loading ?  <div className="loading"></div>
          :
          <></>
        }
          <ListItem 
          className='logo'>
          <div className="logo_img">
          <img src={admin?.profile_img} alt="" />
            </div>
            <div className="logo_img">
            <h1>{admin?.full_name}</h1>
            <p>{admin?.role}</p>
            </div>
          </ListItem>
        <List>
        <ListItem disablePadding sx={{ display: 'block' }} onClick={() =>(navigate('/home'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                 <IoHomeOutline  style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() =>(navigate('/users'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <FaUser style={{fontSize:'30px'}} />
                </ListItemIcon >
                <ListItemText primary="Users" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }}  onClick={() =>(navigate('/hotels'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <MdHotel  style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="Hotels" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() =>(navigate('/restaurants'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <MdTableRestaurant style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="Restaurants" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() =>(navigate('/attractions'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <IoIosRestaurant style={{fontSize:'30px'}} />
                </ListItemIcon>
                <ListItemText primary="Attractions" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() =>(navigate('/admins'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <RiAdminFill style={{fontSize:'30px'}} />
                </ListItemIcon>
                <ListItemText primary="Admins" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>

            <ListItem  disablePadding sx={{ display: 'block' }} onClick={() =>(navigate('/'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <RiLogoutBoxLine style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText  primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>


            <ListItem  disablePadding sx={{ display: 'none' }} onClick={() =>(navigate('/deletUser'))}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                <IoMdSettings style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="deletUser" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
    
    </Box>
   </div>
  );
}
