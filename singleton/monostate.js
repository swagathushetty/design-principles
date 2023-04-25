class chiefExecutiveOfficer {


    get name() { return chiefExecutiveOfficer._name}


    set name(value){

        chiefExecutiveOfficer._name = value;

    }

    get age() { return chiefExecutiveOfficer._age}
    set age(value) { chiefExecutiveOfficer._age=value}

    toString(){
        return `CEOs name is ${this.name} and he is ${this.age} years old`
    }
}
chiefExecutiveOfficer._age = undefined
chiefExecutiveOfficer._name = undefined

let ceo = new chiefExecutiveOfficer()
ceo.name = 'swagath'
ceo.age = 26


let ceo2 = new chiefExecutiveOfficer()
ceo.name = 'warren'
ceo.age = 66


console.log(ceo.toString())
console.log(ceo.toString())