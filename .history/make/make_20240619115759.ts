function make(intital:number):()=>number {
    let counter:number = intital
    function increment():number{
        counter++
    }
}
console.log(make(0))
console.log(make(1))
console.log(make(2))