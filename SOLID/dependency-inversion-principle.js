let RelationShip=Object.freeze({
    parent:0,
    child:0,
    sibling:2
})

class Person {
    constructor(name){
        this.name=name
    }
}

//low level module
class RelationShipBrowser {
    constructor(){
        if(this.constructor.name==="RelationShipBrowser"){
            throw new Error("RelationShipBrowser is abstract")
        }
    }
    findAllChildrenOf(name) {}
}

class RelationShips extends RelationShipBrowser {
    constructor(){
        super()

        //change of storage should only affect this class and nothing else
        this.data=[] //storage might change in future
    }

    addParentAndChild(parent,child){
        this.data.push({
            from:parent,
            type:RelationShip.parent,
            to:child
        })
    }
    findAllChildrenOf(name){
        return this.data.filter((r)=>{
            return r.from.name === name && r.type===RelationShip.parent
        }).map((r)=>r.to)
    }
}
//high level module 
class Research {
    //THIS APPROACH IS BAD SINCE IF PARENT DATA TYPE CHANGES. 
    //Research class should not care about how Relation class is storing things
    //THEN WE WILL NEED TO MODIFY THE CODE HERE AS WELL
    //HIGH LEVEL MODULES SHOULD NOT BE DEPENDENT ON LOW LEVEL MODULES
    // constructor(relationships){
    //     //find all children of a parent aka Uday
    //     let relations=relationships.data
    //     for(let rel of relations.filter((r)=>{
    //         return r.from.name==='Uday' && r.type==RelationShip.parent
    //     })){
    //         console.log(`Uday has child named ${rel.to.name}`)
    //     }
    // }

    constructor(browser){
    for(let p of browser.findAllChildrenOf('Uday')){
        console.log(`Uday has children named ${p.name}`)
    }
    }
}

let parent=new Person('Uday')
let child1=new Person('Swagath')
let child2=new Person('Shreela')

let rels=new RelationShips()
rels.addParentAndChild(parent,child1)
rels.addParentAndChild(parent,child2)

new Research(rels)


/* 
if we change data array(change storage type) in RelationShips class 
we will need to change it in the Research class as well 
*/