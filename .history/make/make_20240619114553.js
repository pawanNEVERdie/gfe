function make(intital) {
    var counter = intital;
    function increment()
    {
        counter++;
    }
    return increment;
}
const incrementer  = make(0);
console.loh(incrementer())
console.log(incrementer())
console.log(incrementer())
