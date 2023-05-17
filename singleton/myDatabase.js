const fs = require('fs')
const path = require('path')

class myDatabase {
    constructor(){
        const instance = this.constructor.instance

        if(instance){
            return instance
        }

        this.constructor.instance = this

        console.log('intialised DB')
        this.capitals = {}

         this.lines = {}

         let lines = fs.readFileSync(
            path.join(__dirname,'capitals.txt')
         ).toString().split('\r\n')


         for(let i=0;i<lines.length;i++){
            this.capitals[lines[2*i]] = parseInt(lines[2*i+1])
         }
    }


    getPopulation(city){
        return this.capitals[city]
    }
}


//high level
class SingletonRecordFinder {
    totalPopulation(cities){
        return cities.map((city)=>{
            return new myDatabase().getPopulation(city)
        }).reduce((x,y)=>x+y)
    }
}