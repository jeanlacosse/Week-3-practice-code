console.log('This practice is for arrays!');

let bagel = ['bacon', 'lettuce', 'tomato'];
/*Array methods
.push(newElement) - adds item to the end of the array
.length - number of elements in array
.indexOf(searchItem) - will give index number of the searched for item in the array. If time is not in the array will return -1
.pop() - removes the last item of the array
.unshift() - adds item to beginning of the array
.shift() - removes the first item of the array
*/
bagel[bagel.length - 1];
// ^ will give me the last item in the arrays

bagel[0] = 'maple bacon';
// ^ change the item in the array by referencing index

bagel.indexOf('cheese');
// ^ will return -1

bagel.push('mustard');
// ^.push adds to the end of the array

bagel.pop();
// ^.pop removes last item, 'mustard'
bagel.push('mayo');
bagel.push('asiago');

bagel.unshift('asiago');
// ^ .unshift adds item to the beginning

bagel.shift();
bagel.unshift('sesame');

console.log('Here is the loops section!');

// while loops below
let index = 0;
const highest = 10;

while (index < highest) {
  console.log('new index is:', index);
  index++;
}
// index end number will be 10 as it had to increment past 9 in order to stop the loop from running

// for loops below
for (let i = 0; i < highest; i++) {
  console.log('in the for loop. i:', i);
}
// asking for the value of i outside of code block will return undefined. It is out of scope ie: console.log('value of i', i) returns undefined

let hand = ['q', '3', 'j', '9', '6', 'k', 'a'];

for (let i = 0; i < hand.length; i++) {
  console.log('for loop', hand[i]);
  if (hand[i] === '9') {
    console.log('Match!');
  }
} // end match

// for...in loop: creates a variable and applies it to an array and runs it for each item in array automatically. i variable gives the index number, so 0-6 on hand variable
for (i in hand) {
  console.log('for in loop', hand[i]);
  if (hand[i] === '9') {
    console.log('MATCH!');
  }
}

// for...of loop: gives the actual object instead of the index
for (card of hand) {
  console.log('for of loop', card);
  if (card === '9') {
    console.log('another one beotch!');
  }
}

// TEAMWORK - QUESTIONS AND RESEARCH

/*1. search 2. store 3. share

 Searching for questions on google - 
  '10 tab rule' - open a bunch of tabs to find what im looking for
  advance search option to hone in on subject
  not always clear what I'm looking for so use a number of options
    -apply labels to keep content division relevant 
      store in an easy to search place

      Share tools or content in Slack, or post my own questions there as well
      
-Remeber to use quotation marks when searching for an exact string
-use the minus (-) operator next to excluded words. ie: washington -d.c.
site - will search a specific site ie: nasa
* will fill in the blank for me
filetype will give only the specific filetype .pdf
*/



