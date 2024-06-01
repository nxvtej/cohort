// two methods to create arrow function and normal fucnitons

function sum(a, b) {
    return a+b;
}

const addition = (a, b) => {
    return a+b;
}

const ans = sum(1,2);
console.log(ans);
console.log(addition(2,5));

console.log(sum);
console.log(addition);
// there is difference betweeen these

// map

// example taken in class is multiplying array numbers with 2va

var input = [1,2,3,4,5,6];
let ouput = [];
for(var i=0;i<input.length; i++){
    ouput.push(input[i]*2);
}

console.log(ouput);

ouput.length = 0;
//another method

function transform(i) {
    return i*2;
}

ouput = input.map(transform)
console.log(ouput)
/********************* */
// key thing
// when  i creared output as var and assignment its 
// klength to 0 then wasnt able to .use it  again but its done with let

// another way to write this

const answer = input.map(function(i) {
    return i*2;
})
console.log(answer)


// now filter
const arr = [1,2,3,4,5,66,8]
const filter_answer = arr.filter((n)=> {
    if(n%2==0) return true;
    else return false;
})

console.log(filter_answer)

// class work

// only adding even value into output
let assignment_input = [1,2,3,54,5,6,8,4,6,56];
let assignment_output = [];

assignment_output = assignment_input.filter((n) => {
    return n%2 == 0
}).map(function (i) {
    return i*5;
})

console.log(assignment_output);