const items = ["developer", 1, false, 1.43];

function iterator(items){
    this.items = items
    this.index = iterator.length-1;
}

iterator.prototype = {
    hasNext: function(){
        return this.index < this.items.length
    },
    next: function(){
        return this.items[this.index++] // if we want to iterate backword then make it this.items[this.index--]

    }
}

const itr = new iterator(items)
while(itr.hasNext()){
    console.log(itr.next())
}