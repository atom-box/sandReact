import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

class Menu extends Component {
    constructor(props){
    super(props);
    this.setState = this.setState.bind(this);
  }
handleClick(dish){
     this.props.ifClick(dish);
     console.log(`Clicked [${dish}] named ${dish.name}`)
}





    render() {
      const menu = this.props.dishes.map((dish) => {
        return (
          <div key={dish.id} className="col-12 col-md-5 m-1">
            <Card onClick={() => this.handleClick(dish)}>



              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name} </CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
            );
        })

        return (
            <div className="row">
                  {menu}
            </div>
        );
    }
}

export default Menu;