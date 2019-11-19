import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class DishDetail extends Component {

      renderDish(dish) {
        if (dish.dish != null) {
        console.log(`dish was okay: [${dish.dish.name}]`);

          return(
            <Card className="col-12 col-md-5 m-1">
              <CardImg width="100%" src={dish.dish.image} alt={dish.dish.name} />
              <CardBody>
                <CardTitle>{dish.dish.name}</CardTitle>
                <CardText>{dish.dish.description}</CardText>
              </CardBody>
            </Card>
          )
        } else {
        console.log(`dish was null: [${dish.dish}]`);

          return(
            <div>poo</div>
          )
        }
      }


  render() {
    return (
            <div className="row">
                  {this.renderDish(this.props)}
            </div>
    )
  }
}


export default DishDetail;