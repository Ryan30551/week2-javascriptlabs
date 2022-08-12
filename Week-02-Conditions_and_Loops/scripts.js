// //conditions and loops

// //challenge
// //use if else statements to determine if we have enough money to buy a cup of coffee
// let money = 20; //we have $5 to spend
// let coffeeCost = 10; //we know that cofffe cost $10

// if (money >= coffeeCost) {
//   // if money is greater or equal to cost of coffee
//   console.log("I can buy a cup of coffee today!"); //we will buy a cup of coffee
// } else {
//   //if we don't have enough money
//   console.log("I am going to make coffee at home"); //we will make our own
// }

// //challenge
// //using a switch statement, assign grades as described below:
// // A when (grade >= 90)
// // B when (grade < 90 && grade >= 80)
// // C when (grade < 80 && grade >= 70)
// // D when grade < 70 && grade >= 60)
// // F when (grade < 60)

// let grade = 60; //creating a variable for grade and assigning a numeric value to represent score
// let letterGrade; //creating a letter grade. I will assign a letter grade (string) based on the score

// switch (true) {
//   case grade >= 90: //test case to evaluate
//     letterGrade = "A"; //assigning a letter grade based on the condition we defined
//     break; //if the condition is not met, we want to break out and test the next case
//   case grade < 90 && grade >= 80: //condition for getting B
//     letterGrade = "B";
//     break;
//   case grade < 80 && grade >= 70: //condition for getting C
//     letterGrade = "C";
//     break;
//   case grade < 70 && grade >= 60: //condition for getting D
//     letterGrade = "D";
//     break;
//   case grade < 60:
//     letterGrade = "F"; //condition for getting F
//     break;
//   default: //default is what we want to occur when above conditions aren't met
//     console.log("Please enter a valid score!");
// }

// console.log(letterGrade);

// //example
// let accountBalance = 200;
// let rent = 1000;

// let balanceAfterRent = accountBalance - rent;
// console.log(`Remaining balance after rent: ${balanceAfterRent}`);

// if (accountBalance >= rent) {
//   //what we want to happen if the condition is met
//   console.log("I am going to pay rent today");
// } else if (accountBalance < rent) {
//   //what we want to happen if the first condition is not true, but this one is
//   console.log("I will pick up some more shifts");
// }


// // create an if else statement that evaluates:
// // if it is hot ouside && we have $5, then we will buy a soft drink

// // if (isHotOutside && moneyInPocket >= 5) {
//   //   //is hot outside and money in pocket?
//   //   console.log("It is a hot day and I have enough money to buy a soft drink");
//   // } else {
//     //   console.log("I am not going to buy a soft drink today");
//     // }
    
// //example below has an additonal condition for when it's not hot outside, but DO have enough money
// let isHotOutside = false; //boolean
// let moneyInPocket = 12; //number

// console.log("another example");
// if (isHotOutside && moneyInPocket >= 5) {
//   //evaluates if its hot outside and money greater than or equal to 5
//   console.log(
//     "It is a hot day and I have money in my pocket. I will buy a soft drink"
//   );
// } else if (!isHotOutside && moneyInPocket >= 5) {
//   //evaluates its not hot outside but money IS greater than or equal to 5
//   //! means NOT, so above is not hot outside and money is greater than or equal to 5
//   console.log(
//     "I have enough money, but it is not hot outside. I will not buy a soft drink"
//   );
// } else if (isHotOutside && moneyInPocket < 5) {
//   //evaluates if its hot outside and money is less than 5 ****** this is an update from office hours
//   console.log(
//     "It is hot outside, but I need some more money in my pocket. I will not buy a soft drink"
//   );
// } else {
//   //evaluates if its not hot outside and money is less than 5
//   console.log(
//     "It is hot, but I don't have enough money in my pocket. I am not going to buy a soft drink today"
//   );
// }

// let y = 10;

// console.log((y += 2)); //number = number + 10

// let numberGrade = 80;
// if (numberGrade >= 90) {
//   letterGrade = "A";
// } else if (numberGrade >= 80) {
//   letterGrade = "B";
// } else if (numberGrade >= 70) {
//   letterGrade = "C";
// } else if (numberGrade >= 60) {
//   letterGrade = "D";
// } else {
//   letterGrade = "F";
// }
// console.log(letterGrade);



console.log('Office Hours 08/11/2022')

// for loop
// a for loop is a loop that repeats a block of code a certain number of times

for(let i = 0; i <= 10; i++) {
  console.log(`Iteration number #: ${i}`)
  //i refers tot he index (inital expression)
  //i >= 0 refers to the conditional expression 
  //i++ refers to the increment expression
}

for(let i = 20; i >= 0; i--) {
  console.log(`Backwards iteration #: ${i}`)
}

for(let i = 0; i <= 100; i+=10) {
  console.log(`Incrementing by 10: ${i}`)
}


for(let index = 0; index < 100; index+=10) {
  console.log(`Increment: ${index}`);
}

for(let index = 100; index >= 50; index-=10) {
  console.log(`Decrement: ${index}`);
}


//while loop
//a while loop is a loop that repeats a block of code while a certain condition is true

let n = 0;//starting value
while(n <=  10) { //while n is less than or equal to 10
  console.log(n); //print n
  n++; //iterate by 1 each time until n is greater than or equal to 10. 
}


//do while loop
//a do while loop is a loop that repeats a block of code at least once, even if the condition is false

let x = 0;
do {
  console.log(x);
  x++;
} while(x <= 10)


// for/in
// for/in loops through properties of an object
//These weren't reviewed today
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in


// for/of - loops through the values of an iterable object
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of


while(x <= 10) {
  console.log(x);
  x++;
}

let y = 11;

do {
  console.log(y);
  y++
} while(y <= 10)



// class example - cooking

// We are going to create a for loop that instructs a person to stir food every 5 minutes.
// After one hour, the loop shoud stop

let totalMinutes = 60;

for(let i = 0; i <= totalMinutes; i+=5) {
  console.log(`I stirred the pot at ${i} minutes`)
  
}

// apply a 22% tip if bill is less than or equal to 100
// else apply a tip of 20% if bill is greater than 100

let bills = [10, 20, 100, 200, 250, 300, 400, 500]

for(let i = 0; i < bills.length; i++) {

  if(bills[i] <= 100){
    console.log(`
    Bill: ${bills[i]}
    Tip (22%):${bills[i] * .22}
    `)
  } else {
    console.log(
    `
    Bill: ${bills[i]}
    Tip (20%): ${bills[i] * .20}
      `
    )
  }
}



for(let i = 0; i < bills.length; i++) {
  //if bill is less than or equal to 100, multiply by 2
  if(bills[i] <= 100){
    console.log(`
    Bill: ${bills[i]}
    multiply by 2 =   ${bills[i] * 2}
    `)
  //if bill is greater than 100 && bill is less than 400, multiply by 10
  } else if (bills[i] > 100 && bills[i] < 400) {
    console.log(`
    Bill: ${bills[i]}
    multiply by 10 =  ${bills[i] * 10}
    `)
  //if above is not met, multiply by 20 (it infers information here)
  } else {
    console.log(
    `
    Bill: ${bills[i]}
    multiply by 20 =   ${bills[i] * 20}
    `
    )
  }
}
