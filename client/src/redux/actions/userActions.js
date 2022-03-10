import axios from "axios";
import {message} from "antd";

export const registerUser=(values)=>async dispatch=>{

    dispatch({type : 'LOADING' , payload : true})

    try {
        await axios.post('/api/users/register' , values)
        message.success('User Registered Succsesfully')
        setTimeout(() => {
          window.location.href='./login'
        }, 1000);
        dispatch({type : 'LOADING' , payload : false})
    } catch (error) {
           message.error('Something went wrong, please try later')
           dispatch({type : 'LOADING' , payload : false})
    }
}

export const loginUser=(values)=>async dispatch=>{

    dispatch({type : 'LOADING' , payload : true})

    try {
       const user =  await axios.post('/api/users/login' , values)
        message.success('Login sucess')
        localStorage.setItem('user', JSON.stringify(user.data))
        setTimeout(() => {
          window.location.href='/'
        }, 1000);
        dispatch({type : 'LOADING' , payload : false})
    } catch (error) {
           message.error('INVALID CREDENTIALS')
           dispatch({type : 'LOADING' , payload : false})
    }
}