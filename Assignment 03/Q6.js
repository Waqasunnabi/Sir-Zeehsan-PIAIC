// Q6 We have the following arrays:

var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th","st","nd","rd"];
var a = "";

for (let i = 0; i < aCities.length; i++) {

  if (i == 0) {
    a = o[1]
  }
  if (i == 1) {
    a = o[2]
  }
  if (i == 2) {
    a = o[0]
  }
  if (i == 3) {
    a = o[3]
  }
}
  console.log(i+1 + a + " choice is " + aCities[i] )