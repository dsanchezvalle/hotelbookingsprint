import React from 'react';


//Functions used in Header Component

//Get formatted today to define minimum date in From Date input
export function getFormattedToday(){
  return formatDate(new Date().toLocaleDateString());
}

//Format date used in getFormattedToday function
export function formatDate(date) {
var d = new Date(date),
  month = "" + (d.getMonth() + 1),
  day = "" + d.getDate(),
  year = d.getFullYear();

if (month.length < 2) month = "0" + month;
if (day.length < 2) day = "0" + day;

return [year, month, day].join("-");
}

//Get country string for FoundMessage__Content text
export const getCountryString = (countryValue) =>{
  switch(countryValue){
      case "country1":
          return "Argentina";
      case "country2":
          return "Brasil";
      case "country3":
          return "Chile";
      case "country4":
          return "Uruguay";
      default:
          return "all countries";
  }
}

//Get size string for FoundMessage__Content text
export const getSizeString = (sizeValue) => {

  switch(sizeValue){
      case "size1":
          return "Small-sized";
      case "size2":
          return "Medium-sized";
      case "size3":
          return "Large-sized";
      case "all":
          return "All sizes";    
  }
}

//Get price string for FoundMessage__Content text
export const getPriceString = (priceValue) => {
  switch(priceValue){
      case "price1":
          return "economic";
      case "price2":
          return "comfort";
      case "price3":
          return "premium";
      case "price4":
          return "deluxe";
      case "all":
          return "all category"                
  }
}

//Get date string for FoundMessage__Content text
export const getDateString = (dateFromValue, dateToValue) =>{
  
  //Create and adjust dates to UTC Offset.
  let dateFrom = new Date(dateFromValue);
  dateFrom.setHours(dateFrom.getHours()+(dateFrom.getTimezoneOffset()/60));
  let dateTo = new Date(dateToValue);
  dateTo.setHours(dateTo.getHours()+(dateTo.getTimezoneOffset()/60));
  
  //Define arguments to send to Intl.DateTimeFormat according to expected string
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  if(dateFromValue !== "" && dateToValue !== ""){
      let dateFromString = new Intl.DateTimeFormat('en-US', options).format(dateFrom);
      let dateToString = new Intl.DateTimeFormat('en-US', options).format(new Date(dateTo));
      return `from ${dateFromString} to ${dateToString}`;
  }
  return "";
}

//Fuctions used in HotelCard Component

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

//Prevent scroll when HotelCard is expanded in mobile version
export function preventScroll(){
    window.scrollTo(0, 0);
    window.addEventListener('scroll', scrollToTop);
}

//Restart scroll when HotelCard is not expanded in mobile version
export function restartScroll(){
    window.removeEventListener('scroll', scrollToTop);
}

//Scroll to top used in preventScroll() and restartScroll() 
function scrollToTop(){
  window.scrollTo(0, 0);
}

//Functions used in Main Component

//Fade out the message to inform users can Hover over HotelCards to obtain more information
export function fadeOutHoverInfoMsg() {
  let infoMsg = document.querySelector(".InfoMessage");
  setTimeout (()=>{
      infoMsg.style.transition = "all 0.5s ease-out";
      infoMsg.style.height=0;
      infoMsg.style.marginTop="-0.2rem";
      infoMsg.style.opacity=0;
      infoMsg.style.padding=0;  
  }, 4000) ;
}

//Functions used in App Component

