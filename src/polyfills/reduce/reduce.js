Array.prototype.myReduce = function(callbackfn, initialValue) {
	let result = initialValue || this[0];
    const startIndex = initialValue ? 0 : 1;
	for (var i = startIndex; i < this.length; i++) {
		const curr = this[i];
		result = callbackfn(result, curr);
	}
    return result
};



function tmp() {}
module.exports = tmp;
