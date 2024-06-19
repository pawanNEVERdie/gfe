function make(intital) {
    var counter = intital;
    function increment()
    {
        counter++;
    }
    return increment;
}
console.log(make(0));
console.log(make());
console.log(make());
