// Chapter 1
// Task 1
alert("Welcome to our website!");

// Task 2
alert("Error! Please enter a valid password.");

// Task 3
alert("Welcome to JS Land...\nHappy Coding!");

// Task 4
alert("Welcome to JS Land....");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");

// Task 5
console.log("Hello... I can run JS through my web browser's console");

// Task 6
function myfunction(){
    var a = document.getElementById("alertbox");
    if(a.style.display === "none"){
        a.style.display = "block";
    }
    else{
        a.style.display ="none";
    }
}
// Chapter 2
// Task 1
var username;

// Task 2
var myName = "Ibad Khan";

// Task 3
var message;
message = "Hello World!";
alert(message);

// Task 4
var name = "John Doe";
var age = "15 years old";
var course = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(course);

// Task 5
var a = "PIZZA";
alert(a);

// Task 6
var email = "ibad.khan96@gmail.com";
alert("My email address is " + email);

// Task 7
var book = "A smarter way to learn Javascript";
var a = "I am trying to learn from the Book ";
alert(a + book);

// Task 8
var a = "Yah! I can write HTML content through Javascript\n";
document.write(a);

// Task 9
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);
document.write(a);

// Chapter 3
// Task 1
var age = 24;
alert("I am " + age + " years old");

// Task 2
var pageVisited;
pageVisited = 14;
document.write("<br>You have visited this site " + pageVisited + " times");

// Task 3
var birthYear = 1996;
var a = "<br> My birth year is ";
var b = "<br> Data type of my declared variable is number";
document.write(a + birthYear + b);

// Task 4
var visitorName = "<br> <b>John Doe</b>";
var productTitle = "<b>T-shirt</b>";
var quantity = "5";
var bold = quantity.bold();
var msg = visitorName + " ordered " + bold + " " + productTitle + "(s)" + " on XYZ Clothing store";
document.write(msg);

// Chapter 4
// Task 1
var name = "Ibad", place = "Karachi", age = "24";

// Task 2
// var legalVariable, _2ndLegalVariable, $3rdLegalVariable, f0urthLegalVariabl3, $Fifth_L3gal7ariable;
// var illegalVar!able, 2ndIllegalVariable, #thirdIllegalVariable, Fourthi||egalVariable, &2fifth!llegalV^riable;

// Task 3
var head = "<h1>Rules for naming JS Variables</h1>";
var name = "Variable names can only contain letters, numbers, $, _ . For example:$my_1stVariable <br>";
var begin = "Variable names must begin with a letter, $ or _ . For example: $name, _name or name <br>";
var caseSensitive = "Variable names are case sensitive <br>";
var jsWords = "Variable names should not be JS Keywords";
document.write(head + name + begin + caseSensitive + jsWords);

// Chapter 5
// Task 1 & Task 2
 var num1 = 3;
 var num2 = 5;
 var addNum = num1 + num2;
 var lessNum = num1 - num2;
 var multiNum = num1 * num2;
 var divNum = num1 / num2;
 var modNum = num1 % num2;
 document.write("Sum of " + num1 + " and " + num2 + " is " + addNum + "<br>");
 document.write("Subtraction of " + num1 + " from " + num2 + " is " + lessNum + "<br>");
 document.write("Multiply of " + num1 + " and " + num2 + " is " + multiNum + "<br>");
 document.write("Division of " + num1 + " and " + num2 + " is " + divNum + "<br>");
 document.write("Remainder of " + num1 + " and " + num2 + " is " + modNum + "<br>");

//  Task 3
var num;
document.write("Value after variable declaration is " + num + "<br>");
num = 5;
document.write("Initial value: " + num + "<br>");
num = ++num;
document.write("Value after increment is: " + num + "<br>");
num = num + 7;
document.write("Value after addition is: " + num + "<br>");
num = --num;
document.write("Value after decrement is: " + num + "<br>");
num = num % 3;
document.write("The remainder is: " + num + "<br>");

// Task 4
var perTicket = 600;
var totalTicket = 600 * 5;
var currency = "PKR";
var totalCost = totalTicket + currency;
document.write("Total cost to buy 5 tickets to a movie is " + totalCost + "<br>");

// Task 5
document.write("Table of 4 <br>");
for(var i = 1; i <= 10; i++){
    document.write("4 x " + i + " = " + 4*i + "<br>");
}

