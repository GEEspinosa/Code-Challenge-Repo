//1 . TWO SUM - easy Feb 4, 2025

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


//1431 . Kids With the Greatest Number of Candies - easy Feb.6,2025

// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have. 
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.
// Note that multiple kids can have the greatest number of candies.

var kidsWithCandies = function(candies, extraCandies) {
    
  let greatestNum = 0;
  let result = []

  for (let i = 0 ; i < candies.length ; i++ ) {
      if (candies[i] > greatestNum) {
          greatestNum = candies[i]
      } 
  }

  for (let i = 0 ; i < candies.length ; i++){
      if (candies[i] + extraCandies >= greatestNum) {
          result.push(true)
      } else {
          result.push(false)
      }
  }
  
  return result
};



//605 . Can Place Flowers - easy Feb. 6, 2025

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, 
// return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function(flowerbed, n) {
  let plant = 0

  for (let i = 0 ; i < flowerbed.length ; i++ ) {
      if (Boolean(flowerbed[i]) === false && 
          Boolean(flowerbed[i-1]) === false && 
          Boolean(flowerbed[i+1]) === false 
      ) { 
          flowerbed[i] = 1
          plant++ 
      }
  }

  if (n <= plant) {
      return true
  } else {
      return false
  }
};


//dev note: optimized

var canPlaceFlowers = function(flowerbed, n) {
  let plant = 0

  for (let i = 0 ; i < flowerbed.length ; i++ ) {
      if (Boolean(flowerbed[i]) === false && 
          Boolean(flowerbed[i-1]) === false && 
          Boolean(flowerbed[i+1]) === false 
      ) { 
          flowerbed[i] = 1
          plant++ 
          if (plant >= n) {
            return true
          }
      }
  }

  if (n <= plant) {
      return true
  } else {
      return false
  }

};


//345 . Reverse Vowels of a String - easy Feb.7, 2025

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u', 
// and they can appear in both lower and upper cases, more than once.

var reverseVowels = function(s) {

  let arr = s.split('');

  let result = []
  let queue = []

  for (let i = 0 ; i < arr.length ; i++ ) {
      let check = arr[i].toLowerCase()
      if (check === 'a' || check ===  'e' || check === 'i' || check === 'o' || check === 'u') {
          queue.push(arr[i])
          continue
      } else {
          continue
      }
  }

  for (let i = 0 ; i < arr.length ; i++ ) {
      let check = arr[i].toLowerCase()

      if (check === 'a' || check ===  'e' || check === 'i' || check === 'o' || check === 'u') {
          let element = queue.pop()
          result.push(element)
      } else {
          result.push(arr[i])
      }
  }

  return result.join('')
};