//Q11. Write a program to take input of a Number and find a Mean of All Digits


var a =  42 //= 6 + 6 + 6 = 18 /3 = 6
var b = 1246 //= 1 + 2 + 4 + 5 = 12 / 4 = 3
var c = 0;
d  = b.toString()

for (let i = 0; i < d.length; i++) {
    var e = d.charAt(i)
    c += parseInt(e)
}
console.log(Math.round(c / d.length))