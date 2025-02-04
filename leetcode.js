// TWO SUM - easy Feb 4, 2025

//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.


//dev note: my initial attempt is considered the "brute force" solution saving space for longer runtime (O(n squared))

var twoSum = function (nums, target) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let n = i + 1; n < nums.length; n++) {
      if (nums[i] + nums[n] === target) {
        result = [i, n];
      }
    }
  }

  return result;
};

//dev note: this is the given solution to use a hash map to improve runtime ( O(1) )

var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let n = 0; n < nums.length; n++) {
    const complement = target - nums[n];

    if (map.has(complement) && map.get(complement) !== n) {
      return [n, map.get(complement)];
    }
  }

  return [];
};
