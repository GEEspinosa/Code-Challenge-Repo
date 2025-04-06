//Dev Note: working on Neetcode 150 problems



//Contains Duplicate - easy Apr 6, 2025

//Given an integer array nums, 
// return true if any value appears more than once in the array, 
// otherwise return false.

function hasDuplicate(nums) {
    let hashObj = {};
    for (let i = 0 ; i < nums.length; i++) {
        let value = nums[i]
        if (value in hashObj){
            return true
        } else {
            hashObj[value] = 1               
        }
    }
    return false
}