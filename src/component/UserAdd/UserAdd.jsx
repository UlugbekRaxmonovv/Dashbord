import React,{useState,useEffect} from 'react';
import './UserAdd.css'
import rasm1 from  '../../assets/img/funn.png'
import rasm2 from '../../assets/img/delet.png'
import rasm3 from '../../assets/img/pen 1.png'
import { MdPeopleAlt } from "react-icons/md";
import axios from '../../api'
import { Link } from 'react-router-dom';
// import UserPutForm from './UserPutForm/UserPutForm';
import rasm4 from  '../../assets/img/minu.png'
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { toast } from 'react-toastify';

const links ={
    full_name:"",
    email:"",
    password:"",
    phone_number:"",
    gender:"",
    date_of_birth:"",
    card:"",
  }

const UserAdd = () => {
    const [user,setUser] = useState([])
    const [modul,setModul] = useState(false)
    const [name,setName] =useState(links)
    const[ count,setCount] = useState(0)
    const[ count1,setCount1] = useState([])  
    const [render,setrender] = useState(true)
    const [ediedForm,setEdiedForm] = useState([])
    const [img,setImg] = useState(false)
    const [form,setForm] = useState(null)
    const [search,setSearch] = useState('')
    const [modulall,setModulAll] = useState(null)
    const [menu, setMenu] = useState(false)
    const [loading, setLoading] = useState(false)
    const [menu1, setMenu1] = useState(false)

    document.body.style.overflow =  menu ? "hidden" : "auto"
    document.body.style.overflow =  modul ? "hidden" : "auto"
     let javob = count1
     let javob1 = javob / 10 
     let javob2 = Math.ceil(javob1)



    //  limit///////////////////////////////
    useEffect(() =>{
      axios
      .get(`/users/list?limit=10&page=${count + 1 }&column=role&value=user`)
       .then((arr)=>  setUser(arr.data.users))
       .catch((err) => console.log('>>>>>>',err))
    },[count,render])




//   table////////////////////////////
let link =    user?.filter((user) =>{
    return user.full_name.toLowerCase().includes(search.toLowerCase())
   
})?.map((user)=>(
    <>
    <tr key={user.id} >
    <td  onClick={() =>setModulAll(user) || setMenu(!menu)}>
            <div className="tr">
            <div className="tr_th">
                {
                    img ? 
                    <img src={user?.profile_img} alt="img" />
                    :<MdPeopleAlt style={{fontSize:'30px',color:'gray'}} />
                }
                </div>
                <div className="tr_th">  
                {user.full_name}
                </div>
            </div>
            </td>
        <td  onClick={() =>setModulAll(user) || setMenu(!menu)} className='email'>{user.email}</td>
        <td  onClick={() =>setModulAll(user) || setMenu(!menu)}>{user.phone_number}</td>
        <td  onClick={() =>setModulAll(user) || setMenu(!menu)}>{user.id}</td>
        <td  onClick={() =>setModulAll(user) || setMenu(!menu)}> {user.created_at} </td>
        <td>
            <div className="delet">
        <img src={rasm3} alt=""  onClick={() => setForm(user)} />
        <button onClick={() => deleteUser(user.id)}>
        <img src={rasm2} alt="" />
        </button>
            </div>
        </td> 
        </tr>
    </> ))



// const getTable = (id) =>{
//     axios
//     .get(`/users/${id}`)
//     .then(response => {
//         setEdiedForm(response.data);
//     })
// }
   

// delete////////////////////////////
const deleteUser = (id) =>{
     if(window.confirm('Are you sure you want to delete')){
        axios
        .delete(`/users/{id}?id=${id}`)
        .then(response => {
            setrender(response);
        })
     }

    }

// Length ///////////////////////
    useEffect(() =>{
        axios
        .get('/users/list?limit=10&page=1&column=role&value=user')
        .then((res) =>{
            setCount1(res.data.count);
        })

    },[])








// table push//////////////////
  const AddTable = (event) =>{
    event.preventDefault()
    setName(links)
    setLoading(true)
    axios
    .post('/users',name)
    .then(response => {
        setrender(p => !p)
        console.log(response);
        setModul(false)
        toast.success("Ma'lumot yaratildi")


    })
    .catch(arr => {
        console.log(" >>>>>>>>>>" ,arr)
        toast.error('Xato')

    })
    .finally(() => setLoading(false));
  }


    return (
        <>

<div className='container'>

<div className={`resturan${menu ? "modul" : ""}`}>
          <div className="resturan_All">
            <VscChromeClose onClick={() => setMenu(!menu)} />
            <div className="resturan_row">
                <img width={120} src={modulall?.profile_img} alt="" />
                <p title={modulall?.id}><span>Id :</span>{modulall?.id}</p>
                <p><span>Full Name: </span>{modulall?.full_name}</p>
                <p><span>Date Of Birth: </span>{modulall?.date_of_birth}</p>
                <p><span>Email: </span>{modulall?.email}</p>
                <p> <span>Phone Number : </span> {modulall?.phone_number}</p>
                <p><span>Role : </span>{modulall?.role}</p>
                <p><span>Card : </span>{modulall?.card}</p>
                
                <p><span>Created At : </span>{modulall?.created_at}</p>
                <p> <span>Updated At : </span>{modulall?.updated_at}</p>
                <p><span>Deleted At : </span>{modulall?.deleted_at}</p>
              
            </div>
          </div>
         </div>


            <div className="search">
                <div className="search_all">
                <Link to={'/home'}> <img src={rasm4} alt="" /></Link>
                </div>
                <div className="search_al">
                <div className="search_alt">
                <div className="search_alt_row">
                <input type="text" placeholder="Search"  
                value={search}
                onChange={e => setSearch(e.target.value)}
                />
                    <CiSearch />
                    </div> 
                    <div className="search_alt_row">
                    <VscBell />

                    </div>
                </div>
                </div>
            </div>
        </div>
        
   

        
       
           <div className={`all ${modul ? "show" : "all"}`} onClick={() => setModul(false)}>
            
           </div>
          
          <div className={`modal ${modul ? "show" : "modal"}`}>
            <div className="modal_row">
                 <form action="" onSubmit={AddTable}>
                 <label htmlFor="">FullName</label> <br />
                 <input
                 value={name.full_name}
                 onChange={ e =>  setName(prev => ({...prev, full_name: e.target.value}))}
                 type="text" /> <br />
                 <label htmlFor="">Email</label> <br />
                 <input
                  value={name.email}
                  onChange={ e =>  setName(prev => ({...prev, email: e.target.value}))}
                  type="email" /> <br />
                 <label htmlFor="">Password</label> <br />
                 <input type="password" name="password"
                  value={name.password}
                  onChange={ e =>  setName(prev => ({...prev, password: e.target.value}))}
                 /><br />
                 <label htmlFor="">Phone number</label> <br />
                 <input type="number"
                  value={name.phone_number}
                  onChange={ e =>  setName(prev => ({...prev, phone_number: e.target.value}))}
                 /><br />
                 <label htmlFor="">Gender</label> <br />
                  <select name="" id="" 
                  value={name.gender}
                  onChange={ e =>  setName(prev => ({...prev, gender: e.target.value}))} 
                  >
                  <option value="male">male</option>
                  <option value="female">female</option>
                  </select> <br />
                  <label htmlFor="">Date of birth</label> <br />
                  <input type="date" 
                   value={name.date_of_birth}
                   onChange={ e =>  setName(prev => ({...prev, date_of_birth: e.target.value}))}
                  /> <br />
                 <label htmlFor="">card</label> <br />
                 <input type="number" 
                 value={name.card}
                 onChange={ e =>  setName(prev => ({...prev, card: e.target.value}))}
                 /> <br />
                 <button>{loading ? "Loading" : "Submit"}</button>
                 </form> 
                </div>          
            </div>

        <section className='UserAdd'>
        <div className='container'>
            <div className="UserAdd_i">
                <div className="UserAdd_l">
                <div className="UserAdd_u">
                <Link > <p>Users List</p></Link>

                </div>
                <div className="UserAdd_u_l">
                <Link  to={'/deletUser'}> <p>Deleted Users List</p></Link>
                </div>
                </div>
        
                 <div className="btn-2">
                    <button className="btn-1" onClick={() => setModul(!modul)}>ADD NEW USER</button>
                 </div>
            
            </div>
<div className="tabli">
<table>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Enroll Number</th>
    <th className='th'>Date of admission</th>
  </tr>


{link}



</table>
</div>
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

{/*    
   {
    form ? <UserPutForm   data={form} setData={setForm}  />
    :
    <></>
   } */}
    

       
        </>
    );
}

export default UserAdd;
