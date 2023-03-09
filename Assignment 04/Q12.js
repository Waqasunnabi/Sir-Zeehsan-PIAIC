// Q12. Write a program that shows the message “First fifteen days of the
//      month” if the date is less than the 16th of the month else shows “Last
//      days of the month”.



var a = new Date();

var b = a.getDate()
console.log(b)

if( a.getDate() < 15){

    console.log("First fifteen days of the month")
}
else{
    console.log("Last days of the month")
}