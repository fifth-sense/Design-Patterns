function Subject(){
    this.observers = [] //array of observer function

}

Subject.prototype = {
    subscribe: function(fn){
        this.observers.push(fn)

    },
    unsubscribe: function(fnToRemove){
       this.observers =  this.observers.filter(fn =>{
        if(fn != fnToRemove){
            return fn;
        }
       })
    },
    fire: function(){
        this.observers.forEach(obs=> obs.call())
    }
}

let subject = new Subject();

function observer1() {
    console.log("Observer 1 is Firing!");
}
function observer2() {
    console.log("Observer 2 is Firing!");
}

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.unsubscribe(observer1)
subject.fire(); // here you have to create one eveent and all observer are listing it