'use strict';

module.exports = function(arr){
	let cumarr = [];

	cumarr[-1] = 0;
	
	for(let i = 0; i < arr.length; i ++){
		cumarr[i] = cumarr[i-1] + arr[i];
	}

	let maxsofar = 0;
	
	for(let i = 0; i < arr.length; i++){
		for(let j = i; j < arr.length; j ++){
			let sum = cumarr[j] - cumarr[i - 1];
			maxsofar = Math.max(maxsofar, sum);
		}
	}
	
	return maxsofar;
}
