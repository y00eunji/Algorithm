    }

    while (start < end) {
      let sum = nums[fix] + nums[start] + nums[end];

      if (sum === 0) {
        answer.push(nums[fix], nums[start], nums[end]);
        start++;
        end--;

        while (nums[start] === nums[start - 1] && start < end) {
          start++;
        }
        while (nums[end] === nums[end + 1] && start < end) {
          end--;
        }
      } else if (sum > 0) end--;
      else start++;
    }
  }

  return answer;
};