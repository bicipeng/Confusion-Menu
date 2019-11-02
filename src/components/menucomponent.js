import React,{Component} from 'react'; //allows you to create component
import {Card,CardImg,CardImgOverlay,CardTitle} from 'reactstrap'
import DishDetail from './DishdetailComponent'

class Menu extends Component{ //component name is menu which is a class

    constructor(props){

     super(props);
     this.state={ //state stores in properties related to this component that we can make use of 
        selectedDish:{}
    
     }
     this.onDishSelect=this.onDishSelect.bind(this)
    }

    onDishSelect(dish){
        this.setState(
            {
                selectedDish:dish
            }
            )
    }
    renderDish(dish){//only render the dish when you click on it ,make the card in the 
        //render dish function 
        return ( dish ? 
        <DishDetail/> :null)
        }

    
    render(){//render is a method which will return the coresponding view of the component 
//since dishes is store in the class we can access through this.state.prot
//create a list of men
console.log("******",this.props)
        const menu=this.props.dishes.map((dish) => {
            return (
            
                <div key ={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>this.onDishSelect(dish)} >
                      
                            <CardImg with="100%" object src={dish.image} alt={dish.name}/>
                        <CardImgOverlay>
                      
                            <CardTitle>{dish.name}</CardTitle>
                           
                        </CardImgOverlay>

                    </Card>
                </div>
                
            )
        });

        return(
<div className='container'>
    <div className ='row'>
           {menu}
    </div>
 
        {this.state.selectedDish ? 
        ( <DishDetail  singleDish={this.state.selectedDish}/>)
        :null}
</div>
        );
    }
}

export default Menu;
