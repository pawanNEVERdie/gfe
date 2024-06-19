function make(intital:number):()=>number {
    let counter:number = intital
    function increment():number{
       return counter++
    }
    return increment
}
let incr  =  mak()