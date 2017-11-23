const tmp = require("./reduce");

test("Should sum numbers of array without initial value", () => {
    let arr = [1, 2, 3]
    expect(arr.myReduce((acum, curr) => {
        return acum + curr 
    })).toEqual(6)
})

test("Should use initial value", () => {
    let arr = [1, 2, 3]
    expect(arr.myReduce((acum, curr) => {
        return acum + curr 
    }, 5)).toEqual(11)
})

test("Should filter array", () => {
    let arr = [1, 2, 3, 4]
    expect(arr.myReduce((acum, curr) => {
        if(curr > 2){
            return acum.concat(curr)
        }
        return acum
    }, [])).toEqual([3, 4])
})
