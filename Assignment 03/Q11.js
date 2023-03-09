// Q11. You have an array
//      Write a program to enable “search by user input” in an array. After
//      searching, prompt the user whether the given item is found in the list
//      or not. Example:


A = ["cake", "apple pie", "cookie", "chips", "patties"]

var userfind = prompt("Find?").toLowerCase()
var condition = "false";

for (let i = 0; i < A.length; i++) {

  if ( userfind.indexOf(A[i]) > -1 ) {
    var condition = "True";
  }
}

if (condition == "True") {
  console.log("'" + userfind + "'" + " Yes this is found")
}
else{
  console.log("'" + userfind + "'" + " not Found")
}