//Filter hotels in hotelList according to the filters in filterList
export const filterHotels = (hotelList, filterList) => {
  let filteredHotelList = [];
  let filteredHotelList2 = [];
  let filteredHotelList3 = [];
  let filteredHotelList4 = [];

  if(filterList[0].value === "all"){
    filteredHotelList = hotelList;  
  }
  else{
    filteredHotelList = hotelList.filter(hotel => hotel.country === getCountryName(filterList[0].value));
  }

  if(filterList[1].value === "all"){
      filteredHotelList2 = filteredHotelList; 
  }
  else{
      filteredHotelList2 = filteredHotelList.filter(hotel => hotel.price === getPriceNumber(filterList[1].value));
  }
  
  if(filterList[2].value === "all"){
      filteredHotelList3 = filteredHotelList2;
  }
  else{
      filteredHotelList3 = filteredHotelList2.filter(hotel => checkSizeWithRooms(filterList[2].value, hotel.rooms));
  }
  
  if(filterList[3].value === "" || filterList[4].value === ""){
      filteredHotelList4 = filteredHotelList3;
  }
  else{
      if(!verifyMinDate(filterList[3].value)){
          alert("Error. The check-in date cannot be earlier than today");
          filterList[3].value = "";
          filterList[4].value = "";
          return filteredHotelList3;
      }

      if(verifyDateRange(getUnixDate(filterList[3].value), getUnixDate(filterList[4].value)) === "error"){
          alert("Error. The check-out date cannot be earlier than the check-in date.")
          filterList[3].value = "";
          filterList[4].value = "";
          return filteredHotelList3;
      }
      else if (!isNaN(getUnixDate(filterList[3].value)) && !isNaN(getUnixDate(filterList[4].value))){
          filteredHotelList4 = filteredHotelList3.filter(hotel => 
              checkAvailability(filterList[3].value, filterList[4].value, hotel));
      }        
  }

  return filteredHotelList4;  
} 

//Used in filterHotels() to obtain the selected country name
const getCountryName = (value) =>{
  switch(value){
      case "country1":
          return "Argentina";
      case "country2":
          return "Brasil";
      case "country3":
          return "Chile";
      case "country4":
          return "Uruguay";
      default:
          return "all";
  }
}

//Used in filterHotels() to obtain the selected price number
const getPriceNumber = (value) =>{
  switch(value){
      case "price1":
          return 1;
      case "price2":
          return 2;
      case "price3":
          return 3;
      case "price4":
          return 4;
      default:
          return "all";
  }
}

//Used in filterHotels() to categorize hotels size according to the number of rooms
const checkSizeWithRooms = (size, rooms) => {

  switch(size){
      case "size1":
          if(rooms<=10){
              return true;
          }
          else return false;
      case "size2":
          if(rooms>10 && rooms <=20){
              return true;
          }
          else return false;
      case "size3":
          if(rooms>20){
              return true;
          }
          else return false;
  }

}

//Used in filterHotels() to validate fromDate is equal or later than today
function verifyMinDate(fromDate){
  let today = new Date();
  let selectedDate = new Date(fromDate);
  
  return (sameDay(today, selectedDate) || selectedDate > today);
}

//Used in verifyMinDate() to validate if given day1 is the same than day2
function sameDay(day1, day2) {
  //We add these hours to adjust the Timezone Offset
  let hoursToAdd = day2.getTimezoneOffset() / 60;
  day2.setHours(day2.getHours() + hoursToAdd);
  
  return (
    day1.getFullYear() === day2.getFullYear() &&
    day1.getMonth() === day2.getMonth() &&
    day1.getDate() === day2.getDate()
  );
}

//Used in filterHotels() to validate check-out date cannot be earlier than the check-in date.
function verifyDateRange(dateFrom, dateTo) {
  return dateFrom > dateTo ? "error" : "dates ok";
}

//Used in filterHotels() to get UNIX format of a given date
function getUnixDate(date) {
  return new Date(date).getTime();
}  

//Used in filterHotels() to check availavility of a hotel according the given dateFrom and dateTo
const checkAvailability = (dateFrom, dateTo, hotel) => {
  /*We add hours in order to adjust the UTC offset between the dates selected 
  by the user (in filters) and the given hotels' availability dates (in the database).*/
  let newSelectedFromDate = new Date(dateFrom);
  let newAvailabilityFrom = new Date(hotel.availabilityFrom);
  let hoursToAddFrom = newAvailabilityFrom.getHours() + (newSelectedFromDate.getTimezoneOffset()/60) + 1;
  newSelectedFromDate.setHours(newSelectedFromDate.getHours()+hoursToAddFrom);

  let newSelectedToDate = new Date(dateTo);
  let newAvailabilityTo = new Date(hotel.availabilityTo);
  let hoursToAddTo = newAvailabilityTo.getHours() + (newSelectedToDate.getTimezoneOffset()/60);
  newSelectedToDate.setHours(newSelectedToDate.getHours()+hoursToAddTo); 

  if((newSelectedFromDate.valueOf() >= newAvailabilityFrom.valueOf()) && (newSelectedToDate.valueOf() <= newAvailabilityTo.valueOf())){
      return true;
  }
  else return false;
}
