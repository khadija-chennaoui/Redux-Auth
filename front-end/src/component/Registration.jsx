import React , { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'


const Registration = () => {

const [user ,setUser] = useState('')


function handlChange(e){
  const val = e.target.value;
  setUser({
    ...user,
    [e.target.name]: val,
  });
}
const dispatch =useDispatch() 
 function handleSubmit(e) {
  e.preventDefault();
    const res = axios.post("http://localhost:5000/api/auth/register", user)


    dispatch({
        type : 'REGISTER',
        payload : res
        
    })

  console.log("here data" ,dispatch.payload)

  //  axios
  //   .post("http://localhost:5000/api/auth/register", user)
  //   .then((res) => {
  //     if (res.data) {
       
  //     } 
  //     if(res.data.message){
      
  //     }
  //   })
  //   .catch((error) => console.log(error));
}




  return (
    <>
    <form className="register" onSubmit={handleSubmit}>
        <input type="text" placeholder='Fullname' name='name' onChange={handlChange} />
        <input type="email" placeholder='Email' name='email' onChange={handlChange}/>
        <input type="password" placeholder='Password' name='password' onChange={handlChange}/>
        <input type="phone" placeholder='Phone' name='phone' onChange={handlChange}/>
        <input type="button" value="Register" onClick={handleSubmit}/>
    </form>
    </>
  )
}

export default Registration