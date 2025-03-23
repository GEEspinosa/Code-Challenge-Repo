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

// 206. Reverse Linked List - easy Feb 20, 2025

// Given the head of a singly linked list,
// reverse the list, and return the reversed list.

// imperative/iterative

var reverseList = function (head) {
  let prev = null;
  let curr = head;
  let next;

  while (curr !== null) {
    //reverse pointer

    next = curr.next;
    curr.next = prev;

    //move ahead one

    prev = curr;
    curr = next;
  }

  return prev;
};

//recursive

var reverseList = function (head) {
  // base case

  if (head === null || head.next === null) {
    return head;
  }

  // reverse the list

  const revHead = reverseList(head.next);

  head.next.next = head;
  head.next = null;

  return revHead;

  //
};

// 11. Container With Most Water - Medium Mar 5, 2025

//You are given an integer array height of length n.
// There are n vertical lines drawn such that
// the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.

var maxArea = function (height) {
  //dev note: this is nested loop answer that timed out

  // let result = 0
  // let compare = 0;

  // for (let i = 0; i < height.length; i++ ) {
  //     if (height[i+ 1] === undefined) {
  //         break
  //     }
  //     for (let j = i + 1 ; j <height.length; j ++ ) {
  //         let least = 0;
  //         let most = 0;
  //         if (height[i] >= height[j]) {
  //             least = j
  //             most = i
  //         } else if (height [i] < height[j]) {
  //             least = i;
  //             most = j;
  //         }
  //         let diff = j - i
  //         let compare = diff * (height[least])
  //         if (compare > result) {
  //             result = compare
  //         }
  //         console.log( diff, compare)
  //     }
  // }
  // return result

  //dev note: this is the two pointer answer that uses a while loop--much more performant

  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let currentMax = width * minHeight;
    if (currentMax > result) {
      result = currentMax;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};

//643. Maximum Average Subarray I - easy Mar 6, 2025

// You are given an integer array nums consisting of n elements,
// and an integer k. Find a contiguous subarray whose length is equal to k
// that has the maximum average value and return this value.
// Any answer with a calculation error less than 10-5 will be accepted.

var findMaxAverage = function (nums, k) {
  maxSum = 0;
  curSum = 0;

  for (let i = 0; i < k; i++) {
    curSum += nums[i];
  }

  maxSum = curSum;

  for (let i = k; i < nums.length; i++) {
    curSum += nums[i] - nums[i - k];
    if (curSum > maxSum) {
      maxSum = curSum;
    }
  }

  return maxSum / k;
};

//1679 . Max Number of K-Sum Pairs - medium Mar 7, 2025

//You are given an integer array nums and an integer k.
// In one operation, you can pick two numbers
// from the array whose sum equals k and remove them from the array.
// Return the maximum number of operations you can perform on the array.

//dev note: this is a simple two-pointer solution with O(n log n) run time.

var maxOperations = function (nums, k) {
  nums.sort((a, b) => a - b);

  let result = 0;
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === k) {
      result++;
      left++;
      right--;
    } else {
      sum < k ? left++ : right--;
    }
  }

  return result;
};

// 26. Remove Duplicates from Sorted Array - easy Mar. 12, 2025

//Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
// Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
// Return k.

//Dev note: simple two pointer solution with O(n) time complexity.

var removeDuplicates = function (nums) {
  //remove edge cases
  if (nums.length === 0) return 0;

  //pointer one
  let i = 0;

  //loop through and compare
  for (let j = 1; j < nums.length; j++) {
    //compares two pointers
    if (nums[j] !== nums[i]) {
      //increments first pointer
      i++;

      //swaps
      nums[i] = nums[j];
    }
  }

  // return i given it's incremented during iteration.
  //make sure to add one since it's initially tracking array indexices.
  return i + 1;
};

// 9. Palindrome Number - easy Mar 12, 2025
// Given an integer x,
// return true if x is a palindrome,
// and false otherwise.

// solution: integer to string array and loop w/two pointer;
// Time Comp: O(n)
// Space Comp: O(n)

var isPalindrome = function (x) {
  let array = String(x).split("");
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    if (array[left] !== array[right]) {
      return false;
    } else {
      left++;
      right--;
    }
  }

  return true;
};

