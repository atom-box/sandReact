import  React, { Component } from 'react';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import {
    Navbar,
    NavbarBrand,
    Media
} from 'reactstrap';


class App extends Component {

    render() {
        return (
 
      <div className="App">
        <Navbar dark color="danger">
          <div className="container">

      <Media left href="#">
        <Media object src="assets/images/logo.png" alt="Logo for con Fusion restaurant" />
      </Media>




            <NavbarBrand href="/">cOn FuSiOn</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
        <DishDetail dish="null" />
      </div>



        );
    }
}

export default App;