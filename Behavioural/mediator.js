function Member(name){
    this.name = name;
    this.chatroom = null
}

Member.prototype = {
    send: function(message, toMember){
        //this refferening who this message coming from in the current scenario the current object i.e why we have this
        this.chatroom.send(message, this, toMember)
    },
    receive : function(message, fromMember ){
        console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
}

function ChatRoom () {
    this.members= {}
}

ChatRoom.prototype = {
    addMember: function(member){
        this.members[member.name] = member;
        member.chatroom = this;
    },
    send: function(message, fromMember, toMember){
        toMember.receive(message, fromMember)
    }
}

let chat = new ChatRoom();
//create a member
let john = new Member("John");
let Alvik = new Member("Alvik");
let Riya = new Member("Riya");
let Angelina = new Member("Angelina");

//add member to chatroom
chat.addMember(john);
chat.addMember(Alvik);
chat.addMember(Riya);
chat.addMember(Angelina);

john.send("Hi Riya, How are you? ", Riya );
Riya.send("Hi Angelina, What's up! ", Angelina );
Alvik.send("Hi John, Can you call me", john );
