import React,{Component} from 'react'; //allows you to create component
import {Media} from 'reactstrap'

class Menu extends Component{ //component name is menu which is a class

    constructor(props){

     super(props);
     this.state={ //state stores in properties related to this component that we can make use of 
        dishes:[ {
            id: 0,
            name:'Uthappizza',
            image: 'assets/images/uthappizza.png',
            category: 'mains',
            label:'Hot',
            price:'4.99',
            description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
         {
            id: 1,
            name:'Zucchipakoda',
            image: 'assets/images/zucchipakoda.png',
            category: 'appetizer',
            label:'',
            price:'1.99',
            description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
         {
            id: 2,
            name:'Vadonut',
            image: 'assets/images/vadonut.png',
            category: 'appetizer',
            label:'New',
            price:'1.99',
            description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
         {
            id: 3,
            name:'ElaiCheese Cake',
            image: 'assets/images/elaicheesecake.png',
            category: 'dessert',
            label:'',
            price:'2.99',
            description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'                        }
         ]

     }
    }

    render(){//render is a method which will return the coresponding view of the component 
//since dishes is store in the class we can access through this.state.prot
//create a list of men
        const menu=this.state.dishes.map((dish) => {
            return (
                // return a lay out in map function
                // dont forget the key when we map in react
                // Now, whenever you construct a list of items 
                // in React, every item requires a key attribute to be specified 
                // for it. So, this is where we are taking a list of items and then
                //  rendering them here. And then so the key helps when React is rendering 
                // these items on the screen. The key helps React to recognize each one of these
                //  elements and while it is updating the screen so the keys will enable it to identify each of those elements uniquely
                <div key ={dish.id} className="col-12 mt-5">
                    <Media tag='li'>
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}/>
                        </Media>
                        <Media body className='ml-5'>
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>

                    </Media>
                </div>
                
            )
        });

        return(
<div className='container'>
    <div className ='row'>
        {/* will contain a list of dishes in the rest. media list  */}
        <Media list>
           {menu}
        </Media>
        {/* the map function can be place here instead of seperating into two blocks of codes */}
    </div>
</div>
        );
    }
}

export default Menu;
