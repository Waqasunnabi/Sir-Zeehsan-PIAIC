
//Assingment 03
// Q1 Print Array 

// var a = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// console.log("Qualifications:" + "\n\n");
// for (let i = 0; i < a.length; i++) {
//     console.log((i+1) +") "+ a[i])
    
// }

//---------------------------------------------------------

//      Q2 array

// var StudentName = ["Michael", "John", "Tony"]
// var StudentNumber = [320,230,480]

// for (let i = 0; i<StudentName.length; i++){
//     console.log("Score of " + StudentName[i] + " " + StudentNumber[i] + "." + "Percentage: " + (StudentNumber[i]/500*100) + "%" );    

// }

//---------------------------------------------------------

// Q3.a Ask the user what color he/she wants to add to the beginning &
//      add that color to the beginning of the array. Display the updated
//      array in your browser.

// var colorname = ["white", "yellow"]

// var AddFifo = prompt("which color add to start")

// colorname.unshift(AddFifo)  
// console.log("successfull added " + "\n" + colorname)

//---------------------------------------------------------

// Q3.b Ask the user what color he/she wants to add to the end & add
//      that color to the end of the array. Display the updated array in
//      your browser.

// var colorname = ["white", "yellow"]

// var AddFifo = prompt("which color add to start")

// colorname.push(AddFifo)  
// console.log("successfull added " + "\n" + colorname)

//---------------------------------------------------------

// Q3.c Add two more colors to the beginning of the array. Display the
//      updated array in your browser.

// var colorname = ["white", "yellow"]

// var AddFifo1 = prompt("which color add to start")
// var AddFifo2 = prompt("which color add to start")

// colorname.unshift(AddFifo1,AddFifo2);
// console.log("successfull added " + "\n" + colorname)

//---------------------------------------------------------

// Q3.d Delete the first color in the array. Display the updated array in
//      your browser.

// var array1 = [1,2,3,4,5,6,7]
// console.log(array1)

// lastoneremove = array1.shift()
// console.log(lastoneremove)
// console.log(array1)

//---------------------------------------------------------

// Q3.e Delete the last color in the array. Display the updated array in
//      your browser.

// var array1 = [1,2,3,4,5,6,7]
// console.log(array1)

// lastoneremove = array1.pop()
// console.log(lastoneremove)
// console.log(array1)

//---------------------------------------------------------

// Q3.f  Ask the user at which index he/she wants to add a color & color
//      name. Then add the color to desired position/index. Display the
//      updated array in your browser.

// var array1 = [1,2,3,4,5,6,7]
// console.log(array1)

// addwhere = parseInt(prompt("where you add?"))
// color = prompt("which color you want to add?")

// array1.splice(addwhere,0,color)
// console.log(array1)

//---------------------------------------------------------


// Q3.G  Ask the user at which index he/she wants to delete color(s) &
//      how many colors he/she wants to delete. Then remove the
//      same number of color(s) from user-defined position/index. .
//      Display the updated array in your browser.

// var color = ["red","yellow","green","Blue","Black"];
// console.log(color);

// IndexNumStart = parseInt(prompt("where you want to delete?"));
// HowMany = parseInt(prompt("How Many?"));

// color.splice(IndexNumStart,HowMany);
// console.log(color);

//---------------------------------------------------------


//  Q4  Write a program to initialize an array with city names. Copy 3 array
//      elements from cities array to selected cities array.

// var CityList = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var selectedlist = [];

// for (let i = 2; i <=3; i++) {
//     selectedlist.push(CityList[i]);
// }
// console.log(selectedlist);

//---------------------------------------------------------

// Q5 Write a JavaScript program to remove all duplicate items from an
//    array?

// var findvalue = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var newlist = []


// for (let i = 0; i < findvalue.length; i++) {
//     if ( newlist.indexOf(findvalue[i]) == -1) {
//       newlist.push(findvalue[i]);
//     }

//   }
//   console.log(newlist)

//---------------------------------------------------------

// Q6 We have the following arrays:

// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// var a = "";

// for (let i = 0; i < aCities.length; i++) {

//   if (i == 0) {
//     a = o[1]
//   }
//   if (i == 1) {
//     a = o[2]
//   }
//   if (i == 2) {
//     a = o[0]
//   }
//   if (i == 3) {
//     a = o[3]
//   }

//---------------------------------------------------------

//   console.log(i+1 + a + " choice is " + aCities[i] )
  
// }

// Q7 Write a JavaScript program to compute the union of two arrays.
//    (Merge two arrays by removing all duplicates)

// var a = [10,20,4,40,60,70]
// var b = [1,2,3,4,5,6,7,8,9,10]

// var ab = b

// for (let i = 0; i < a.length; i++) {
//   if (ab.indexOf(a[i]) == -1) {
//     ab.push(a[i])
//   }
// }
// console.log(ab)

//---------------------------------------------------------


// Q8 Generate the following series in your browser. See example output.
//    a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// var counting = parseInt(prompt("counting 0 to ?"))

// for (let i = 0; i <= counting; i++) {
//   console.log(i);
// }

//    b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


// var Reversecounting = parseInt(prompt("counting ? to 0"))

// for (let i = Reversecounting; i >= 0; i--) {
//   console.log(i);
// }

//    c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// var Even = parseInt(prompt("enen no 0 to ?"))

// for (let i = 0; i <= Even; i++) {
//   if (i%2 == 0) {
//     console.log(i)
//   }
  
// }

//    d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// var odd = parseInt(prompt("Old no 1 to ?"))

// for (let i = 0; i < odd; i++) {
//   if (i%2 != 0) {
//     console.log(i)
    
//   }
// }

//    e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var thousandseries = parseInt(prompt("Old no 1 to ?"))

//   for (let i = 1; i <= thousandseries; i++) {
//     console.log(i + "k")
    
//   }

//---------------------------------------------------------

//9. Write a program to identify the largest number in the given array.

// A = [24, 53, 78, 91, 12]
// A.sort((a, b) => b - a)
// console.log(A[0])

//---------------------------------------------------------

// Q11. You have an array
//      Write a program to enable “search by user input” in an array. After
//      searching, prompt the user whether the given item is found in the list
//      or not. Example:


// A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var userfind = prompt("Find?").toLowerCase()
// var condition = "false";

// for (let i = 0; i < A.length; i++) {

//   if ( userfind.indexOf(A[i]) > -1 ) {
//     var condition = "True";
//   }
// }

// if (condition == "True") {
//   console.log("'" + userfind + "'" + " Yes this is found")
// }
// else{
//   console.log("'" + userfind + "'" + " not Found")
// }

//---------------------------------------------------------

