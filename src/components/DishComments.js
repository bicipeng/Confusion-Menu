import React from 'react';

const DishComments = props =>{

const {comment,author,date}=props.comment 
return (
    <div>
  <ul>{comment}</ul> 
  <ul>{`-- ${author} , ${date}`}</ul>
</div>
    )


}

export default DishComments