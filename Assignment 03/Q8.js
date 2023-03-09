// Q8 Generate the following series in your browser. See example output.
//    a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

var counting = parseInt(prompt("counting 0 to ?"))

for (let i = 0; i <= counting; i++) {
  console.log(i);
}

 //  b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1


var Reversecounting = parseInt(prompt("counting ? to 0"))

for (let i = Reversecounting; i >= 0; i--) {
  console.log(i);
}

//   c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

var Even = parseInt(prompt("enen no 0 to ?"))

for (let i = 0; i <= Even; i++) {
  if (i%2 == 0) {
    console.log(i)
  }
  
}

//  d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

var odd = parseInt(prompt("Old no 1 to ?"))

for (let i = 0; i < odd; i++) {
  if (i%2 != 0) {
    console.log(i)
    
  }
}

//  e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

var thousandseries = parseInt(prompt("Old no 1 to ?"))

  for (let i = 1; i <= thousandseries; i++) {
    console.log(i + "k")
    
  }