// Task 6
var temp = +prompt("Enter Temperature");
var C = (temp - 32) * 5 / 9;
var F = (temp * 9 / 5) + 32;
document.write(temp + "&deg;C is " + F + "&deg;F<br>");
document.write(temp +"&deg;F is " + C.toFixed(2) + "&deg;C");

// Task 7
document.write("<h2>Shopping Cart</h2>");
var priceItem1 = 650;
var quantityItem1 = 3;
var priceItem2 = 100;
var quantityItem2 = 7;
var charges = 100;
var totalShopping = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + charges;
document.write("Price of item 1 is " + priceItem1 + "<br>");
document.write("Quantity of item 1 is " + quantityItem1 + "<br>");
document.write("Price of item 2 is " + priceItem2 + "<br>");
document.write("Quantity of item 2 is " + quantityItem2 + "<br>");
document.write("Shipping Charges are " + charges + "<br>");
document.write("Total cost of your order is " + totalShopping + "<br>");

// Task 8
var totalMarks = 980;
var marksObtained = 804;
var percent = (marksObtained / totalMarks) * 100;
document.write("Total marks: " + totalMarks + "<br>");
document.write("Marks obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percent.toFixed(2) + "%" + "<br>");

// Task 9
var usd = 104.80 * 10;
var sdr = 28 * 25;
var pkr = usd + sdr;
document.write("Total currency in PKR: " + pkr);

// Task 10
var num = 3;
document.write(((num + 5)*10)/2);

// Task 11
var curYear = 2020;
var birthYear = 1996;
var age = curYear - birthYear;
document.write("Current Year: " + curYear + "<br>");
document.write("BirthYear: " + birthYear + "<br>");
document.write("Your age is: " + age + "<br>");
document.write("They are either " + --age + " or " + ++age + " years old." + "<br>");

// Task 12
var radiusCircle = 20;
var pi = 3.142;
var circumCircle = 2 * pi * radiusCircle;
var areaCircle = pi * (radiusCircle * radiusCircle);
document.write("Radius of a circle: " + radiusCircle + "<br>");
document.write("The circumference of a circle is: " + circumCircle.toFixed(2) + "<br>");
document.write("The area of a circle is: " + areaCircle.toFixed(2) + "<br>");

// Task 13
var favSnack = "Kurkure";
var nowAge = 24;
var maxAge = 60;
var snackPerDay = 2;
var eatMaxAge = (maxAge - nowAge) * (snackPerDay * 365);
document.write("Favourite Snack: " + favSnack + "<br>");
document.write("Current Age: " + nowAge + "<br>");
document.write("Estimated Maximum Age: " + maxAge + "<br>");
document.write("Amount of snacks per day: " + snackPerDay + "<br>");
document.write("You will need " + eatMaxAge + " " + favSnack + " to last you until the ripe old age of " + maxAge + "<br>");

// Chapter 6-9
// Task 1
var a = 10;
document.write("Result:" + "<br>");
document.write("The value of a is: " + a + "<br>" + "<br>");
document.write("The value of ++a is: " + ++a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>");
document.write("The value of a++ is: " + a++ + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>");
document.write("The value of --a is: " + --a + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>");
document.write("The value of a-- is: " + a-- + "<br>" + "Now the value of a is: " + a + "<br>" + "<br>");

// Task 2
var a = 2;
var b = 1;
document.write("Given equation;" + "<br>"+  "--a - --b + ++b + b--;" + "<br>" +"where," + "<br>");
document.write("a is " + a + "<br>");
document.write("b is " + b + "<br>");
var result = --a - --b + ++b + b--;
document.write("The result of above equation is " + result + "<br>");
document.write("Result is shown below step by step" + "<br>");
document.write("--a is 1" + "<br>");
document.write("--a - --b is 1 - 0" + "<br>");
document.write("--a - --b + ++b is 1 - 0 + 1 " + "<br>");
document.write("--a - --b + ++b + b-- is 1 - 0 + 1 + 1 " + "<br>");

// Task 3
var name = prompt("Enter your name please");
document.write("Welcome, " + name + "!");

// Task 4 & 5
var num = +prompt("Enter a digit to display it's table");
if(num === null || num === 0){
    for(var i = 1; i <=10; i++){
        document.write(5 + " x " + i + " = " + (5 * i) + "<br>");}
}
else if(num !== null || num !== 0){
    for(var i = 1; i <= 10; i++){
        document.write(num + " x " + i + " = " + (num * i) + "<br>");}
}

// Task 6
var sub1 = prompt("Enter your subject 1");
var sub2 = prompt("Enter your subject 2");
var sub3 = prompt("Enter your subject 3");
var totalMarks = 100;
var sub1Marks = +prompt("Enter your subject 1 marks");
var sub2Marks = +prompt("Enter your subject 2 marks");
var sub3Marks = +prompt("Enter your subject 3 marks");
document.write("<b>Subject: </b>" + sub1 + "<br>");
document.write("<b>Total Marks: </b>" + totalMarks + "<br>");
document.write("<b>Obtained Marks: </b>" + sub1Marks + "<br>");
document.write("<b>Percentage: </b>" + (sub1Marks/totalMarks)*100 + "%" + "<br>" + "<br>");
document.write("<b>Subject: </b>" + sub2 + "<br>");
document.write("<b>Total Marks: </b>" + totalMarks + "<br>");
document.write("<b>Obtained Marks: </b>" + sub2Marks + "<br>");
document.write("<b>Percentage: </b>" + (sub2Marks/totalMarks)*100 + "%" + "<br>" + "<br>");
document.write("<b>Subject: </b>" + sub3 + "<br>");
document.write("<b>Total Marks: </b>" + totalMarks + "<br>");
document.write("<b>Obtained Marks: </b>" + sub3Marks + "<br>");
document.write("<b>Percentage: </b>" + (sub3Marks/totalMarks)*100 + "%" + "<br>" + "<br>");

// Chapter 9-11
// Task 1
var city = prompt("Enter your city:");
if(city == "Karachi" || city == "karachi"){
    alert("Welcome to the city of lights!");
}
else{
    alert("Welcome to " + city + "!");
}

// Task 2
var gender = prompt("Enter your gender:");
if(gender == "male" || gender == "Male"){
    alert("Good Morning, Sir!");
}
else if (gender == "female" || gender == "Female"){
    alert("Good Morning, Ma'am!");
}
else{
    alert("Good Morning!");
}

// Task 3
var trafficColor = prompt("Enter traffic signal color:");
if(trafficColor == "red" || trafficColor == "Red"){
    alert("Must Stop");
}
else if(trafficColor == "yellow" || trafficColor == "Yellow"){
    alert("Ready to move");
}
else if(trafficColor == "green" || trafficColor == "Green"){
    alert("Move now");
}
else{
    alert("Color not match");
}

// Task 4
var fuelInput = +prompt("Enter remaining fuel in car", "Enter Fuel in Litres");
if(fuelInput <= 2){
    alert("Please refill the fuel in your car");
}
else{
    alert("You have enough fuel to return home");
}

// Task 6
var sub1Marks = +prompt("Enter marks obtained in subject 1");
var sub2Marks = +prompt("Enter marks obtained in subject 2");
var sub3Marks = +prompt("Enter marks obtained in subject 3");
var totalMarks = +prompt("Enter total marks");
var marksObtained = sub1Marks + sub2Marks + sub3Marks;
var percent = (marksObtained/totalMarks) * 100;
var grade;
var remarks;
if(percent >= 80){
    grade = "A-one";
    remarks = "Excellent";
}
else if(percent >= 70){
    grade = "A";
    remarks = "Good";
}
else if(percent >= 60){
    grade = "B";
    remarks = "You need to improve";
}
else if(percent < 60){
    grade = "Fail";
    remarks = "Sorry";
}
document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percenter: " + percent.toFixed(2) + "%" + "<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<br>");

// Task 7
var secretNum = 7;
var userGuess = +prompt("Guess the secret number between 1 to 10");
if(userGuess == secretNum){
    alert("Bingo! Correct answer");
}
else if(userGuess == secretNum + 1){
    alert("Close enough to the correct answer");
}
else if(userGuess == secretNum - 1){
    alert("Close enough to the correct answer");
}
else{
    alert("Wrong answer");
}

// Task 8
var num = +prompt("Enter a number to check if it's divisible by 3:");
if(num % 3 == 0){
    alert(num + " is divisible by 3");
}
else{
    alert(num + " is not divisible by 3");
}

// Task 9
var num = +prompt("Enter a number");
if(num % 2 == 0){
    alert(num + " is even number");
}
else if(num % 2 != 0){
    alert(num + " is odd number");
}

// Task 10
var T = +prompt("Enter temperature");
if(T > 40){
    alert("It is too hot outside");
}
else if(T > 30){
    alert("The weather today is normal");
}
else if(T > 20){
    alert("Today's weather is cool");
}
else if(T > 10){
    alert("OMG! Today's weather is so cool");
}
else{
    alert("It is freezing outside");
}

// Task 11
var firstNumber = +prompt("Enter first number");
var secondNumber = +prompt("Enter second number");
var operation = prompt("Enter arithematic operation i.e (+, -, *, /, %)");
if(operation === "+"){
    alert("The result is " + (firstNumber + secondNumber));
}
else if(operation === "-"){
    alert("The result is " + (firstNumber - secondNumber));
}
else if(operation === "*"){
    alert("The result is " + (firstNumber * secondNumber));
}
else if(operation === "/"){
    alert("The result is " + (firstNumber / secondNumber));
}
else if(operation === "%"){
    alert("The result is " + (firstNumber % secondNumber));
}
else{
    alert("Insert a correct Arithematic Operater i.e (+, -, *, /, %)")
}

// Chapter 12-13
// Task 3
var num = +prompt("Enter a number");
if(num == 0){
    alert("The number is 0");
}
else if(num < 0){
    alert("The number is negative");
}
else if(num > 0){
    alert("The number is positive");
}

// Task 4
var char = prompt("Enter an alphabet");
if(char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
    alert("It's a vowel");
}
else{
    alert("It's a consonant");
}

// Task 5
var pass = "saylani";
var passUser = prompt("Enter a password");
if(passUser == null){
    alert("Please enter your password");
}
else if(passUser === pass){
    alert("Correct! The password you entered matches the original password");
}
else if(passUser !== pass){
    alert("Incorrect password");
}

// Task 6
var greeting;
var hour = 19;
if (hour < 18) {
greeting = "Good day";
}
else{
greeting = "Good evening";
}
alert(greeting);

// Task 7
var time = +prompt("Enter time in hours clock format i.e 1300 is 1 p.m.");
var greet;
if(time >= 0000 && time < 1200){
    greet = "Good Morning";
}
else if(time >= 1200 && time < 1700){
    greet = "Good Afternoon";
}
else if(time >= 1700 && time < 2100){
    greet = "Good Evening";
}
else if(time >= 2100 && time < 2359){
    greet = "Good Night";
}
else{
    greet = "Hope you are having a good time";
}
alert(greet);

// Chapter 14-16
// Task 1
var arr = [];

// Task 2
var arrString = ["string","name","place","animal","thing"];

// Task 3
var arrNum = [2,4,6,8,10];

// Task 4
var arrBoolean = [true,false];

// Task 5
var arrMixed = [1,"string",true,"mixArray",3];

// Task 6
var degPakistan = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Phd"];
var degNum =[]
document.write("Qualifications:<br>");
for(i = 0; i <8; i++){
    document.write(degPakistan[i] + "<br>");
}

// Task 7
var student = ["Michael","John","Tony"];
var studentScore = [320,230,480];
for(i = 0; i < 3; i++){
    document.write("Score of " + student[i] + " is " + studentScore[i] + ". Percentage: " + ((studentScore[i]/500) * 100) + "%<br>");
}

// Task 11
var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities = cities.slice(2,4);
document.write(selectedCities);

// Task 12
var arr = ["This", "is", "my", "cat"];
var joinArr = arr.join(" ");
alert(joinArr);

// Chapter 17-20
// Task 3
for(i = 1; i <= 10; i++){
    document.write(i + "<br>");
}

// Task 4
var num = +prompt("Enter a number");
var user = +prompt("Enter table length");
for(i = 1; i <= user; i++){
    document.write(num + " x " + i + " = " + (num * i) + "<br>");
}

// Task 5
var fruits = ["apple", "banana", "mango", "orange", "strayberry"];
for(i = 0; i < fruits.length; i++){
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

// Task 7
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var input = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am");
for(i = 0; i < A.length; i++){
    if(input === A[i]){
        alert(input + " is" + " available at index " + i + " in our bakery");
    }
}

// Task 10
var num = 5;
for(i = 1; i < 21; i++){
    document.write(num*i + ", ");
}