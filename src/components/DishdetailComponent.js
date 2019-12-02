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
import Loading from "./LoadingComponent";

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
    const dish = this.props.dish;
    const comments = this.props.comments;

    return (
      <>
        (this.props.isLoading) ? (
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
        ):(({this.props.errMess})?(
        <div className="container">
          <div className="row">
            <h4>{this.props.errMess}</h4>
          </div>
        </div>
        ):
        (<div className="container">
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
        </div>)
        )
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <CommentForm
              toggle={this.toggleModal}
              dishId={this.props.dish.id}
              addComment={this.props.addComment}
            />
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default DishDetail;
