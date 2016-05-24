'use strict';

//[0,n),p=m/n,lost:2140.268ms
var getRandomInt2 = function(m, n){
	let set = new Set();
	while(set.size < m){
		set.add(Math.floor(Math.random()*n));
	}
	return set;
}

module.exports = getRandomInt2;
