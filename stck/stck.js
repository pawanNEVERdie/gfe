class Stck{
    constructor(){
        this.items =[]
    }
    push(element){
        this.items.push(element)

    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items ===  0 ? null :this.items[this.items.length -1]
    }
    isEmpty(){
        return this.items ===0;
    }
    size(){
      return   this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}
const st  =  new Stck()
st.push(10)
st.peek()
st.isEmpty()
st.print()
st.size()
while (!st.isEmpty()){
    console.log(st.pop())
    
}