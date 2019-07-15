let obj = {
    no: 3112,
    str: "rishika",
    showDetails: function (str) {
        console.log(this.str + " " + str + ": " + this.no)
    }
}

obj.showDetails("gautam")

//Defining object
let person = {
    first_name: "Mukul",
    last_name: "Latiyan",
    //method
    getFunction: function () {
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: 123,
        landline: 678
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);


 //creating new instances of person object 
 let person1 = new person('Mukul','Latiyan'); 
 let person2 = new person('Rahul','Avasthi'); 
   
 console.log(person1.first_name); 
 //console.log(`${person2.first_name} ${person2.last_name}`);