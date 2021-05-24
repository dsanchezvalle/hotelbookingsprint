import React from 'react';

// Price Signs
const PriceSign = () => {
    return '$';
  };
    
export const getPriceSigns = (signs) => {
    let priceSigns = [];
    for (let i = 0; i < signs; i++) {
      priceSigns.push(
      <PriceSign 
        key = {"p-" + i.toString()}
      />
      );
    }
    return priceSigns;
  }
  
 export const getBackgroundImg = (photo) => {
  let photoUrl = require("../assets/images/Main/Hotels/" + photo);
  if(window.innerWidth<840){
    return `radial-gradient(224.24% 668.5% at 14.41% -14.14%, rgba(0, 0, 0, 0.57) 44.5%, rgba(255, 255, 255, 0) 67.11%), url(${photoUrl})`
  }
  else{
    return `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.78) 76.46%), url(${photoUrl})`
  }    
}  
