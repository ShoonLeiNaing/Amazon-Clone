import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import {auth} from './firebase'
import { useStateValue } from './StateProvider'

function App() {
  
  const[{user},dispatch] =useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
        dispatch({
          type:'SET_USER',
          user:user
      })
    })   
    // if(user){
    //    dispatch({
    //        type:'SET_USER',
    //        user:user
    //    })
    // }else{
    //    dispatch({
    //        type:'SET_USER',
    //        user:null
    //    })
    // }
   },[])
  return (
    <Router>

      <Route path='/checkout'>
        <Header />
        <Checkout />
      </Route>
      <Route path='/login'>
          <Login/>
      </Route>
      <Route path='/' exact>
        <Header />
        <Home />
      </Route>
    </Router>
  );
}

export default App;
