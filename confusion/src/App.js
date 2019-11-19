import  React, { Component } from 'react';
import Menu from './components/MenuComponent';
import {
    Navbar,
    NavbarBrand,
    Media
} from 'reactstrap';

const thought1 = "Choose high-leverage activities"

class App extends Component {

    render() {
        return (
 
      <div className="App">
        <Navbar dark color="danger">
          <div className="container">

      <Media left href="#">
        <Media object src="assets/images/logo.png" alt="Logo for con Fusion restaurant" />
      </Media>




            <NavbarBrand href="/">{thought1} and {thought1}</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>



        );
    }
}

export default App;