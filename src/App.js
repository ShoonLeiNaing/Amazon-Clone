
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
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
