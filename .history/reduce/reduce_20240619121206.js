function mean(arr:number[]){
    if (arr.length===0) {
        return 0;
    }
    const sum  = arr.reduce((acc,val)=>acc+val,0)
    const mean =sum/arr.length;
    return mean
}
const arr=[1,2,3,4]
const meann  = mean(arr)
console.log(meann)
const arr1=[]
const meannn = mean(arr1)
console.log(meannn)