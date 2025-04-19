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

var isValid = function (s) {
  // make sure there are even pairs to evaluate

  if (s.length % 2 > 0) {
    return false;
  }

  // use stack datastructure

  let stack = [];

  // object helps to pair corresponding symbol

  const hashMap = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  // iterate

  for (let i = 0; i < s.length; i++) {
    let value = s[i];
    if (value in hashMap) {
      stack.push(hashMap[value]);
    } else if (value === stack[stack.length - 1]) {
      stack.pop();
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

// 58. Length of Last Word - easy Mar 22, 2025

//Given a string s consisting of words and spaces,
// return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// method stacking solution

var lengthOfLastWord = function (s) {
  let arr = s
    .split(" ")
    .filter((word) => word !== "")
    .pop();
  return arr.length;
};

//88. Merge Sort Array - easy Mar 27, 2025

//You are given two integer arrays nums1 and nums2,
// sorted in non-decreasing order, and two integers m and n,
// representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function,
// but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n,
// where the first m elements denote the elements that should be merged,
// and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.

var merge = function (nums1, m, nums2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  let end = m + n - 1;

  while (p1 >= 0 && p2 >= 0) {
    if (nums1[p1] < nums2[p2]) {
      nums1[end] = nums2[p2];
      end--;
      p2--;
    } else {
      nums1[end] = nums1[p1];
      end--;
      p1--;
    }
  }

  while (p2 >= 0) {
    nums1[end] = nums2[p2];
    p2--;
    end--;
  }
};

//136. Single Number - easy Mar 28, 2025

//Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.
//You must implement a solution with a linear runtime
// complexity and use only constant extra space.

//dev note: my first attempt using hash table and one iteration

var singleNumber = function (nums) {
  let hashMap = {};

  for (let i = 0; i < nums.length; i++) {
    let key = nums[i];
    if (nums[i] in hashMap) {
      delete hashMap[key];
    } else {
      hashMap[key] = 1;
    }
  }

  return parseInt(Object.keys(hashMap));
};

//21. Merge Two Sorted Lists - easy Apr 1, 2025

//You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list.
// The list should be made by splicing
// together the nodes of the first two lists.
// Return the head of the merged linked list.

//Dev note: just studying because LC way of accessing the list value and next was confusing
//while-loop solution that makes sense.

var mergeTwoLists = function (l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;
  return tempNode.next;
};

//35. Search Insert Position - easy Apr 4, 2025

// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were
// inserted in order. You must write an algorithm with O(log n)
// runtime complexity.

//dev note: first attempt iterative

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (value === target) {
      return i;
    }
    if (value > target) {
      return i;
    }
  }
  return nums.length;
};

//14. Longest Common Prefix - easy, Apr 6, 2025

//Write a function to find the longest
// common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

var longestCommonPrefix = function (strs) {
  let prefix = strs[0].split("");

  for (let i = 1; i < strs.length; i++) {
    let word = strs[i];
    let wordLength = word.length;
    prefix.splice(wordLength);
    for (let j = 0; j < word.length; j++) {
      let letter = word[j];
      if (letter !== prefix[j]) {
        prefix.splice(j);
        break;
      }
    }
  }
  return prefix.join("");
};

//83. Remove Duplicates from Sorted List - easy Apr 9, 2025

// Given the head of a sorted linked list,
// delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

var deleteDuplicates = function (head) {
  //edge case where list is empty
  if (head === null) {
    return head;
  }

  //our pointer that traverses the list
  let curr = head;

  //while loop checking when the next pointer of current node is null
  while (curr.next !== null) {
    //conditional comparing values of curr and the next node
    if (curr.val === curr.next.val) {
      //variable that holds second node down from current
      let skip = curr.next.next;

      //current node's pointer then skips over the node with repeated val to the skip node
      curr.next = skip;
    } else {
      //if compared values are not the same, allow current node to traverse
      //to the next before following iteration
      curr = curr.next;
    }
  }

  //duplicates should be skipped in the list, can return the head
  return head;
};

//2215. Find the Difference of Two Arrays - easy Apr 12, 2025

//Given two 0-indexed integer arrays nums1 and nums2,
// return a list answer of size 2 where:
// answer[0] is a list of all distinct integers in nums1
// which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2
// which are not present in nums1.
// Note that the integers in the lists
// may be returned in any order.

//dev note: first attempt using hash table objs and three for loops

var findDifference = function (nums1, nums2) {
  let hash1 = {};
  let hash2 = {};

  //iterate and make two hash tables

  for (i = 0; i < nums1.length; i++) {
    let value1 = nums1[i];
    if (!(value1 in hash1)) {
      hash1[value1] = value1;
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    let value2 = nums2[j];
    if (!(value2 in hash2)) {
      hash2[value2] = value2;
    }
  }

  for (let key in hash1) {
    if (key in hash2) {
      delete hash1[key];
      delete hash2[key];
    }
  }

  let valArr1 = Object.values(hash1);
  let valArr2 = Object.values(hash2);
  return (result = [valArr1, valArr2]);
};

//dev note: recommended use of new Set() data structure strategy

var findDifference = function (nums1, nums2) {
  let set1 = new Set(nums1);
  let set2 = new Set(nums2);
  let arr1 = [];
  let arr2 = [];

  for (let val of set1) {
    if (!set2.has(val)) {
      arr1.push(val);
    }
  }
  for (let val of set2) {
    if (!set1.has(val)) {
      arr2.push(val);
    }
  }

  return [arr1, arr2];
};

//returning to 1. Two Sum - easy Apr 16, 2025 (for Pinterest Interview)

//Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
  //brute force, first attempt (nested loops)

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      } else {
        continue;
      }
    }
  }

  //hash table, linear time operation

  //use a object as a hash table to store through first iteration
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    //create variable that stores remainder from subtracting current number from target
    const remainder = target - nums[i];

    //in conditional, we ask if the remainder is in our hash. If so, return that stored index and index of i,
    //else add it to the hash table

    if (remainder in hash) {
      return [hash[remainder], i];
    } else {
      hash[nums[i]] = i;
    }
  }
};

