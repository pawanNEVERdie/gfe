function make(intital) {
    let  counter = intital;
    function increment()
    {
        return counter++;
    }
    return increment;
}
const incrementer  = make(0);
console.log(incrementer())
console.log(incrementer())
console.log(incrementer())
