import React,{useState,useEffect} from 'react';
import './UserAdd.css'
import rasm1 from  '../../assets/img/funn.png'
import rasm2 from '../../assets/img/delet.png'
import rasm3 from '../../assets/img/pen 1.png'
import axios from '../../api/index'
import { Link } from 'react-router-dom';

const UserAdd = () => {
    const [user,setUser] = useState([])
    console.log(user);


    useEffect(() =>{
      axios
      .get('/users/list?limit=10&page=1&column=role&value=user')
       .then((arr)=>  setUser(arr.data.users))
       .catch((err) => console.log('>>>>>>',err))
    },[])



//     let table =user?.map((user)=>(
//      <div key={user.id}>
//  {/* <td>
//         <div className="tr">
//         <div className="tr_th">
//         <img src={user?.profile_img} alt="" />
//             </div>
//             <div className="tr_th">
//             {user.full_name}
//             </div>
//         </div>
//         </td>
//     <td></td>
//     <td>{user.email}</td>
//     <td>{user.phone_number}</td>
//     <td>{user.id}</td>
//     <td>
//         <div className="delet">
//     <img src={rasm3} alt="" />
//     <button>
//     <img src={rasm2} alt="" />
//     </button>
//         </div>
//     </td>  */}

// </div>
//     )) 
    return (
        <>
        <section className='UserAdd'>
        <div className='container'>
            <div className="UserAdd_i">
                <div className="UserAdd_l">
                <div className="UserAdd_u">
                <Link  to={'/'}> <p>Users List</p></Link>

                </div>
                <div className="UserAdd_u_l">
                <Link  to={'/deletUser'}> <p>Deleted Users List</p></Link>
                </div>
                </div>
        
                 <div className="btn-2">
                 <img src={rasm1} alt="" />
                    <button className="btn-1">ADD NEW USER</button>
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
        <img src={user?.profile_img} alt="img" />
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
    <img src={rasm3} alt="" />
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



        </div>
        </section>
       
        </>
    );
}

export default UserAdd;
