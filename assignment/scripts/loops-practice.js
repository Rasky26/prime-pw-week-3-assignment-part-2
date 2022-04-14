console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');
for (let i = 0; i < 6; i++) {
  console.log(`The count is ${i}`)
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');
for (let i = 3; i < 6; i++) {
  console.log(`The ranged count is at ${i}`)
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
for (let i = 2; i < 11; i += 2) { // Using 11 to ensure 10 is accounted for
  console.log(`The even count is now ${i}`)
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
for (let i = 5; i > -1; i--) {
  console.log(`Countdown to ${i}`)
}



// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let star of stars) {
  console.log(`${star} is a star!`)
}

// 2.b. (EXTRA) Added example to get count and then reference back to the array by index
for (let step in stars) {
  console.log(
    `Referenced the star ${stars[step]} from index #${step}${"!".repeat(step)}`
    ) // Add flourish to the punctuation
}

// 2.c. (EXTRA)  Added an enumnerated option to get both index and name of the stars
for (const [num, star] of stars.entries()) {
  console.log(`The star ${star} is #${num} in our list!`)
}



// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');

// -------------
//  3.a.1. Using an increasing count constrained against array length
let count = 0 // Set count for looping

// Check that count is less than array length
while (count < stars.length) {

  // Log out the star at the index
  console.log(`${stars[count]} star in loop 3.a.1.`)
  
  // Increment the count
  count++
}

// -------------
//  3.a.2. Using a conditional if and break statement
count = 0 // Reset the count to zero

// Risks an infinite loop, but can be used if number of loops is unknown
while (true) {

  // Break out of the loop once count equals (or exceeds) the array length
  if (count >= stars.length) {
    break
  }

  // Log out the value based on index (count)
  console.log(`${stars[count]} star in loop 3.a.2.`)

  // Increment the count
  count++
}

// -------------
//  3.a.3. Only used to show how a math function could be incorporated
let numberLoops = stars.length // Set expected number of loops

// End loops once conditional is false
while (numberLoops > 0) {

  // Inverse the linear count from max-down to min-up
  // Uses the 'Math' library's absolute value function
  const reflectedCount = Math.abs((numberLoops - stars.length) * -1)

  // Log out the star from referenced index
  console.log(`${stars[reflectedCount]} star in loop 3.a.3.`)

  // De-increment the numberLoops count by one (1)
  numberLoops--
}


// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
