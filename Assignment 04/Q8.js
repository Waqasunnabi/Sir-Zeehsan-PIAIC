// Q8. Convert number in words
// limitation 1 to 999

var x = parseInt(prompt("Enter number"))
var usernumber = x;

const oneToNineteen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
const HunThu = ['Hundred','Thousand']

if (usernumber <= 19) {
    console.log(oneToNineteen[usernumber] + " only")
}

if (usernumber >= 20 && usernumber <100) {
    var usernumberstr = String(usernumber)
    var a = tens[parseInt(usernumberstr.charAt(0))] + " " + oneToNineteen[parseInt(usernumberstr.charAt(1))];
    var ans = a.charAt(0).toUpperCase(); 
    var s = a.toLocaleLowerCase();
    var wer = s.slice(1,a.length)
    console.log((ans + wer).replace("  "," ") + " only")

}

if (usernumber >= 100 && usernumber <999) {

if (usernumber >= 100 && usernumber <120 || usernumber >= 200 && usernumber <220 || usernumber >= 300 && usernumber <320 || usernumber >= 400 && usernumber <420 || usernumber >= 500 && usernumber <520
                                         || usernumber >= 600 && usernumber <620 || usernumber >= 700 && usernumber <720 || usernumber >= 800 && usernumber <820 || usernumber >= 900 && usernumber <920) {
    
        var usernumberstr = String(usernumber)
        var a = oneToNineteen[parseInt(usernumberstr.charAt(0))] + " " + HunThu[0] + " " + oneToNineteen[parseInt(usernumberstr.slice(1,3))];
        var ans = a.charAt(0).toUpperCase() 
        var s = a.toLocaleLowerCase();
        var wer = s.slice(1,a.length)
        console.log((ans + wer).replace(["  ","   "]," ") + " only")

}
    else {
        var usernumberstr = String(usernumber)
        var a = oneToNineteen[parseInt(usernumberstr.charAt(0))] + " " + HunThu[0] + " " + tens[parseInt(usernumberstr.charAt(1))] + " " + oneToNineteen[parseInt(usernumberstr.charAt(2))];
        var ans = a.charAt(0).toUpperCase() 
        var s = a.toLocaleLowerCase();
        var wer = s.slice(1,a.length)
        console.log((ans + wer).replace("  "," ") + " only")
}
    
}


