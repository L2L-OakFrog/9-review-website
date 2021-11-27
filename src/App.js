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
import Page from './Component/Page1/Page';

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
              <Route path='/extra/:extraId/:s'>
                <Extra></Extra>
              </Route>
              <Route
                path="/page"
                render={(props) => (
                  <Page title="Gallery">
                    <Extra {...props} />
                  </Page>
                )}
              />

              <Route
                path="/profile"
                render={(props) => (
                  <Page title="User Profile">
                    <About {...props} />
                  </Page>
                )}
              />
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
