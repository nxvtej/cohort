let a = "hell yeah!";
console.log("this is where it starts");
console.log(a);
console.log("fuck depressiion");

nums = [15,50,655,145,3];

function evenNumbers(nums) {
    for(var i=0;i<nums.length ; i++){
        if(nums[i]%2==0){
            console.log(nums[i]);
        }
    }
}

evenNumbers(nums);

// sommething like dictionoaru

const identity =[{
    firstName: "Navdeep",
    age:21,
    gender:"neutral"
}, {
    firstName:"pinky",
    age:16,
    gender:"binary"
}, {
    firstName:"goku",
    age:18000,
    gender:"gay"
}]

for(let i=0;i<identity.length;i++){
    if(identity[i].gender == "gay"){
        console.log("vegita was right ");
    }
}

var sum =0
for(var i =0 ;i<100 ; i++){
    sum = sum+i;
}
console.log(sum);

// fucntion as argument
function _sum(num1, num2, fucntiontofunction) {
    var result  = num1+num2;
    fucntiontofunction(result);
    return result;
}
function printresult(result){
    console.log("addoition in: " +result);
    // return result;
}

const answer = _sum(59, 10, printresult);

function status(){
    console.log("code executed successfully");
} 
setInterval(status, 1*1000);

setTimeout(status, 1000);
//console.log(answer);


// promisises
// aysnc
// await
// thenn()

// many more will do this again