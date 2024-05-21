import React from 'react';
import axios from '../../../api/index';

const UserPutForm = ({data,setData}) => {
    const AddCard = (e) => {
        e.preventDefault()
       let links ={
        full_name: data.full_name,
        email: data.email,
        phone_number: data.phone_number,
        card: data.card,
        date_of_birth: data.date_of_birth,

       }
       axios
       .put(`/users`,links)
       .then(res => console.log(res))
    }
    return (
        <div>
            <div onClick={() => setData(null)}  className="overfly"></div>
        <form action="" className="overly_form" onSubmit={AddCard}>
            <h2>Update user</h2>
            <input type="text" 
            placeholder='Full Name'
             value={data.full_name}
             onChange={(e) => setData(prev =>({...prev, full_name: e.target.value }))}
             />
            <input type="email"
            placeholder='Email Address'
             value={data.email}
             onChange={(e) => setData(prev =>({...prev, email: e.target.value }))}

             
             />
            <input type="number"
            placeholder='Number' 
            value={data.phone_number}
            onChange={(e) => setData(prev =>({...prev, phone_number: e.target.value }))}

            
            />
            <input type="number"
            placeholder='Card Number'
            value={data.card}
            onChange={(e) => setData(prev =>({...prev, card: e.target.value }))}

            />
            <input type="date" 
            placeholder='Date of Birth'
            value={data.date_of_birth}
            onChange={(e) => setData(prev =>({...prev, date_of_birth: e.target.value }))}

            />
              <input type="text" 
              placeholder='gender'
            value={data.gender}
            onChange={(e) => setData(prev =>({...prev, gender: e.target.value }))}

            />
            <button>Save</button>
            <button type='button' onClick={() => setData(null)}>Cancel</button>
            
        </form>
        </div>
    );
}

export default UserPutForm;
