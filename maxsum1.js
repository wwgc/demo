'use strict';

module.exports = function(arr){
	let maxsofar = 0;
	for(let i = 0; i < arr.length; i ++){
		for(let j = i; j<arr.length; j ++){
			let sum = 0;
			for(let k=i;k<j; k++){
				sum += arr[k];
			}
			maxsofar = Math.max(maxsofar, sum);
		}
	}
	return maxsofar;
}
