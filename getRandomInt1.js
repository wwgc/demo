'use strict';

//[0,n),p=m/n,(m=5000000, n=1000000000)=>14971.441ms
var getRandomInt1 = function(m, n){
	let dest = [];
	for(let i=0; i<n; i++){
		if(Math.random()*(n-i) < m){
			dest.push(i);
			m--;
		}
	}
	return dest;
}

module.exports = getRandomInt1;
