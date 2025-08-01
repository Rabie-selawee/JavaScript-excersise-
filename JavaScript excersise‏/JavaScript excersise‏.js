
// 1_Swap Two Variables
function swapProducts() {
let c=document.getElementById('A').innerText;
document.getElementById('A').innerText=document.getElementById('B').innerText;
document.getElementById('B').innerText=c;
}

//2_Check if a Number is Odd or Even
let arr = [0,1,2,3,4,5,6,7,8,9,10];
function checkNumber(...arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){document.write("<br>is even number : ", arr[i]);}
    else {document.write("<br>is odd number : ", arr[i]);}
  }
  document.write('<hr>');
}
checkNumber(...arr);

//3_Factorial of a Number

function factorial(n){
  let x=1;
  let y=n;
for(n;n>0;n--){x*=n}
document.write(`factorial for ${y}  : `,x,`<hr>`);
}

factorial(5);

// 4_Palindrome Check

function Palindrome_Check(username){
const x=username.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
const y=x.split('').reverse().join('');
if(x==y){document.write(`Username is a palindrome >>> choose another username   :  >>>>> ${x} = ${y} <hr>`);}
else{document.write(`Username is valid:     >>>>>   ${x} != ${y} <hr>`);}

}
Palindrome_Check("racecarx");



// 5_Find the Largest of Three Numbers

function maxNumber(x,y,z){
  let max=0;
if(x>y && x>z){max=x;}
else if(y>x && y>z){max=y;}
else{max=z;}
document.write(`largest sales number is  :    ${max}<hr>`);
}
maxNumber(100,520,300);


//6_Fibonacci Sequence
function Fibonacci_Sequence(days) {
  const sequence = [];

  if (days >= 1) sequence.push(0);
  if (days >= 2) sequence.push(1);

  for (let i = 2; i < days; i++) {
    const add = sequence[i - 1] + sequence[i - 2];
    sequence.push(add);
  }

 document.write(`Motivational Fibonacci Tracker >>>:     ${sequence} <hr>`);

}
Fibonacci_Sequence(10);



//7_ Sum of Digits
function sumNumber(...arr){
sum=0;
for(let i=0 ;i<arr.length ;i++){sum+=arr[i];}
document.write(`sum numbers is  :     ${sum} <hr>`);
}
sumNumber(0,1,2,3,4,5,6,7,8,9);


//8_Check Prime Number

function PrimeNumber(n) {
  if (n <= 1 ||n % 2 === 0 ){document.write(` ${n} :  is no Prime number <hr >`);return;} 
  if (n === 2)  {document.write(` ${n} :✅  is Prime number <hr >`);return;}

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {document.write(`  ${n} :  is no Prime number <hr > `);return;}
  }
document.write(`  ${n} :  is Prime number <hr> `);
}

PrimeNumber(29);

// 9_Reverse a String

function Reverse_String(str){
let result=str.split('').reverse().join('');
document.write(`    the reverse string is: ${result} <hr> `);
}
Reverse_String(";rabie")

// 10_Find the Factorial of a Number Using a Loop

function factorial_loop(n){
  let x=1;
  let y=n;
for(n;n>0;n--){x*=n}
document.write(`factorial for ${y}  : `,x,`<hr>`);
document.write('');}

factorial_loop(5);

// 11_Find the GCD of Two Numbers
function findGCD(a,b){
let first=a;
let last=b;

while(b!==0){
let c=b;
b=a%b;
a=c;
}
document.write(`GCD of ${first} and ${last} is: ${a} <hr>`);
return a;
}

findGCD(8,4);


// 12_Check if a Number is Perfect

function isPerfectNumber(n) {
  if (n <= 1) {document.write(`${n} ✅ is no Perfect Number <hr>`);return;}

  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {sum += i;}
  }

if (sum === n) {
    document.write(`${n} ✅ is a Perfect number <hr>`);
  } else {
    document.write(`${n} ❌ is not  a Perfect number <hr>`);
  }}
isPerfectNumber(28);


