import React from 'react';

const PriceSign = () => {
    return '$';
  };
    
function getPriceSigns(signs) {
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

  export default getPriceSigns;
  