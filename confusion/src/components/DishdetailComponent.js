import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg , ListGroup, ListGroupItem} from 'reactstrap';

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

  renderComments() {
        if (this.props.dish.comments.length > 0 ) {
      console.log(`there are comments`);
      const listEls = this.props.dish.comments.map( (item) => {return <ListGroupItem key={item.id}>{item.comment}<br />--{item.date}, {item.author}</ListGroupItem> }  )

      return(

<ListGroup>
{listEls}
</ListGroup>
      )
    } else {
      console.log(`there are no comments`);
      return(
        <div></div>
      )
    }
  }

  render() {
    if (this.props.dish != null){
    const xxx = this.renderDish(), yyy =  this.renderComments();
      const {name, comments, id} = this.props.dish;
      console.log(name);
      console.log(comments[1].comment);
      console.log(id);


      return (
      <div className="row">
        <div >
          {xxx}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
          {yyy}
        </div >
      </div>
      )
    } else { return <div></div>}
    }
}


export default DishDetail;