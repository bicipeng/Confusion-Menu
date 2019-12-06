import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import DishComments from "./DishComments";
import { Link } from "react-router-dom";
import CommentForm from "./CommentForm";
import { Loading } from "./LoadingComponent";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform, Stagger } from "react-animation-components";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    console.log("****what is the prop form main component", this.props);
    const dish = this.props.dish;
    const comments = this.props.comments;
    if (this.props.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    } else if (this.props.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
      );
    } else
      return (
        <>
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/menu">Menu</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>{dish.name}</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 m-1">
                <FadeTransform
                  in
                  transformProps={{
                    exitTransform: "scale(0.5) translateY(-50%)"
                  }}
                >
                  <Card>
                    <CardImg
                      with="100%"
                      src={baseUrl + dish.image}
                      alt={dish.name}
                    />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                  </Card>
                </FadeTransform>
              </div>
              <div className="col-12 col-md-5 m-1">
                {comments ? (
                  <div>
                    <h4>Comments</h4>
                    <Stagger in>
                      {comments.map((comment, index) => (
                        <DishComments comment={comment} key={index} />
                      ))}
                    </Stagger>
                    <Button outline onClick={this.toggleModal}>
                      <span
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></span>
                      Submit Comment
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          )
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
              <CommentForm
                toggle={this.toggleModal}
                dishId={this.props.dish.id}
                postComment={this.props.postComment}
              />
            </ModalBody>
          </Modal>
        </>
      );
  }
}

export default DishDetail;
