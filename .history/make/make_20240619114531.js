function make(intital) {
    var counter = intital;
    function increment()
    {
        counter++;
    }
    return increment;
}
cont incrementer  = make(0);
console.loh(incrementer())
console.log(incrementer())
console.loh(incrementer(0))
