
import * as api from '../api/api.js'; 


/*api : {
login =  (data)=>axios.post(`${url}/signin` , data)
 signup = (data)=> axios.post(`${url}/signup` , data)
 search = (data)=> axios.post(`${url}/search` , data)
} */

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.login(formData);
    console.log("data" , data)
    dispatch({ type: "AUTH", king : data });
    
    router.push('/');
    alert("Logged In")
  } catch (error) {
    console.log(error);
  }
};
/*  dispatch(signup(data , history))*/ 
export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);   /*{ data , ddfasda ,sdasdfd}*/

    dispatch({ type: "AUTH", data : data });

   // router.push('/');  
      alert("Account Created")
  } catch (error) {
    console.log(error);
  }
};

export const Userseacrch = (datas , router)=>async (dispatch)=>{
  try { console.log("data going in " , datas)
      const {data} = await api.search(datas);
      dispatch({type : "search" , payload : data})
  
      router.push("/search")
  } catch (error) {
    throw(error)
  }
}