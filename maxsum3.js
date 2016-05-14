'use strict';

 const maxsum3 = function (x, l, u){
	if(l > u) return 0;
	if(l === u) return Math.max(0, x[l]);
	let m = Math.floor((l+u)/2);
	
	let lmax = 0, sum = 0;
	
	for(let i = m; i >= 0; i--){
		sum += x[i];
		lmax = Math.max(lmax, sum);
	}
	
	let rmax = 0;
	sum = 0;

	for(let i = m+1; i <= u ; i++){
		sum += x[i];
		rmax = Math.max(rmax, sum);
	}
	
	return Math.max(lmax + rmax, maxsum3(x, l, m), maxsum3(x, m+1, u));
}

module.exports = maxsum3;
