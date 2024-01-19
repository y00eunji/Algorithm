var minFallingPathSum = function(matrix) {
    const N = matrix.length;
    const dp = Array.from({length: N}, () => Array(N).fill(Number.MAX_SAFE_INTEGER));
    for(let i = 0; i < N; i++) dp[0][i] = matrix[0][i];

    for(let i = 0; i < N - 1; i++) {
        for(let j = 0; j < N; j++) {
            if(j > 0) dp[i+1][j-1] = Math.min(matrix[i+1][j-1] + dp[i][j], dp[i+1][j-1]);
            dp[i+1][j] = Math.min(matrix[i+1][j] + dp[i][j], dp[i+1][j]);
            if(j < N - 1) dp[i+1][j+1] = Math.min(matrix[i+1][j+1] + dp[i][j], dp[i+1][j+1]);
        }
    }

    let ans = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < N; i++) ans = Math.min(ans, dp[N-1][i]);
    return ans;
};
