let quickSort = (nums) => {
  if(nums.length <= 1){
    return nums;
  }
  
  let pivot = nums[(nums.length)-1];
  let left = [];
  let right = [];
  for(let i = 0; i < nums.length - 1; i++){
    if(nums[i] < pivot){
      left.push(nums[i]);
    } else{
      right.push(nums[i]);
    }
  }
  
  return [...quickSort(left), pivot, ...quickSort(right)];       //spread operator
};


quickSort([6, 2, 9, 1, 0, 2, 8, 3, 7, 4]);