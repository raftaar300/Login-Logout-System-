import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home.js'
import Navbar from './Navbar.js'
import Aboutus from './Aboutus.js'
import {BrowserRouter as Router  , Route , Switch} from 'react-router-dom'

import {SignUpData} from './actions/Index.js'
import  LoginPage from './LoginPage.js';
function Template(props) {
  console.log("app" , props)
  return ( 
  <>   <Router>
            <Navbar/>
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/aboutus' component = {Aboutus}/>
              <Route exact path = '/signup' component = {SignUpData}/>
              <Route exact path =  {`/${props.loginDatas.email}`} component = {LoginPage}/>
            </Switch>
         </Router>
  </>
  )
}

export default Template;
