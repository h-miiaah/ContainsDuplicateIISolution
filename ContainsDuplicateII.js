/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            const j = map.get(nums[i]);

            if (Math.abs(i - j) <= k) {
                return true;
              }
          }
          map.set(nums[i], i);
      }
      return false;
  };
  
/*

- Create a Map object to store the indices of the numbers we’ve seen so far.
- Loop through the array and check if the current number is in the map.
- If it is, we check if the current index is within k indices away from the previous index.
- If it is, we return true.


*/