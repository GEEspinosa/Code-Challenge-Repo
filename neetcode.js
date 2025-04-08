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
