function make(intital:number):()=>number {
    let counter:number = intital
    function increment():number{
       return counter++
    }
    return increment
}
console.log(make(0))
console.log(make(1))
console.log(make(2))