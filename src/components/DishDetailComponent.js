import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    render () {
        const comments = this.props.dish.comments.map((comment) => {
            return(
                <CardBody>
                    <CardTitle>{comment.author}</CardTitle>
                    <CardText>{comment.comment}</CardText>
                </CardBody>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                            <CardBody>
                                <CardTitle>{this.props.dish.name}</CardTitle>
                                <CardText>{this.props.dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div class="col-12 col-md-5 m-1">
                        <Card>
                            {comments}
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;