import './App.css';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Extra from './Component/Extra/Extra';
import Error from './Component/NotFound/Error';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App main-area">
      <div>
        <Router>
          <Header></Header>
          <div>
            <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/about'>
                <About></About>
              </Route>
              <Route path='/services'>
                <Services></Services>
              </Route>
              <Route path='/extra'>
                <Extra></Extra>
              </Route>
              <Route path='*'>
                <Error></Error>
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <div className='footer-area'>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
