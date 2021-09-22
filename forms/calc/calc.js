//calc
function Calculate(num1,num2) {
  let answer = num1 + num2
  return answer
}

let n1 = Number(prompt("Enter your first number:"))
let n2 = Number(prompt("Enter your second number:"))

let summedNumbers = Calculate(n1,n2)
console.log(`The sum of ${n1} and ${n2} is ${summedNumbers}`)
