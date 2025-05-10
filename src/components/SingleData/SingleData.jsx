import React from "react";

const SingleData = ({ singleData }) => {
  console.log(singleData);
  const { name, phone, address } = singleData;
  return (
    <div>
      <h3>name : {name}</h3>
      <h2>city : {address.city}</h2>
      <p>phone : {phone}</p>
      <p>zipcode : {address.zipcode}</p>
    </div>
  );
};

export default SingleData;
