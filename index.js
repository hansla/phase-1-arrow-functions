
const sum = (parameter1, parameter2) => {
    console.log(`Adding ${parameter1}`);
    console.log(`Adding ${parameter2}`);
    return parameter1 + parameter2;
  }
  sum(1,2); //=> 3

  const nums = [1,2,3];
const squares = nums.map(x => x ** 2); 
squares; //=> [1,4,9]
nums; //=> [1,2,3]

function divide (a, b) {
    var a = 2000
    var b = 100
    return a / b
}


const square = (num) => {
    return num * num;
  }
  
const add = (a, b)=> {
    return a + b 
}