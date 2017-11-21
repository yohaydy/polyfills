
Array.prototype.myFilter = function(callbackfn, thisArg){
    if((typeof callbackfn) !== 'function'){
        throw new TypeError()
    }
    var result = []
    for(var i = 0; i < this.length; i++){
        if(callbackfn.call(thisArg, this[i])){
            result.push(this[i])
        }
    }
    return result
}













function tmp(){}
module.exports = tmp