//13_Find the LCM of Two Numbers
function findGCD_lcm(a,b){
while(b!==0){
let c=b;
b=a%b;
a=c;
}
return a;
}
function lcm(a, b) {
  if (a <= 0 || b <= 0) {
    document.write(` invalid input a,b >> + <hr>`);
    return;
  }

  const result = (a * b) / findGCD_lcm(a, b);
  document.write(`✅ The LCM of ${a} and ${b} is: ${result} <hr>`);
}
lcm(12,18);

//14_Remove Duplicates from an Array

function Remove_Duplicate(arr){
let result= new Set(arr);
let r=[...result]
    document.write(`original: [${arr}]<br>`);
    document.write(`without duplicates:[${r}] <hr>`);

}
Remove_Duplicate([1,2,2,3,3,4,4,4,5,4,3,2,9]);


//15_Sum of Elements in an Array
function sumArray(...arr){
sum=0;
for(let i=0 ;i<arr.length ;i++){sum+=arr[i];}
document.write(`sum numbers is  :     ${sum}<hr> `);
}
sumArray(0,1,2,3,4,5,6,7,8,9,55);


//16_Find the Maximum Number in an Array
function maxArray(...arr){
let max=arr[0];
for(let i=0 ;i<arr.length ;i++){if(arr[i]>max){max=arr[i];}}
document.write(`max numbers is  :     ${max} <hr>`);
}
maxArray(44,1,2,3,4,5,6,7,8,9,55,77);

//17_Find the Minimum Number in an Array
function minArray(...arr){
let min=arr[0];
for(let i=0 ;i<arr.length ;i++){if(arr[i]<min){min=arr[i];}}
document.write(`minimum numbers is  :     ${min} <hr>`);
}
minArray(44,1,2,3,4,5,6,7,8,9,55,77);


//18_ Find the Common Elements Between Two Arrays

function find_common(a1,a2){
let s1= new Set(a1);
let result=a2.filter(item=>s1.has(item));
  document.write(`Common Elements Between Two Arrays: [${result.join(', ')}] <hr>`);

}
find_common([1,2,3,4,5,6],[1,2,4,9]);


//19_Count the Occurrences of a Value in an Array

function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {if (arr[i] === value) {count++;}}
  document.write(` The value "${value}" appears ${count} times in the array<hr>`);
}
countOccurrences([50,50,50,10,50,10,50], 50); 


//20_Find the Index of an Element in an Array

function findIndex(value, vindex) {
  const index = value.indexOf(vindex);

  if (index !== -1) {
    document.write(` The number "${vindex}" is at index ${index} <hr>`);
  } else {
    document.write(` The number "${vindex}" was not found <hr>`);
  }
}
findIndex([1, 2, 3, 4],4);

//21_Sort an Array in Ascending Order
function sortArray(...arr){
let s=[];

while (arr.length > 0) {
let min=arr[0];
let minIndex = 0;

for(let i=0 ;i<arr.length ;i++){if(arr[i]<min){ min=arr[i];minIndex=i;}}

s.push(min);
arr.splice(minIndex,1);
}
document.write(`sorted numbers is  :     ${s} <hr>`);
}
sortArray(44,1,2,3,4,5,6,7,77);



//22_Convert a String to an Array
function String_to_Array(str){
document.write(` convert a "${str}" to  array    [${str.split('')}] <hr>`);console.log(str.split(''));
}
String_to_Array('rabie');


//23_join an array into a string
function arraytostring(arr){
  document.write(`convert array [${arr}] to string: "${arr.join('')}" <hr>`);
}
arraytostring(['r','a','b','i','e']);


//24_Find the Length of a String

function length_array(str){
  document.write(`length for array >> [${str}] : ${str.length} <hr>`);
}
length_array(['r','a','b','i','e']);

//25_Convert a String to Uppercase

function uppercase(str){

document.write(`Convert a ${str} to Uppercase >>>>> ${str.toUpperCase()}<hr>`);
}
uppercase("rabie");

//26_Convert a String to Lowercase

function lowercase(str){

document.write(`Convert a ${str} to Lowercase >>>>> ${str.toLowerCase()}<hr>`);
}
lowercase("RABIE");

//27_Check if a String Contains a Substring
function str_contain_substr(str,strlist){
for(let word of strlist){
  if(str.toLowerCase().includes(word.toLowerCase())){
    document.write(`yes >> "${str}" Contains a   " ${word}"  <br>`);
  }}
document.write('<hr>');

}
str_contain_substr("rabie hasan abdel Hameed deeb",["Hasan","Deeb","noor"]);


