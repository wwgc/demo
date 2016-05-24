'use strict';

//[0,n),p=m/n,last:JavaScript heap out of memory
var getRandomInt3 = function(m, n){
	let dest = [],i=0,j=0,tmp;
	for(; i<n; i++){
		dest.push(i);
	}

	for(i=0; i<m; i++){
		j = Math.floor(Math.random()*(n-i)) + i;
		tmp = dest[i];
		dest[i] = dest[j];
		dest[j] = tmp;
	}
	return dest.slice(0,m);
}

module.exports = getRandomInt3;
