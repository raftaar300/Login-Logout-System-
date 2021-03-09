
import React  , {useState}from 'react';
import {useDispatch} from 'react-redux' 
import {Navbar , Nav  } from 'react-bootstrap'
import { BrowserRouter as Router , useHistory} from "react-router-dom";
import { Userseacrch } from '../../actions/Index';

function Navbars() {
  const [email, setemail] = useState('')
  const dispatch = useDispatch(); 
  const history  = useHistory();
  const handlesearch =(e)=>{
    e.preventDefault();
    dispatch(Userseacrch({email : email} , history))

  }
  
  return (<>
   <Router>

<Navbar collapseOnSelect style = {{margin: "auto"  , borderRadius: "5px"}}expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Salary Ninja</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">

    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/aboutus">About Us</Nav.Link>
   
    </Nav>
    {


    <Nav>
  
      <form>
        <input style = {{marginLeft : "5px" , borderRadius : "7px"}} placeholder = "Seacrch User by 'EMAIL'" onChange = {(e)=>setemail(e.target.value)} />
         <button style = {{marginLeft : "5px" , borderRadius : "7px"  , color : "black" , backgroundColor : "gray"}} onClick={handlesearch}>Search</button>
      </form>
    </Nav>
    }
  </Navbar.Collapse>
</Navbar>

  </Router>
  </>);
}

export default Navbars;