'use strict';

module.exports = function(arr){
	let temp;
	for(let i=0; i<arr.length-1; i++){
		for(let j=i+1; j<arr.length; j++){
			if(arr[i]>arr[j]){
				temp = arr[i];
				arr[i] = arr[j];
				arr[j] = temp;
			}
		}
	}
	return arr;
}
