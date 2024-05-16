import React,{useState,useEffect} from 'react';
import './UserAdd.css'
import rasm1 from  '../../assets/img/funn.png'
import rasm2 from '../../assets/img/delet.png'
import rasm3 from '../../assets/img/pen 1.png'

const UserAdd = () => {
    return (
        <>
        <section className='UserAdd'>
        <div className='container'>
            <div className="UserAdd_i">
                <div className="UserAdd_l">
                <div className="UserAdd_u">
                    <p>Users List</p>
                </div>
                <div className="UserAdd_u_l">
                    <p>Deleted Users List</p>
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
    <th>Date of admission</th>
    <th></th>
  </tr>
  <tr>
    <td>
        <div className="tr">
        <div className="tr_th">
        <img src={rasm1} alt="" />
            </div>
            <div className="tr_th">
            Alfreds Futterkiste
            </div>
        </div>
        </td>
    <td>Maria Anders</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>Germany</td>
    <td>
        <div className="delet">
    <img src={rasm3} alt="" />
    <button>
    <img src={rasm2} alt="" />
    </button>
        </div>
    </td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
    <td>Mexico</td>
    <td>Mexico</td>
    <td>
        <div className="delet">
    <img src={rasm3} alt="" />
    <button>
    <img src={rasm2} alt="" />
    </button>
        </div>
    </td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
    <td>Austria</td>
    <td>Austria</td>
    <td>
        <div className="delet">
    <img src={rasm3} alt="" />
    <button>
    <img src={rasm2} alt="" />
    </button>
        </div>
    </td>
  
  </tr>

</table>



        </div>
        </section>
       
        </>
    );
}

export default UserAdd;
