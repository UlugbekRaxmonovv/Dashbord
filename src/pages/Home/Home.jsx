import React, { useState, useEffect } from 'react';
import Saidbar from '../../component/Saidbar/Saidbar';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom';
import axios from '../../api/index';
import  './Home.css'
import { FaUser } from "react-icons/fa";
import { MdHotel } from "react-icons/md";   
import { MdTableRestaurant } from "react-icons/md";
import { IoIosRestaurant } from "react-icons/io";
import { RiAdminFill } from "react-icons/ri";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import Search from  '../../component/Search/Search'


const Home = () => {
    const [state, setState] = useState([]); 
    const [number,setNumber] = useState([]);
    const [user,setUser] = useState([]);
    const [attraction,setAttraction] = useState([]);
    useEffect(() => {
        axios
            .get('/restaurant/list?page=10&limit=1')
            .then((res) => {
                setState(res.data.count);
                
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() =>{
        axios
        .get('/attraction/list?page=10&limit=1')
        .then((res) =>{
            setNumber(res.data.count);
        })

    },[])

    useEffect(() =>{
        axios
        .get('/hotel/list?page=1&limit=2')
        .then((res) =>{
            setUser(res.data.count);
        })

    },[])


    useEffect(() =>{
        axios
        .get('/users/list?limit=10&page=1&column=role&value=user')
        .then((res) =>{
            setAttraction(res.data.count);
        })
        .catch((err) => console.log(">>>>>>",err))

    },[])

    return (
        <div className='container'>
            <Box sx={{ display: 'flex' }}>
                <Saidbar />
                <Outlet />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Search/>
                <div className="home_i ">
                    <Link className="home_i_lif"  to={'/hotels'}>
                     <MdHotel/>
                     <h1>Hotels</h1>
                    <Link className='Link'>{user}</Link>
                    </Link>

                     <Link className="home_i_lif" to={'/attractions'} >
                     <IoIosRestaurant/>
                     <h1>Attractions</h1>
                    <Link className='Link' >{number}</Link>
                     </Link>
                     <Link className="home_i_lif"  to={'/restaurants'} >
                     <MdTableRestaurant/>
                     <h1>Restaurants</h1>
                    <Link className='Link'>{state}</Link>
                     </Link>
                     <Link className="home_i_lif" to={'/users'}>
                     <FaUser/>
                     <h1>Users</h1>
                    <Link className='Link' >{attraction}</Link>
                     </Link>
                </div>


                 
                </Box>
            </Box>
        </div>
    );
};

export default Home;


