import React from 'react';
import {Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap'
import DishComments from './DishComments';


const DishDetail =props=>{

  const dish=props.singleDish
        return(
            <div className='row'>
                <div className="col-12 col-md-5 m-1">
            <Card >
            <CardImg with="100%" src={dish.image} alt={dish.name}/>
            <CardBody >
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            </CardBody>
        </Card> 

        </div>
        <div className="col-12 col-md-5 m-1">

{dish.comments ?  (
<div> 
    <h4>Comments</h4>
     {dish.comments.map((comment,index)=>(
        <DishComments comment={comment} key={index}/>
     ))}

     </div>
     ) : null
      } 
        </div>
         </div>
        )
    
   
}

export default DishDetail;