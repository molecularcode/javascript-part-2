function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
}

var emailList = ["work", "home", "other"];

function Email(address, v) {
    this.address = address;
    if(emailList.indexOf(v) !== -1){
        this.type=v;
    }
    else {
        this.type = "other";
    }
}

Person.prototype = {
    addEmail: function(address, type) {
        var email = new Email(address, type);
        this.emails.push(email);
    }
};

var alex = new Person("Alex", "Ruaux");
alex.addEmail("alex@alexruaux.com", "home");

console.log(alex);