//comparing two strings using methods solution

var isPalindrome = function (x) {
  let pal = String(x).split("").reverse().join("");
  let norm = String(x);
  console.log(pal, norm);
  return norm === pal;
};

// 27. Remove Elements - easy Mar 13, 2025

// Given an integer array nums and an integer val,
// remove all occurrences of val in nums in-place.
// The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k,
// to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums
// contain the elements which are not equal to val.
// The remaining elements of nums are not important as well as the size of nums.
// Return k.

//Dev Note: iterate backwards to reduce time complexity of splice method.

var removeElement = function (nums, val) {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === val) {
      nums.splice(i, 1);
    }
  }
  return nums.length;
};

//13 . Roman to Integer - easy Mar 17, 2025

//Given a roman numeral, convert it to an integer.

//dev note: hash map and single iteration strat using conditional logic (Time Complex O(n))

var romanToInt = function (s) {
  hashMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let arr = s.split("");
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (element === "I") {
      if (arr[i + 1] === "V") {
        result += 4;
        i++;
      } else if (arr[i + 1] === "X") {
        result += 9;
        i++;
      } else {
        result += hashMap[element];
      }
    } else if (element === "X") {
      if (arr[i + 1] === "L") {
        result += 40;
        i++;
      } else if (arr[i + 1] === "C") {
        result += 90;
        i++;
      } else {
        result += hashMap[element];
      }
    } else if (element === "C") {
      if (arr[i + 1] === "D") {
        result += 400;
        i++;
      } else if (arr[i + 1] === "M") {
        result += 900;
        i++;
      } else {
        result += hashMap[element];
      }
    } else {
      result += hashMap[element];
    }
  }

  return result;
};

//28 . Find the Index of the First Occurence in a String - easy Mar 19, 2025

//Given two strings needle and haystack,
// return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

//Dev Note: Initial answer but methods used slows performance with time complexity O(N * M)

var strStr = function (haystack, needle) {
  let arr = haystack.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === needle[0]) {
      let comp = arr.slice(i, needle.length + i).join("");
      if (comp === needle) {
        return i;
      }
    }
  }

  return -1;
};

//Dev Note: improved version of above-mentioned:

//Doesn't need to split and join because loops can iterate over string elements;
// Also subtract needle length from terminating condition;

var strStr = function (haystack, needle) {
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack[i] === needle[0]) {
      let comp = haystack.slice(i, needle.length + i);
      if (comp === needle) {
        return i;
      }
    }
  }

  return -1;
};

//26. Remove Duplicates from Sorted Array

//dev note: my crazy initial version with Time Complexity O(n)

var removeDuplicates = function (nums) {
  let result = 0;
  let curr = nums.length - 1;

  for (let next = nums.length - 2; next >= 0; next--) {
    if (nums[next] === nums[curr]) {
      nums.splice(next, 1);
      next++;
    } else {
      curr--;
      result++;
    }
  }
  return result + 1;
};

// dev better sorting solution

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let i = 1;

  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[j - 1]) {
      nums[i] = nums[j];
      i++;
    }
  }
  return i;
};



// 20. Valid Parentheses - easy Mar 22, 2025

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid. An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// dev note: stack with hashmap answer without looking at other solutions, time complexity O(n)

var isValid = function(s) {
   
  // make sure there are even pairs to evaluate

  if (s.length % 2 > 0) {return false}

  // use stack datastructure

  let stack = [];

  // object helps to pair corresponding symbol

  const hashMap = {
      '{' : "}",
      '[' : "]",
      '(' : ")",
  }

  // iterate

  for ( let i = 0 ; i < s.length ; i++) {
      let value = s[i]; 
      if (value in hashMap) {
          stack.push(hashMap[value])
      } else if (
          value === stack[stack.length-1]
      ) {
          stack.pop()
      } else {
          return false
      }
 }
  return stack.length === 0
};

// 58. Length of Last Word - easy Mar 22, 2025

//Given a string s consisting of words and spaces, 
// return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.


// method stacking solution

var lengthOfLastWord = function(s) {
  let arr = s.split(' ').filter(word => word !== '').pop()
  return arr.length
};