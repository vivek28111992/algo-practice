let mergeSort = (nums) => {
  
  if(nums.length === 1){
    return nums;
  }
  
  const length = nums.length;
  const middle = Math.floor(length/2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);
  
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);
  
  return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
  const result = [];
  
  while(left.length && right.length){
    if(left[0] <= right[0]){
      result.push(left.shift());
    } else{
      result.push(right.shift());
    }
  }
  
  while(left.length){
    result.push(left.shift());
  }
  
  while(right.length){
    result.push(right.shift());
  }
  
  console.log(result)
  return result;
};

mergeSort([1, 4, 2, 8, 3, 0, 9, 5, 6])