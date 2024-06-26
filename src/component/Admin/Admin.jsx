import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Admin.css'
import axios  from '../../api';
import { MdPeopleAlt } from "react-icons/md";
import rasm1 from '../../assets/img/funn.png'
import rasm2 from '../../assets/img/delet.png'
import rasm3 from '../../assets/img/pen 1.png'
import rasm4 from  '../../assets/img/minu.png'
import { CiSearch } from "react-icons/ci";
import { VscBell } from "react-icons/vsc";


const links ={
    card:"",
    date_of_birth:"",
    email:"",
    full_name:"",
    gender:"",
    password:"",
    phone_number:"",
  }

const Admin = () => {


    const [user,setUser] = useState([])
    const [modul,setModul] = useState(false)
    const [name,setName] =useState(links)
    const[ count,setCount] = useState(0)
    const[ count1,setCount1] = useState([])  
    const [render,setrender] = useState(true)
    const [ediedForm,setEdiedForm] = useState([])
    const [img,setImg] = useState(false)
    const [search,setSearch] = useState('')

    document.body.style.overflow =  modul ? "hidden" : "auto"
     let javob = count1
     let javob1 = javob / 10 
     let javob2 = Math.ceil(javob1)

    useEffect(() =>{
      axios
      .get(`/admins/list?limit=10&page=${count + 1}`)
       .then((arr)=>  setUser(arr.data.users))
       .catch((err) => console.log('>>>>>>',err))
    },[count,render])





let link = user?.filter((user) =>{
    return user.full_name.toLowerCase().includes(search.toLowerCase())
          || user.email.toLowerCase().includes(search.toLowerCase())
})?.map((user)=>(
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
        <img src={rasm3} alt=""  onClick={() => getTable(user.id)} />
        <button onClick={() => deleteUser(user.id)}>
        <img src={rasm2} alt="" />
        </button>
            </div>
        </td> 
        </tr>
    </> ))



// const getTable = (id) =>{
//     axios
//     .get(`/admins/${id}`)
//     .then(response => {
//         console.log(response);
//         // setEdiedForm(response.data);
//     })
// }
    
const deleteUser = (id) =>{
     if(window.confirm('Are you sure you want to delete')){
        axios
        .delete(`/admins/{id}?id=${id}`)
        .then(response => {
            setrender(response);
        })
     }


    
    }


    useEffect(() =>{
        axios
        .get('/admins/list?limit=10&page=1')
        .then((res) =>{
            setCount1(res.data.count);
        })

    },[])



  const AddTable = (event) =>{
    event.preventDefault()
    setName(links)
    axios
    .post('/admins',name)
    .then(response => {
        setrender(p => !p)
        console.log(response);
    })
    .catch(arr => console.log(" >>>>>>>>>>" ,arr))
     }
    return (

        <>


<div className='container'>
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
                  <button>Submit</button>
                  </form> 
                 </div>          
             </div>
        
     
        <div>
             <section className='UserAdd'>
        <div className='container'>
            <div className="UserAdd_i">
                <div className="UserAdd_l">
                <div className="UserAdd_u">
                <Link > <p>Admin List</p></Link>

                </div>
                
                </div>
        
                 <div className="btn-2">
                    <button className="btn-1" onClick={() => setModul(!modul)}>ADD NEW USER</button>
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


{link}



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
        </div>
        </>
    );
}


export default Admin;
