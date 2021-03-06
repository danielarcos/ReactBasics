import React from 'react';
import { Card, CardImg, CardText, CardBody, Media, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({dish}) {
    return(
        <FadeTransform
            in
            transformProps={{
                exitTransform: 'scale(0.5) translateY(-50%)'
            }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </FadeTransform>
    );
};

function RenderComments ({comments}) {
    const cardComment = comments.map((comment) => {
        return(
            <Fade in>
                <Media tag="li">
                    <Media body>
                        <Media heading>{comment.author}</Media>
                        <p>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        <p>{comment.comment}</p>
                    </Media>
                </Media>
            </Fade>
        );
    });

    return (<Media list><Stagger in>{cardComment}</Stagger></Media>)
};

const DishDetail = (props) => {
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                        <Breadcrumb>
    
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>                
                    </div>
                <div className="row">
                    <div  className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div class="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments}/>
                        <CommentForm dishId={props.dish.id} postComment={props.postComment}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;