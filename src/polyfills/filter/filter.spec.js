const tmp = require("./filter");

test("should throw TypeError if passed not a function as an argument", () => {
	const arr = [1, 2, 3, 4, 5];
	expect(() => arr.myFilter(25)).toThrow(TypeError);
});

test("should return only matching elements", () => {
	const arr = [1, 2, 3, 4, 5];
	expect(arr.myFilter(x => x > 2)).toEqual([3, 4, 5]);
});

test("should return empty array if condition matched for none elements", () => {
    const arr = [1, 2, 3]
    expect(arr.myFilter(x => x > 5)).toEqual([])
})

test("should use thisArg as this inside callback if thisArg is passed", () => {
    const arr = [1, 2, 3, 4, 5]
    var that = {
        greaterThan3: function(x){
            return x > 3
        }
    }
    expect(arr.myFilter(function (x){
        return this.greaterThan3(x)
    }, that)).toEqual([4, 5])
})

// test("The range of elements processed by filter is set before the first call to callbackfn. Elements which are appended to the array after the call to filter begins will not be visited by callbackfn.", () => {

// })

// test(" If existing elements of the array are changed their value as passed to callbackfn will be the value at the time filter visits them; ")

// test("elements that are deleted after the call to filter begins and before being visited are not visited.")