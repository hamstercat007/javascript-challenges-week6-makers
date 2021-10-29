const fizzbuzz = (num) => { 
  if (num % 3 == 0  && num % 5 == 0 ) {
    return "FizzBuzz"
  } else if (num % 3 == 0) {
  return "Fizz"
  } else if (num % 5 == 0) {
  return "Buzz"
  }
  else {
  return num
  }
}

module.exports = fizzbuzz;

let str = '';

for (let i = 0; i < 51; i ++) {
  result = fizzbuzz(i)
  str = str +" " +result;
}

console.log(str)