'use strict';

//[0,n),p=m/n,(m=5000000, n=1000000000)=>2140.268ms
var getRandomInt2 = function(m, n){
	let set = new Set();
	while(set.size < m){
		set.add(Math.floor(Math.random()*n));
	}
	return set;
}

module.exports = getRandomInt2;
