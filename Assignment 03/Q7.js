// Q7 Write a JavaScript program to compute the union of two arrays.
//    (Merge two arrays by removing all duplicates)

var a = [10,20,4,40,60,70]
var b = [1,2,3,4,5,6,7,8,9,10]

var ab = b

for (let i = 0; i < a.length; i++) {
  if (ab.indexOf(a[i]) == -1) {
    ab.push(a[i])
  }
}
console.log(ab)