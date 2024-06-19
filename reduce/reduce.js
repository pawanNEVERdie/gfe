function mean(arr) {
    if (arr.length === 0) {
        return 0;
    }
    var sum = arr.reduce(function (acc, val) { return acc + val; }, 0);
    var mean = sum / arr.length;
    return mean;
}
var arr = [1, 2, 3];
var meann = mean(arr);
console.log(meann);
var arr1 = [];
var meannn = mean(arr1);
console.log(meannn);
