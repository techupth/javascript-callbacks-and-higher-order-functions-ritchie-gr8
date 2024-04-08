// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
  for (const v of array) {
    operation(v)
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

// Using `forEach` function here
const raiseSalary = (oldSalary) => {
  newEmployeeSalaries.push(oldSalary + 5000)
}

forEach(employeeSalaries, raiseSalary)

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
