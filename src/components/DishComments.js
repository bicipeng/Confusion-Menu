import React from "react";
import { Fade } from "react-animation-components";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec"
];
const DishComments = props => {
  const { comment, author, date, rating } = props.comment;
  let finalDate = dateConvertor(date);
  return (
    <Fade in>
      <div>
        <ul>
          * Rating: <strong>{rating}</strong>
        </ul>
        <ul>{comment}</ul>
        <ul>{`-- ${author} , ${finalDate}`}</ul>
      </div>
    </Fade>
  );
};

const dateConvertor = input => {
  let theDate = new Date(input);
  let numMonth = theDate.getMonth();
  let strMonth = months.filter(ele => months.indexOf(ele) === numMonth);
  let numDate = theDate.getDate();
  let numYear = theDate.getFullYear();

  return `${strMonth} ${numDate}, ${numYear}`;
};

export default DishComments;
