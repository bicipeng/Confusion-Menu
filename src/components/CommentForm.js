import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Button, Label, Col, Row } from "reactstrap";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      isModalOpen:false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
toggleModal(){
  this.setState({
    isModalOpen:!this.state.isModalOpen
  })
}
  handleSubmit(values) {
    console.log("*****")
    console.log("current state is " + JSON.stringify(values));
    alert("current sate is " + JSON.stringify(values));
  }
  render() {
    return (
      <div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Submit Comment</h3>
          </div>
          <div className="col-12 col-md-9">
            <LocalForm onSubmit={values => this.handleSubmit(values)}>
              <Row className="form-group">
                <Label htmlFor="rating" md={2}>
                  Rating
                </Label>
                <Col md={10}>
                  <Control.select
                    model=".rating"
                    id="rating"
                    name="rating"
                    className="form-control"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="yourname" md={2}>
                  Your Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".yourname"
                    id="yourname"
                    name="yourname"
                    placeholder="Your Name"
                    className="form-control"
                    validators={{
                      required,
                      minLength: minLength(3),
                      maxLength: maxLength(15)
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".yourname"
                    show="touched"
                    messages={{
                      required: "Required",
                      minLength: "Must be greater than 2 characters",
                      maxLength: "Must be 15 characters or less"
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="comment" md={2}>
                  Comment
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".comment"
                    id="comment"
                    name="comment"
                    placeholder="comment"
                    className="form-control"
                    rows="12"
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit Comment
                  </Button>
                </Col>
              </Row>
            </LocalForm>
          </div>
        </div>
      </div>
    );
  }
}

export default CommentForm;