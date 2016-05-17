'use strict';

module.exports = function(arr){
	for(let i = 1; i < arr.length; i ++){
		let t = arr[i];
		for(var j = i; j>0 && arr[j-1] > t; j --){
			arr[j] = arr[j-1];
		}
		arr[j] = t;
	}

	return arr;
}
