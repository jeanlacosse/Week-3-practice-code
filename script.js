console.log('This practice is for arrays!');

let bagel = ['bacon', 'lettuce', 'tomato'];

bagel[bagel.length - 1]
// ^ will give me the last item in the arrays

bagel[0] = 'maple bacon';
// ^ change the item in the array by referencing index

bagel.indexOf('cheese');
// ^ will return -1

bagel.push('mustard');
// ^.push adds to the end of the array

bagel.pop()
// ^.pop removes last item, 'mustard'
bagel.push('mayo');
bagel.push('asiago');

bagel.unshift('asiago');
// ^ .unshift adds item to the beginning

bagel.shift();
bagel.unshift('sesame');


console.log('Here is the loops section!')

// while loops below
let index = 0;
const highest = 10;

while (index < highest) {
console.log('new index is:', index);
index++;
}