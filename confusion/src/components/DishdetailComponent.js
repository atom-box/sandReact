import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';

class DishDetail extends Component {


  renderDish() {
    if (this.props.dish != null) {
      console.log(`dish was okay: [${this.props.dish.name}]`);
      return(
        <Card className="col-12 col-md-5 m-1">
          <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
          <CardBody>
            <CardTitle>{this.props.dish.name}</CardTitle>
            <CardText>{this.props.dish.description}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      console.log(`dish was null: [${this.props.dish}]`);
      return(
        <div>poo</div>
      )
    }
  }


  render() {
    if (this.props.dish != null){
    const xxx = this.renderDish(), yyy =  "horse";
      const {name, comments, id} = this.props.dish;
      console.log(name);
      console.log(comments[1].comment);
      console.log(id);


      return (
      <div>
        <div className="row">
          {xxx}
        </div>
        <div className="row">
          <h4>Comments</h4>
          {yyy}
        </div>
      </div>
      )
    } else { return <div></div>}
    }
}


export default DishDetail;