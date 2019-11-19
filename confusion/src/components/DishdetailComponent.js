import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class DishDetail extends Component {

      renderDish(dish) {
        if (dish != null) {
          return(
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          )
        } else {
          return(
            <div></div>
          )
        }
      }


  render(dish) {
    return (
            <div className="row">
                  {this.renderDish(this.props.dish)}
            </div>
    )
  }
}


export default DishDetail;