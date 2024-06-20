function min(arr,criteriaFn){
    if (arr.length ===0) {
        return undefined ;
    }
        let minElmnt = arr[0];
        for (let index = 0; index < arr.length; index++) {
            if (criteriaFn(arr[i]) <criteriaFn(minElmnt)) {
                minElmnt=arr[i]
                
            }
        }
        return minElmnt;

}
const arr  =[3,4,8,67,5]
const minEL = min(arr,(num)=>num)
const minEle  = min(arr,(num)=>num.toString().length)
console.log(minEL)
console.log(minEle)
