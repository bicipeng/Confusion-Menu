import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb
} from "reactstrap";
import DishComments from "./DishComments";
import { Link } from "react-router-dom";

const DishDetail = props => {
  const dish = props.dish;
  const comments = props.comments;
  console.log("8*******", props.comments);

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
           <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{props.dish.name}</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg with="100%" src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          {comments ? (
            <div>
              <h4>Comments</h4>
              {comments.map((comment, index) => (
                <DishComments comment={comment} key={index} />
              ))}
               <div>
          Here
        </div>
            </div>
          ) : null}
        </div>
       
      </div>
    </div>
  );
};

export default DishDetail;
