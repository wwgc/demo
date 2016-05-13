'use strict';

function maxsum4(arr){
	let maxsofar = 0;
	let maxendinghere = 0;
	for(let i = 0; i < arr.length;i ++){
		maxendinghere = Math.max(maxendinghere +arr[i], 0);
		maxsofar = Math.max(maxsofar, maxendinghere);
	}
	return maxsofar;
}
