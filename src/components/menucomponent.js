import React,{Component} from 'react'; //allows you to create component
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap'


class Menu extends Component{ 

    constructor(props){

     super(props);
     this.state={ 
        selectedDish:{}
    
     }
   
    }

 

    
    render(){//render is a method which will return the coresponding view of the component 
//since dishes is store in the class we can access through this.state.prot
//create a list of men
console.log("******",this.props)
return(
    <div className='container'>
        <div className ='row'>
    {this.props.dishes.map((dish) => 
            
            (
            
                <div key ={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.props.onClick(dish)}  >
                      
                            <CardImg with="100%" object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                      
                            <CardTitle>{dish.name}</CardTitle>
                           
                        </CardImgOverlay>

                    </Card>
                </div>
                
            )
        )};

        </div>
    </div>
            );
        

    }
}

export default Menu;
