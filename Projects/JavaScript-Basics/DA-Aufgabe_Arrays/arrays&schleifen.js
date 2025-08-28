//
// Aufgabe 1

// let TaskList1 = ["Marie", "Hanna", "Jay", "Bob"];

// console.log(TaskList1);
// function containsElement(array, element) {
//   return array.includes(element);
// }

// function task1truefalse() {
//   console.log(containsElement(TaskList1, "Bob"));
// }

// task1truefalse();

let taskList1 = ["Marie", "Hanna", "John", "Jay"];

function containsElement(array, element) {
  return array.includes(element);
}

function checkElement1() {
  let inputValue = document.getElementById("taskInput1").value;
  let result = containsElement(taskList1, inputValue);
  document.getElementById("result1").textContent = result;
}

// //
// // Aufgabe 2

// function findElementIndex(array, element) {
//     return array.indexOf(element);
//   }
//   console.log(findElementIndex(TaskList1, "Jay")); // 2
//   console.log(findElementIndex(TaskList1, "Daniel")); // -1

let taskList2 = ["Marie", "Hanna", "John", "Jay"];

function findElementIndex(array, element) {
  return array.indexOf(element);
}

function checkElement2() {
  let inputValue = document.getElementById("taskInput2").value;
  let result = findElementIndex(taskList2, inputValue);
  document.getElementById("result2").textContent = result;
}

// //
// // Aufgabe 3

// let ppTest = TaskList1.pop(); // let ppTest = TaskList1.push('Marlon');

// function PopTaskList1() {
//   console.log(ppTest);
// }
// console.log(TaskList1);
// PopTaskList1();

let taskList3 = [10, 20, 30, 40];

function removeFirstElement(array) {
  array.shift();
  return array;
}

function checkElement3() {
  document.getElementById("oldArray3").textContent = taskList3.join(", ");
  let result = removeFirstElement(taskList3);
  document.getElementById("result3").textContent = result.join(", ");
}

// //
// // Aufgabe 4

// function addElementtoStart(array,elemt){
//     return TaskList1.unshift('Sido')
// }
// addElementtoStart()
// console.log(TaskList1);

let taskList4 = ["Marie", "Hanna", "John", "Jay"];

function addElementtoStart(array, element) {
  array.unshift(element);
  return array;
}

function checkElement4() {
  let inputValue = document.getElementById("taskInput4").value;
  let result = addElementtoStart(taskList4, inputValue);
  document.getElementById("result4").textContent = result;
}

// //
// // Aufgabe 5

let taskList5 = ["Marie", "Hanna", "John", "Jay"];

function getSubArray(array, start, end) {
  return array.slice(start, end);
}

function checkElement5() {
  let oldArray5 = (document.getElementById("oldArray5").textContent =
    taskList5.join(", "));
  let inputStart = document.getElementById("taskInput5Start").value;
  let inputEnd = document.getElementById("taskInput5End").value;
  let result = getSubArray(taskList5, inputStart, inputEnd);
  document.getElementById("result5").textContent = result.join(", ");
}

// function getSubArray(array,start,end){
//     return array.slice()

// }
// console.log(getSubArray(TaskList1, 0, 3));
// console.log(getSubArray(TaskList1, 1, 2));

// //
// // Aufgabe 6

let taskList6 = ["Marie", "Hanna", "John", "Jay"];

function joinArray(array, separator) {
  return array.join(separator);
}

function checkElement6() {
 (document.getElementById('oldArray6').textContent =
    taskList6);
  let mySeparator = document.getElementById('taskInput6').value;
  let result = joinArray(taskList6, mySeparator);
  document.getElementById('result6').textContent = result;
}

// function joinArray(array, separator) {
//   return array.join(separator);
// }
// console.log(joinArray(['apple', 'banana', 'cherry'], ', '));
// console.log(joinArray([1, 2, 3, 4], ' - '));
