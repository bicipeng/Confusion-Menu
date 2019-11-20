import React, { Component } from "react";
import {
  BreadcrumbItem,
  Breadcrumb,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
  FormFeedback
} from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "Tel.",
      message: " ",
      // keep track of weather particular field has been touch or not ,only validate the input box if the field has been touch
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.validate = this.validate.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    // event.preventDefault()
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    console.log("current state is " + JSON.stringify(this.state));
    alert("current sate is " + JSON.stringify(this.state));
    event.preventDefault();
  }
  //similar to thunk, check if the sate if change
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  //to validate input info without using sequelize
  validate(firstname, lastname, telnum, email) {
    const errors = { firstname: "", lastname: "", telnum: "", email: "" };
    if (this.state.touched.firstname && firstname.length < 3)
      errors.firstname = "First name shoulbe be greater/equal to 3 character";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First name shouble <=10 character";

    if (this.state.touched.lastname && lastname.length < 3)
      errors.lastname = "last name shoulbe be greater/equal to 3 character";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "last name shouble <=10 character";

    //check if tel num only num,reg.test(is a buil-in method to check if the str is qualify)
    const reg = /^\d+$/;
    if (this.state.touched.telnum && !reg.test(telnum))
      errors.telnum = " Tel. Number should contains only numbers";
    // to validate email , filter retun true , to see whether there is an @ in the email input if
    // length not ==1, that means the filter function didn't return anything

    if (
      this.state.touched.email &&
      email.split("").filter(ele => ele === "@").length !== 1
    )
      errors.email = "Input is not an email";

    return errors;
  }
  render() {
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    // valid/invalid to ensure the inputsnare onriginally str , as we set up in state 
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5>Our Address</h5>
            <address>
              123, Dream Your Dream Road
              <br />
              Summer Town, W.R
              <br />
              WonderLand
              <br />
              <i className="fa fa-phone"></i>: +852 1234 5678
              <br />
              <i className="fa fa-fax"></i>: +852 8765 4321
              <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:alice@WonderLandFood.net">
                alice@WonderLandFood.net
              </a>
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5>Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3>Send us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                {/* md={2}  for medium and large screen, 'firstname' will occupies two col , col acts similar to div*/}
                <Label htmlFor="firstname" md={2}>
                  {" "}
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First Name"
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    value={this.state.firstname}
                    onBlur={this.handleBlur("firstname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* md={2}  for medium and large screen, 'firstname' will occupies two col , col acts similar to div*/}
                <Label htmlFor="lasttname" md={2}>
                  {" "}
                  Last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="Last Name"
                    value={this.state.lastname}
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onBlur={this.handleBlur("lastname")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* md={2}  for medium and large screen, 'firstname' will occupies two col , col acts similar to div*/}
                <Label htmlFor="telnum" md={2}>
                  {" "}
                  Contact Tel.
                </Label>
                <Col md={10}>
                  <Input
                    type="tel"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel. Number"
                    value={this.state.telnum}
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    onBlur={this.handleBlur("telnum")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* md={2}  for medium and large screen, 'firstname' will occupies two col , col acts similar to div*/}
                <Label htmlFor="email" md={2}>
                  {" "}
                  Contact Email
                </Label>
                <Col md={10}>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={this.state.email}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onBlur={this.handleBlur("email")}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />{" "}
                      <strong> May we contact you ?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                {/* md={2}  for medium and large screen, 'firstname' will occupies two col , col acts similar to div*/}
                <Label htmlFor="feedback" md={2}>
                  {" "}
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md={{ size: 10, offse: 2 }}>
                  <Button type="submit" color="primary">
                    Send Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
