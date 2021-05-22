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

// Country Flags

export const getCountryFlag = (country) => {
  console.log(`../../../assets/images/Main/Flags/${country.toLowerCase()}.svg`);
}

/* const Flag = (props) => {
  let flagString = `../../../assets/images/Main/Flags/${country.toLowerCase()}.svg`
  return(
    <>
    
    </>
  );
}

export const getCountryFlag = (country) => {
    return (
      <Flag 
      country = {country}
      />
    );
}


 */