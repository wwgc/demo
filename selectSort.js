'use strict';

module.exports = function(arr){
	let min,tmp;
	for(let i=0; i<arr.length -1; i++){
		min = i;
		for(let j=i+1; j<arr.length; j++){
			if(arr[j] < arr[min]){
				min = j;
  			}	
		}
		if(min !== i){
			tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}

	return arr;
}
