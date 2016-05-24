'use strict';

//[0,n),p=m/n,(m=5000000, n=1000000000)=>142.850ms
var getRandomInt4 = function(m, n){
	let dest = [],i=0,j=0;

	for(i=0; i<m; i++){
		j = Math.floor(Math.random()*(n-i)) + i;
		dest.push(j);
	}
	return dest;
}

module.exports = getRandomInt4;
