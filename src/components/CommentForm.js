import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Button, Label, Row } from "reactstrap";

const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;
class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    this.props.toggle();
    console.log("current state is " + JSON.stringify(values));
    alert("current sate is " + JSON.stringify(values));
    // this.props.addComment(this.props.dishId,values.rating,values.author,values.comment)
    
  }
  render() {
    console.log("***** here, right here",this.props.addComment)
    return (
      <div>
        <div className="col-12 col-md-9">
          <LocalForm onSubmit={values => this.handleSubmit(values)}>
            <Row className="form-group">
              <Label htmlFor="rating">
                <strong>Rating</strong>
              </Label>

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
            </Row>
            <Row className="form-group">
              <Label htmlFor="yourname">
                <strong>Your Name</strong>
              </Label>

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
            </Row>
            <Row className="form-group">
              <Label htmlFor="comment">
                <strong>Comment</strong>
              </Label>

              <Control.textarea
                model=".comment"
                id="comment"
                name="comment"
                placeholder="comment"
                className="form-control"
                rows="12"
              />
            </Row>
            <Row className="form-group">
              <Button type="submit" color="primary">
                Submit Comment
              </Button>
            </Row>
          </LocalForm>
        </div>
      </div>
    );
  }
}

export default CommentForm;
