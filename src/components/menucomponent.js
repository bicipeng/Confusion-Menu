import React from "react"; //allows you to create component
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from "./LoadingComponent";
import{baseUrl} from"../shared/baseUrl"
const RenderMenuItem = ({ dish, onClick }) => {
  return (
    <Card>
      {/*link to only allows you to put the url that you want to nevigate to   */}
      <Link to={`/menu/${dish.id}`}>
        <CardImg with="100%" object src={baseUrl+dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
};

const Menu = props => {
  console.log("what is the props in menuComponent", props.dishes.isLoading);
  const menu = props.dishes.map(dish => (
    <div key={dish.id} className="col-12 col-md-5 m-1">
      <RenderMenuItem dish={dish} />
    </div>
  ));
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  } else if (props.errMess) {
    return (
      <div className="container">
        <div className="row">
          <h4> {props.dishes.errMess}</h4>
        </div>
      </div>
    );
  } else 
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  
};

export default Menu;