//return to 20. Valid Parentheses - easy Apr 17, 2025 (for Pinterest Interview)

var isValid = function (s) {
  //1) object of key value pairs to refer to while iterating

  const table = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  //2) a stack that we push and pop to retain proper order of parentheses

  let stack = [];

  //3) then iterate with conditional logic buiilding and subtracting the stack

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    //check if character is key in table --> push
    if (char in table) {
      stack.push(table[char]);
    }
    //check if character is the same as last in stack --> pop
    else if (char === stack[stack.length - 1]) {
      stack.pop();
    }
    //inferred last outcome is char is not in proper order --> return false
    else {
      return false;
    }
  }

  //4) ternary statement: if stack has any elements in the array, it's false. Else true.
  return stack.length ? false : true;
};

// return to 21. Merge Two Sorted Lists - easy Apr 17, 2025 (Pinterest Interview Practice)

//You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted list.
// The list should be made by splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

//dev note: first attempt
var mergeTwoLists = function (list1, list2) {
  let newList = { val: null, next: null };
  let pointer = newList;

  while (list1 && list2) {
    if (list1.val >= list2.val) {
      pointer.next = list2;
      list2 = list2.next;
      pointer = pointer.next;
    } else {
      pointer.next = list1;
      list1 = list1.next;
      pointer = pointer.next;
    }
  }

  if (list1) {
    pointer.next = list1;
  } else {
    pointer.next = list2;
  }

  return newList.next;
};

//121. Best Time to Buy and Sell Stock - easy Apr 18, 2025

// You are given an array prices where prices[i] is the price of a given
// stock on the ith day. You want to maximize your profit by
// choosing a single day to buy one stock and choosing a different
// day in the future to sell that stock. Return the maximum profit you
// can achieve from this transaction.
// If you cannot achieve any profit, return 0.

//dev note: first partial correct attempt