//28_Remove Whitespace from a String
function remove_space(str) {
let result=str.trim().replace(/\s+/g, '');
      document.write(` "${str}" >>> after remove whitespace from a String  : " ${result}"<hr>`);
}
remove_space("     rab     ie    ");

//29_Get the Character at a Specific Index in a String

function getCharAtIndex(str, index) {
  if (index < 0 || index >= str.length) {
    document.write( `index ${index} is out of range for string "${str}"<hr>`);}
 
   for(let i=0; i<str.length;i++){if(i==index){ document.write( `The character at index ${index} is "${str[i]}"<hr>`);}
    
                                 }
}
 getCharAtIndex("attack north", 4);


 //30_Check if a String Starts with a Specific Substring

 function checkEmailStart(str,email){
  if(str.toLowerCase().startsWith(email.toLowerCase())){
    document.write(` "${str}" Contains a  email " ${email}"  <hr>`);}
    else{ document.write(` "${str}" not Contains a  email " ${email}"  <hr>`);}
}
checkEmailStart("rabie@gmail.com","RABIE@");


//31_Check if a String Ends with a Specific Substring

 function check_str_end(str,jpg){
  if(str.toLowerCase().endsWith(jpg.toLowerCase())){
    document.write(` "${str}" Contains a  " ${jpg}"  <hr>`);}
  else{    document.write(`  "${str}" not Contains a  " ${jpg}"  <hr>`);}
}
check_str_end("file.JPG",".jpg");

//32_Extract a Substring from a String

function getMessage(message, length) {
    const preview = message.substring(0, length);

  if (length > 0) {  document.write( `📩 Preview: "${preview}..." <hr>`);}
else{document.write( ` error in length >>> reduce 1" <hr>`)}
}
getMessage("hello there!  is a long message", 12);

//33_Create a Countdown Timer  

function CreateTimer() {
  let div = document.createElement('div');
  div.id = "output";
  document.body.appendChild(div); 

  let count = 0;
  const maxQuestions = 9;
  const output = document.getElementById("output");

  const c = setInterval(() => {
    if (count < maxQuestions) {
      output.innerHTML += `Question ${count + 1}<br>`;
      count++;
    } else {
      clearInterval(c);
      output.innerHTML += ` All questions shown <hr>`;
    }
  }, 5000);
}

CreateTimer();

//34_Random Number Between Two Values

function randomNumber(x, y) {
  const rand = Math.floor(Math.random() * (y - x + 1)) + x;
  document.write(`<hr>${rand}<hr>`);
}

randomNumber(1, 6);

//35_Convert a Number to a String

function numberToString(age){
let strAge=age.toString()
  document.write(`${strAge} :   ${typeof strAge}<hr>`);

}
numberToString(25)

//36_Convert a String to a Number

function StringTonumber(age){
let numAge=   +age
  document.write(`${numAge} :   ${typeof numAge}<hr>`);

}
StringTonumber("25")


//37_Get the Current Date and Time

function getCurrentDateTime() {
  const now = new Date(); 
  const dateTime = now.toLocaleString();
  document.write(`${dateTime}<hr>`)
}
 getCurrentDateTime()

 //38_Get the Day of the Week

 function getDayOfWeek() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date();
    document.write(`${days[today.getDay()]}<hr>`)
}
getDayOfWeek();

//39_Check if an Array Contains a Specific Element

function containsElement(arr, element) {
  let fruits = ["apple", "banana", "orange",1,2,3];
if(arr.includes(element)){  document.write(`Array  Contains a Element >> ${element} <hr>` )}
else{document.write(`Array not Contains a Element  >> ${element} <hr>`)}
}

containsElement(["apple", "banana", "orange",1,2,3], "banana"); 
 containsElement(["apple", "banana", "orange",1,2,3], "grape");  


 //40_Find the Length of an Array

 function getLength(productIDs) {
document.write(`Length of Array [ ${productIDs} ] is :    ${productIDs.length} <hr>`)

}

getLength([101, 102, 103, 104, 105]);



