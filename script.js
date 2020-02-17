// Problem 1: 
// Ask the user to enter their name.
let userName = prompt("What is your name?");
// Ask the user if it is morning or night. 
let timeofDay = prompt("Is it morning or night?");
// If the user enters "morning" print Good morning [NAME] 
// If the user enters "night" print  Good evening [NAME].
if (timeofDay == "Morning") {
    console.log("Good morning " + userName)
} else if (timeofDay == "Night") {
    console.log("Good evening " + userName)
}

// Problem 2:
// Ask the user to enter a number.
let userNum1 = prompt("Enter a number");
// Ask the user to enter another number.
let userNum2 = prompt("Enter another number");  
let numDiff = userNum1 - userNum2;
// If the diffrence of these numbers is greater than or equal to 10 print
// The diffrence of [NUMBER ONE] and [NUMBER TWO] is 10 or greater
// Otherwise print
// The diffrence of [NUMBER ONE] and [NUMBER TWO] is [DIFFRENCE]
if(numDiff >= 10){
    console.log("The difference of " + userNum1 + " and " + userNum2 + " is 10 or greater");
} else{
    console.log("The difference of " + userNum1 + " and " + userNum2 + " is " + numDiff);
}

// Problem 3:
// Delcare a varibale called returningUser with the value "Kenn".
let returningUser = "Kenn"; 
// Declare a variable called num with the value 10. 
let num = "10";
// Ask the user to guess a number.
let userGuess = prompt("Guess a number"); 
// Ask the user to enter their name. 
let userName1 = prompt("What is your name");
// If the user guess the correct number BUT their name is not Kenn print
// Right number, wrong user
// If the user guesses the wrong number BUT their name is Kenn print
// Wrong number, right user
// If the user guesses the correct number AND their name is Kenn print
// Right number, right user
if(userGuess == num && userName1 != returningUser){
    console.log("Right number, wrong user")
} else if(userGuess != num && userName1 == returningUser){
    console.log("Wrong number, right user")
} else if(userName1 == returningUser && userGuess == num){
    console.log("Right number, right user")
} else {
    console.log("You should have made better directions")
}
