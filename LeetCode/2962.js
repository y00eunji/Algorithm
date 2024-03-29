var countSubarrays = function(nums, k) {
    const maxNum = Math.max(...nums);   
    let answer = 0;
    let left = 0;
    let right = 0;
    let count = k;

    while(right < nums.length){
        if(nums[right] === maxNum) count--;
        right++;
        while(count === 0){
            if(nums[left] === maxNum) count++;
            left++;
        }
        answer += left;
    }

    return answer;
};
