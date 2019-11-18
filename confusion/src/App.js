import  React, { Component } from 'react';
import Menu from './components/MenuComponent';
import {
    Navbar,
    NavbarBrand
} from 'reactstrap';

const thought1 = "Choose high-leverage activities"

class App extends Component {

    render() {
        return (
 
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">{thought1} and {thought1}</NavbarBrand>
          </div>
        </Navbar>
      </div>



        );
    }
}

export default App;