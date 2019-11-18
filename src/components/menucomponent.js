import React from 'react'; //allows you to create component
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap'


const RenderMenuItem = ({dish,onClick}) =>{

    return (
     <Card onClick={()=>onClick(dish)}  >
                      
    <CardImg with="100%" object src={dish.image} alt={dish.name}/>
    <CardImgOverlay>
    <CardTitle>{dish.name}</CardTitle>
    </CardImgOverlay>
    </Card>
    )

    }

    
  const Menu = props => {
      const menu = props.dishes.map ((dish)=>(

        <div key ={dish.id} className="col-12 col-md-5 m-1">
             <RenderMenuItem dish={dish} onClick={props.onClick}/>       
        </div>
      ))
  
return(
    <div className='container'>
        <div className ='row'>
    {menu}

        </div>
    </div>
            );
        

    }


export default Menu;
