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

var kidsWithCandies = function (candies, extraCandies) {
  let greatestNum = 0;
  let result = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > greatestNum) {
      greatestNum = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= greatestNum) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};

//605 . Can Place Flowers - easy Feb. 6, 2025

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n,
// return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

var canPlaceFlowers = function (flowerbed, n) {
  let plant = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      Boolean(flowerbed[i]) === false &&
      Boolean(flowerbed[i - 1]) === false &&
      Boolean(flowerbed[i + 1]) === false
    ) {
      flowerbed[i] = 1;
      plant++;
    }
  }

  if (n <= plant) {
    return true;
  } else {
    return false;
  }
};

//dev note: optimized

var canPlaceFlowers = function (flowerbed, n) {
  let plant = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (
      Boolean(flowerbed[i]) === false &&
      Boolean(flowerbed[i - 1]) === false &&
      Boolean(flowerbed[i + 1]) === false
    ) {
      flowerbed[i] = 1;
      plant++;
      if (plant >= n) {
        return true;
      }
    }
  }

  if (n <= plant) {
    return true;
  } else {
    return false;
  }
};

//345 . Reverse Vowels of a String - easy Feb.7, 2025

// Given a string s, reverse only all the vowels in the string and return it.
// The vowels are 'a', 'e', 'i', 'o', and 'u',
// and they can appear in both lower and upper cases, more than once.

var reverseVowels = function (s) {
  let arr = s.split("");

  let result = [];
  let queue = [];

  for (let i = 0; i < arr.length; i++) {
    let check = arr[i].toLowerCase();
    if (
      check === "a" ||
      check === "e" ||
      check === "i" ||
      check === "o" ||
      check === "u"
    ) {
      queue.push(arr[i]);
      continue;
    } else {
      continue;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let check = arr[i].toLowerCase();

    if (
      check === "a" ||
      check === "e" ||
      check === "i" ||
      check === "o" ||
      check === "u"
    ) {
      let element = queue.pop();
      result.push(element);
    } else {
      result.push(arr[i]);
    }
  }

  return result.join("");
};

// 151 . Reverse Words in a String - medium Feb. 9, 2025

//Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words.
// Do not include any extra spaces.

var reverseWords = function (s) {
  let arr = s.split(" ");
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "") {
      continue;
    } else {
      result.push(arr[i]);
    }
  }

  return result.join(" ");
};

// 238 . Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i]
// is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n)
// time and without using the division operation.

// dev note: below is ai solution from google.

var productExceptSelf = function (nums) {
  const n = nums.length;
  const result = [];
  let product = 1;

  for (let i = 0; i < n; i++) {
    result[i] = product;
    product *= nums[i];
  }

  product = 1;

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }

  return result;
};

// dev note: this uses the "prefix and suffix" strategy more explicitly,
// but really doing the same thing as above but with three arrays and loops.

var productExceptSelf = function (nums) {
  const n = nums.length;
  const prefixProducts = new Array(n);
  const suffixProducts = new Array(n);
  const result = new Array(n);

  prefixProducts[0] = 1;
  for (let i = 1; i < n; i++) {
    prefixProducts[i] = prefixProducts[i - 1] * nums[i - 1];
  }

  suffixProducts[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    suffixProducts[i] = suffixProducts[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < n; i++) {
    result[i] = prefixProducts[i] * suffixProducts[i];
  }

  return result;
};

// 334 . Increasing Triplet Subsequence - medium Feb. 11, 2025

// Given an integer array nums, return true if there exists a triple of indices (i, j, k)
// such that i < j < k and nums[i] < nums[j] < nums[k].
// If no such indices exists, return false.

var increasingTriplet = function (nums) {
  let first = Infinity;
  let middle = Infinity;

  for (let num of nums) {
    if (num > middle) {
      return true;
    }
    if (num <= first) {
      first = num;
    } else {
      middle = num;
    }
  }

  return false;
};

// 443. String Compression - medium Feb 12, 2025

//Given an array of characters chars, compress it using the following algorithm:
// Begin with an empty string s. For each group of consecutive repeating characters in chars:
// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.
// After you are done modifying the input array, return the new length of the array.
// You must write an algorithm that uses only constant extra space.

// dev note: this didn't register in lc sandbox, but other JS answers had the same problem registering as solutions!!!
var compress = function (chars) {
  let letter = chars[0];
  let count = 1;
  let compressed = "";

  for (let i = 1; i < chars.length; i++) {
    if (i === chars.length - 1) {
      if (chars[i] === letter) {
        count++;
      }
      if (count > 1) {
        compressed += letter;
        compressed += String(count);
      } else {
        compressed += letter;
      }
    } else if (chars[i] === letter) {
      letter = chars[i];
      count++;
    } else {
      if (count > 1) {
        compressed += letter;
        compressed += String(count);
      } else {
        compressed += letter;
      }
      letter = chars[i];
      count = 1;
    }
  }

  chars = compressed.split("");
  return chars.length;
};

// 283 . Moving Zeros - easy Feb. 13, 2025

//Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// dev note: my first attempt passing through sluggish after forgetting bubble sort!!!

var moveZeroes = function (nums) {
  let cur;
  let point;

  for (let i = 0; i < nums.length; i++) {
    cur = nums[i];

    for (let k = cur; k < nums.length; k++) {
      point = nums[k + 1];
      if (nums[k + 1] === undefined) {
        point = nums[i + 1];
        break;
      } else if (nums[k] === 0) {
        nums[k + 1] = nums[k];
        nums[k] = point;
      }
    }
  }
};

// Dev note:  better vision that uses one pointer in the nested conditional logic of nested loop

var moveZeroes = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    //trims length of iteration since it's already sorted with zeros
    for (let k = 0; k < nums.length - i - 1; k++) {
      //places the pointer variable in the inner loop's conditional logic
      if (nums[k] === 0) {
        let tmp = nums[k];
        nums[k] = nums[k + 1];
        nums[k + 1] = tmp;
      }
    }
  }

  console.log(nums);
};

// 392. Is Subsequence - easy Feb.14, 2025

// Given two strings s and t,
// return true if s is a subsequence of t,
// or false otherwise.
// A subsequence of a string is a new string that is formed
// from the original string by deleting some (can be none) of the characters
// without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

var isSubsequence = function (s, t) {
  if (s === "") {
    return true;
  }

  let count = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[count] === t[i]) {
      count++;
    }

    if (count === s.length) {
      return true;
    } else {
      continue;
    }
  }

  return false;
};
