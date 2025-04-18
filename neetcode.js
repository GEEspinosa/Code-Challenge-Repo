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
