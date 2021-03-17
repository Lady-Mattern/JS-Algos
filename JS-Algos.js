// TWO SUM - Find the two array values who's sum equals the target

let arr1 = [3, 5, -4, 8, 11, 1, -1, 6];

// Brute force O(n2) time | O(n) space. Worst case scenario

function twoNumberSum(array, targetSum) {
	let answer = [];
	for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                answer.push(array[i], array[j]);
            } 
        }
    }
    return answer;
}

console.log(twoNumberSum(arr1, 10));

// Better answer

function betterTwoSum(arr, target) {
    
}