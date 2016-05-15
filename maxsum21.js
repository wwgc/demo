'use strict';

module.exports = function(arr){
	let maxsofar = 0;
	for(let i = 0; i < arr.length; i++){
		let sum = 0;
		for(let j = i; j < arr.length; j ++){
			sum += arr[j];
			maxsofar = Math.max(maxsofar, sum)
		}
	}
	return maxsofar;
}
