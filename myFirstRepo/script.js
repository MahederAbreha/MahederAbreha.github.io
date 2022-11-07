function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else {
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
function max(num1, num2){
    if (num1 > num2)  return num1;
    else return num2;
}
console.log("Expected output of max(5,4) is 5  " + myFunctionTest(5, max(5, 4)));

function maxOfThree(num1, num2, num3){
    let max =0;
    if(num1 > num2){
        max = num1;
    }else{
        max = num2;
    }
    if(num3 > max){
        max = num3;
    }
    return max;
}
console.log("Expected output of maxOfThree(5,4, 9) is 9  " + myFunctionTest(9, maxOfThree(5, 4, 9)));

// let maxOfThree = (a, b, c) => {
//     let max = a > b ? a : b;
//     console.log(max > c ? max : c);
// }

function isVowel(letter){
	var vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let eachVowel of vowels)
        if(letter.toLoweCase() == eachVowel) return true;
    return false;
}

console.log("a" + " is a vowel");

function sum(numArray){
    let total = 0;
    for(let eachNum of numArray)
        total += eachNum;
    return total;
}
console.log("Expected output of sum(5,4, 9) is 18  " + myFunctionTest(18, sum[5, 4, 9]));

function multiply(numArray){
    let total = 1;
    for(let eachNum of numArray)
        total *= eachNum;
    return total;
}
console.log("Expected output of multiply(5,4, 9) is 180  " + myFunctionTest(180, multiply[5, 4, 9]));

function reverse(string){
    for (var i = string.length - 1; i >= 0; i--) {
    	text += str[i];
    	continue
    }
    return text;
}
console.log("Expected output of reverse(david) is divad  " + myFunctionTest("divad", reverse("david")));

function findLongestWord(str) {
    let longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0].length;
  }
  console.log("Expected output of reverse(david ate my sandwich) is sandwich  " + myFunctionTest("sandwich", reverse("david ate my sandwich")));

  function filterLongWords(array, int){
    let length = array.length;
    let longestWords = [];
  for (i = 0; i < length; i++) {
    if (array[i].length > int) {
      longestWords[longestWords.length] = array[i];
    }
  }
  return longestWords;
}
console.log("Expected output of filterLongWords(david ate my sandwich, 4) is sandwich, david  " + myFunctionTest("david, sandwich", filterLongWords("david ate my sandwich", 4)));

const a = [1,3,5,3,3]; 
const x = a.map(each => each * 10);
document.writeln(x.toString() + "<br/>")

 const y = a.filter(each=> !each == 3).map();
document.writeln(y.toString() + "<br/>")

const z = a.reduce(function(prev, elt, i , array){
    return rev*elt;

});
document.writeln(z +<br/>);