var num = 1;

while (num <= 10) {
  console.log(num);
  num++;
}
console.log("While loop completed");
console.log("Following are ODD numbers");
var num2 = 1;

while (num2 <= 20) {
  console.log(num2);
  num2 = num2 + 2;
}

console.log("Printing 1 to 10 using for loop");

for (var num3 = 1; num3 <= 10; num3++) {
  console.log(num3);
}

console.log("Print all the numbers in array using for each loop");
var arr1 = [4, 7, 12, 10, 15, 20];

for (var num of arr1) {
  console.log(num);
}

console.log("Print all the numbers in array normal for loop");
for (var index = 0; index < arr1.length; index++) {
  console.log(arr1[index]);
}
