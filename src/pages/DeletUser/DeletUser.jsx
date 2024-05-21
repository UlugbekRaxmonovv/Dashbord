import React,{useState,useEffect} from 'react';
import Search from '../../component/Search/Search'
import Box from '@mui/material/Box';
import Saidbar from '../../component/Saidbar/Saidbar'
import { Link } from 'react-router-dom';
import rasm1 from '../../assets/img/funn.png'
import axios from '../../api/index';
import rasm2 from '../../assets/img/delet.png'
import rasm3 from '../../assets/img/pen 1.png'
import { MdPeopleAlt } from "react-icons/md";
import './DeletUser.css'


const DeletUser = () => {
    const [img,setImg] = useState(false)
    const[ count,setCount] = useState(0)
    const[ count1,setCount1] = useState([])  
    const [user,setUser] = useState([])
    useEffect(() =>{
     axios
     .get(`/users/list/deleted?limit=10&page=${count + 1 }`)
     .then((response) =>setUser(response.data.users))
    },[count])

    
    let javob = count1
    let javob1 = javob / 10 
    let javob2 = Math.ceil(javob1)
    return (
        <div>
              <Box sx={{ display: 'flex' }}>
                <Saidbar />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Search/>
                <section className='UserAdd'>
        <div className='container'>
            <div className="UserAdd_i">
                <div className="UserAdd_l">
                <div className="UserAdd_u">
                <Link  to={'/users'}> <p style={{backgroundColor:'#C4C4C4'}}>Users List</p></Link>

                </div>
                <div className="UserAdd_u_l">
                <Link  to={'/deletUser'}> <p style={{backgroundColor:'#FEAF00'}}>Deleted Users List</p></Link>
                </div>
                </div>
        
                 <div className="btn-2">
                 <img src={rasm1} alt="" />
                    <button className="btn-1" >ADD NEW USER</button>
                 </div>
            
            </div>
            <table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Enroll Number</th>
    <th className='th'>Date of admission</th>
  </tr>


{
    user?.map((user)=>(
<>
<tr key={user.id}>
<td >
        <div className="tr">
        <div className="tr_th">
              {
                    img ? 
                    <img src={user?.profile_img} alt="img" />
                    : <MdPeopleAlt style={{fontSize:'30px',color:'gray'}} />
                }
            </div>
            <div className="tr_th">
            {user.full_name}
            </div>
        </div>
        </td>
    <td>{user.email}</td>
    <td>{user.phone_number}</td>
    <td>{user.id}</td>
    <td> {user.created_at} </td>
    <td>
        <div className="delet">
    <img src={rasm3}  alt="" />
    <button>
    <img src={rasm2} alt="" />
    </button>
        </div>
    </td> 
    </tr>



    
    
</>


    )   
    )
}

</table>


<div className="btn">
    
    <div className="btn1">
        <button disabled={count <= 0} onClick={() => setCount(p => p - 1)}>previous</button>
        </div>
       <div className="number">
       <div className="btn1">
            { count + 1}...
            </div>
            <div className="btn1">
            {javob2}
            </div>
       </div>
        <div className="btn1">
        <button disabled={count ==javob2 - 1}   onClick={() => setCount(p => p + 1)}>next</button>
        
        </div>
    </div>
        </div>

        </section>
            </Box>
            </Box>

        </div>
    );
}

export default DeletUser;
