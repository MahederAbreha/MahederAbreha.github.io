let numArray = [1, 2, 3, 4];
let str = "Awesome";
let sum = numArray.reduce((x, y) => x + y);
console.log("expected out put is: 10" + sum);

let multiply = numArray.reduce((x, y) => x * y)
console.log("expected out put is: 10" + multiply);

let reversed = [...str].reverse().join("");
console.log(reversed);

function filterLongWords(arr, n) {
    let newArr = [];
    arr.forEach(value => {

        if (value.length > n) {
            newArr.push(value);
        }
    });
    return newArr;
}
console.log("expected out put is: david, ate, lunch" + filterLongWords(["david", "ate", "my", "lunch"], 2)); 