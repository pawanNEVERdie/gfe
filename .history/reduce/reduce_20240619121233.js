function mean(arr:number[]):number{
    if (arr.length===0) {
        return 0;
    }
    const sum  = arr.reduce((acc,val)=>acc+val,0)
    const mean =sum/arr.length;
    return mean
}
const arr:number[]=[1,2,3,4]
const meann :u = mean(arr)
console.log(meann)
const arr1=[]
const meannn = mean(arr1)
console.log(meannn)