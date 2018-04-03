console.log('---level 0---');

var a = 200;
a = 300
console.log(a)

let b = 300;
b = 400
console.log(b)

const c = 500
console.log(c)

console.log('---level 1---');

console.log(a + b);
console.log(c - a );
console.log(c / a);
console.log(a * c);
console.log(c % a);

console.log('---level 2---');

var firstWord = "hello to string";
var secondWord = "another string";
var mergeWord = (firstWord + " and " + secondWord);

console.log(mergeWord);

var numberA = 7
console.log(numberA == 99);

console.log('---level 3---');

var array=["ayam", 9, 15, 20]

console.log(array[2]);
console.log(array[0]);

array.push(30);
console.log(array);

array.pop();
console.log(array);

console.log('---level 4---');

var sentenceA = "Hello World";
var sentenceB = "Hello JavaScript";

console.log(sentenceA);
console.log(sentenceB);

console.log('---level 5---');

var sentenceC = (sentenceA + " and " + sentenceB);
console.log(sentenceC);

var sentenceD =`${sentenceA} ${sentenceB}`;
console.log(sentenceD);

console.log('---level 6---');

var sentenceE = sentenceA.toUpperCase();
var sentenceF = sentenceB.toUpperCase();
console.log(sentenceE);
console.log(sentenceF);

console.log('---level 7---');

 var string1 = "hello goodness"

 var str = string1.split(" ");
 console.log(str);

  // variabel untuk menampung hasil split
 var result = " ";

 for(var i = 0; i < str.length ; i++) {
  result += str[i].charAt(0).toUpperCase() + str[i].slice(1) + " "
}
console.log(result);

console.log('---level 8---');

  var sentenceG=" ";

  if(sentenceG=="HELLO WORLD"){
    console.log("benar")
  } else {
    console.log("salah")
  }

console.log('---level 9---');

if(sentenceG=="HELLO WORLD"){
  console.log("benar")
} else if(sentenceG=="HELLO"){
  console.log("salah")
} else {
  console.log('Mohon isi')
}

console.log('---level 10---');

var sentenceH="HELLO";
(sentenceH=="HELLO WORLD") ? console.log("benar") : console.log("salah");

console.log('---level 11---');



console.log('---level 12---');

var parameterA = 10;
var parameterB = 15;

function process(){
 console.log(parameterA + parameterB)
 console.log(parameterB - parameterA)
}
process()

console.log('---level 13---');

console.log(Math.random());

console.log('---level 14---');

var result1 = parameterB / parameterA;
console.log(Math.round(result1));

console.log('---level 15---');

function add() {
   console.log(parameterA + parameterB)
}
add()

function substract() {
  return parameterA - parameterB
}
console.log(substract());

function multiply() {
  return parameterA * parameterB
}
console.log(multiply());

function divide() {
  return parameterA * parameterB
}
console.log(divide())

function modulo( ) {
  return parameterB % parameterA
}
console.log(modulo( ))

console.log('---level 16---');

console.log(add(substract(),divide()));

console.log('---level 17---');



console.log('---level 18---');

var number1 = 10
var height1 = 30

function calculateSquareArea(number1) {
 return number1 * number1
 }

function calculateSquarePerimeter(number1) {
  return 4 * number1
}

function calculateCircleArea(number1) {
  return Math.PI * (number1 * number1)
}

function calculateCircleCircumference(number1){
  return 2 * Math.PI * number1
}

function calculateCubeArea(number1) {
  return 6 * (number1 * number1)
}

function calculateCubeVolume(number1){
  return number1 * number1 * number1
}

function calculateTubeArea(number1) {
  return (2 * Math.PI * (number1 * number1)) + (height1 * (2 * Math.PI * number1))
}

function calculateTubeVolume(number1) {
  return calculateCircleArea(number1) * height1
}


console.log(calculateSquareArea(number1));
console.log(calculateSquarePerimeter(number1));
console.log(calculateCircleArea(number1));
console.log(calculateCircleCircumference(number1));
console.log(calculateCubeArea(number1));
console.log(calculateCubeVolume(number1));
console.log(calculateTubeArea(number1));
console.log(calculateTubeVolume(number1));

console.log('---level 19---');
 calculateSquareArea(add())

 console.log('---level 20---');
 console.log(new Date());

 console.log('---level 21---');
var a = new Date();

console.log(a);
console.log(a.getDate());
console.log(a.getDay());
console.log(a.getFullYear());
console.log(a.getHours());
console.log(a.getMilliseconds());
console.log(a.getMinutes());
console.log(a.getMonth());
console.log(a.getSeconds());
console.log(a.getTime());

console.log('---level 22---');

function newDate() {
  return new Date
}
console.log(newDate());

function getDate(){
  return a.getDate()
}
console.log(getDate());

function getDay(){
  return a.getDay()
}
console.log(getDay());

function getFullYear(){
  return a.getFullYear()
}
console.log(getFullYear());

function getHours() {
  return a.getHours()
}
console.log(getHours());

function getMilliseconds() {
  return a.getMilliseconds(
  )
}
console.log(getMilliseconds());

function getMinutes() {
  return a.getMinutes()
}
console.log(getMinutes());

function getMonth() {
  return a.getMonth()
}
console.log(getMonth());

function getSeconds() {
  return a.getSeconds()
}
console.log(getSeconds());

function getTime() {
  return a.getTime()
}
console.log(getTime());

console.log('---level 23---');

console.log('---level 24---');

console.log('---level 25---');

var objectName = {
  name: "Dody",
  age: 32,
  address: "Jakarta",
}
console.log(objectName);

console.log('---level 26---');

var addressBook = [];

// add
function newAddressBook(name, age, address) {
  var objectName = {
    name: name,
    age: age,
    address: address,
  }
  addressBook.push(objectName)
}

newAddressBook("rudi", 30, "tangerang")
newAddressBook("andi", 35, "bekasi")
newAddressBook("sudirman", 12, "tangerang")
newAddressBook("adri", 25, "tangerang")



// edit
function editAdressbook(index, name, age, address) {
  objectName = {
    name: name,
    age: age,
    address: address,
  }
  addressBook[index]=objectName
}
editAdressbook(3, "name", "age", "address")

// delete
function deleteAddressBook(index) {
  addressBook.splice(index, 1)
}
deleteAddressBook(3)

console.log(addressBook);
