function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {}

  for(let index = 0; index < array.length; index++){  
    const complimentary = target - array[index]
    if(complimentary in seenNumbers){
      return true
    }else{
      seenNumbers[array[index]] = true
    }
      
  }
  return false
    
}

/* 
  Write the Big O time complexity of your function here
  runtime complexity is O(n)
  space complexity is O(n2) this is becuse our input is an array and array input will grow with o(n) if they bcome bigger.we have 
  an object that grows in the same way
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
