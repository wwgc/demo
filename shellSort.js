'use strict';

module.exports = function(arr){
	let len = arr.length;
	let tmp;
	for(let fraction=Math.floor(len/2); fraction>0; fraction=Math.floor(fraction/2)){
		for(let i=fraction; i<len; i++){
			for(let j=i-fraction; j>=0&&arr[j]>arr[fraction+j]; j-=fraction){
				tmp = arr[j];
				arr[j] = arr[fraction+j];
				arr[fraction+j] = tmp;
			}
		}	
	}
	return arr;
}
