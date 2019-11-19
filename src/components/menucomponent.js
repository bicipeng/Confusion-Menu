import React from 'react'; //allows you to create component
import {Card,CardImg,CardImgOverlay,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap'
import {Link} from 'react-router-dom'

const RenderMenuItem = ({dish,onClick}) =>{

    return (
     <Card>
         {/*link to only allows you to put the url that you want to nevigate to   */}
            <Link to = {`/menu/${dish.id}`}>         
    <CardImg with="100%" object src={dish.image} alt={dish.name}/>
    <CardImgOverlay>
    <CardTitle>{dish.name}</CardTitle>
    </CardImgOverlay>
            </Link>
    </Card>
    )

    }

    
  const Menu = props => {
      const menu = props.dishes.map ((dish)=>(

        <div key ={dish.id} className="col-12 col-md-5 m-1">
             <RenderMenuItem dish={dish} />       
        </div>
      ))
  
return(
    <div className='container'>
        <div className="row">
            <Breadcrumb>

            <BreadcrumbItem>
            <Link to='/home'>Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>
              Menu
            </BreadcrumbItem>

            </Breadcrumb>
            <div className="col-12">
                <h3>Menu</h3>
            </div>
        </div>
        <div className ='row'>
         {menu}
         </div>
    </div>
            );
        

    }


export default Menu;
