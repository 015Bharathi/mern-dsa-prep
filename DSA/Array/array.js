// Day 1

// 88. Merge Sorted Array

function mergeSortedArray(nums1, m, nums2, n) {
  //step 1
  // for(let i = 0; i < nums2.length; i++){
  //   nums1[i +m] = nums2[i]
  // }
  // return nums1.sort((a,b) => a - b)

  // step 2
  // const output = []
  // let first = 0
  // let second = 0
  // while(first < m){
  //   if(nums1[first] <= nums2[second]){
  //     output.push(nums1[first])
  //     first++
  //   }else{
  //     output.push(nums2[second])
  //     second++
  //   }
  // }
  // while(first < m){
  //   output.push(nums1[first])
  //   first++
  // }
  // while(second < n) {
  //   output.push(nums2[second])
  //   second++
  // }
  // for(let i = 0; i< output.length; i++){
  //   nums1[i] = output[i]
  // }
  // return nums1

  // step 3

  let first = m - 1;
  let second = n - 1;
  let i = m + n - 1;

  while (second >= 0) {
    let fVal = nums1[first];
    let sVal = nums2[second];

    if (fVal > sVal) {
      nums1[i] = fVal;
      i--;
      first--;
    } else {
      nums1[i] = sVal;
      i--;
      second--;
    }
  }
  return nums1;
}

const nums1 = [1, 2, 3, 0, 0, 0];
const nums2 = [2, 5, 6];

console.log("mergeSortedArray: ", mergeSortedArray(nums1, 3, nums2, 3));

// 27. Remove Element

function removeElement(nums, val) {
  // Step 1

  // const value = nums.filter((num) => num !== val);
  // let k = 0;
  // for (let i = 0; i < value.length; i++) {
  //   nums[i] = value[i];
  //   k++;
  // }
  // nums.length = k;
  // return k;

  // Step 2

  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

const nums = [3, 2, 2, 3];

const val = 3;
console.log("removeElement: ", removeElement(nums, val));

// Day 2

// 26. Remove Duplicate Element From Sorted Array

function removeDuplicateElement(arr) {
  // Step 1
  // const output = []
  // for (let i = 0; i < arr.length; i++) {
  //   if (!output.includes(arr[i])) {
  //     output.push(arr[i])
  //   }
  // }
  // console.log("arr: ", output);

  // Step 2

  let k = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arr[k] = arr[i];
      k++;
    }
  }

  arr.length = k;
  return k;
}

const arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
// const arr = [1, 1, 2];

console.log("removeDuplicateElement: ", removeDuplicateElement(arr));

// 80. Remove Duplicate Element From Sorted Array

function removeDuplicateElementArray(arr) {
  let k = 2;
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] !== arr[k - 2]) {
      arr[k] = arr[i];
      k++;
    }
  }
  console.log("arr1: ", arr);

  return k;
}

const arr1 = [1, 1, 1, 2, 2, 3];
// const arr1 = [0, 0, 1, 1, 1, 1, 2, 3, 3];

console.log("removeDuplicateElementArray: ", removeDuplicateElementArray(arr1));

// Day 3

// 169. Majority Element

// Majority Element Formula => element with count > n/2

function majorityElement(nums) {
  const count = {};
  for (const num of nums) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > Math.floor(nums.length / 2)) {
      return num;
    }
  }

  return null;
}

const element = [3, 2, 3];
// const element = [2, 2, 1, 1, 1, 2, 2];
console.log("majorityElement: ", majorityElement(element));

// 189. Rotate Array

function reverse(arr, left, right) {
  while (left < right) {
    [arr[right], arr[left]] = [arr[left], arr[right]];
    left++;
    right--;
  }
}

function rotateArray(arr, k) {
  // Step 1
  // const newArray = []
  // for(let i = 0; i < arr.length; i++){
  //   newArray[(i+k) % arr.length] = arr[i]
  // }
  // for(let i = 0; i < newArray.length; i++){
  //   arr[i] = newArray[i]
  // }
  // return arr

  // arr.reverse();

  // Step 2

  k = k % arr.length;
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);

  return arr;
}

const array = [1, 2, 3, 4, 5, 6, 7];
const k = 3;

console.log("rotateArray: ", rotateArray(array, k));
