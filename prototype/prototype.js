class Address {
    constructor(streetAddress,city,country){
        this.streetAddress=streetAddress
        this.city=city
        this.country=country
    }

    deepCopy(){
        return new Address(this.streetAddress,this.city,this.country)
    }

    toString(){
        return `Address ${this.streetAddress} ${this.city} ${this.country}`
    }
}
class Person {
    constructor(name,address){
        this.name=name
        this.address=address
    }

    deepCopy(){
        return new Person(
            this.name,
            this.address.deepCopy()
        )
    }

    toString(){
        return `Name ${this.name} lives at ${this.address}`
    }
}


let swagath= new Person("swagath",new Address("ads nerul ","mumbai","India"))


//to copy
//BAD approach
// let rahul=swagath


let rahul=swagath.deepCopy()
rahul.name='rahul'
rahul.address.streetAddress='214 street mahalaxmi'


console.log(swagath.toString())
console.log(rahul.toString())