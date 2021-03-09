export const authReducer = (state = { authData: null , raman : "raman" }, action  /* {type :  , data :} */) => {
  switch (action.type) {
   /* store.authReducer : */
      case "AUTH":
          localStorage.setItem('profile', JSON.stringify({ ...action?.king }))
          localStorage.setItem('Loggedin', JSON.stringify({token : true }))
          console.log("local storage profile : ", JSON.parse(localStorage.getItem('profile')))
          console.log("local storage Logged In : ", JSON.parse(localStorage.getItem('Loggedin')))
          return { authData: action?.king }

      case "LOGOUT":
          localStorage.clear();
          alert("Logged Out See You later!!")
          return { ...state, authData: null, loading: false, errors: null };


      default:
          return state;
  }
}

export const UserSeacrch = (sresult = [] , action )=>{
    switch (action.type) {
        case "search":
             console.log("coming" , action.payload )
             return action.payload.oldUser;

    
        default:
            return sresult
           
    }
}

/* dispatch({form : "search" , data :  , second_data}) 

dispatch(signup(data , func))


*/