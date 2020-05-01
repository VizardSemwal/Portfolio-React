import React from 'react';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import PortFolio from './portfolio/PortFolio';
import ContactUs from './contactus/ContactUs';
import AboutUs from './aboutus/AboutUs';
import Home from './home/Home';
import Modal from './components/Modal'


function App() {
  return (
    <React.Fragment>
       
       <div>
       <Navbar />
       <Switch>
              <Route exact path="/"  component={Home} />
               <Route path="/portfolio"   component={PortFolio} />
               <Route path="/contactus"  component={ContactUs} />
               <Route path="/aboutus"  component={AboutUs} />
               

       </Switch>

       </div>
      <Modal />
    </React.Fragment>
  );
}

export default App;
