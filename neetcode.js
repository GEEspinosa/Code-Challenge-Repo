//Dev Note: working on Neetcode 150 problems

//Contains Duplicate - easy Apr 6, 2025

//Given an integer array nums,
// return true if any value appears more than once in the array,
// otherwise return false.

function hasDuplicate(nums) {
  let hashObj = {};
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (value in hashObj) {
      return true;
    } else {
      hashObj[value] = 1;
    }
  }
  return false;
}

//Valid Anagram - easy Apr 8, 2025

//Given two strings s and t,
// return true if the two strings are anagrams of each other,
// otherwise return false. An anagram is a string that contains
// the exact same characters as another string,
// but the order of the characters can be different.

//dev note: build up a hashtable then delete properties on second string iteration

function isAnagram(s, t) {
  let hashObj = {};

  for (let i = 0; i < s.length; i++) {
    let value = s[i];
    if (value in hashObj) {
      hashObj[value]++;
    } else {
      hashObj[value] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    let value = t[j];
    if (value in hashObj) {
      if (hashObj[value] > 1) {
        hashObj[value]--;
      } else {
        delete hashObj[value];
      }
    } else {
      return false;
    }
  }

  return Object.keys(hashObj).length === 0;
}

//Two Sum - easy Apr 8, 2025

//Given an array of integers nums and an integer target,
// return the indices i and j such that nums[i] + nums[j] == target and i != j.
// You may assume that every input has exactly one
// pair of indices i and j that satisfy the condition.
// Return the answer with the smaller index first.

function twoSum(nums, target) {
  let sorted = [];
  let beg = 0;
  let end = nums.length - 1;

  for (let i = 0; i < nums.length; i++) {
    sorted.push([nums[i], i]);
  }

  sorted.sort((a, b) => a[0] - b[0]);

  while (beg < end) {
    if (sorted[beg][0] + sorted[end][0] === target) {
      return [sorted[beg][1], sorted[end][1]];
    } else if (sorted[beg][0] + sorted[end][0] > target) {
      end--;
    } else if (sorted[beg][0] + sorted[end][0] < target) {
      beg++;
    }
  }
}

//Reverse Linked List (again, I need the practice with lists) - easy, Apr 10, 2025

function reverseList(head) {
  let curr = head;
  let prev = null;
  let next;

  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

//Merge Two Sorted Linked Lists - easy Apr 10, 2025

//You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists into one sorted linked list and return
// the head of the new sorted linked list.
// The new list should be made up of nodes from list1 and list2.

function mergeTwoLists(list1, list2) {
  //building a new linked list and assigning first node
  const result = { val: 0, next: null };

  //variables to shorthand params further
  let l1 = list1;
  let l2 = list2;

  //temporary pointer used to construct and traverse result
  let pointer = result;

  //iterating through both lists until reaching end of shortest
  while (l1 && l2) {
    //conditional comparing values of current node placement of each list
    if (l1.val <= l2.val) {
      //using the pointer arrow to node with lowest val
      pointer.next = l1;
      //moving moving to next node from selected list
      l1 = l1.next;
    } else {
      //the other result of conditional doing the same for l2
      pointer.next = l2;
      l2 = l2.next;
    }
    //moving the pointer to recently added node as setup for next iteration
    pointer = pointer.next;
  }

  //this conditional is used to add any remaining nodes
  //not traversed during while loop to end of result
  if (l1) {
    pointer.next = l1;
  } else {
    pointer.next = l2;
  }

  //return the new linked list
  //but starting after first node because
  //it's value isn't in l1 or l2
  return result.next;
}

//Valid Palindrome - easy Apr 22, 2025

//Given a string s, return true if it is a palindrome,
// otherwise return false. A palindrome is a string that reads
// the same forward and backward. It is also case-insensitive
// and ignores all non-alphanumeric characters.

//javascript method heavy approach with time complexity O(n)
// since all methods are one pass iterations.

function isPalindrome(s) {
  let arr = s
    .toLowerCase()
    .split("")
    .filter((char) => char.match(/[a-z0-9]/))
    .join("");

  return arr === arr.split("").reverse().join("") ? true : false;
}

//Group Anagrams - Medium Apr 24, 2025

//Given an array of strings strs, group all anagrams together
// into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters
// as another string, but the order of the characters can be different.

function groupAnagrams(strs) {
  let hash = {};

  for (let i = 0; i < strs.length; i++) {
    let sorted = strs[i].split("").sort().join("");

    if (!(sorted in hash)) {
      hash[sorted] = [];
    }
    hash[sorted].push(strs[i]);
  }
  return Object.values(hash);
}

//Top K Frequent Elements - Medium Apr 25, 2025

//Given an integer array nums and an integer k,
//return the k most frequent elements within the array.
// The test cases are generated such that the answer
// is always unique. You may return the output in any order

function topKFrequent(nums, k) {
  let hash = {};
  let arr = [];

  for (let i = 0; i < nums.length; i++) {
    if (!(nums[i] in hash)) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }

  for (let pair in hash) {
    arr.push([parseInt(pair), hash[pair]]);
  }

  let sorted = arr.sort((a, b) => b[1] - a[1]).slice(0, k);
  let result = [];

  for (let j = 0; j < sorted.length; j++) {
    result.push(sorted[j][0]);
  }

  return result;
}

//Encode and Decode Strings - Medium Apr 26, 2025

//Design an algorithm to encode a list of strings
// to a single string. The encoded string is then decoded
// back to the original list of strings.
// Please implement encode and decode

/**
 * @param {string[]} strs
 * @returns {string}
 */

function encode(strs) {
  let result = "";
  for (let i = 0; i < strs.length; i++) {
    result += strs[i] + "~";
  }
  return result;
}

/**
 * @param {string} str
 * @returns {string[]}
 */

function decode(str) {
  let word = "";
  let result = [];

  for (let j = 0; j < str.length; j++) {
    let char = str[j];
    if (char !== "~") {
      word += char;
    } else {
      result.push(word);
      word = "";
    }
  }
  return result;
}

//Valid Palindrome - easy May 5, 2025

//dev note: but using two pointer method

function isPalindrome(s) {
  let arr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let left = 0;
  let right = arr.length - 1;
  console.log(arr);

  while (left < right) {
    if (arr[left] === arr[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }
  return true;
}

//Two Integer Sum II - medium May 5, 2025 (two pointers)

//Given an array of integers numbers that is sorted in non-decreasing order.
// Return the indices (1-indexed) of two numbers,
// [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.
// There will always be exactly one valid solution.

function twoSum(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
}

//Binary Search - easy May 7, 2025

//You are given an array of distinct integers nums,
// sorted in ascending order, and an integer target.
// Implement a function to search for target within nums.
// If it exists, then return its index, otherwise, return -1.
//Your solution must run in O(logn) time.

function search(nums, target) {
  if (nums[0] === target) {
    return 0;
  }
  if (nums[nums.length - 1] === target) {
    return nums.length - 1;
  }
  let left = 0;
  let right = nums.length - 1;
  let middle = parseInt((left + right) / 2);

  while (left < right) {
    if (nums[middle] === target) {
      return middle;
    } else if (nums[middle] < target) {
      left = middle += 1;
    } else if (nums[middle] > target) {
      right = middle -= 1;
    }
  }
  return -1;
}

// Valid Parentheses (again) - easy May 9, 2025

function isValid(s) {
  let pairs = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (s[i] in pairs) {
      stack.push(pairs[char]);
      console.log(stack);
    } else if (char === stack[stack.length - 1]) {
      stack.pop();
      console.log(stack);
    } else {
      return false;
    }
  }
  return stack.length === 0 ? true : false;
}

//Reverse Linked List (again) - easy May 9, 2025

function reverseList(head) {
  let prev = null;
  let curr = head;
  let next;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

//container with most water - medium May 13, 2025
//two pointer solution = Time O(n) and Space O(1)

function maxArea(heights) {
  //maybe this problem would be best tackled using two pointers,
  //one at the beg and one at the end of array.

  //declare three variables
  //two for pointers
  //one for heighest container

  //iterate (while loop), calcuating height and comparing if it's highest
  // then we move the smallest pointer inward to make new caluclation on next iteration

  //return highest container after the iterating
  //O(n)

  let left = 0;
  let right = heights.length - 1;
  let max = 0;

  while (left < right) {
    let lowest;

    if (heights[left] <= heights[right]) {
      lowest = left;
    } else {
      lowest = right;
    }

    let volume = (right - left) * heights[lowest];

    if (volume >= max) {
      max = volume;
    }

    if (heights[left] <= heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}

//Minimum Stack - Medium May 13, 2025

//Design a stack class that supports the push, pop, top, and getMin operations.
// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// Each function should run in O(1) time.

class MinStack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    if (this.stack.length === 0) {
      this.min.push(val);
    } else if (val <= this.min[this.min.length - 1]) {
      this.min.push(val);
    }
    this.stack.push(val);
  }

  /**
   * @return {void}
   */
  pop() {
    let remove = this.stack.pop();
    if (remove === this.min[this.min.length - 1]) {
      this.min.pop();
    }
  }

  /**
   * @return {number}
   */
  top() {
    return this.stack[this.stack.length - 1];
  }

  /**
   * @return {number}
   */
  getMin() {
    return this.min[this.min.length - 1];
  }
}

//Product of Array Except Self - medium May 14, 2025

//Given an integer array nums, return an array output where
//output[i] is the product of all the elements of nums except nums[i].
// Each product is guaranteed to fit in a 32-bit integer.
// Follow-up: Could you solve it in
// O(n) time without using the division operation?

//Dev Note: using "prefix and suffix" strategy to create two arrays of integers
//each holding the product of all prefix values or suffix values.
// Then a last loop that pushes the product of each at the same index into a result array
//Time complexity should be O(n)

function productExceptSelf(nums) {
  let prefix = [];
  let suffix = [];
  let result = [];

  for (let p = 0; p < nums.length; p++) {
    let product = 1;
    for (let n = p + 1; n < nums.length; n++) {
      product = nums[n] * product;
    }
    prefix.push(product);
  }

  for (let s = nums.length - 1; s >= 0; s--) {
    let product = 1;
    for (let n = s - 1; n >= 0; n--) {
      product = nums[n] * product;
    }
    suffix.push(product);
  }

  suffix.reverse();

  for (let r = 0; r < nums.length; r++) {
    result.push(prefix[r] * suffix[r]);
  }

  return result;
}

//Best time to Buy and Sell Stock - easy May 14, 2025

//You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.
//You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.
//Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

//Dev Note: two pointers starting from 0 and 1 of array, using while loop until one falls off
// then another loop that picks up and finishes the last pointer,
// iterating until the end while making product from current index to the last.
// time complexity is O(n)

function maxProfit(prices) {
  let max = 0;
  let buy = 0;
  let sell = 0;

  while (buy < prices.length && sell < prices.length) {
    let profit = prices[sell] - prices[buy];
    sell++;
    if (profit > max) {
      max = profit;
    }

    if (prices[buy] > prices[sell]) {
      buy++;
    } else if (prices[buy] > prices[buy + 1]) {
      buy++;
    }
  }

  if (sell >= prices.length) {
    for (let k = buy; k < prices.length; k++) {
      let profit = prices[sell - 1] - prices[k];
      if (profit > max) {
        max = profit;
      }
    }
  }
  return max;
}

//3Sum - medium May 16, 2025

//Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
//where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
//The output should not contain any duplicate triplets. 
//You may return the output and the triplets in any order.

//dev note: ordered int array then nested loop with inner while loop using two pointers, left and right.
//Time Complexity O(n^2) and Space Complexity O(1)

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1;
    let right = nums.length - 1;
    let remainder = -nums[i];

    while (left < right) {
      if (nums[left] + nums[right] < remainder) {
        left++;
      } else if (nums[left] + nums[right] > remainder) {
        right--;
      } else {
        if (result.length === 0) {
          result.push([nums[i], nums[left], nums[right]]);
        }
        if (
          result[result.length - 1].toString() !==
          [nums[i], nums[left], nums[right]].toString()
        ) {
          result.push([nums[i], nums[left], nums[right]]);
        }
        left++;
        right--;
      }
    }
    if (nums[i] === nums[i + 1]) {
      i++;
    }
  }
  return result;
}