var maxProfit = function (prices) {
  // compare values
  let lowest = 0;
  let highest = 0;

  //end pointer
  let beg = 0;
  let end = prices.length - 1;

  // while loop
  while (beg < end) {
    lowest = prices[beg];
    highest = prices[end];

    if (prices[beg + 1] < lowest) {
      beg++;
    } else if (prices[end - 1] > highest) {
      end--;
    } else {
      break;
    }
  }

  console.log(lowest, highest);

  return highest - lowest > 0 ? highest - lowest : 0;
  // return a ternary checking if result is > 0
};

//dev note: successful and performant solution

var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let highest = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      let profit = prices[right] - prices[left];
      if (highest < profit) {
        highest = profit;
      }
    } else {
      left = right;
    }
    right++;
  }
  return highest;
};

//125. Valid Palindrome (only alphanumeric characters!)- easy Apr 18, 2025

// A phrase is a palindrome if,
// after converting all uppercase letters into
// lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome,
// or false otherwise.

//dev note: JS method chaining, specifically using .replace() with RegEx condition

var isPalindrome = function (s) {
  let filterString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  return filterString === filterString.split("").reverse().join("")
    ? true
    : false;
};

//704. Binary Search - easy Apr 18, 2025

//Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

//Dev note: I had everything right except I kept screwing up the equation for middle
// and placed it outside the white loop

var search = function (nums, target) {
  let beg = 0;
  let end = nums.length - 1;

  while (beg <= end) {
    // make sure to remember this! Add end and beg before dividing,
    // then make sure to round (or use modulo conditional)
    let middle = parseInt((end + beg) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      beg = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

//242. Valid Anagram - easy Apr 18, 2025

//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

//Dev Note: first attempt, trying to avoid deleting from one hash table and using build-in set()

var isAnagram = function (s, t) {
  let obj1 = {};
  let obj2 = {};

  for (char of s) {
    if (!(char in obj1)) {
      obj1[char] = 1;
    } else {
      obj1[char]++;
    }
  }

  for (char of t) {
    if (!(char in obj2)) {
      obj2[char] = 1;
    } else {
      obj2[char]++;
    }
  }

  for (char in obj1) {
    if (!(char in obj2)) {
      return false;
    } else {
      if (obj1[char] !== obj2[char]) {
        return false;
      }
    }
  }

  for (char in obj2) {
    if (!(char in obj1)) {
      return false;
    } else {
      if (obj1[char] !== obj2[char]) {
        return false;
      }
    }
  }

  return true;
};

//dev note : second attempt, using length comparison at beginning to remove unnecessary looping

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};

  for (char of s) {
    if (!(char in obj1)) {
      obj1[char] = 1;
    } else {
      obj1[char]++;
    }
  }

  for (char of t) {
    if (!(char in obj2)) {
      obj2[char] = 1;
    } else {
      obj2[char]++;
    }
  }

  for (char in obj1) {
    if (!(char in obj2)) {
      return false;
    } else {
      if (obj1[char] !== obj2[char]) {
        return false;
      }
    }
  }

  return true;
};

//dev note: third attempt to remove an extra loop and hash table by decrementing
// the value of keys on second loop or deleting if it's just 1.

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let hash = {};

  for (char of s) {
    if (!(char in hash)) {
      hash[char] = 1;
    } else {
      hash[char]++;
    }
  }

  for (char of t) {
    if (!(char in hash)) {
      return false;
    } else {
      if (hash[char] > 1) {
        hash[char]--;
      } else {
        delete hash[char];
      }
    }
  }

  return true;
};

//226. Invert Binary Tree - easy Apr 19, 2025

//Given the root of a binary tree, invert the tree, 
// and return its root.

//dev note: recursive solution

var invertTree = function (root) {
  //base case: condition to stop recursion
  if (root === null) {
    return null;
  }

  //swapping left & right using temp variable for storing
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  //recursively calling invertTree sending
  //left and right nodes as arguments.

  invertTree(root.left);
  invertTree(root.right);

  //return resulting root after base case reached
  return root;
};
