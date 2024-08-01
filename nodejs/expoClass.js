class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    greets() {
        console.log("Hello ", this.name, this.surname);
    }
}

module.exports = Person;
