let bubbleSort = (nums) => {
  let swapped = false;
  do{
    swapped = false;
    for(let i = 0; i < nums.length; i++){
      if(nums[i] > nums[i+1]){
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped)
  console.log(nums)
  return nums
}

bubbleSort([2, 5, 1, 8, 3])