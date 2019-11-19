import  React, { Component } from 'react';
import Menu from './components/MenuComponent';
import DishDetail from './components/DishdetailComponent';
import {DISHES} from './components/shared/dishes';

import {
    Navbar,
    NavbarBrand,
    Media
} from 'reactstrap';


class App extends Component {
    constructor(props){
        super(props);
        this.state = {dishes: DISHES}
    }

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
        <Menu dishes={this.state.dishes}/>
        <DishDetail dish={this.state.dishes[2]} />
      </div>



        );
    }
}

export default App;