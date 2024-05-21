import React,{useState,useEffect} from 'react';
import rasm1 from  '../../assets/img/funn.png'
import rasm2 from '../../assets/img/delet.png'
import rasm3 from '../../assets/img/pen 1.png'
import { MdPeopleAlt } from "react-icons/md";
import axios from '../../api'
import './Hotel.css'
import { Link } from 'react-router-dom';
import UserPutForm from '../../component/UserAdd/UserPutForm/UserPutForm'
import { Filter } from '@mui/icons-material';

const links ={
    contact_number:"",
    description:"",
    hotel_name:"",
    images:[{
        image_url:"",
    }],
    location:{
    city:"", 
    latitude:"",
    country:"",
    longitude:"",
    state_province:"",
             },
website_url:"",
}


const filterAll ={
    city:"",
    country:"",
    province:"",

}
const Hotel = () => {
    const [user,setUser] = useState([])
    const [modul,setModul] = useState(false)
    const [name,setName] =useState(links)
    const[ count,setCount] = useState(0)
    const[ count1,setCount1] = useState([])  
    const [render,setrender] = useState(true)
    const [ediedForm,setEdiedForm] = useState([])
    const [img,setImg] = useState(false)
    const [owner,setOwner] = useState()
    const [form,setForm] = useState(null)
    const [filter,setFilter] = useState(filterAll)
    const [search,setSearch] = useState(false)



     let javob = count1
     let javob1 = javob / 10 
     let javob2 = Math.ceil(javob1)



    //  limit///////////////////////////////
    useEffect(() =>{
      axios
      .get(`/hotel/list?page=${count + 1}&limit=10`)
       .then((arr)=>  setUser(arr.data.hotels))
       .catch((err) => console.log('>>>>>>',err))
    },[count,render])




//   table////////////////////////////
let link =    user?.filter((user)=>{
    return user.location.city.toLowerCase().
    includes(filter.city.toLowerCase()) && 
    user.location.city.toLowerCase().
    includes(filter.country.toLowerCase()) 
    && user.location.state_province.toLowerCase().
    includes(filter.province.toLowerCase())
}).map((user)=>(
    <>
    <tr key={user.hotel_id}>
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
                {user.hotel_name}
                </div>
            </div>
            </td>
        <td>{user.location.city}</td>
        <td>{user.contact_number}</td>
        <td>{user.hotel_id  }</td>
        <td> {user.created_at} </td>
        <td>
            <div className="delet">
        <img src={rasm3} alt=""  onClick={() => setForm(user)} />
        <button onClick={() => deleteUser(user.hotel_id)}>
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
        .delete(`/hotel?hotel_id=${id}`)
        .then(response => {
           setrender(response);
        })
        .catch(err => console.log(err));
     }

    }

// Length ///////////////////////
    useEffect(() =>{
        axios
        .get('/hotel/list?page=1&limit=10')
        .then((res) =>{
            setCount1(res.data.count);
        })

    },[])

    // table push//////////////////
  const AddTable = (event) =>{
    event.preventDefault()
    setName(links)
    axios
    .post('/hotel?owner_id=ea64eb3e-a844-4ecd-861d-500e09c66897%09',name)
    .then(response => {
        setrender(p => !p)
        console.log(response);
    })
    .catch(arr => console.log(" >>>>>>>>>>" ,arr))
  }

  const FilterAdd =(e) =>{
    e.preventDefault();

  }


    return (
        <div>

            <form action="" onChange={FilterAdd}   className={`form__alll ${search ? "sorch" : <></>}`} >
         <div className="input_sorch">
            <h1>Filterlash</h1>
            <input type="text"
            placeholder='city'
            value={filter.city}
            onChange={(e) => setFilter(prive =>({...prive, city: e.target.value}))} 
           /> <br/>
            <input type="text"
            placeholder='country'
            value={filter.country}
            onChange={(e) => setFilter(prive =>({...prive, country: e.target.value}))} 
           /> <br />
            <input type="text"
            placeholder='province'
            value={filter.province}
            onChange={(e) => setFilter(prive =>({...prive, province: e.target.value}))} 
           />
           <button onClick={() => setSearch(false)}   type='button' >Cancel</button>
         </div>

            </form>


            <div className={`all ${modul ? "show" : "all"}`} onClick={() => setModul(false)}>
            
            </div>
           
           <div className={`modal ${modul ? "show" : "modal"}`}>
             <div className="modal_row">
                  <form action="" onSubmit={AddTable}>
                  <label htmlFor="">Owner id</label> <br />
                  <input
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                  type="text" /> <br />
                  <label htmlFor="">Contact Number </label> <br />
                  <input
                  value={name.contact_number}
                  onChange={ e =>  setName(prev => ({...prev, contact_number: e.target.value}))}
                  type="text" /> <br />
                  <label htmlFor="">Description</label> <br />
                  <input
                   value={name.description}
                   onChange={ e =>  setName(prev => ({...prev, description: e.target.value}))}
                   type="text" /> <br />
                  <label htmlFor=""> Hotel Name</label> <br />
                  <input type="text" name="password"
                   value={name.hotel_name}
                   onChange={ e =>  setName(prev => ({...prev, hotel_name: e.target.value}))}
                  /><br />
                  <label htmlFor="">City</label> <br />
                  <input type="text"
                   value={name.city}
                   onChange={ e =>  setName(prev => ({...prev, city: e.target.value}))}
                  /><br />
                  <label htmlFor="">Latitude</label> <br />
                <input type="text"
                value={name.latitude}
                onChange={ e =>  setName(prev => ({...prev, latitude: e.target.value}))}

                /> <br />
                   <label htmlFor="">Country</label> <br />
                   <input type="text" 
                    value={name.country}
                    onChange={ e =>  setName(prev => ({...prev, country: e.target.value}))}
                   /> <br />
                  <label htmlFor="">Longitude</label> <br />
                  <input type="text" 
                  value={name.longitude}
                  onChange={ e =>  setName(prev => ({...prev, longitude: e.target.value}))}
                  /> <br />
                  <label htmlFor="">State Province</label> <br />
                  <input type="text" 
                  value={name.state_province}
                  onChange={ e =>  setName(prev => ({...prev, state_province: e.target.value}))}
                  /> <br />
                   <label htmlFor="">Website Url</label> <br />
                  <input type="text" 
                  value={name.website_url}
                  onChange={ e =>  setName(prev => ({...prev, website_url: e.target.value}))}
                  /> <br />
                  <button>Submit</button>
                  </form> 
                 </div>          
             </div>
 
         <section className='UserAdd'>
         <div className='container'>
             <div className="UserAdd_i">
                 <div className="UserAdd_l">
                 <div className="UserAdd_u">
                 <Link > <p>Hotel List</p></Link>
 
                 </div>
                 </div>
         
                  <div className="btn-2">
                  <img onClick={() => setSearch(!search)} src={rasm1} alt="" />
                     <button className="btn-1" onClick={() => setModul(!modul)}>ADD NEW HOTEL</button>
                  </div>
             
             </div>
             <table>
   <tr>
     <th>Name</th>
     <th>City</th>
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
 
    
    {/* {
     form ? <UserPutForm   data={form} setData={setForm}  />
     :
     <></>
    } */}
     
 
        </div>
    );
}

export default Hotel;
