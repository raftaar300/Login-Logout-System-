import axios from 'axios';

const url = 'http://localhost:5000';

export const login =  (data)=>axios.post(`${url}/signin` , data)
export const signup = (data)=> axios.post(`${url}/signup` , data)
export const search = (data)=> axios.post(`${url}/search` , data)