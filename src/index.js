const lodash=require('lodash');

const nums=[42, 7, 19, 85, 4, 62, 33];

const max_numbers=lodash.max(nums);
const min_numbers=lodash.min(nums);

console.log(`max_numbers: ${max_numbers}`);
console.log(`min_numbers: ${min_numbers}`);
console.log(`nums Array: ${nums}`);