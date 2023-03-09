// Q5 Write a JavaScript program to remove all duplicate items from an
//    array?

var findvalue = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var newlist = []


for (let i = 0; i < findvalue.length; i++) {
    if ( newlist.indexOf(findvalue[i]) == -1) {
      newlist.push(findvalue[i]);
    }

  }
  console.log(newlist)