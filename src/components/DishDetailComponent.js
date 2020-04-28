import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

function RenderDish({dish}) {
    return(
        <Card>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
};

function RenderComments ({comments}) {
    const cardComment = comments.map((comment) => {
        return(
            <CardBody>
                <CardTitle>
                    {comment.author}, 
                    {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                </CardTitle>
                <CardText>{comment.comment}</CardText>
            </CardBody>
        );
    });

    return (<Card>{cardComment}</Card>)
};

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div class="col-12 col-md-5 m-1">
                    <RenderComments comments={props.dish.comments}/>
                </div>
            </div>
        </div>
    );
}

export default DishDetail;