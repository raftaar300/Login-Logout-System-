import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './component/home/Home.js'
import Navbar from './component/navbar/Navbar.js'
import Aboutus from './component/About/Aboutus.js'
import {BrowserRouter as Router  , Route , Switch} from 'react-router-dom'

import Signup from './component/login/Signup'
import Search from './component/search/search';
import {useSelector} from 'react-redux'

function App(props) {
   const selector  = useSelector((store)=>{return store.authReducer})
   console.log("selector" , selector)
  console.log("app" , props)
  return ( 
  <>   <Router>
            <Navbar/>
      
            <Switch>
              <Route exact path = '/' component = {Home} />
              <Route exact path = '/aboutus' component = {Aboutus}/>
              <Route exact path = '/signup' component = {Signup}/>
              <Route exact path = '/search' component = {Search}/>
            </Switch>
         </Router>
  </>
  )
}

export default App;