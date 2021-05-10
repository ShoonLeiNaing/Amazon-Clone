
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <Router>
      <Header />
      <Route path='/checkout'>
        <Checkout />
      </Route>
      <Route path='/' exact>
        <Home />
      </Route>
    </Router>
  );
}

export default App;
