import React from 'react';
const months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


const DishComments = props =>{

const {comment,author,date}=props.comment 
let finalDate=dateConvertor(date)
return (
    <div>
  <ul>{comment}</ul> 
  <ul>{`-- ${author} , ${finalDate}`}</ul>
</div>
    )


}

const dateConvertor = input =>{
    let theDate=new Date(input)
let numMonth = theDate.getMonth();
let strMonth= months.filter((ele)=>months.indexOf(ele)===numMonth);
let numDate= theDate.getDate();
let numYear=theDate.getFullYear();

 return `${strMonth} ${numDate}, ${numYear}`
}

export default DishComments