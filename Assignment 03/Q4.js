//  Q4  Write a program to initialize an array with city names. Copy 3 array
//      elements from cities array to selected cities array.

var CityList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedlist = [];

for (let i = 2; i <=3; i++) {
    selectedlist.push(CityList[i]);
}
console.log(selectedlist);
