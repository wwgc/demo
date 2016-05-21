'use strict';

function qsort2(arr, l, u){
	if(l >= u) return;
	let m = u+1, tmp;
	for(let i=u; i >= l; i--){
		if(arr[i]>=arr[l]){
			--m;
			tmp = arr[m];
			arr[m] = arr[i];
			arr[i] = tmp;
		}
	}
	qsort2(arr, l, m-1);
	qsort2(arr, m+1, u);
}

module.exports = qsort2;
